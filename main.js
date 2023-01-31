
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}


function trimSlashes(link, scroll) {
    let linksplit = (link || window.location.pathname).split("/");
    if (linksplit[linksplit.length - 1].length == 0) {
        linksplit.pop()
    }
    let page = linksplit[2];
    let index = linksplit[1];
    return { page: page, index: index, scroll: scroll ?? 0 }
}



/*let linksplit = window.location.href.split("/");
if (linksplit[linksplit.length - 1].length == 0) {
    linksplit.pop()
}
let page = linksplit[5];
let index = linksplit[4]*/
let created = 1
let iframeopen = false
let loadedimages = []

let TierList = [
    {
        Title: "SSS",
        Color: "red",
        Units: [ "Violet1", "Masked1", "Shuna7", "Milim10", "Rimuru12"],
        Protection: ["Shuna8", "Towa1", "Shizue3", "Hakurou3","Guy3", "Veldora3", "Milim9"]
    },
    {
        Title: "SS",
        Color: "crimson",
        Units: ["Shion2", "Gazel1", "Luminus3", "Diablo2", "Veldora2", "Myulan2", "Luminus2", "Milim3", "Carrion1",
                "Rimuru4", "Milim6", "Diablo3", "Shion7", "Alice1", "Velzard1", "Shinsha2", "Benimaru7","Velzard3", "Milim11", "Luminus4",
                "Rimuru14", "Shion8"],
        Protection: ["Veldora6", "Orc1", "Chloe2", "Gabiru2", "Charybdis1", "Benimaru6", "Ramiris3"]
    },
    {
        Title: "S",
        Color: "#A60D22",
        Units: ["Leon2", "Leon1", "Daggrull1", "Diablo1", "Shion1", "Milim2", "Guy2", "Guy1", "Luminus1", "Benimaru2", "Souei1", "Milim1", "Ramiris1", "Deeno1", "Rimuru5", "Velzard2", "Leon3", "Diablo4", "Deeno2", "Shizue4"],
        Protection: ["Ramiris2", "Shion6", "Rimuru9", "Rimuru10", "Soka1" , "Elemental1"]
    },
    {
        Title: "A",
        Color: "orange",
        Units: ["Rimuru3", "Shuna1", "Hinata1", "Beretta1", "Milim4", "Rimuru6", "Gobta1", "Shizue2", "Benimaru1", "Treyni1", "Milim5", "Daggrull2", "Clayman1", "Adalman1", "Rain1", "Veldora1",
                "Hakurou1", "Souei2", "Rimuru1", "Frey1", "Rimuru11", "Izis1"],
        Protection: ["Ifrit1", "Shuna6", "Veldora4", "Milim8"]
    },
    {
        Title: "B",
        Color: "darkgoldenrod",
        Units: ["Shizue1", "Ranga1", "Rimuru2", "Shuna2", "Shinsha1", "Eren1", "Misery1", "Geld2", "Rimuru7", "Hiiro1", "Rimuru13", "Soka2", "Suphia2"],
    },
    {
        Title: "C",
        Color: "grey",
        Units: ["Myulan1", "Benimaru5", "Shuna5", "Albis1", "Ranga2"],
    }
]


function jqSelector(id) {
    return "#" + id.replace(/(:|\.|\[|\]|,)/g, "\\$1");
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function () {
    $("#nav-placeholder").append(`
    <nav class="topbar">
        <div class="topbarinside">
            <a href="/" class="sitename"><img class = "logo" src="https://media.discordapp.net/attachments/633768073068806144/1016333761232785529/SLIMEIM180.png"> .WIKI</p>
                <div clicked=false class="buttonsdiv">
                <a href="/characters/" class="navbutton">Characters</a>
                <a href="/events/" class="navbutton">Events</a>
                <a href="/gacha/" class="navbutton">Gacha Simulator</a>
                <a href="/daily/" class="navbutton">Daily Story</a>
                <a href="/tierlist/" class="navbutton">Tier List</a>
                </div><button class="hamb"></button>
        </div>
    </nav>`);
})



//import cdata from "/data.json" assert { type: "json" }
//import FilterKeywords from "/filterkeywords.json" assert { type: "json" }

let AllFetched = false
let DataPromises = []
var cdata;
var FilterKeywords;
var TraitFilterKeywords;
var EventsDataUnsorted;
var DailyCSV;

DataPromises.push(new Promise(async function (resolve, reject) {
    cdata = await fetchcdata(`/data/data.json`); resolve()
}))
DataPromises.push(new Promise(async function (resolve, reject) {
    FilterKeywords = await fetchcdata(`/data/filterkeywords.json`); resolve()
}))
DataPromises.push(new Promise(async function (resolve, reject) {
    TraitFilterKeywords = await fetchcdata(`/data/traitsfilterkeywords.json`); resolve()
}))
DataPromises.push(new Promise(async function (resolve, reject) {
    EventsDataUnsorted = await fetchcdata(`/data/events.json`); resolve()
}))
DataPromises.push(new Promise(async function (resolve, reject) {
    DailyCSV = await fetchcsv(`/data/daily.csv`); resolve()
}))
await Promise.all(DataPromises)

Object.keys(cdata).forEach((key) => {
    cdata[key].EP = cdata[key].MaxHp + ((cdata[key].MaxAtk*5) + (cdata[key].MaxDef*2.5))
})

let EventsData = {}
let sortedarray = Object.keys(EventsDataUnsorted).sort(function (a, b) {
    if ((EventsDataUnsorted[a].New == true && EventsDataUnsorted[b].New == true) || (EventsDataUnsorted[a].New == false && EventsDataUnsorted[b].New == false))
        if (EventsDataUnsorted[a].Start == "")
            return 1
        else if (EventsDataUnsorted[b].Start == "")
            return -1
        else
            return -((new Date(EventsDataUnsorted[a].Start)) - (new Date(EventsDataUnsorted[b].Start)))
    else if (EventsDataUnsorted[a].New == true)
        return -1
    else
        return 1
    return (EventsDataUnsorted[a].New == true ? -1 : -((new Date(EventsDataUnsorted[a].Start)) - (new Date(EventsDataUnsorted[b].Start))))
})


sortedarray.forEach((key) => {
    EventsData[key] = EventsDataUnsorted[key]
})

if (window.history) {
    var myOldUrl = window.location.href;
    window.addEventListener('click', function (evt) {
        if (!(evt.target.getAttribute("href") || evt.target.parentElement.getAttribute("href"))) return;
        if ($(".buttonsdiv").attr("clicked") == "true")
            waitForElm('.buttonsdiv').then((elem) => { elem.setAttribute("clicked", "false") })
        evt.preventDefault();
        window.history.replaceState({ category: trimSlashes(null, document.documentElement.scrollTop || document.body.scrollTop) }, '')
        //window.history.state.category.scroll = document.documentElement.scrollTop || document.body.scrollTop
        var category = trimSlashes((evt.target.getAttribute("href") || evt.target.parentElement.getAttribute("href")));
        category.scroll = 0;
        UpdatePage(category);
        window.history.pushState({ category: category }, window.title, (evt.target.getAttribute("href") || evt.target.parentElement.getAttribute("href")));
    });
    window.addEventListener('popstate', function (evt) {
        var category = evt.state ? evt.state.category : trimSlashes(window.location.pathname);
        UpdatePage(category);
    });
    /*window.addEventListener('hashchange', async function () {
        
        
        myOldUrl = window.location.href
        UpdatePage()
    });*/
}

