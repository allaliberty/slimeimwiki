let linksplit = window.location.href.split("/");
if (linksplit[linksplit.length - 1].length == 0) {
    linksplit.pop()
}
let page = linksplit[5];
let index = linksplit[4]
let created = 1
let iframeopen = false
let loadedimages = []


function jqSelector(id) {
    return "#" + id.replace(/(:|\.|\[|\]|,)/g, "\\$1");
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sendMessage() {
        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/987294637230264330/ZoYs2XNszGPBgNc3uyhFYGdF7r4wmyutvm4c-ADHPZn27asfb07MhpZpyVR89_vDHXgi");

        request.setRequestHeader('Content-type', 'application/json');

        const params = {
        username: "someone landed",
        avatar_url: "",
        content: window.location.href
        }
        request.send(JSON.stringify(params));
}

if (window.location.href.includes("slimeim.wiki"))
    sendMessage()

$(function () {
    $("#nav-placeholder").append(`
    <nav class="topbar">
        <div class="topbarinside">
            <a href="/#" class="sitename"><img class = "logo" src="https://cdn.discordapp.com/attachments/633768073068806144/985179869463859230/RimuruSlimeManga_1.png"> .WIKI</p>
                <div clicked=false class="buttonsdiv">
                <a href="#/characters" class="navbutton">Characters</a>
                <a href="#/events" class="navbutton">Events</a>
                <a href="#/gacha" class="navbutton">Gacha Simulator</a>
                </div><button class="hamb"></button>
        </div>
    </nav>`);
})

//import cdata from "/data.json" assert { type: "json" }
//import FilterKeywords from "/filterkeywords.json" assert { type: "json" }
 

const cdata = await fetchcdata(`/data.json`)
const FilterKeywords = await fetchcdata(`/filterkeywords.json`)
const TraitFilterKeywords = await fetchcdata(`/traitsfilterkeywords.json`)
const EventsData = await fetchcdata(`/events.json`)



if (window.history) {
    var myOldUrl = window.location.href;
    window.addEventListener('hashchange', async function () {
        linksplit = window.location.href.split("/");
        if (linksplit[linksplit.length - 1].length == 0) {
            linksplit.pop()
        }
        page = linksplit[5];
        index = linksplit[4];
        if ($(".buttonsdiv").attr("clicked") == "true") {
            waitForElm('.buttonsdiv').then((elem) => { elem.setAttribute("clicked", "false") })
            await new Promise(r => setTimeout(r, 250));
        }
        myOldUrl = window.location.href
        UpdatePage()
    });
}


function ListEvents(selector, show) {
    waitForElm(selector).then((elem) => {
        const fragment = new DocumentFragment()
        Object.keys(EventsData).forEach((key) => {
            if (show(key)){
                const frag = document.createElement("div")
                frag.setAttribute("id", "event");
                frag.setAttribute("class", "homecategory");
                frag.innerHTML = `<div><img src="" alt=""></div>
                <p><strong id = "title">`+key+`</strong></p>
                <p id = "description">`+(EventsData[key].Description ?? "").replaceAll("\n", "<br>")+`</p>
                <p id = "date">`+(new Date(EventsData[key].Start)).toLocaleDateString() + " - "+(new Date(EventsData[key].End)).toLocaleDateString()+`</p>
                <button type = "button" Link = "`+`" id ="iframeanchor" class="unittypebutton">More</button>
                `
                frag.children[0].children[0].onload = function () { frag.setAttribute("turnon", "true") };
                frag.children[0].children[0].src = EventsData[key].Image;
                frag.querySelector("button").onclick = function(){
                    MakeIframe(EventsData[key].Link)
                }
                fragment.appendChild(frag)
            }
        })
        elem.appendChild(fragment)
    })
}

async function MakeIframe(Link){
    if (iframeopen == false) {
        iframeopen = true
        const fragment = new DocumentFragment()
        const frag = document.createElement("div")
        frag.setAttribute("class", "iframepopup")
        frag.innerHTML = `
        <div>
            <iframe class="iframe" id = "linktoapp" src="`+Link+`" ></iframe>
        </div>
        <button type = "button" id ="closepopup" class="unittypebutton"> <img src="https://cdn.discordapp.com/attachments/633768073068806144/987785342511882290/Grey_close_x.svg.png" alt=""> </button>
        `
        fragment.appendChild(frag)
        document.querySelector(".homebasecontainer").appendChild(fragment)
        waitForElm(".iframepopup").then(async function (elem) {
            elem.querySelector(".iframe").addEventListener("load", async function() {
                await new Promise(r => setTimeout(r, 100))
                elem.setAttribute("toggle", "true")
            });
        })
            
        waitForElm('#closepopup').then(async function (elem) {
            $(elem).click(async function () {
                $(".iframepopup").attr("toggle", "false")
                await new Promise(r => setTimeout(r, 250))
                $(".iframepopup").remove()
                iframeopen = false
            })
        })
    }
}

function MakeCharacterIcon(elem, key, fragment, off) {
    const para = document.createElement("a");
    para.setAttribute("class", "charcontainer")
    para.setAttribute("id", key)
    para.setAttribute("href", "#/characters/" + key)
    //$(para).load('/charactericon')
    para.innerHTML = `
    <img id = "icon" class = "charicon" src="" alt="">
    <img id = "rarity" class = "charstars" src="" alt="" >
    <img id = "type" class = "chartype" src="" alt="" >
    <img id = "secondtype" class = "chartypesecond" src="" alt="" >
    <div id = "name" class="charname" ></div>
`
    //waitForElm("#" + key + ' > #icon').then((ele) => {
    //    ele.onload = function () { para.setAttribute("turnon", "true") };
    //    ele.src = cdata[key].Icon;
    //
    //})
    if (!(loadedimages.includes(cdata[key].Icon))) {
        if (off != true)
        para.children[0].onload = function () { para.setAttribute("turnon", "true"); loadedimages.push(cdata[key].Icon) };
        para.children[0].src = cdata[key].Icon;
    }
    else
    {  
        para.children[0].src = cdata[key].Icon;
        if (off != true) {
            para.setAttribute("removetransition", "true")
            para.setAttribute("turnon", "true")}
    }
    para.children[1].src = stars[cdata[key].Rarity - 1];
    para.children[2].src = types[cdata[key].Type] ?? cdata[key].Type
    para.setAttribute("stars", (cdata[key].Rarity))
    if ("SecondType" in cdata[key]) {
        para.setAttribute("secondtype", "true")
        para.children[3].src = types[cdata[key].SecondType] ?? cdata[key].SecondType
    }
    (fragment ?? elem).appendChild(para);
    return (para);
    //waitForElm("#" + key + ' > #rarity').then((ele) => { ele.setAttribute("src", stars[cdata[key].Rarity - 1]) })
    //waitForElm("#" + key + ' > #type').then((ele) => { ele.setAttribute("src", types[cdata[key].Type] || cdata[key].Type) })

    //if ("SecondType" in cdata[key]) {
    //    para.setAttribute("secondtype", "true")
    //    waitForElm("#" + key + ' > #secondtype').then((ele) => { ele.setAttribute("src", types[cdata[key].SecondType] || cdata[key].SecondType) })
    //}
}

async function fetchcdata(file) {
    try {
        const response = await fetch(file);
        const exam = await response.json();
        return exam;
    } catch (error) {
        console.error(error);
    }
}

const stars = ["https://cdn.discordapp.com/attachments/633768073068806144/982527855407792168/1star.png",
    "https://cdn.discordapp.com/attachments/633768073068806144/982527856968073227/2star.png",
    "https://cdn.discordapp.com/attachments/633768073068806144/982527856418648135/3star.png",
    "https://cdn.discordapp.com/attachments/633768073068806144/982527856775143484/4star.png",
    "https://cdn.discordapp.com/attachments/633768073068806144/982527856162799626/5star.png",
    "https://cdn.discordapp.com/attachments/633768073068806144/982527855953063976/6star.png"]

const weapons = {
    Sword: "https://cdn.discordapp.com/attachments/633768073068806144/982523252985446460/unknown.png",
    Katana: "https://cdn.discordapp.com/attachments/633768073068806144/982523309382053898/unknown.png",
    Hammer: "https://cdn.discordapp.com/attachments/633768073068806144/982527713015373824/Layer_3.png",
    Lance: "https://cdn.discordapp.com/attachments/633768073068806144/982523242931683328/unknown.png",
    Greatsword: "https://cdn.discordapp.com/attachments/633768073068806144/982523229736402964/unknown.png",
    Tome: "https://cdn.discordapp.com/attachments/633768073068806144/982523214364291112/unknown.png",
    Fist: "https://cdn.discordapp.com/attachments/633768073068806144/985207460614774835/Layer_32.png",
}

const types = {
    Fire: "https://i.imgur.com/QndVudD.png",
    Wind: "https://i.imgur.com/pQYVkI3.png",
    Space: "https://i.imgur.com/z8bnSYg.png",
    Light: "https://i.imgur.com/hX15sR0.png",
    Dark: "https://i.imgur.com/pzX6NRL.png",
    Earth: "https://i.imgur.com/AHPti72.png",
    Water: "https://i.imgur.com/NchScWh.png",
    Melee: "https://i.imgur.com/EWYVugy.png",
    Magic: "https://i.imgur.com/SsC1hEj.png"
}

const atktype = {
    Melee: "https://i.imgur.com/P8lUDX0.png",
    Magic: "https://i.imgur.com/tOS4FvO.png"
}
const growth = {
    Attack: "https://i.imgur.com/yduAVsz.png",
    Health: "https://i.imgur.com/MLuLYZy.png",
    Defense: "https://i.imgur.com/P4N7gFs.png"
}

const secrettype = {
    All: "https://cdn.discordapp.com/attachments/633768073068806144/982528148191186984/icSpTypeAll.png",
    Single: "https://cdn.discordapp.com/attachments/633768073068806144/982528147880828948/icSpTypeSingle.png",
}

let Filters = {
    UnitType: sessionStorage.getItem("UnitType") ?? "All",
    Type: sessionStorage.getItem("Type") ?? "All",
    Weapons: sessionStorage.getItem("Weapons") ?? "All",
    AttackType: sessionStorage.getItem("AttackType") ?? "All",
    Growth: sessionStorage.getItem("Growth") ?? "All",
    SecretType: sessionStorage.getItem("SecretType") ?? "All",
    Sort: sessionStorage.getItem("Sort") ?? "No",
    SortDir: sessionStorage.getItem("SortDir") ?? 1,
    Stars: sessionStorage.getItem("Stars") ?? "All",
    Skills:
        JSON.parse(sessionStorage.getItem("Skills")) ?? [],
    Traits:
        JSON.parse(sessionStorage.getItem("Traits")) ?? [],
    SkillsOpen: sessionStorage.getItem("SkillsOpen") ?? "false",
    TraitsOpen: sessionStorage.getItem("TraitsOpen") ?? "false",
    LimitedFiveStars: 0,
    StandardFiveStars: 0,
    Everything: sessionStorage.getItem("Everything") ?? 0,
}

Object.keys(FilterKeywords).forEach(function (index) {
    FilterKeywords[index] = Object.keys(FilterKeywords[index])
        .sort()
        .reduce((accumulator, key) => {
            accumulator[key] = FilterKeywords[index][key];

            return accumulator;
        }, {});
})

Object.keys(TraitFilterKeywords).forEach(function (index) {
    TraitFilterKeywords[index] = Object.keys(TraitFilterKeywords[index])
        .sort()
        .reduce((accumulator, key) => {
            accumulator[key] = TraitFilterKeywords[index][key];

            return accumulator;
        }, {});
})

const UnitTypeButtonTL = {
    all: "All",
    battleunit: "Battle Characters",
    protectionunit: "Protection Characters",

}

function FilterElementText(elem) {
    elem.innerHTML = elem.innerHTML.replaceAll("\n", '')
    elem.innerHTML = elem.innerHTML.replaceAll("Lv.1/", '<br>Lv.1/')
    elem.innerHTML = elem.innerHTML.replaceAll(" (", '.<br>(')
    elem.innerHTML = elem.innerHTML.replaceAll(").", ')')
    elem.innerHTML = elem.innerHTML.replaceAll(")", ')<br>')
    elem.innerHTML = elem.innerHTML.replaceAll("Lv.1/Lv.10 ", '')
    elem.innerHTML = elem.innerHTML.replaceAll(".<br>Cost", '.<br><br>Cost')
}

function getKeyByValue(object, value) {
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (object[prop] === value)
                return prop;
        }
    }
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function UpdatePage() {
    let start = Date.now()
    window.scrollTo(0, 0)
    $('.navbutton').each(function () {
        if ($(this).attr("href") == ('#/' + linksplit[linksplit.length - 1]))
            $(this).attr("current", "true")
        else
            $(this).attr("current", "false")
    })
    waitForElm("#character-placeholder").then((elem) => {
        elem.replaceChildren();
        iframeopen = false
        if (index === "characters" && page != undefined) {
            $(function () {
                $("#character-placeholder").load("/character");
            })
            waitForElm('title').then((elem) => { elem.innerHTML = cdata[page].Name })
            waitForElm('#title').then((elem) => { elem.innerHTML = cdata[page].Name.split(" [")[1].split("]")[0] })
            waitForElm('#name').then((elem) => { elem.innerHTML = cdata[page].Name.split(" [")[0] })
            waitForElm('#icon').then((elem) => { elem.setAttribute("src", cdata[page].Icon) })
            waitForElm('#art').then((elem) => { elem.setAttribute("src", cdata[page].Art); elem.onload = function () { elem.setAttribute("turnon", "true") }; })
            waitForElm('#rarity').then((elem) => { elem.setAttribute("src", stars[cdata[page].Rarity - 1]) })
            waitForElm('#type').then((elem) => { elem.setAttribute("src", types[cdata[page].Type] || cdata[page].Type) })
            waitForElm('#growth').then((elem) => { elem.setAttribute("src", growth[cdata[page].Growth] || cdata[page].Growth) })
            waitForElm('#attack').then((elem) => { elem.innerHTML = cdata[page].MinAtk.toString().concat(" - ", cdata[page].MaxAtk.toString()) })
            waitForElm('#health').then((elem) => { elem.innerHTML = cdata[page].MinHp.toString().concat(" - ", cdata[page].MaxHp.toString()) })
            waitForElm('#defense').then((elem) => { elem.innerHTML = cdata[page].MinDef.toString().concat(" - ", cdata[page].MaxDef.toString()) })
            waitForElm('#attack').then((elem) => { elem.innerHTML = cdata[page].MaxAtk.toString() })
            waitForElm('#health').then((elem) => { elem.innerHTML = cdata[page].MaxHp.toString() })
            waitForElm('#defense').then((elem) => { elem.innerHTML = cdata[page].MaxDef.toString() })
            waitForElm('#output1').then((elem) => { elem.innerHTML = cdata[page].Town1.split(" +")[0] })
            waitForElm('#output1percent').then((elem) => { elem.innerHTML = "+".concat(cdata[page].Town1.split(" +")[1]) })
            waitForElm('#output2').then((elem) => { elem.innerHTML = cdata[page].Town2.split(" +")[0] })
            waitForElm('#output2percent').then((elem) => { elem.innerHTML = "+".concat(cdata[page].Town2.split(" +")[1]) })
            waitForElm('#trait1').then((elem) => { elem.innerHTML = cdata[page].Trait1.replaceAll("★","*").split(" (5* Awaken x1):")[0] })
            waitForElm('#trait1desc').then((elem) => { elem.innerHTML = cdata[page].Trait1.replaceAll("★","*").split(" (5* Awaken x1):")[1] })
            waitForElm('#trait1adesc').then((elem) => { elem.innerHTML = cdata[page].Trait1A.replaceAll("★","*").split(" (5* Awaken x3):")[1] })
            waitForElm('#trait1icon').then((elem) => { elem.setAttribute("src", cdata[page].Trait1Icon || "") })
            waitForElm('#trait1aicon').then((elem) => { elem.setAttribute("src", cdata[page].Trait1AIcon || "") })
            waitForElm('#exability1').then((elem) => { elem.innerHTML = (cdata[page].EXAbility1 ?? ":").split(":")[0] })
            waitForElm('#exability1desc').then((elem) => { elem.innerHTML = (cdata[page].EXAbility1 ?? ":").split(":")[1] })
            waitForElm('#exability2').then((elem) => { elem.innerHTML = (cdata[page].EXAbility2 ?? ":").split(":")[0] })
            waitForElm('#exability2desc').then((elem) => { elem.innerHTML = (cdata[page].EXAbility2 ?? ":").split(":")[1] })
            waitForElm('#exability1icon').then((elem) => { elem.setAttribute("src", cdata[page].EXAbility1Icon ?? "") })
            waitForElm('#exability2icon').then((elem) => { elem.setAttribute("src", cdata[page].EXAbility2Icon ?? "") })

            if (cdata[page].UnitType != "Protection Characters") {
                waitForElm('#weapon').then((elem) => { elem.setAttribute("src", weapons[cdata[page].Weapon] || cdata[page].Weapon) })
                waitForElm('#atktype').then((elem) => { elem.setAttribute("src", atktype[cdata[page].AtkType] || cdata[page].AtkType) })
                waitForElm('#skill1').then((elem) => { elem.innerHTML = cdata[page].Skill1.split(" Lv.1")[0] + " Lv.1/Lv.10" })
                waitForElm('#skill1desc').then((elem) => { elem.innerHTML = cdata[page].Skill1.split("10:")[1]; FilterElementText(elem) })
                waitForElm('#skill2').then((elem) => { elem.innerHTML = cdata[page].Skill2.split(" Lv.1")[0] + " Lv.1/Lv.10" })
                waitForElm('#skill2desc').then((elem) => { elem.innerHTML = cdata[page].Skill2.split("10:")[1]; FilterElementText(elem) })
                waitForElm('#skill1icon').then((elem) => { elem.setAttribute("src", cdata[page].Skill1Icon) })
                waitForElm('#skill2icon').then((elem) => { elem.setAttribute("src", cdata[page].Skill2Icon) })
                waitForElm('#secreticon').then((elem) => { elem.setAttribute("src", secrettype[cdata[page].SecretType] || cdata[page].SecretType) })
                waitForElm('#secret').then((elem) => { elem.innerHTML = cdata[page].Secret.split(" Lv.")[0] })
                waitForElm('#secretdesc').then((elem) => { elem.innerHTML = cdata[page].Secret.split("Lv.MAX:")[1] })
                cdata[page].Stats.forEach((element, index) => {
                    if (index < 6)
                        waitForElm('.statsleft').then((elem) => { elem.children.item(index).children.item(1).innerHTML = element.toString().concat("%") })
                    else
                        waitForElm('.statsright').then((elem) => { elem.children.item(index - 6).children.item(1).innerHTML = element.toString().concat("%") })
                })
            }
            else {
                if ("SecondType" in cdata[page])
                    waitForElm('#weapon').then((elem) => { elem.setAttribute("src", types[cdata[page].SecondType] || cdata[page].SecondType) })
                waitForElm('#skillstitle').then((elem) => { elem.innerHTML = "Divine Protection" })
                waitForElm('#ultimatetitle').then((elem) => { elem.innerHTML = "Protection Skill" })
                waitForElm('#atktype').then((elem) => { elem.setAttribute("src", "") })
                waitForElm('#skill1').then((elem) => { elem.innerHTML = cdata[page].DivineProtection.split(" Lv.")[0] + " Lv.MAX" })
                waitForElm('#skill1desc').then((elem) => { elem.innerHTML = cdata[page].DivineProtection.split("Lv.MAX:")[1]; FilterElementText(elem) })
                waitForElm('#skill2').then((elem) => { elem.innerHTML = cdata[page].SupportDivineProtection.split(" Lv.")[0]; })
                waitForElm('#skill2desc').then((elem) => { elem.innerHTML = cdata[page].SupportDivineProtection.split("Lv.MAX:")[1]; FilterElementText(elem) })
                waitForElm('#skill1icon').then((elem) => { elem.setAttribute("src", "https://cdn.discordapp.com/attachments/633768073068806144/985265386582835320/icSkillBlessLeader.png") })
                waitForElm('#skill2icon').then((elem) => { elem.setAttribute("src", "") })
                waitForElm('#secreticon').then((elem) => { elem.setAttribute("src", cdata[page].ProtectionSkillIcon ?? "https://cdn.discordapp.com/attachments/633768073068806144/985265386582835320/icSkillBlessLeader.png") })
                waitForElm('#secret').then((elem) => { elem.innerHTML = cdata[page].ProtectionSkill.split(" Lv.1")[0] + " Lv.1/Lv.10" })
                waitForElm('#secretdesc').then((elem) => { elem.innerHTML = cdata[page].ProtectionSkill.split("10:")[1]; FilterElementText(elem) })
                waitForElm('.statsback2').then((elem) => { elem.remove() })
                waitForElm('.secondpart > .statsback').then((elem) => { elem.setAttribute("protector", "true") })
            }

            waitForElm('#samename').then((elem) => {
                let Name = cdata[page].Name.split("[")[0]
                let sortedarray = Object.keys(cdata)
                if (Filters.Sort == "Name")
                    sortedarray = sortedarray.sort(function (a, b) { return (cdata[b].Rarity - cdata[a].Rarity) })
                waitForElm('#samename > p').then((elem) => { elem.innerHTML = Name })
                let amount = 0
                sortedarray.forEach((key) => {
                    if (key != page && cdata[key].Name.split("[")[0] == Name) {
                        MakeCharacterIcon(elem, key)
                        amount = amount + 1
                    }
                })
                if (amount == 0)
                    $("#samename").hide()
            })

        }
        else if (index === "characters") {
            waitForElm('title').then((elem) => { elem.innerHTML = "Characters - SLIMEIM.WIKI" })
            $(function () {
                $("#character-placeholder").load("/charactersbody");
            })
            function updatelist() {
                $('.charcontainer').hide()
                let currentcreated = created
                //let sortedarray = Object.keys(cdata).sort(function(a, b) {return -(cdata[a].MaxAtk - cdata[b].MaxAtk)})
                let sortedarray = Object.keys(cdata)
                if (Filters.Sort != "No") {
                    if (Filters.Sort == "Name")
                        sortedarray = sortedarray.sort(function (a, b) { return (cdata[a].Name.localeCompare(cdata[b].Name)) })
                    else
                        sortedarray = sortedarray.sort(function (a, b) { return -(cdata[a][Filters.Sort] - cdata[b][Filters.Sort]) })
                }
                if (Filters.SortDir == -1)
                    sortedarray.reverse()

                const fragment = new DocumentFragment()
                waitForElm('.charactersbase').then((elem) => {

                    sortedarray.forEach(function (key) {
                        let UnitType
                        if (cdata[key].UnitType === undefined)
                            UnitType = "Battle Characters"
                        else
                            UnitType = cdata[key].UnitType
                        if (Filters.UnitType != "All" && UnitType != Filters.UnitType)
                            return;
                        if (Filters.Type != "All" && (cdata[key].Type != types[Filters.Type] && cdata[key].SecondType != types[Filters.Type]))
                            return;
                        if (Filters.Weapons != "All" && (cdata[key].Weapon != Filters.Weapons))
                            return;
                        if (Filters.Growth != "All" && (cdata[key].Growth != growth[Filters.Growth]))
                            return;
                        if (Filters.AttackType != "All" && (cdata[key].AtkType != atktype[Filters.AttackType]))
                            return;
                        if (Filters.SecretType != "All" && ("Type" + cdata[key].SecretType != Filters.SecretType))
                            return;
                        if (Filters.Stars != "All" && (cdata[key].Rarity != Filters.Stars))
                            return;
                        if (Filters.Skills.length != 0) {
                            let can = 0
                            Filters.Skills.forEach(function (yek) {
                                let thing = yek.replaceAll(":", ' ').split(".")
                                FilterKeywords[thing[0]][thing[1]].forEach(function (yek) {
                                    if ((cdata[key].Skill1 ?? "").includes(yek) || (cdata[key].Skill2 ?? "").includes(yek) || (cdata[key].ProtectionSkill ?? "").includes(yek) || (cdata[key].DivineProtection ?? "").includes(yek)) {
                                        can = can + 1
                                        return;
                                    }
                                })
                            })
                            if (can != Filters.Skills.length)
                                return;
                        }
                        if (Filters.Traits.length != 0) {
                            let can = 0
                            Filters.Traits.forEach(function (yek) {
                                let thing = yek.replaceAll(":", ' ').split(".")
                                TraitFilterKeywords[thing[0]][thing[1]].forEach(function (yek) {
                                    if ((cdata[key].Trait1 ?? "").includes(yek) || (cdata[key].Trait1A ?? "").includes(yek)) {
                                        can = can + 1
                                        return;
                                    }
                                })
                            })
                            if (can != Filters.Traits.length)
                                return;
                        }
                        if (!$('#' + key).length) {
                            MakeCharacterIcon(elem, key, fragment)
                        }
                        else {
                            $('#' + key).show()
                            waitForElm("#" + key + ' > #name').then((ele) => { ele.innerHTML = cdata[key][Filters.Sort] })
                        }
                        $('#' + key).css("order", sortedarray.indexOf(key))
                        if (Filters.Sort == "No" || Filters.Sort == "Name")
                            waitForElm("#" + key + ' > #name').then((ele) => { ele.innerHTML = cdata[key].Name.split(" ")[0] })
                        else
                            waitForElm("#" + key + ' > #name').then((ele) => { ele.innerHTML = cdata[key][Filters.Sort] })

                    });

                    elem.appendChild(fragment)
                })

                created = 0
            }


            updatelist()


            waitForElm(".unittypeselect > .unittypebutton").then((ele) => {
                $(".unittypeselect > .unittypebutton").click(function () {
                    $(".unittypeselect > .unittypebutton").attr("toggle", "false")
                    $(this).attr("toggle", "true")
                    Filters.UnitType = UnitTypeButtonTL[$(this).attr("id")]
                    sessionStorage.setItem("UnitType", Filters.UnitType)
                    updatelist()
                });
            })

            waitForElm("#types > button").then((ele) => {
                $("#types > button").click(function () {
                    $("#types > button").attr("toggle", "false")
                    if (Filters.Type == $(this).attr("id")) {
                        Filters.Type = "All"
                    }
                    else {
                        $(this).attr("toggle", "true")
                        Filters.Type = $(this).attr("id")
                    }
                    sessionStorage.setItem("Type", Filters.Type)
                    updatelist()
                });
            })

            waitForElm("#weapon > button").then((ele) => {
                $("#weapon > button").click(function () {
                    $("#weapon > button").attr("toggle", "false")
                    if (Filters.Weapons == $(this).attr("id")) {
                        Filters.Weapons = "All"
                    }
                    else {
                        $(this).attr("toggle", "true")
                        Filters.Weapons = $(this).attr("id")
                    }
                    sessionStorage.setItem("Weapons", Filters.Weapons)
                    updatelist()
                });
            })

            waitForElm("#growth > button").then((ele) => {
                $("#growth > button").click(function () {
                    $("#growth > button").attr("toggle", "false")
                    if (Filters.Growth == $(this).attr("id")) {
                        Filters.Growth = "All"
                    }
                    else {
                        $(this).attr("toggle", "true")
                        Filters.Growth = $(this).attr("id")
                    }
                    sessionStorage.setItem("Growth", Filters.Growth)
                    updatelist()
                });
            })

            waitForElm("#attacktype > button").then((ele) => {
                $("#attacktype > button").click(function () {
                    $("#attacktype > button").attr("toggle", "false")
                    if (Filters.AttackType == $(this).attr("id")) {
                        Filters.AttackType = "All"
                    }
                    else {
                        $(this).attr("toggle", "true")
                        Filters.AttackType = $(this).attr("id")
                    }
                    sessionStorage.setItem("AttackType", Filters.AttackType)
                    updatelist()
                });
            })

            waitForElm("#secrettype > button").then((ele) => {
                $("#secrettype > button").click(function () {
                    $("#secrettype > button").attr("toggle", "false")
                    if (Filters.SecretType == $(this).attr("id")) {
                        Filters.SecretType = "All"
                    }
                    else {
                        $(this).attr("toggle", "true")
                        Filters.SecretType = $(this).attr("id")
                    }
                    sessionStorage.setItem("SecretType", Filters.SecretType)
                    updatelist()
                });
            })

            waitForElm("#stars > button").then((ele) => {
                $("#stars > button").click(function () {
                    $("#stars > button").attr("toggle", "false")
                    if (Filters.Stars == parseInt($(this).attr("id"))) {
                        Filters.Stars = "All"
                    }
                    else {
                        $(this).attr("toggle", "true")
                        Filters.Stars = parseInt($(this).attr("id"))
                    }
                    sessionStorage.setItem("Stars", Filters.Stars)
                    updatelist()
                });
            })

            waitForElm(".sortselect > button").then((ele) => {
                $(".sortselect > button").click(function () {
                    $(".sortselect > button").attr("toggle", "false")
                    $(this).attr("toggle", "true")
                    if (Filters.Sort == $(this).attr("id").split("Sort")[0]) {
                        Filters.SortDir *= -1
                    }
                    Filters.Sort = $(this).attr("id").split("Sort")[0]
                    sessionStorage.setItem("Sort", Filters.Sort)
                    updatelist()
                });
            })

            waitForElm("#skillsfilterbutton").then((ele) => {
                $("#skillsfilterbutton").click(async function () {
                    if ($(this).attr("toggle") == "true") {
                        Filters.Skills.length = 0
                        sessionStorage.setItem("Skills", JSON.stringify(Filters.Skills))
                        $(".filtercategory > button").attr("toggle", "false")
                        $(this).attr("toggle", "false")
                    }
                    else
                        $(this).attr("toggle", "true")
                    Filters.SkillsOpen = $(this).attr("toggle")
                    sessionStorage.setItem("SkillsOpen", Filters.SkillsOpen)
                    $("#skillfilter").attr("toggle", $(this).attr("toggle"))
                    await new Promise(r => setTimeout(r, 250));
                    updatelist()
                });
            })

            waitForElm("#traitsfilterbutton").then((ele) => {
                $("#traitsfilterbutton").click(async function () {
                    if ($(this).attr("toggle") == "true") {
                        Filters.Traits.length = 0
                        sessionStorage.setItem("Traits", JSON.stringify(Filters.Traits))
                        $(".filtercategory > button").attr("toggle", "false")
                        $(this).attr("toggle", "false")
                    }
                    else
                        $(this).attr("toggle", "true")
                    Filters.TraitsOpen = $(this).attr("toggle")
                    sessionStorage.setItem("TraitsOpen", Filters.TraitsOpen)
                    $("#traitfilter").attr("toggle", $(this).attr("toggle"))
                    await new Promise(r => setTimeout(r, 250));
                    updatelist()
                });
            })

            function RenderFilterOptions(Type, ArrName, FilterKeywords) {
                Object.keys(FilterKeywords).forEach(function (Name) {
                    let Arr = FilterKeywords[Name]
                    waitForElm("#" + Type + "filter").then((ele) => {
                        $(ele).append('<div class = "filtercategory" id = "' + Name.replaceAll(" ", '') + '"><p>' + Name + ':</p></div>')
                        waitForElm("#" + Type + "filter > " + "#" + Name.replaceAll(" ", '')).then((ele) => {
                            $(ele).append('<button class = "filterexpand"><img src = "https://cdn.discordapp.com/attachments/633768073068806144/986552780841955328/vecteezy_triangle_1200602.png"></button>')
                            $("#" + Type + "filter > " + "#" + Name.replaceAll(" ", '') + " > .filterexpand").click(function (bro) {
                                if ($(this).attr("toggle") == "true") {
                                    $(ele).attr("toggle", "false")
                                    $(this).attr("toggle", "false")
                                }
                                else {
                                    $(ele).attr("toggle", "true")
                                    $(this).attr("toggle", "true")
                                }
                            })
                            Object.keys(Arr).forEach((key) => {
                                let ID = (Name + "." + key).replaceAll(" ", ':')
                                $(ele).append('<button class = "filteroption" id = "' + ID + '">' + key + '</button>')
                                if (Filters[ArrName].includes(ID)) {
                                    $("#" + Type + "filter" + " > .filtercategory > " + jqSelector(ID)).attr("toggle", "true")
                                    $("#" + Type + "filter" + " > .filtercategory > " + jqSelector(ID)).parent().attr("toggle", "true")
                                    $("#" + Type + "filter" + " > .filtercategory > " + jqSelector(ID)).siblings(".filterexpand").attr("toggle", "true")
                                }
                                $("#" + Type + "filter" + " > .filtercategory > " + jqSelector(ID)).click(function () {
                                    if ($(this).attr("toggle") == "true") {
                                        $(this).attr("toggle", "false")
                                        Filters[ArrName].splice(Filters[ArrName].indexOf(ID), 1)
                                    }
                                    else {
                                        $(this).attr("toggle", "true")
                                        Filters[ArrName].push(ID)
                                    }
                                    sessionStorage.setItem(ArrName, JSON.stringify(Filters[ArrName]))
                                    updatelist()
                                })
                            })
                        })
                    })
                })
            }
            RenderFilterOptions("skill", "Skills", FilterKeywords)
            RenderFilterOptions("trait", "Traits", TraitFilterKeywords)


            waitForElm('.unittypeselect > .unittypebutton').then(() => {
                $(".unittypeselect > .unittypebutton").attr("toggle", "false")
                $(".unittypeselect > #" + getKeyByValue(UnitTypeButtonTL, Filters.UnitType)).attr("toggle", "true")
            })


            waitForElm('#types > button').then(() => {
                $("#types > button").attr("toggle", "false")
                $("#types > #" + Filters.Type).attr("toggle", "true")
            })
            waitForElm('#weapon > button').then(() => {
                $("#weapon > button").attr("toggle", "false")
                $("#weapon > #" + Filters.Weapons).attr("toggle", "true")
            })
            waitForElm('#growth > button').then(() => {

                $("#growth > button").attr("toggle", "false")
                $("#growth > #" + Filters.Growth).attr("toggle", "true")
            })
            waitForElm('#attacktype > button').then(() => {

                $("#attacktype > button").attr("toggle", "false")
                $("#attacktype > #" + Filters.AttackType).attr("toggle", "true")
            })
            waitForElm('#secrettype > button').then(() => {
                $("#secrettype > button").attr("toggle", "false")
                $("#secrettype > #" + Filters.SecretType).attr("toggle", "true")
            })

            waitForElm('.sortselect > button').then(() => {
                $(".sortselect > button").attr("toggle", "false")
                $(".sortselect > #" + Filters.Sort + "Sort").attr("toggle", "true")
            })

            waitForElm('#stars > button').then(() => {
                $("#stars > button").attr("toggle", "false")
                $("#stars > #" + Filters.Stars).attr("toggle", "true")
            })

            waitForElm('#skillsfilterbutton').then(() => {
                $("#skillsfilterbutton").attr("toggle", Filters.SkillsOpen)
                $("#skillfilter").attr("toggle", Filters.SkillsOpen)
            })

            waitForElm('#traitsfilterbutton').then(() => {
                $("#traitsfilterbutton").attr("toggle", Filters.TraitsOpen)
                $("#traitfilter").attr("toggle", Filters.TraitsOpen)
            })

        }
        else if (index === "events") {
            waitForElm('title').then((elem) => { elem.innerHTML = "Events - SLIMEIM.WIKI" })
            $(function () {
                $("#character-placeholder").load("/eventsbody");
            })
            ListEvents('#ongoingevents', function (key) {const now = new Date(); if ((now => new Date(EventsData[key].Start)) && (now < new Date(EventsData[key].End))){return true}})
            ListEvents('#ongoingevents[time="all"]', function (key) {const now = new Date(); if ((now >= new Date(EventsData[key].End))){return true}})
        }
        else if (index === "gacha") {
            waitForElm('title').then((elem) => { elem.innerHTML = "Gacha Simulator - SLIMEIM.WIKI" })
            $(function () {
                $("#character-placeholder").load("/gachabody");
            })
            waitForElm('.moreunits').then((ele) => { 
                $("#unitsexpand.filterexpand").click(function (bro) {
                    if ($(this).attr("toggle") == "true") {
                        $(ele).attr("toggle", "false")
                        $(this).attr("toggle", "false")
                    }
                    else {
                        $(ele).attr("toggle", "true")
                        $(this).attr("toggle", "true")
                    }
                })
            })
            let currentbanner = "Troop Recruit: Rimuru's Bride Battle!"
            let Featured5StarsBattle = [];
            let Featured5StarsProt = [];
            let Standard5StarsBattle = ["Rimuru6", "Diablo1", "Milim4", "Veldora2", "Veldora1", "Luminus1","Rimuru2","Milim2", "Gobta1","Guy2", "Rimuru4", "Milim6", "Gazel1", "Shion1", "Shizue2", "Shuna1", "Souei2", "Treyni1", "Hakurou1", "Benimaru1", "Beretta1", "Ranga1", "Milim5", "Rimuru1"];
            let Standard5StarsProt = ["Shion6", "Shuna6", "Rimuru10", "Ifrit1", "Veldora4", "Elemental1", "Orc1", "Charybdis1", "Milim8", "Ramiris2"];
            let Standard4Stars = ["Suphia1","Grucius1", "Gabiru1", "Chloe1", "Kurobe1","Geld1", "Gelmud1", "Gobta2", "Shion5", "Souei3", "Trya1", "Hakurou2","Phobio1", "Benimaru4", "Milim7", "Yuuki1", "Ranga3", "Rimuru8", "Shuna3","Rimuru7","Shuna4","Shion3","Benimaru3","Souei4","Veldora5","Kaijin1","Gard1","Salamander1","Sky1","Fuze1","Vesta1","Light1"];
            let Standard3Stars = ["Gale1","Alice2", "Kurobe2","Kenya1","Rigurd1","Ryota1","Psychic1","Garm1","Gobuichi1","Dord1","Haruna1","Butterflies1","Myrd1"];
            let Units = [EventsData[currentbanner].Banner, Standard5StarsBattle.concat(Standard5StarsProt), Standard4Stars,Standard3Stars]
            EventsData[currentbanner].Banner.forEach(function(key){
                if (cdata[key].UnitType == "Protection Characters")
                    Featured5StarsProt.push(key)
                else
                    Featured5StarsBattle.push(key)
            })

            waitForElm('#bannerunitlist').then((ele) => {
                let i = 0
                document.querySelectorAll("#bannerunitlist").forEach(function(element){
                    const fragment = new DocumentFragment()
                    Units[i].forEach(function(unit){
                        MakeCharacterIcon(elem, unit, fragment)
                    })
                    i = i+1
                    element.appendChild(fragment)
                })
            })

            function GetRandomCharacter() {
                let Rarity = Math.random() * 101
                let FinalChoices = []
                if (Rarity <= 4)
                {
                    if (Rarity <= Featured5StarsProt.length + Featured5StarsBattle.length)
                        FinalChoices =  Featured5StarsProt.concat(Featured5StarsBattle)
                    else if (Rarity <= 1 - (Featured5StarsProt.length*0.7))
                        FinalChoices = Standard5StarsProt
                    else
                        FinalChoices = Standard5StarsBattle
                }
                else if (Rarity <= 15+4) {
                    Standard4Stars.forEach(function(pick) {
                        if (Rarity <= 5+4)
                        {
                            if (cdata[pick].UnitType == "Protection Characters")
                                FinalChoices.push(pick)
                        }
                        else if (cdata[pick].UnitType != "Protection Characters")
                            FinalChoices.push(pick)
                    })
                    }
                else {
                    Standard3Stars.forEach(function(pick) {
                        if (Rarity <= 27+4+15)
                        {
                            if (cdata[pick].UnitType == "Protection Characters")
                                FinalChoices.push(pick)
                        }
                        else if (cdata[pick].UnitType != "Protection Characters")
                            FinalChoices.push(pick)
                    })
                }
                return FinalChoices[Math.floor(Math.random()*FinalChoices.length)]
            }
            let debounce = false
            function round(value, precision) {
                var multiplier = Math.pow(10, precision || 0);
                return Math.round(value * multiplier) / multiplier;
            }
            function UpdateStats()
            {
                waitForElm("#limitedpulled").then((ele) => { 
                    $("#limitedpulled").text(Filters.LimitedFiveStars)
                    $("#standardpulled").text(Filters.StandardFiveStars)
                    $("#percentage").text(round(((Filters.LimitedFiveStars+Filters.StandardFiveStars)/Filters.Everything)*100,1) + "%")
                    $("#magicrystals").text(Filters.Everything*30)
                    $("#usd").text(round((Filters.Everything*30)*(39.99/475),2)+"$")
                })
                
            }
            async function Pull(amount, elem){
                $("#rollresults").attr("toggle", "true")
                if (debounce == false){
                    if ($("#rollresults").attr("flow") != "true")
                        await new Promise(r => setTimeout(r, 50));
                    $("#rollresults").attr("flow", "true")
                    debounce = true
                    elem.replaceChildren();
                    for (let i = 0; i < amount; i++) {
                        Filters.Everything = Filters.Everything + 1
                        const fragment = new DocumentFragment()
                        let rand = GetRandomCharacter()
                        if (Featured5StarsProt.includes(rand) || Featured5StarsBattle.includes(rand))
                        {
                            Filters.LimitedFiveStars = Filters.LimitedFiveStars + 1
                        }
                        else if (cdata[rand].Rarity == 5)
                        {
                            Filters.StandardFiveStars = Filters.StandardFiveStars + 1
                        }
                        UpdateStats()
                        let para = MakeCharacterIcon(elem, rand, fragment, true)
                        elem.appendChild(fragment);
                        await new Promise(r => setTimeout(r, 100));
                        para.setAttribute("turnon", "true")
                    }
                    await new Promise(r => setTimeout(r, 100));
                    debounce = false
                }
            }
            waitForElm('#x10').then((ele) => {
                waitForElm('.actualrollresults').then((elem) => {
                    $(ele).click(async function(){
                        Pull(10, elem)
                    })
                })
            })
            waitForElm('#x1').then((ele) => {
                waitForElm('.actualrollresults').then((elem) => {
                    $(ele).click(async function(){
                        Pull(1, elem)
                    })
                })
            })
            UpdateStats()
        }
        else {
            waitForElm('title').then((elem) => { elem.innerHTML = "Home - SLIMEIM.WIKI" })
            $(function () {
                $("#character-placeholder").load("/homebody");
            })
            waitForElm('#latestcharacters').then((elem) => {
                let sortedarray = Object.keys(cdata)
                //waitForElm('#samename > p').then((elem) => { elem.innerHTML = Name })
                let amount = 0
                sortedarray.forEach((key) => {
                    if (cdata[key].New == true) {
                        MakeCharacterIcon(elem, key)
                        amount = amount + 1
                        waitForElm("#" + key + ' > #name').then((ele) => { ele.innerHTML = cdata[key].Name.split(" ")[0] })
                    }
                })
                if (amount == 0)
                    $("#latestcharacters").hide()
            })
            ListEvents('#ongoingevents', function (key) {const now = new Date(); if ((now => new Date(EventsData[key].Start)) && (now < new Date(EventsData[key].End))){return true}})
        }  
    })
}

UpdatePage()

waitForElm('.hamb').then(() => {
    const List = document.querySelector('.buttonsdiv')
    const Hamb = document.querySelector('.hamb')


    Hamb.addEventListener("click", () => {
        const clicked = List.getAttribute("clicked")

        if (clicked === "false") {
            List.setAttribute("clicked", "true")
        }
        else
            List.setAttribute("clicked", "false")
    })

})