function ReturnDate(key, difference) {
    if (EventsData[key].Start == "" && EventsData[key].Start == "")
        return ""
    else if (EventsData[key].Start == "")
        EventsData[key].Start = EventsData[key].End
    else if (EventsData[key].End == "")
        EventsData[key].End = EventsData[key].Start
    if (EventsData[key].End == EventsData[key].Start) {
        return new Date(EventsData[key].Start).toLocaleDateString()
    }
    else {
        /*if (difference == true)
        {
            let End = new Date(EventsData[key].End)
            End.setUTCDate(End.getUTCDate() + 1)
            End.setUTCHours(5, 59, 0 , 0, 0)
            console.log(End)
            return "Ending in " + Math.floor(Math.abs((End.getTime()  - (new Date()).getTime()) / 1000) / 60 / 60) + " hours."
        }
        else*/
        return (new Date(EventsData[key].Start)).toLocaleDateString() + " - " + (new Date(EventsData[key].End)).toLocaleDateString()
    }
}


async function ListEvents(selector, show, difference) {
    let amount = 0
    await waitForElm(selector).then((elem) => {
        const fragment = new DocumentFragment()
        Object.keys(EventsData).forEach((key) => {
            if (show(key)) {
                const frag = document.createElement("div")
                frag.setAttribute("id", "event");
                frag.setAttribute("class", "homecategory");
                frag.innerHTML = `<div><img src="" alt=""></div>
                <p><strong id = "title">`+ key + `</strong></p>
                <p id = "description">`+ (EventsData[key].Description ?? "").replaceAll("\n", "<br>") + `</p>
                <p id = "date">`+ ReturnDate(key, difference) + `</p>
                <button type = "button" Link = "`+ `" id ="iframeanchor" class="unittypebutton">More</button>
                <p class ="newtext">NEW<p>
                `
                frag.children[0].children[0].onload = function () { frag.setAttribute("turnon", "true") };
                frag.children[0].children[0].src = EventsData[key].Image;
                frag.querySelector("button").onclick = function () {
                    MakeIframe(EventsData[key].Link)
                }
                if (EventsData[key].Current == false) {
                    frag.querySelector("button").setAttribute("dont", "true")
                }
                if (EventsData[key].New != true) {
                    frag.querySelector(".newtext").setAttribute("dont", "true")
                }
                fragment.appendChild(frag)
                amount = amount + 1
            }
        })
        elem.appendChild(fragment)
    })
    if (amount == 0) {
        $(selector).css("display", "none")
        $(selector).prev().css("display", "none")
    }
    return amount
}

async function MakeIframe(Link) {
    if (iframeopen == false) {
        iframeopen = true
        const fragment = new DocumentFragment()
        const frag = document.createElement("div")
        frag.setAttribute("class", "iframepopup")
        frag.innerHTML = `
        <div>
            <iframe class="iframe" id = "linktoapp" src="`+ Link + `" ></iframe>
        </div>
        <button type = "button" id ="closepopup" class="unittypebutton"> <img src="https://cdn.discordapp.com/attachments/633768073068806144/987785342511882290/Grey_close_x.svg.png" alt=""> </button>
        `
        fragment.appendChild(frag)
        document.querySelector(".homebasecontainer").appendChild(fragment)
        waitForElm(".iframepopup").then(async function (elem) {
            elem.querySelector(".iframe").addEventListener("load", async function () {
                await new Promise(r => setTimeout(r, 100))
                elem.setAttribute("loaded", "true")
            });
            await new Promise(r => setTimeout(r, 100))
            elem.setAttribute("toggle", "true")
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
    para.setAttribute("href", "/characters/" + key + "/")
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
    else {
        para.children[0].src = cdata[key].Icon;
        if (off != true) {
            para.setAttribute("removetransition", "true")
            para.setAttribute("turnon", "true")
        }
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

function CSVParse(csvString, delimiter = ",") {

    if (!csvString || !csvString.length)
        return [];

    const pattern = new RegExp(
        ("(\\" + delimiter + "|\\r?\\n|\\r|^)" +
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
            "([^\"\\" + delimiter + "\\r\\n]*))"
        ), "gi"
    );

    let rows = [[]];
    let matches = false;

    while (matches = pattern.exec(csvString)) {

        const matched_delimiter = matches[1];
        const matched_cellQuote = matches[2];
        const matched_cellNoQuote = matches[3];

        /*
         * Edge case: Data that starts with a delimiter
         */
        if (matches.index == 0 && matched_delimiter)
            rows[rows.length - 1].push("");

        /*
         * Fix empty lines
         */
        if (!matches[2] && !matches[3])
            continue;

        if (matched_delimiter.length && matched_delimiter !== delimiter)
            rows.push([]);

        const matched_value = (matched_cellQuote)
            ? matched_cellQuote.replace(
                new RegExp("\"\"", "g"), "\""
            )
            : matched_cellNoQuote;

        rows[rows.length - 1].push(matched_value);

    }

    return rows;
}

async function fetchcsv(file) {
    try {
        const response = await fetch(file);
        const exam = await response.text();
        let csvData = CSVParse(exam)
        return csvData;
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
    Balance: "https://i.imgur.com/MLuLYZy.png",
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
    Server: localStorage.getItem("Server") ?? "NA",
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

function SkillTextFilter(text) {
    if (text) {
        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "w", "z"]
        let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        let symbols = [")", "%"]
        /*alphabet.forEach((letter) => {
            alphabet.forEach((letter2) => {
                text = text.replaceAll(letter + letter2.toUpperCase(), letter + ". " + letter2.toUpperCase())
            })
        })*/
        /*text = text.replaceAll("\n", '')
        text = text.replaceAll("Lv.1/", '<br>Lv.1/')
        text = text.replaceAll(" (", '.<br>(')
        text = text.replaceAll(").", ')')
        text = text.replaceAll(")", ')<br>')
        text = text.replaceAll("Lv.1/Lv.10 ", '')
        text = text.replaceAll(".<br>Cost", '.<br><br>Cost')
        text = text.replaceAll(". Cost", '.<br><br>Cost')
        text = text.replaceAll(")<br>Cost", ')<br><br>Cost')
        text = text.replaceAll(") Cost", ')<br><br>Cost')*/

        text = text.replaceAll("Lv.1/Lv.10 ", '')
        text = text.replaceAll("Soul of Protection", 'Soul of Divine Protection')
        /*text = text.replaceAll(" (", '<h5>(')
        alphabet.forEach((letter) => {
            text = text.replaceAll(letter + "<br>" ,  letter + ". <br>")
            text = text.replaceAll(letter.toUpperCase() + "<br>" ,  letter.toUpperCase() + ". <br>")
            alphabet.forEach((letter2) => {
                text = text.replaceAll(letter + letter2.toUpperCase(), letter + ". <br>" + letter2.toUpperCase())
            })
            
        })
        text = text.replaceAll(")" ,  ")</h5>")
        /*symbols.forEach((symbol, i) => { 
            text = text.replaceAll(symbol + "<br>" ,  symbol + (i != 0 ? "." : "</h5>") + " <br>")
        })*/
        /*
        
        text = text.replaceAll(". ", '. <br>')
        text = text.replaceAll(" (", '<br><h5>(')
        alphabet.forEach((letter) => {
            text = text.replaceAll(letter + "<br>" ,  letter + ". <br>")
            text = text.replaceAll(letter.toUpperCase() + "<br>" ,  letter.toUpperCase() + ". <br>")
            alphabet.forEach((letter2) => {
                text = text.replaceAll(letter + letter2.toUpperCase(), letter + ". <br>" + letter2.toUpperCase())
            })
            symbols.forEach((symbol) => { 
                text = text.replaceAll(symbol + letter.toUpperCase(),symbol+"<br>" + letter.toUpperCase())
            })
        })
        symbols.forEach((symbol, i) => { 
            text = text.replaceAll(symbol + "<br>" ,  symbol + (i != 0 ? "." : "</h5>") + " <br>")
        })*/


        /*if (!text.includes("Cost:") && text[text.length] != ".") {
            text = text + "."
        }
        else if (text.includes("Cost:")) { 
            text = text + "</h4>"
        }
        text = text.replaceAll("Cost:", '<br><h4>Cost:')*/
        console.log(text)
        text = text.replace(/%[a-zA-Z]/g, (match) => match.slice(0, 1) + "<br>" + match.slice(1));
        text = text.replace(/％[a-zA-Z]/g, (match) => match.slice(0, 1) + "<br>" + match.slice(1));
        text = text.replaceAll("Cost:", "<br><span class = 'cost'>• Cost:")
        /*text = text.replaceAll("ATK", "<span class = 'ATK'>ATK</span>")
        text = text.replaceAll("HP", "<span class = 'HP'>HP</span>")*/
        if (text.includes("Cost:")) {
            text = text + " •</span> "
        }
        alphabet.forEach((letter) => {
            text = text.replaceAll(". " + letter.toUpperCase(), ".<br>" + letter.toUpperCase())
            text = text.replaceAll("." + letter.toUpperCase(), ".<br>" + letter.toUpperCase())
            alphabet.forEach((letter2) => {
                text = text.replaceAll(letter + letter2.toUpperCase(), letter + ". <br>" + letter2.toUpperCase())
            })
            symbols.forEach((symbol) => {
                text = text.replaceAll(symbol + letter.toUpperCase(), symbol + "<br>" + letter.toUpperCase())
            })
            symbols.forEach((symbol) => {
                text = text.replaceAll(symbol + "." + letter.toUpperCase(), symbol + "<br>" + letter.toUpperCase())
            })
            numbers.forEach((letter2) => {
                text = text.replaceAll(letter2 + letter.toUpperCase(), letter2 + "<br>" + letter.toUpperCase())
                // text = text.replaceAll(letter2 + " " + letter.toUpperCase(), letter2 + "<br>" + letter.toUpperCase())
                // text = text.replaceAll(letter2 + "  " + letter.toUpperCase(), letter2 + "<br>" + letter.toUpperCase())
            })
        })
        text = text.replaceAll("(s)", "/s/")
        text = text.replaceAll("(", "<br><span class = 'turns'>(")
        text = text.replaceAll(").", ")")
        text = text.replaceAll("%/", "/")
        text = text.replaceAll("<br>Max", ")<br><span class = 'turns'>(Max")
        text = text.replaceAll(")", ")</span>")
        text = text.replaceAll("/s/", "(s)")
        text = text.replaceAll(" Increases", "<br>Increases")
        text = text.replaceAll(/x?\d+(?:\/\d+)?%?/g, function(match){
            return "<span class = 'percentage'>" + match + "</span>"
        })
        /*let i = text.length;
        while (i--) {
            let letter = text.charAt(i)
            if (letter == "%" && text.charAt(i + 1) != "<") {
                let curi = i
                let finalstring = ""
                let inspan = false
                while (curi >= 0 && text.charAt(curi) != " ") {
                    finalstring = text.charAt(curi) + finalstring
                    curi = curi - 1
                }
                text = text.replaceAll(finalstring, "<span class = 'percentage'>" +finalstring+"</span>")
            }
        }*/
    }
    return text
}

function FilterElementText(elem) {
    elem.innerHTML = SkillTextFilter(elem.innerHTML)
}

function getKeyByValue(object, value) {
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (object[prop] === value)
                return prop;
        }
    }
}

function EndingSoon(key) {
    let Difference = Math.floor(((new Date(EventsData[key].End)).getTime() - (new Date()).getTime()) / 1000)
    if (Difference < 86400 * 3 && Difference > -86400 * 3)
        return true
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

function FindSimilarIcon(Title, Trait) {
    let Final = ""
    /*function CheckIcon(e) {
        if (e["Trait"+Trait+"Icon"] != undefined && e["Trait"+Trait].replaceAll("★", "*").split(" (5* Awaken x1):")[0] == Title)
        {
            Final = e["Trait"+Trait+"Icon"]
            return Final
        }
    }
    Object.values(cdata).some(CheckIcon)*/
    return Final
}

function UpdatePage(category) {
    let start = Date.now()
    let index = category.index
    let page = category.page
    $('.navbutton').each(function () {
        if ($(this).attr("href") == ('/' + (page ?? index) + '/'))
            $(this).attr("current", "true")
        else
            $(this).attr("current", "false")
    })
    $('link[rel="canonical"]').remove()
    function ScrollFnc() {
        $("body").css("min-height", category.scroll + window.innerHeight > window.innerHeight + 200 ? category.scroll + window.innerHeight : window.innerHeight + 200)
        window.scrollTo(0, category.scroll)
    }
    
    waitForElm("#character-placeholder").then((elem) => {
        iframeopen = false
        if (index === "characters" && page != undefined) {
            let Template = "/components/charactersmall"
            if (cdata[page].SecretSkillTrait)
                Template = "/components/characterbig"
            $("#character-placeholder").load(Template, function () { ScrollFnc()
                $("head").append(`<link rel="canonical" href="` + "https://slimeim.wiki/characters/" + page + `/"/>`);
                waitForElm('title').then((elem) => { elem.innerHTML = cdata[page].Name + " - SLIMEIM.WIKI" })
                waitForElm('#title > p').then((elem) => { elem.textContent = cdata[page].Name.split(" [")[1].split("]")[0] })
                waitForElm('#name').then((elem) => { elem.innerHTML = cdata[page].Name.split(" [")[0] })
                waitForElm('#icon').then((elem) => { elem.setAttribute("src", cdata[page].Icon) })
                waitForElm('#art').then((elem) => { elem.setAttribute("src", cdata[page].Art); elem.onload = function () { elem.setAttribute("turnon", "true") }; })
                waitForElm('#rarity').then((elem) => { elem.setAttribute("src", stars[cdata[page].Rarity - 1]) })
                waitForElm('#type').then((elem) => { elem.setAttribute("src", types[cdata[page].Type] || cdata[page].Type) })
                waitForElm('#growth').then((elem) => { elem.setAttribute("src", growth[cdata[page].Growth] ?? cdata[page].Growth) })
                
                /*waitForElm('#attack').then((elem) => { elem.innerHTML = cdata[page].MinAtk.toString().concat(" - ", cdata[page].MaxAtk.toString()) })
                waitForElm('#health').then((elem) => { elem.innerHTML = cdata[page].MinHp.toString().concat(" - ", cdata[page].MaxHp.toString()) })
                waitForElm('#defense').then((elem) => { elem.innerHTML = cdata[page].MinDef.toString().concat(" - ", cdata[page].MaxDef.toString()) })*/
                let FilteredArray = Object.values(cdata).filter((value) => {
                    if (cdata[page].UnitType == "Protection Characters" && value.UnitType == "Protection Characters") {
                        return true
                    }
                    else if (cdata[page].UnitType != "Protection Characters" && value.UnitType != "Protection Characters")
                    {
                        return true
                    }
                    return false
                })

                waitForElm('#attack').then((elem) => { elem.innerHTML = cdata[page].MaxAtk.toString() })
                waitForElm('#attackbar').then((elem) => {
                    let maxvalue = Math.max(...FilteredArray.map(o => o.MaxAtk))
                    let minvalue = Math.min(...FilteredArray.map(o => o.MaxAtk))
                    $(elem.children[0]).css("width", Math.floor(((cdata[page].MaxAtk - minvalue) / (maxvalue - minvalue))*100)+"%")
                 })

                waitForElm('#health').then((elem) => { elem.innerHTML = cdata[page].MaxHp.toString() })
                waitForElm('#healthbar').then((elem) => {
                    let maxvalue = Math.max(...FilteredArray.map(o => o.MaxHp))
                    let minvalue = Math.min(...FilteredArray.map(o => o.MaxHp))
                    $(elem.children[0]).css("width", Math.floor(((cdata[page].MaxHp - minvalue) / (maxvalue - minvalue))*100)+"%")
                })

                waitForElm('#defense').then((elem) => { elem.innerHTML = cdata[page].MaxDef.toString() })
                waitForElm('#defensebar').then((elem) => {
                    let maxvalue = Math.max(...FilteredArray.map(o => o.MaxDef))
                    let minvalue = Math.min(...FilteredArray.map(o => o.MaxDef))
                    $(elem.children[0]).css("width", Math.floor(((cdata[page].MaxDef - minvalue) / (maxvalue - minvalue))*100)+"%")
                })
                
                waitForElm('#EP').then((elem) => {
                    elem.innerHTML = Math.floor(cdata[page].EP).toString()
                })
                waitForElm('#epbar').then((elem) => {
                    let maxvalue = Math.max(...FilteredArray.map(o => o.EP))
                    let minvalue = Math.min(...FilteredArray.map(o => o.EP))
                    $(elem.children[0]).css("width", Math.floor(((cdata[page].EP - minvalue) / (maxvalue - minvalue))*100)+"%")
                })

                waitForElm('#output1').then((elem) => { elem.innerHTML = cdata[page].Town1.split(" +")[0] })
                waitForElm('#output1percent').then((elem) => { elem.innerHTML = "+".concat(cdata[page].Town1.split(" +")[1]) })
                waitForElm('#output2').then((elem) => { elem.innerHTML = cdata[page].Town2.split(" +")[0] })
                waitForElm('#output2percent').then((elem) => { elem.innerHTML = "+".concat(cdata[page].Town2.split(" +")[1]) })
                waitForElm('#town2icon').then((elem) => { elem.setAttribute("src", "https://cdn.discordapp.com/attachments/633768073068806144/1035679641375096883/facility_1101_02.png"); elem.onload = function () { elem.setAttribute("turnon", "true") } })
                waitForElm('#town1icon').then((elem) => { elem.setAttribute("src", "https://cdn.discordapp.com/attachments/633768073068806144/1035679641375096883/facility_1101_02.png"); elem.onload = function () { elem.setAttribute("turnon", "true") } })

                

                function CleanTraitTitle(text)
                {
                    return (text.replaceAll("★", "*").replaceAll("（", "(").replaceAll("）", ")").split("):")[0] + ")").replaceAll("(5* Awaken x1)", "").replaceAll("(5* Awaken x3)", "").split("(")[0]
                }
                function CleanTraitText(text)
                {
                    return text.replaceAll("★", "*").replaceAll("（", "(").replaceAll("）", ")").split("):")[1]
                }

                waitForElm('.rankcontainer').then((elem) => { 
                    elem.innerHTML = ""
                    TierList.forEach((Tier) => {
                        if (Tier.Units.includes(page) || (Tier.Protection && Tier.Protection.includes(page)))
                        {
                            elem.innerHTML = Tier.Title
                            elem.setAttribute("style", "color: " + Tier.Color)
                            return ;
                        }
                    })
                    if (elem.innerHTML == "")
                        waitForElm('.iconrank').then((elem) => {elem.remove()})
                })
                waitForElm('#trait1').then((elem) => { elem.innerHTML = CleanTraitTitle(cdata[page].Trait1) })
                waitForElm('#trait1desc').then((elem) => { elem.innerHTML = CleanTraitText(cdata[page].Trait1); FilterElementText(elem) })
                waitForElm('#trait1adesc').then((elem) => { elem.innerHTML = CleanTraitText(cdata[page].Trait1A); FilterElementText(elem) })
                waitForElm('#trait1icon').then((elem) => { elem.setAttribute("src", cdata[page].Trait1Icon || FindSimilarIcon( CleanTraitText(cdata[page].Trait1), "1") || "https://cdn.discordapp.com/attachments/633768073068806144/1035678739788484678/icPassiveSkill.png"); elem.onload = function () { elem.setAttribute("turnon", "true") } })
                waitForElm('#trait1aicon').then((elem) => { elem.setAttribute("src", cdata[page].Trait1AIcon || FindSimilarIcon( CleanTraitText(cdata[page].Trait1A), "1") || "https://cdn.discordapp.com/attachments/633768073068806144/1035678739788484678/icPassiveSkill.png"); elem.onload = function () { elem.setAttribute("turnon", "true") } })
                if (cdata[page].SecretSkillTrait)
                {
                    waitForElm('#trait1b').then((elem) => { elem.innerHTML = CleanTraitTitle(cdata[page].Trait1) })
                    waitForElm('#trait1descb').then((elem) => { elem.innerHTML = CleanTraitText(cdata[page].Trait1); FilterElementText(elem) })
                    waitForElm('#trait1adescb').then((elem) => { elem.innerHTML = CleanTraitText(cdata[page].Trait1A); FilterElementText(elem) })
                    waitForElm('#trait1iconb').then((elem) => { elem.setAttribute("src", cdata[page].Trait1Icon || FindSimilarIcon( CleanTraitText(cdata[page].Trait1), "1") || "https://cdn.discordapp.com/attachments/633768073068806144/1035678739788484678/icPassiveSkill.png"); elem.onload = function () { elem.setAttribute("turnon", "true") } })
                    waitForElm('#trait1aiconb').then((elem) => { elem.setAttribute("src", cdata[page].Trait1AIcon || FindSimilarIcon( CleanTraitText(cdata[page].Trait1A), "1") || "https://cdn.discordapp.com/attachments/633768073068806144/1035678739788484678/icPassiveSkill.png"); elem.onload = function () { elem.setAttribute("turnon", "true") } })

                }
                if (cdata[page].Valor1 != undefined)
                {
                    waitForElm('#valor1').then((elem) => { elem.innerHTML = CleanTraitTitle(cdata[page].Valor1) })
                    waitForElm('#valor1desc').then((elem) => { elem.innerHTML = CleanTraitText(cdata[page].Valor1); FilterElementText(elem) })
                    waitForElm('#valor1icon').then((elem) => { elem.setAttribute("src", cdata[page].Valor1Icon || FindSimilarIcon( CleanTraitText(cdata[page].Valor1), "1") || "https://cdn.discordapp.com/attachments/941320558786801674/1034822738822565898/IcRank_02_06_00.png"); elem.onload = function () { elem.setAttribute("turnon", "true") } })
                    if (cdata[page].Valor1A)
                    {
                        waitForElm('#valor1adesc').then((elem) => { elem.innerHTML = CleanTraitText(cdata[page].Valor1A); FilterElementText(elem) })
                        waitForElm('#valor1aicon').then((elem) => { elem.setAttribute("src", cdata[page].Valor1AIcon || FindSimilarIcon( CleanTraitText(cdata[page].Valor1A), "1") || "https://cdn.discordapp.com/attachments/941320558786801674/1034822741641154560/IcRank_02_07_00.png"); elem.onload = function () { elem.setAttribute("turnon", "true") } })
                    }
                    else
                    {
                        waitForElm('#valor1adesc').then((elem) => { elem.remove() })
                        waitForElm('#valor1aicon').then((elem) => { elem.remove() })
                        waitForElm('#valor1a').then((elem) => { elem.remove() })
                    }
                    
                }
                else
                {
                    waitForElm('#valor1icon').then((elem) => {elem.parentElement.remove()})
                    waitForElm('#valor1aicon').then((elem) => {elem.parentElement.remove()})
                    waitForElm('#valor1icon').then((elem) => {elem.parentElement.remove()})
                    waitForElm('.valorbigtitle').then((elem) => {elem.remove()})
                }

                waitForElm('#exability1').then((elem) => { elem.innerHTML = (cdata[page].EXAbility1 ?? ":").split(":")[0] })
                waitForElm('#exability1desc').then((elem) => { elem.innerHTML = (cdata[page].EXAbility1 ?? ":").split(":")[1]; FilterElementText(elem) })
                waitForElm('#exability2').then((elem) => { elem.innerHTML = (cdata[page].EXAbility2 ?? ":").split(":")[0] })
                waitForElm('#exability2desc').then((elem) => { elem.innerHTML = (cdata[page].EXAbility2 ?? ":").split(":")[1]; FilterElementText(elem) })
                waitForElm('#exability1icon').then((elem) => { elem.setAttribute("src", cdata[page].EXAbility1Icon ?? "https://ten-sura-m-assets-us.akamaized.net/web-assets/images/fcac5e3898026b79a3a3c64707ab4c3d.png?16628694753195?16628694753195"); elem.onload = function () { elem.setAttribute("turnon", "true") } })
                waitForElm('#exability2icon').then((elem) => { elem.setAttribute("src", cdata[page].EXAbility2Icon ?? "https://ten-sura-m-assets-us.akamaized.net/web-assets/images/fcac5e3898026b79a3a3c64707ab4c3d.png?16628694753195?16628694753195"); elem.onload = function () { elem.setAttribute("turnon", "true") } })
                if (cdata[page].UnitType != "Protection Characters") {
                    if (!cdata[page].EXAbility1) {
                        waitForElm('.secondpart > .statsback').then((elem) => { elem.setAttribute("protector", "true") })
                    }
                    waitForElm('#weapon').then((elem) => { elem.setAttribute("src", weapons[cdata[page].Weapon] || cdata[page].Weapon) })
                    waitForElm('#atktype').then((elem) => { elem.setAttribute("src", atktype[cdata[page].AtkType] || cdata[page].AtkType) })
                    waitForElm('#skill1').then((elem) => { elem.innerHTML = cdata[page].Skill1.split(" Lv.1")[0] + " Lv.1/Lv.10" })
                    waitForElm('#skill1desc').then((elem) => { elem.innerHTML = cdata[page].Skill1.split("10:")[1]; FilterElementText(elem) })
                    waitForElm('#skill2').then((elem) => { elem.innerHTML = cdata[page].Skill2.split(" Lv.1")[0] + " Lv.1/Lv.10" })
                    waitForElm('#skill2desc').then((elem) => { elem.innerHTML = cdata[page].Skill2.split("10:")[1]; FilterElementText(elem) })

                    waitForElm('#skill1icon').then((elem) => { elem.setAttribute("src", cdata[page].Skill1Icon); elem.onload = function () { elem.setAttribute("turnon", "true") }; })
                    waitForElm('#skill2icon').then((elem) => { elem.setAttribute("src", cdata[page].Skill2Icon); elem.onload = function () { elem.setAttribute("turnon", "true") }; })
                    waitForElm('#secreticon').then((elem) => { elem.setAttribute("src", secrettype[cdata[page].SecretType] ?? cdata[page].SecretType); elem.onload = function () { elem.setAttribute("turnon", "true") }; })

                    waitForElm('#secret').then((elem) => { elem.innerHTML = cdata[page].Secret.split(" Lv.")[0] })
                    waitForElm('#secretdesc').then((elem) => { elem.innerHTML = cdata[page].Secret.split("Lv.MAX:")[1]; FilterElementText(elem) })
                    if (cdata[page].SecretSkillTrait)
                    {
                        waitForElm('#upgrade').then((elem) => { elem.innerHTML = "Awaken 5/5"})
                        waitForElm('#upgradedesc').then((elem) => { elem.innerHTML = CleanTraitText(cdata[page].SecretSkillTrait); FilterElementText(elem) })
                    }
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
                    if (cdata[page].DivineProtection == cdata[page].SupportDivineProtection) {
                        waitForElm('#skill2').then((elem) => {
                            elem.parentNode.parentNode.parentNode.remove()
                        })
                    } else {
                        waitForElm('#skill2').then((elem) => {
                            elem.innerHTML = "Supporting Divine Protection";
                        })
                        waitForElm('#skill2desc').then((elem) => {
                            elem.innerHTML = cdata[page].SupportDivineProtection.split("Lv.MAX:")[1]; FilterElementText(elem)
                        })
                    }
                   
                    waitForElm('#skill1icon').then((elem) => { elem.setAttribute("src", "https://cdn.discordapp.com/attachments/633768073068806144/985265386582835320/icSkillBlessLeader.png"); elem.onload = function () { elem.setAttribute("turnon", "true") } })
                    waitForElm('#skill2icon').then((elem) => { elem.setAttribute("src", "") })
                    waitForElm('#secreticon').then((elem) => { elem.setAttribute("src", cdata[page].ProtectionSkillIcon ?? "https://cdn.discordapp.com/attachments/633768073068806144/985265386582835320/icSkillBlessLeader.png"); elem.onload = function () { elem.setAttribute("turnon", "true") } })
                    waitForElm('#secret').then((elem) => { elem.innerHTML = cdata[page].ProtectionSkill.split(" Lv.1")[0] + " Lv.1/Lv.10" })
                    waitForElm('#secretdesc').then((elem) => { elem.innerHTML = cdata[page].ProtectionSkill.split("10:")[1]; FilterElementText(elem) })
                    waitForElm('.secondpart > .statsback').then((elem) => { elem.setAttribute("protector", "true") })
                }
                waitForElm('.statsback2').then((elem) => { elem.remove() })

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
                $("#character-placeholder").attr("style", "")
            });
        }
        else if (index === "characters") {
            $("#character-placeholder").load("/components/charactersbody", function () { ScrollFnc()
                waitForElm('title').then((elem) => { elem.innerHTML = "Characters - SLIMEIM.WIKI" })
                $("head").append(`<link rel="canonical" href="` + "https://slimeim.wiki/characters" + `/"/>`);
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
                            if (Filters.Growth != "All" && ((growth[cdata[key].Growth] ?? cdata[key].Growth) != growth[Filters.Growth]))
                                return;
                            if (Filters.AttackType != "All" && ((atktype[cdata[key].AtkType] ?? cdata[key].AtkType) != atktype[Filters.AttackType]))
                                return;
                            if (Filters.SecretType != "All" && ("Type" + cdata[key].SecretType != Filters.SecretType))
                                return;
                            if (Filters.Stars != "All" && (cdata[key].Rarity != Filters.Stars))
                                return;
                            if (Filters.Other == "Octagram" && cdata[key].Octagram != true)
                                return;
                            if (Filters.Skills.length != 0) {
                                let can = 0
                                Filters.Skills.forEach(function (yek) {
                                    let thing = yek.replaceAll(":", ' ').split(".")
                                    FilterKeywords[thing[0]][thing[1]].forEach(function (yek) {
                                        if ((SkillTextFilter(cdata[key].Skill1) ?? "").replace(/<[^>]+>/g, '').toLowerCase().includes(yek.toLowerCase()) || (SkillTextFilter(cdata[key].Skill2) ?? "").replace(/<[^>]+>/g, '').toLowerCase().includes(yek.toLowerCase()) || (SkillTextFilter(cdata[key].ProtectionSkill) ?? "").replace(/<[^>]+>/g, '').toLowerCase().includes(yek.toLowerCase()) || (SkillTextFilter(cdata[key].DivineProtection) ?? "").replace(/<[^>]+>/g, '').toLowerCase().includes(yek.toLowerCase())) {
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
                                        if ((SkillTextFilter(cdata[key].Trait1) ?? "").replace(/<[^>]+>/g, '').toLowerCase().includes(yek.toLowerCase()) || (SkillTextFilter(cdata[key].Trait1A) ?? "").replace(/<[^>]+>/g, '').toLowerCase().includes(yek.toLowerCase())) {
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
                                waitForElm("#" + key + ' > #name').then((ele) => { ele.innerHTML = Math.floor(cdata[key][Filters.Sort]) })

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

                waitForElm("#other > button").then((ele) => {
                    $("#other > button").click(function () {
                        $("#other > button").attr("toggle", "false")
                        if (Filters.Other == $(this).attr("id")) {
                            Filters.Other = "All"
                        }
                        else {
                            $(this).attr("toggle", "true")
                            Filters.Other = $(this).attr("id")
                        }
                        sessionStorage.setItem("Other", Filters.Other)
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
                            sessionStorage.setItem("SortDir", Filters.SortDir)
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

                $("#character-placeholder").attr("style", "")
            });
        }
        else if (index === "events") {
            $("#character-placeholder").load("/components/eventsbody", function () { ScrollFnc()
                waitForElm('title').then((elem) => { elem.innerHTML = "Events - SLIMEIM.WIKI" })
                $("head").append(`<link rel="canonical" href="` + "https://slimeim.wiki/events" + `/"/>`);
                //ListEvents('#ongoingevents', function (key) {const now = new Date(); if ((now => new Date(EventsData[key].Start)) && (now < new Date(EventsData[key].End))){return true}})
                //ListEvents('#ongoingevents[time="all"]', function (key) {const now = new Date(); if ((now >= new Date(EventsData[key].End))){return true}})
                ListEvents('#ongoingevents', function (key) { if ((EventsData[key].Current == true)) { return true } })
                ListEvents('#ongoingevents[time="all"]', function (key) { if ((EventsData[key].Current != true)) { return true } })
                $("#character-placeholder").attr("style", "")
            });
        }
        else if (index === "daily") {
            $("#character-placeholder").load("/components/dailybody", function () { ScrollFnc()
                waitForElm('title').then((elem) => { elem.innerHTML = "Daily Story - SLIMEIM.WIKI" })
                $("head").append(`<link rel="canonical" href="` + "https://slimeim.wiki/daily" + `/"/>`);
                var content = "";
                function createTable(elem, tableData) {
                    let count = 0
                    tableData.forEach(function (rowData, i) {
                        let content = ""
                        if (rowData.length == 1) {
                            content = content + `<div class = "dailyseparator">` + rowData[0] + `</div>`
                        }
                        else if (count > 0) {
                            content = `<div class="homecategory">
                        <div class="dailytitle">` + rowData[0] + `</div>
                        <div class="homecategory dailyhalf">
                            <h5>Conditions</h5>`
                            rowData.forEach(function (v, i) {
                                if (i > 0 && v != "") {
                                    if (i != rowData.length - 1) {
                                        content = content + `<p>• ` + v + `</p>`
                                    }
                                    else {
                                        content = content + `</div>
                                        <div class="homecategory dailyhalf">
                                            <h5>Reward</h5>` + `<p>• ` + v + `</p>` + `
                                        </div>
                                    </div>`
                                    }
                                }
                            })
                            count = count + 1
                        }
                        else {
                            count = count + 1
                        }
                        $(elem).append(content);

                    });
                }

                waitForElm(".dailycategory").then((elem) => {
                    createTable(elem, DailyCSV);
                })
                $("#character-placeholder").attr("style", "")
            });
        }
        else if (index === "gacha") {
            $("#character-placeholder").load("/components/gachabody", function() { ScrollFnc()
                waitForElm('title').then((elem) => { elem.innerHTML = "Gacha Simulator - SLIMEIM.WIKI" })
                $("head").append(`<link rel="canonical" href="` + "https://slimeim.wiki/gacha" + `/"/>`);
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
                let currentbanner
                Object.keys(EventsData).forEach((key) => {
                    if (EventsData[key].Type == "Recruit" && currentbanner == null && ("Banner" in EventsData[key]) && EventsData[key].Banner.length > 0) {
                        currentbanner = key;
                        return;
                    }
                })
                waitForElm("#BannersList").then(elem => {
                    Object.keys(EventsData).forEach((key) => {
                        if (EventsData[key].Type == "Recruit" && ("Banner" in EventsData[key]) && EventsData[key].Banner.length > 0) {
                            $(elem).append(`<option value="` + key + `">`+ key +`</option>`);
                            // console.log(key);
                        }
                    })
                    elem.addEventListener('change', (e) => {
                        currentbanner = e.target.options[e.target.selectedIndex].value
                        Update()
                    })
                })
                
                let Featured5StarsBattle = [];
                let Featured5StarsProt = [];
                let Standard5StarsBattle = ["Shizue1", "Hinata1", "Leon2", "Alice1", "Velzard1", "Rimuru5", "Benimaru2", "Souei1", "Luminus2", "Rimuru6", "Diablo1", "Milim4", "Veldora2", "Veldora1", "Luminus1", "Rimuru2", "Milim2", "Gobta1", "Guy2", "Rimuru4", "Milim6", "Gazel1", "Shion1", "Shizue2", "Shuna1", "Souei2", "Treyni1", "Hakurou1", "Benimaru1", "Beretta1", "Ranga1", "Milim5", "Rimuru1"];
                let Standard5StarsProt = ["Soka1", "Chloe2", "Hakurou3", "Shion6", "Shuna6", "Rimuru10", "Ifrit1", "Veldora4", "Elemental1", "Orc1", "Charybdis1", "Milim8", "Ramiris2"];
                let Standard4Stars = ["Suphia1", "Grucius1", "Gabiru1", "Chloe1", "Kurobe1", "Geld1", "Gelmud1", "Gobta2", "Shion5", "Souei3", "Trya1", "Hakurou2", "Phobio1", "Benimaru4", "Milim7", "Yuuki1", "Ranga3", "Rimuru8", "Shuna3", "Rimuru7", "Shuna4", "Shion3", "Benimaru3", "Souei4", "Veldora5", "Kaijin1", "Gard1", "Salamander1", "Sky1", "Fuze1", "Vesta1", "Light1"];
                let Standard3Stars = ["Gale1", "Alice2", "Kurobe2", "Kenya1", "Rigurd1", "Ryota1", "Psychic1", "Garm1", "Gobuichi1", "Dord1", "Haruna1", "Butterflies1", "Myrd1"];
                let prots = 0
                let battle = 0

                function Update()
                {
                    Featured5StarsProt = []
                    Featured5StarsBattle = []
                    EventsData[currentbanner].Banner.forEach(function (key) {
                        if (cdata[key].UnitType == "Protection Characters") {
                            prots += 1
                            // if (prots == 1 && !Standard5StarsProt.includes(key))
                            //     Featured5StarsProt.push(key)
                            // else if (!Standard5StarsProt.includes(key))
                            //     Standard5StarsProt = [key].concat(Standard5StarsProt)
                            if (!(Standard5StarsProt.includes(key) || Standard3Stars.includes(key) || Standard4Stars.includes(key)))
                                    Featured5StarsProt.push(key)
                        }
                        else if (cdata[key].UnitType != "Protection Characters") {
                            battle += 1
                            // if (battle == 1 && !Standard5StarsBattle.includes(key))
                            //     Featured5StarsBattle.push(key)
                            // else if (!Standard5StarsBattle.includes(key))
                            //     Standard5StarsBattle = [key].concat(Standard5StarsBattle)
                            if (!(Standard5StarsBattle.includes(key) || Standard3Stars.includes(key) || Standard4Stars.includes(key)))
                                    Featured5StarsBattle.push(key)
                        }
                    })
                    let Units = [Featured5StarsBattle.concat(Featured5StarsProt), Standard5StarsBattle.concat(Standard5StarsProt), Standard4Stars, Standard3Stars]
        
                    waitForElm('#bannerunitlist').then((ele) => {
                        let i = 0
                        document.querySelectorAll("#bannerunitlist").forEach(function (element) {
                            element.innerHTML = ""
                            const fragment = new DocumentFragment()
                            Units[i].forEach(function (unit) {
                                MakeCharacterIcon(elem, unit, fragment)
                            })
                            i = i + 1
                            element.appendChild(fragment)
                        })
                    })
                }
                
                Update()

                function getRandomIntInclusive(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
                }
    
                function GetRandomCharacter(number) {
                    let Rarity = getRandomIntInclusive(0, 10000)/100
                    let FinalChoices = []
                    let Rates = 4
                    if (Rarity <= Rates) {
                        if (Rarity <= 0.7) 
                            FinalChoices = Featured5StarsProt.concat(Featured5StarsBattle)
                        else if (Rarity <= 0.25 * Rates)
                            FinalChoices = Standard5StarsProt
                        else
                            FinalChoices = Standard5StarsBattle
                    }
                    else if (Rarity - Rates <= 15 || number == 9) {
                        Standard4Stars.forEach(function (pick) {
                            if (getRandomIntInclusive(0, 100) <= 33) {
                                if (cdata[pick].UnitType == "Protection Characters")
                                    FinalChoices.push(pick)
                            }
                            else if (cdata[pick].UnitType != "Protection Characters")
                                FinalChoices.push(pick)
                        })
                    }
                    else {
                        Standard3Stars.forEach(function (pick) {
                            if (getRandomIntInclusive(0, 100) <= 33) {
                                if (cdata[pick].UnitType == "Protection Characters")
                                    FinalChoices.push(pick)
                            }
                            else if (cdata[pick].UnitType != "Protection Characters")
                                FinalChoices.push(pick)
                        })
                    }
                    return FinalChoices[Math.floor(Math.random() * FinalChoices.length)]
                }
                let debounce = false
                function round(value, precision) {
                    var multiplier = Math.pow(10, precision || 0);
                    return Math.round(value * multiplier) / multiplier;
                }
                function UpdateStats() {
                    waitForElm("#limitedpulled").then((ele) => {
                        $("#pulls").text(Filters.Everything)
                        $("#limitedpulled").text(Filters.LimitedFiveStars)
                        $("#standardpulled").text(Filters.StandardFiveStars)
                        $("#percentage").text((round(((Filters.LimitedFiveStars + Filters.StandardFiveStars) / Filters.Everything) * 100, 1) || 0) + "%")
                        $("#magicrystals").text(Filters.Everything * 30)
                        $("#usd").text(round((Filters.Everything * 30) * (39.99 / 475), 2) + "$")
                    })
    
                }
                async function Pull(amount, elem) {
                    $("#rollresults").attr("toggle", "true")
                    if (debounce == false) {
                        if ($("#rollresults").attr("flow") != "true")
                            await new Promise(r => setTimeout(r, 50));
                        $("#rollresults").attr("flow", "true")
                        debounce = true
                        elem.replaceChildren();
                        for (let i = 0; i < amount; i++) {
                            Filters.Everything = Filters.Everything + 1
                            const fragment = new DocumentFragment()
                            let rand = GetRandomCharacter(i)
                            if (Featured5StarsProt.includes(rand) || Featured5StarsBattle.includes(rand)) {
                                Filters.LimitedFiveStars = Filters.LimitedFiveStars + 1
                            }
                            else if (cdata[rand].Rarity == 5) {
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
                        $(ele).click(async function () {
                            Pull(10, elem)
                        })
                    })
                })
                waitForElm('#x1').then((ele) => {
                    waitForElm('.actualrollresults').then((elem) => {
                        $(ele).click(async function () {
                            Pull(1, elem)
                        })
                    })
                })
                UpdateStats()
                $("#character-placeholder").attr("style", "")
            });
        }
        else if (index === "tierlist") {
            $("#character-placeholder").load("/components/tierlistbody", function () { ScrollFnc()
                waitForElm('title').then((elem) => { elem.innerHTML = "Tier List - SLIMEIM.WIKI" })
                $("head").append(`<link rel="canonical" href="` + "https://slimeim.wiki" + `/"/>`);
                waitForElm('.homebase').then((elem) => {
                    TierList.forEach((key, i) => {
                        console.log(key)
                        const frag = document.createElement("div")
                        frag.setAttribute("class", "charactersbase tier")
                        frag.innerHTML = '<div class = "tiername" style="background-color: '+ key.Color +'">' + key.Title + '</div>'
                        key.Units.forEach((key) => { MakeCharacterIcon(frag, key); waitForElm("#" + key + ' > #name').then((ele) => { ele.innerHTML = cdata[key].Name.split(" ")[0] }) })
                        if (key.Protection)
                        {
                            const split = document.createElement("div")
                            split.setAttribute("class", "tiersplit")
                            split.setAttribute("style", 'background-color: '+ key.Color)
                            // split.innerHTML = "Protection"
                            frag.appendChild(split)
                            
                            key.Protection.forEach((key) => { MakeCharacterIcon(frag, key); waitForElm("#" + key + ' > #name').then((ele) => { ele.innerHTML = cdata[key].Name.split(" ")[0] }) })
                        }
                        elem.appendChild(frag)
                    })
                })
                $("#character-placeholder").attr("style", "")
            })
        } 
        else
        {
            $("#character-placeholder").load("/components/homebody", function () { ScrollFnc()
                waitForElm('title').then((elem) => { elem.innerHTML = "Home - SLIMEIM.WIKI" })
                $("head").append(`<link rel="canonical" href="` + "https://slimeim.wiki" + `/"/>`);
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
                    if (amount == 0) {
                        $("#latestcharacters").hide()
                        $("#latestcharacters").prev().hide()
    
                    }
                })
                //ListEvents('#ongoingevents', function (key) {const now = new Date(); if ((now => new Date(EventsData[key].Start)) && (now < new Date(EventsData[key].End))){return true}})
                ListEvents('#endingevents', function (key) { if ((EventsData[key].Current == true && EventsData[key].New != true && (EventsData[key].End != EventsData[key].Start) && EndingSoon(key))) { return true } }, true)
    
                ListEvents('#ongoingevents', function (key) { if ((EventsData[key].Current == true && EventsData[key].New != true && (EventsData[key].End != EventsData[key].Start) && !EndingSoon(key) && !(key.includes("Pack")))) { return true } })
    
                ListEvents('#announcements', function (key) { if ((EventsData[key].Current == true && EventsData[key].New != true && (EventsData[key].End == EventsData[key].Start) && !EndingSoon(key) && !(key.includes("Pack")))) { return true } })
    
                ListEvents('#packs', function (key) { if ((EventsData[key].Current == true && !EndingSoon(key) && EventsData[key].New != true && (key.includes("Pack")))) { return true } })
                ListEvents('#newevents', function (key) { if ((EventsData[key].Current == true && EventsData[key].New == true)) { return true } })
                let currentdate = new Date()
                waitForElm('.serverselect > .unittypebutton').then(() => {
                    $(".serverselect > .unittypebutton").attr("toggle", "false")
                    $(".serverselect > #" + Filters.Server).attr("toggle", "true")
                })
                let updatedate
                let resetdate
                let hourdata = {
                    "NA": {
                        resethour: 11,
                        updatehour: 2,
                    },
                    "EU": {
                        resethour: 4,
                        updatehour: 2,
                    },
                    "Asia": {
                        resethour: 19,
                        updatehour: 2,
                    },
                }
                let resethour = hourdata[Filters.Server].resethour
                let updatehour = hourdata[Filters.Server].updatehour
                function UpdateEndDate() {
                    updatedate = new Date()
                    resetdate = new Date()
                    if (resetdate.getUTCHours() >= resethour) {
                        resetdate.setUTCDate(resetdate.getUTCDate() + 1)
                    }
                    if (updatedate.getUTCHours() >= updatehour) {
                        updatedate.setUTCDate(updatedate.getUTCDate() + 1)
                    }
                    resetdate.setUTCHours(resethour, 0, 0, 0)
                    updatedate.setUTCHours(updatehour, 0, 0, 0)
                }
    
                UpdateEndDate()
    
    
                waitForElm(".serverselect > .unittypebutton").then((ele) => {
                    $(".serverselect > .unittypebutton").click(function () {
                        $(".serverselect > .unittypebutton").attr("toggle", "false")
                        $(this).attr("toggle", "true")
                        Filters.Server = $(this).attr("id")
                        localStorage.setItem("Server", Filters.Server)
                        resethour = hourdata[Filters.Server].resethour
                        updatehour = hourdata[Filters.Server].updatehour
                        UpdateEndDate()
                        UpdateTimers()
                    });
                })
    
                let x
    
                function UpdateTimers() {
                    let currentdate = new Date()
                    let distance = resetdate.getTime() - currentdate.getTime();
                    let distance2 = updatedate.getTime() - currentdate.getTime();
    
                    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
                    let days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
                    let hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    let minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
                    let seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    
    
                    if (!document.getElementById("reset")) {
                        clearInterval(x);
                        return;
                    }
                    if (distance <= 0) {
                        resetdate.setUTCDate(resetdate.getUTCDate() + 1)
                        resetdate.setUTCHours(resethour, 0, 0, 0)
                    }
                    if (distance2 <= 0) {
                        updatedate.setUTCDate(updatedate.getUTCDate() + 1)
                        updatedate.setUTCHours(updatehour, 0, 0, 0)
                    }
    
                    document.getElementById("reset").innerHTML = hours.toString().padStart(2, '0') + ":"
                        + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0')
                    document.getElementById("update").innerHTML = hours2.toString().padStart(2, '0') + ":"
                        + minutes2.toString().padStart(2, '0') + ":" + seconds2.toString().padStart(2, '0')
                    $("#reset.date").text(resetdate.toDateString() + " " + resetdate.toTimeString().split(" ")[0])
                    $("#update.date").text(updatedate.toDateString() + " " + updatedate.toTimeString().split(" ")[0])
                }
    
                waitForElm('#reset').then((elem) => {
                    UpdateTimers()
                    x = setInterval(function () {
                        UpdateTimers()
                    }, 1000);
                })
                $("#character-placeholder").attr("style", "")
            });
        }
    })
}

UpdatePage(trimSlashes())

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

/*$.get( "/eventsbody", function( data ) {
    $.get( "/dailybody", function( data ) {
        $.get( "/gachabody", function( data ) {
            $.get( "/homebody", function( data ) {
                $.get( "/charactersbody", function( data ) {
                    $.get( "/character", function( data ) {
                        console.log("preloaded")
                    });
                });
            });
        });
    });
});*/


