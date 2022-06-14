
let linksplit = window.location.href.split("/");
if (linksplit[linksplit.length - 1].length == 0) {
    linksplit.pop()
}
let page = linksplit[linksplit.length - 1].split("?")[1];
let created = 1





$(function () {
    $("#nav-placeholder").load("/nav");
})

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
    Sort: sessionStorage.getItem("Sort") ?? "Name",
    SortDir: sessionStorage.getItem("SortDir") ?? 1,
    Stars: sessionStorage.getItem("Stars") ?? "All",
}


const UnitTypeButtonTL = {
    all: "All",
    battleunit: "Battle Characters",
    protectionunit: "Protection Characters",

}



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



const cdata = {
    Ramiris1: {
        Name: "Ramiris [The Creator]",
        Art: "https://cdn.discordapp.com/attachments/633768073068806144/985211440564686856/RamirisDemonLordCostume_6_CharaInfo.png",
        Icon: "https://i.imgur.com/pRFG8vH.png",
        Type: "https://i.imgur.com/pQYVkI3.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Tome",
        Rarity: 5,
        MinHp: 8139,
        MaxHp: 8139,
        MinAtk: 3188,
        MaxAtk: 3188,
        MinDef: 3628,
        MaxDef: 3628,
        MaxOutput: 150,
        Town1: "Laboratory +30%",
        Town2: "Digsite for Stamina Magistones +10%",
        Secret: `Air Suppression Lv.MAX:
All-target wind magic attack for 270%.`,
        SecretType: "All",
        Skill1: `Charge Forth Lv.1/Lv.10:
Heals all allies' by 55%/60% of their max HP.
Lv.1/Lv.10 Cost: 65/55`,
        Skill1Icon: "",
        Skill2: `Linked Operations Lv.1/Lv10:
Increases all allies' wind ATK by 5%/15% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Troop - Skill UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases skill points by 4 at the start of the battle (available in support formation).`,
        Trait1A: `Troop - Skill UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases skill points by 6 at the start of the battle (available in support formation).`,
        Trait1Icon: "https://i.imgur.com/FWJ586B.png",
        Trait1AIcon: "https://i.imgur.com/OLfX2cS.png",
        Stats: [2, 0, 0, 2, 0, 0, 2, 0, 0, 4, 0, 0]
    },
    Milim1: {
        Name: "Milim Nava [The Proud Dragon Demon Lord]",
        Art: "https://i.imgur.com/IzTdsrB.png",
        Icon: "https://i.imgur.com/H3KP5zP.png",
        Type: "https://i.imgur.com/z8bnSYg.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Sword",
        Rarity: 5,
        MinHp: 7912,
        MaxHp: 7912,
        MinAtk: 3502,
        MaxAtk: 3502,
        MinDef: 3106,
        MaxDef: 3106,
        MaxOutput: 150,
        Town1: "Training Ground +30%",
        Town2: "Restaurant +10%",
        Secret: `Drago-Slash Lv.MAX:
Single-target space physical attack for 470%.`,
        SecretType: "Single",
        Skill1: `Dragon Princess's Aura Lv.1/Lv.10:
Increases own pierce rate by 80% (Turns: 1). Increases own pierce power by 15% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Beyond Compare Lv.1/Lv.10:
Increases all allies' critical rate by 30% (Turns: 1). Decreases a single target's guard power by 25% (Turns: 1).
Lv.1/Lv.10 Cost: 65/55`,
        Skill2Icon: "",
        Trait1: `Troop - Secret Skill UP 3 (5* Awaken x1):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 5% at start of battle (Turns: 3) (available in support formation).`,
        Trait1A: `Troop - Secret Skill UP 3 (5* Awaken x3):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 8% at start of battle (Turns: 3) (available in support formation).`,
        Stats: [4, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0],
        Trait1Icon: "https://i.imgur.com/lunHEj7.png",
        Trait1AIcon: "https://i.imgur.com/zQCB0Gf.png",
    },
    Leon1: {
        Name: "Leon Cromwell [The Flashing Blade]",
        Art: "https://i.imgur.com/F0cov2N.png",
        Icon: "https://i.imgur.com/IpNmTsm.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Sword",
        Rarity: 5,
        MinHp: 7922,
        MaxHp: 7922,
        MinAtk: 3534,
        MaxAtk: 3534,
        MinDef: 3058,
        MaxDef: 3058,
        MaxOutput: 150,
        Town1: "Laboratory +30%",
        Town2: "Digsite for Defense Magistones +10%",
        Secret: `Glitter Sword Lv.MAX:
Single-target light physical attack for 450%.`,
        SecretType: "Single",
        Skill1: `Platinum Polish Lv.1/Lv.10:
Changes all of his own souls to Soul of Secrets. Increases all Soul of Secrets gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Platinum Pandemonium Lv.1/Lv.10:
Increases own Soul of Combos damage by 40%/50% (Turns: 1). Increase own CRIT rate by 10% (Turns: 1)
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Soul Combo - ATK UP (5* Awaken x1):
When you unleash a 6 combo attack with Soul of Secrets, increases own ATK by 5% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - ATK UP (5* Awaken x3):
When you unleash a 6 combo attack with Soul of Secrets, increases own ATK by 8% for the next turn (available in support formation).`,
        Stats: [2, 0, 0, 8, 0, 0, 2, 0, 0, 2, 0, 0],
        Trait1Icon: "https://i.imgur.com/bTdTVRY.png",
        Trait1AIcon: "https://i.imgur.com/Ob5ce8I.png",
    },
    Guy1: {
        Name: "Guy Crimson [The Beginning]",
        Art: "https://i.imgur.com/PZJAbbJ.png",
        Icon: "https://i.imgur.com/G7mb7zO.png",
        Type: "https://i.imgur.com/QndVudD.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Tome",
        Rarity: 5,
        MinHp: 7902,
        MaxHp: 7902,
        MinAtk: 3539,
        MaxAtk: 3539,
        MinDef: 3046,
        MaxDef: 3046,
        MaxOutput: 150,
        Town1: "Digsite for Attack Magistones +30%",
        Town2: "Restaurant +10%",
        Secret: `Hellish Catastrophe Lv.MAX:
All-target fire magic attack for 270%.`,
        SecretType: "All",
        Skill1: `Crimson Calamity Lv.1/Lv.10:
Changes Soul of Skills x3 into Soul of Secrets. Increases all Soul of Secrets gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 40/30`,
        Skill1Icon: "",
        Skill2: `Rogue Reward Lv.1/Lv.10:
Chance to stun a single target: 80%/100% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill2Icon: "",
        Trait1: `Troop - Secret Skill UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 12% at the start of battle (available in support formation).`,
        Trait1A: `Troop - Secret Skill UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 18% at the start of battle (available in support formation).`,
        Stats: [8, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0],
        Trait1Icon: "https://i.imgur.com/lunHEj7.png",
        Trait1AIcon: "https://i.imgur.com/zQCB0Gf.png",
    },
    Treyni1: {
        Name: "Treyni [Budding of Deep Green]",
        Art: "https://i.imgur.com/ba6YwIn.png",
        Icon: "https://i.imgur.com/aEKewa3.png",
        Type: "https://i.imgur.com/AHPti72.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Tome",
        Rarity: 5,
        MinHp: 7095,
        MaxHp: 7095,
        MinAtk: 2695,
        MaxAtk: 2695,
        MinDef: 3646,
        MaxDef: 3646,
        MaxOutput: 150,
        Town1: "Field +30%",
        Town2: "Digsite for Stamina Magistones +10%",
        Secret: `Aerial Blade Lv.MAX:
Single-target earth magic attack for 450%.`,
        SecretType: "Single",
        Skill1: `Sweet Spirit Lv.1/Lv.10:
Heals all allies' by 25%/30% of their max HP.
Lv.1/Lv.10 Cost: 40/30`,
        Skill1Icon: "",
        Skill2: `Hard Mist Lv.1/Lv.10:
Decreases all targets' pierce power by 10%/20% (Turns: 3).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Effect - DEF UP (5* Awaken x1):
When affected by Pierce Resistance UP, increases own DEF by 7% at the start of turn (available in support formation).`,
        Trait1A: `Effect - DEF UP (5* Awaken x3):
When affected by Pierce Resistance UP, increases own DEF by 11% at the start of turn (available in support formation).`,
        Trait1Icon: "https://i.imgur.com/w8Ohyz2.png",
        Trait1AIcon: "https://i.imgur.com/YibqE0O.png",
        Stats: [0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0]
    },
    Shizue1: {
        Name: "Shizue Izawa [Date Night Beauty]",
        Art: "https://i.imgur.com/eoZBCxf.png",
        Icon: "https://i.imgur.com/6uzC3lT.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Sword",
        Rarity: 5,
        MinHp: 7097,
        MaxHp: 7097,
        MinAtk: 2693,
        MaxAtk: 2693,
        MinDef: 3644,
        MaxDef: 3644,
        MaxOutput: 150,
        Town1: "Cafe +30%",
        Town2: "Clothing Store +10%",
        Secret: `Special Cooking Lv.MAX:
All-target light magic attack for 270%.`,
        SecretType: "All",
        Skill1: `Sunbeam Lv.1/Lv.10:
Heals the ally with the lowest percentage of HP by 40%/45% of their max HP.
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Elegant Light Lv.1/Lv.10:
Decreases a single target's ATK by 15%/20% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Soul Combo - DEF UP (5* Awaken x1):
When you unleash a 6 combo attack with Soul of Secrets, increase all targets' DEF by 12% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - DEF UP (5* Awaken x3):
When you unleash a 6 combo attack with Soul of Secrets, increase all targets' DEF by 18% for the next turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 4, 4, 0, 2, 0, 0],
        Trait1Icon: "https://i.imgur.com/q71UjgC.png",
        Trait1AIcon: "https://i.imgur.com/7CV9bqO.png",
    },
    Rimuru1: {
        Name: "Rimuru Tempest [Harmonizer of Monsters and Humans]",
        Art: "https://i.imgur.com/Ic7VjMx.png",
        Icon: "https://i.imgur.com/T7wNg1P.png",
        Type: "https://i.imgur.com/NchScWh.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Tome",
        Rarity: 5,
        MinHp: 7091,
        MaxHp: 7091,
        MinAtk: 2696,
        MaxAtk: 2696,
        MinDef: 3643,
        MaxDef: 3643,
        MaxOutput: 150,
        Town1: "Ocean Supply Corps Base +30%",
        Town2: "Laboratory +10%",
        Secret: `Black Lightning Lv.MAX:
All-target water magic attack for 270%.`,
        SecretType: "All",
        Skill1: `Hydro Combat Lv.1/Lv.10:
Decreases a single target's Secret Skill Gauge by 5%/15%.
Lv.1/Lv.10 Cost: 50/40`,
        Skill1Icon: "",
        Skill2: `Heal Assist Lv.1/Lv.10:
Heal all allies' HP by 15%/20% of their max HP. Increases Soul of Divine Protection damage until the end of the battle by 5% (Max: 100%).
Lv.1/Lv.10 Cost: 40/30`,
        Skill2Icon: "",
        Trait1: `Effect - DEF UP 2 (5* Awaken x1):
When affected by Critical Resistance UP, increases own DEF by 7% at start of the turn (available in support formation).`,
        Trait1A: `Effect - DEF UP 2 (5* Awaken x3):
When affected by Critical Resistance UP, increases own DEF by 11% at start of the turn (available in support formation).`,
        Stats: [2, 0, 0, 8, 0, 0, 2, 0, 0, 2, 0, 0], Trait1Icon: "https://i.imgur.com/w8Ohyz2.png",
        Trait1AIcon: "https://i.imgur.com/YibqE0O.png",
    },
    Rimuru2: {
        Name: "Rimuru Tempest [The Master of Maids]",
        Art: "https://i.imgur.com/2CL7XZB.png",
        Icon: "https://i.imgur.com/9IVS9cd.png",
        Type: "https://i.imgur.com/pQYVkI3.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Katana",
        Rarity: 5,
        MinHp: 7092,
        MaxHp: 7092,
        MinAtk: 2706,
        MaxAtk: 2706,
        MinDef: 3593,
        MaxDef: 3593,
        MaxOutput: 150,
        Town1: "Digsite for Defense Magistones +30%",
        Town2: "Laboratory +10%",
        Secret: `Present Explosion Lv.MAX:
Single-target wind physical attack for 450%.`,
        SecretType: "Single",
        Skill1: `Gift of Magic Lv.1/Lv.10:
Increases all allies' DEF by 20%/25% (Turns: 3). Increases all allies' max HP by 30% (Turns: 3).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Happiness Illuminate Lv.1/Lv.10:
Increases all allies' guard power by 15%/25% (Turns: 1). Increases Soul of Skills damage until the end of battle by 5%.
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Effect - Critical Rate UP 2 (5* Awaken x1):
When affected by Guard Rate UP, increases own critical rate by 7% at start of turn (available in support formation).`,
        Trait1A: `Effect - Critical Rate UP 2 (5* Awaken x3):
When affected by Guard Rate UP, increases own critical rate by 11% at start of turn (available in support formation).`,
        Stats: [8, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0],
        Trait1Icon: "https://i.imgur.com/bTdTVRY.png",
        Trait1AIcon: "https://i.imgur.com/Ob5ce8I.png",
    },
    Hinata1: {
        Name: "Hinata Sakaguchi [Captain of the Holy Knights]",
        Art: "https://i.imgur.com/sCuXrzF.png",
        Icon: "https://i.imgur.com/kQWYdp5.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Sword",
        Rarity: 5,
        MinHp: 7105,
        MaxHp: 7105,
        MinAtk: 2985,
        MaxAtk: 2985,
        MinDef: 3076,
        MaxDef: 3076,
        MaxOutput: 150,
        Town1: "Digsite for Defense Magistones +30%",
        Town2: "Forest Supply Corps Base +10%",
        Secret: `Disintegration Lv.MAX:
Single-target light magic attack for 450%.`,
        SecretType: "Single",
        Skill1: `Ruthless Flash Lv.1/Lv.10:
Increase all allies' DEF by 35%/40% (Turns: 1). Increases own all attribute resistance by 20% (Turns: 3).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Usurper Lv.1/Lv10:
Changes Soul of Skills and Soul of Divine Protection x1 each into Soul of Secrets. Increases Soul of Secrets secret skill gauge increase until the end of battle by 3%/5% (Max: 100%).
Lv.1/Lv.10 Cost: 40/30`,
        Skill2Icon: "",
        Trait1: `Troop - Secret Skill UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 12% at the start of battle (available in support formation).`,
        Trait1A: `Troop - Secret Skill UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 18% at the start of battle (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 2, 0, 0, 4, 0, 0]
    },
    Shizue2: {
        Name: "Shizue [Conqueror of Flames]",
        Art: "https://i.imgur.com/zJGik7Y.png",
        Icon: "https://i.imgur.com/fy0Dlhy.png",
        Type: "https://i.imgur.com/QndVudD.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Sword",
        Rarity: 5,
        MinHp: 7133,
        MaxHp: 7133,
        MinAtk: 2975,
        MaxAtk: 2975,
        MinDef: 3067,
        MaxDef: 3067,
        MaxOutput: 150,
        Town1: "Forest Supply Corps Base +30%",
        Town2: "Cafe +10%",
        Secret: `Heat Slasher Lv.MAX:
Single-target fire physical attack for 450%.`,
        SecretType: "Single",
        Skill1: `Degenerate Lv.1/Lv.10:
Changes Soul of Divine Protection x2 into Soul of Secrets. Increases all Soul of Secrets gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Homura Lv.1/Lv.10:
Increases all allies' stun evasion rate by 90%/100% (Turns: 1). Increases own critical rate by 15% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill2Icon: "",
        Trait1: `Soul Combo - Critical Damage UP (5* Awaken x1):
When you unleash a 5+ combo attack with Soul of Secrets, increases own critical damage by 6% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - Critical Damage UP (5* Awaken x3):
When you unleash a 5+ combo attack with Soul of Secrets, increases own critical damage by 9% for the next turn (available in support formation).`,
        Stats: [4, 0, 0, 4, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Souei1: {
        Name: "Souei [Successful Shinobi]",
        Art: "https://i.imgur.com/ut7Nl2V.png",
        Icon: "https://i.imgur.com/79TCLB0.png",
        Type: "https://i.imgur.com/AHPti72.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Katana",
        Rarity: 5,
        MinHp: 7110,
        MaxHp: 7110,
        MinAtk: 3014,
        MaxAtk: 3014,
        MinDef: 3014,
        MaxDef: 3014,
        MaxOutput: 150,
        Town1: "Forest Supply Corps Base +30%",
        Town2: "Training Ground +10%",
        Secret: `Sudden Assailant Lv.MAX:
Single-target eart physical attack for 450%.`,
        SecretType: "Single",
        Skill1: `Earth Turnover Lv.1/Lv.10:
Increases own critical rate by 80/100% (Turns: 1). Decreases a single targets' critical resistance by 10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Hailstone Lv.1/Lv.10:
Transfers own soul orb x2 to another vanguard character. Increases all souls' secrets skill gauge increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Soul Combo - ATK UP (5* Awaken x1):
When you unleash a 6 combo attack with Soul of Secrets, increases own ATK by 5% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - ATK UP (5* Awaken x3):
When you unleash a 6 combo attack with Soul of Secrets, increases own ATK by 8% for the next turn (available in support formation).`,
        Stats: [2, 8, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Rimuru3: {
        Name: "Rimuru Tempest [Chancellor of Tempest]",
        Art: "https://i.imgur.com/KxE4rQr.png",
        Icon: "https://i.imgur.com/zLGHp7G.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Hammer",
        Rarity: 5,
        MinHp: 7119,
        MaxHp: 7119,
        MinAtk: 3036,
        MaxAtk: 3036,
        MinDef: 2998,
        MaxDef: 2998,
        MaxOutput: 150,
        Town1: "Clothing Store +30%",
        Town2: "Inn +10%",
        Secret: `Ring of Fortune Lv.MAX:
Single-target light physical attack for 450%.`,
        SecretType: "Single",
        Skill1: `Blissful Vow Lv.1/Lv.10:
Decreases a single target's pierce resistance by 20%/30% (Turns: 2). Increases Soul of Skills' secret skill gauge increase by 50% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Shining Light Lv.1/Lv.10:
Changes Soul of Secrets x1 into Soul of Skills. Increases Soul of Skills damage by 5%/15% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Troop - Protection UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases the protection gauge by 3 once per turn from the start of battle to Turn 3 (available in support formation).`,
        Trait1A: `Troop - Protection UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases the protection gauge by 5 once per turn from the start of battle to Turn 3 (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 4, 4, 0, 2, 0, 0]
    },
    Rimuru4: {
        Name: "Rimuru Tempest [Chancellor of Tempest]",
        Art: "https://i.imgur.com/mArH5St.png",
        Icon: "https://i.imgur.com/gXtUDyK.png",
        Type: "https://i.imgur.com/z8bnSYg.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Sword",
        Rarity: 5,
        MinHp: 7142,
        MaxHp: 7142,
        MinAtk: 3007,
        MaxAtk: 3007,
        MinDef: 3005,
        MaxDef: 3005,
        MaxOutput: 150,
        Town1: "Tavern +30%",
        Town2: "Digsite for Training Magistones +10%",
        Secret: `Fury of the Gods Lv.MAX:
All-target space physical attack for 270%.`,
        SecretType: "All",
        Skill1: `All of Creation Lv.1/Lv.10:
Increases all allies' ATK by 35%/40% (Turns: 1).
Lv.1/Lv.10 Cost: 65/55`,
        Skill1Icon: "",
        Skill2: `Magic Sense Lv.1/Lv.10:
Increases all allies' DEF by 20%/25% (Turns: 2).
Lv.1/Lv.10 Cost: 35/25`,
        Skill2Icon: "",
        Trait1: `Troop - Protection UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases protection gauge by 4 every 3 turns (available in support formation).`,
        Trait1A: `Troop - Protection UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases protection gauge by 6 every 3 turns (available in support formation).`,
        Stats: [4, 0, 0, 4, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Shuna1: {
        Name: "Shuna [Holy Princess]",
        Art: "https://i.imgur.com/Dva7vqv.png",
        Icon: "https://i.imgur.com/fJWzoXo.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Tome",
        Rarity: 5,
        MinHp: 7134,
        MaxHp: 7134,
        MinAtk: 3004,
        MaxAtk: 3004,
        MinDef: 3004,
        MaxDef: 3004,
        MaxOutput: 150,
        Town1: "Restaurant +30%",
        Town2: "Cafe +10%",
        Secret: `Celestial Scintillation Lv.MAX:
Single-target light magic attack for 450%.`,
        SecretType: "Single",
        Skill1: `Divination Lv.1/Lv.10:
Changes Soul of Secrets x2 into Soul of Divine Protection. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Analyze Weakness Lv.1/Lv.10:
Increases all allies' stun evasion rate by 90%/100% (Turns: 1). Increases own critical rate by 10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill2Icon: "",
        Trait1: `Soul Combo - Critical Rate UP (5* Awaken x1):
When you unleash a 6 combo attack with Soul of Divine Protection, increases own critical rate by 12% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - Critical Rate UP (5* Awaken x3):
When you unleash a 6 combo attack with Soul of Divine Protection, increases own critical rate by 18% for the next turn (available in support formation).`,
        Stats: [4, 0, 0, 4, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Souei2: {
        Name: "Souei [Spy in Shadows]",
        Art: "https://i.imgur.com/9eMSYk3.png",
        Icon: "https://i.imgur.com/otWcbmZ.png",
        Type: "https://i.imgur.com/NchScWh.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Katana",
        Rarity: 5,
        MinHp: 7136,
        MaxHp: 7136,
        MinAtk: 3003,
        MaxAtk: 3003,
        MinDef: 3003,
        MaxDef: 3003,
        MaxOutput: 150,
        Town1: "Ocean Supply Corps Base +30%",
        Town2: "Mountain Supply Corps Base +10%",
        Secret: `Reeling Slicer Lv.MAX:
Single-target water physical attack for 450%.`,
        SecretType: "Single",
        Skill1: `Increased Momentum Lv.1/Lv.10:
Increases all allies' DEF by 20%/25% (Turns: 1). Increases Soul of Divine Protection damage until the end of battle by 5% (Max: 100%).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Hidden Hand Lv.1/Lv.10:
Changes Soul of Secrets x2 into Soul of Skills. Increases all Soul of Skills gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 40/30`,
        Skill2Icon: "",
        Trait1: `Troop - Skill UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases skill points by 4 at the start of the battle (available in support formation).`,
        Trait1A: `Troop - Skill UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases skill points by 6 at the start of the battle (available in support formation).`,
        Stats: [4, 0, 0, 4, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Luminus1: {
        Name: "Luminus Valentine [Queen of Yule] ",
        Art: "https://i.imgur.com/aIY7d7e.png",
        Icon: "https://i.imgur.com/D6ctP3v.png",
        Type: "https://i.imgur.com/pQYVkI3.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Lance",
        Rarity: 5,
        MinHp: 7140,
        MaxHp: 7140,
        MinAtk: 3001,
        MaxAtk: 3001,
        MinDef: 3001,
        MaxDef: 3001,
        MaxOutput: 150,
        Town1: "Cafe +30%",
        Town2: "Digsite for Stamina Magistones +10%",
        Secret: `Luminus Storm Lv.MAX:
Single-target wind physical attack for 450%.`,
        SecretType: "Single",
        Skill1: `Nightmare Strike Lv.1/Lv.10:
Heals all allies' by 20%/25% of their max HP. Increases Soul of Skills damage until the end of battle by 5% (Max: 100%).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Dark Allure Lv.1/Lv.10:
Changes Soul of Divine Protection and Soul of Secrets x1 each into Soul of Skills. Increases all Soul of Skills gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 40/30`,
        Skill2Icon: "",
        Trait1: `Troop - Skill UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases skill points by 4 at the start of the battle (available in support formation).`,
        Trait1A: `Troop - Skill UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases skill points by 6 at the start of the battle (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 4, 4, 0, 2, 0, 0]
    },
    Diablo1: {
        Name: "Diablo [The Black Progenitor]",
        Art: "https://i.imgur.com/hLmw6xy.png",
        Icon: "https://i.imgur.com/W6wyAfd.png",
        Type: "https://i.imgur.com/pzX6NRL.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Fist",
        Rarity: 5,
        MinHp: 7132,
        MaxHp: 7132,
        MinAtk: 3002,
        MaxAtk: 3002,
        MinDef: 3002,
        MaxDef: 3002,
        MaxOutput: 150,
        Town1: "Digsite for Training Magistones +30%",
        Town2: "Protection Magistone Digsite +10%",
        Secret: `Final Waltz Lv.MAX:
Single-target dark physical attack for 450%.`,
        SecretType: "Single",
        Skill1: `Devotion Lv.1/Lv.10:
Increases own ATK by 20%/25% (Turns: 1). Decreases all targets' dark resistance by 10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Soul Manipulation Lv.1/Lv.10:
Changes Soul of Skills x1 into Soul of Divine Protection. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Soul Combo - ATK DOWN (5* Awaken x1):
When you unleash a 6 combo attack with Soul of Divine Protection, decreases all targets' ATK by 5% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - ATK DOWN (5* Awaken x3):
When you unleash a 6 combo attack with Soul of Divine Protection, decreases all targets' ATK by 8% for the next turn (available in support formation).`,
        Stats: [8, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Beretta1: {
        Name: "Beretta [Arch Golem]",
        Art: "https://i.imgur.com/zP57Yfi.png",
        Icon: "https://i.imgur.com/vM872go.png",
        Type: "https://i.imgur.com/pzX6NRL.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Tome",
        Rarity: 5,
        MinHp: 7129,
        MaxHp: 7129,
        MinAtk: 3003,
        MaxAtk: 3003,
        MinDef: 3002,
        MaxDef: 3002,
        MaxOutput: 150,
        Town1: "Protection Magistone Digsite +30%",
        Town2: "Digsite for Training Magistones +10%",
        Secret: `Darkness Cannon Lv.MAX:
Single-target dark magic attack for 450%.`,
        SecretType: "Single",
        Skill1: `Search Change Lv.1/Lv.10:
Changes Soul of Divine Protection x2 into Soul of Secrets. Increases all Soul of Secrets gauges' increase by 5%/10% (turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Shadow Rush Lv.1/Lv.10:
Increases all allies' guard penetration by 40%/50% (Turns: 1). Increases all allies' pierce rate by 10% (Turns: 1).
Lv.1/Lv.10 Cost: 40/30`,
        Skill2Icon: "",
        Trait1: `Soul Combo - ATK UP (5* Awaken x1):
When you unleash a 6 combo attack with Soul of Secrets, increases own ATK by 5% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - ATK UP (5* Awaken x3):
When you unleash a 6 combo attack with Soul of Secrets, increases own ATK by 8% for the next turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 8, 0, 0, 2, 0, 0]
    },
    Rimuru5: {
        Name: "Rimuru Tempest [Lord of Wisdom]",
        Art: "https://i.imgur.com/aVB5hqR.png",
        Icon: "https://i.imgur.com/oBUGmLr.png",
        Type: "https://i.imgur.com/NchScWh.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Tome",
        Rarity: 5,
        MinHp: 7152,
        MaxHp: 7152,
        MinAtk: 3032,
        MaxAtk: 3032,
        MinDef: 2958,
        MaxDef: 2958,
        MaxOutput: 150,
        Town1: "Digsite for Stamina Magistones +30%",
        Town2: "Laboratory +10%",
        Secret: `Tidal Tempest Lv.MAX:
Single-target water magic attack for 450%.`,
        SecretType: "Single",
        Skill1: `Ability Modification Lv.1/Lv.10:
Decreases all targets' DEF by 40%/45% (Turns: 1). Increases own pierce power by 30% (Turns: 2).
Lv.1/Lv.10 Cost: 65/55`,
        Skill1Icon: "",
        Skill2: `Magic Construction Lv.1/Lv.10:
Changes Soul of Secrets x1 into Soul of Skills. Increases Soul of Skills skill gauge increase until the end of battle by 3%/5% (Max: 100%).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Soul Combo - Pierce Power UP (5* Awaken x1):
When you unleash a 4+ combo attack with Soul of Skills, increases own pierce power by 4% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - Pierce Power UP (5* Awaken x3):
When you unleash a 4+ combo attack with Soul of Skills, increases own pierce power by 6% for the next turn (available in support formation).`,
        Stats: [2, 8, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Alice1: {
        Name: "Alice Rondo [Brave Knight Girl]",
        Art: "https://i.imgur.com/JVCQWHw.png",
        Icon: "https://i.imgur.com/dfc2m0g.png",
        Type: "https://i.imgur.com/NchScWh.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Greatsword",
        Rarity: 5,
        MinHp: 7122,
        MaxHp: 7122,
        MinAtk: 3037,
        MaxAtk: 3037,
        MinDef: 2964,
        MaxDef: 2964,
        MaxOutput: 150,
        Town1: "Digsite for Training Magistones +30%",
        Town2: "Clothing Store +10%",
        Secret: `Healing Blade Lv.MAX:
Single-target water physical attack for 450%.`,
        SecretType: "Single",
        Skill1: `Valorous Path Lv.1/Lv.10:
Increases all allies' pierce rate by 80%/100% (Turns: 1). Decreases all targets' water resistance by 30% (Tuns: 2).
Lv.1/Lv.10 Cost: 65/55`,
        Skill1Icon: "",
        Skill2: `String Slasher Lv.1/Lv.10:
Changes Soul of Divine Protection x2 into Soul of Skills. Increases Soul of Skills skill gauge increase until the end of battle by 3%/5% (Max: 100%)
Lv.1/Lv.10 Cost: 40/30`,
        Skill2Icon: "",
        Trait1: `Troop - Skill UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases skill points by 3 every 3 turns (available in support formation).`,
        Trait1A: `Troop - Skill UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases skill points by 5 every 3 turns (available in support formation).`,
        Stats: [8, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Gobta1: {
        Name: "Gobta [Captain of the Goblin Riders]",
        Art: "https://i.imgur.com/OJGCVrz.png",
        Icon: "https://i.imgur.com/1IwymQH.png",
        Type: "https://i.imgur.com/QndVudD.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Fist",
        Rarity: 5,
        MinHp: 7142,
        MaxHp: 7142,
        MinAtk: 2994,
        MaxAtk: 2994,
        MinDef: 2994,
        MaxDef: 2994,
        MaxOutput: 150,
        Town1: "Mountain Supply Corps Base +30%",
        Town2: "Farm +10%",
        Secret: `Flare Smash Lv.MAX:
Single-target fire physical attack for 450%.`,
        SecretType: "Single",
        Skill1: `Hunter's Shadow Lv.1/Lv.10:
Changes Soul of Secrets x2 into Soul of Divine ProtectionIncreases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Brave Contact Lv.1/Lv.10:
Increases own critical damage by 15%/25% (Turns: 2)Increases own counter power by 10% (Turns: 2)
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Soul Combo - Guard Rate DOWN (5* Awaken x1):
When you unleash a 6 combo attack with Soul of Divine Protection, decreases all targets' guard rate by 7% for the next turn (available in support formation)`,
        Trait1A: `Soul Combo - Guard Rate DOWN (5* Awaken x3):
When you unleash a 6 combo attack with Soul of Divine Protection, decreases all targets' guard rate by 11% for the next turn (available in support formation)`,
        Stats: [2, 0, 0, 8, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Rimuru6: {
        Name: "Rimuru Tempest [Awakened Demon Lord]",
        Art: "https://i.imgur.com/WK2iIUf.png",
        Icon: "https://i.imgur.com/11xHPNK.png",
        Type: "https://i.imgur.com/pzX6NRL.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Tome",
        Rarity: 5,
        MinHp: 6891,
        MaxHp: 6891,
        MinAtk: 3240,
        MaxAtk: 3240,
        MinDef: 2622,
        MaxDef: 2622,
        MaxOutput: 150,
        Town1: "Forest Supply Corps Base +30%",
        Town2: "Laboratory +10%",
        Secret: `Belzebuth Lv.MAX:
All-target dark magic attack for 270%.`,
        SecretType: "All",
        Skill1: `Unlock Expertise Lv.1/Lv.10:
Increases own critical rate by 80%/100% (Turns: 1). Increases own critical damage by 15% (Turns: 2).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Chancellor's Prestige Lv.1/Lv.10:
Increases all allies' stun evasion rate by 90%/100% (Turns: 1). Increases Soul of Divine Protection damage by 10% (Turns: 1).
Lv.1/Lv.10 Cost: 40/30`,
        Skill2Icon: "",
        Trait1: `Troop - Secret Skill UP 3 (5* Awaken x1):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 5% at start of battle (Turns: 3) (available in support formation).`,
        Trait1A: `Troop - Secret Skill UP 3 (5* Awaken x3):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 8% at start of battle (Turns: 3) (available in support formation).`,
        Stats: [4, 0, 0, 4, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Masked1: {
        Name: "Masked Hero [Time Traveler]",
        Art: "https://i.imgur.com/nPmqKKH.png",
        Icon: "https://i.imgur.com/wKOHjfN.png",
        Type: "https://i.imgur.com/z8bnSYg.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Sword",
        Rarity: 5,
        MinHp: 6914,
        MaxHp: 6914,
        MinAtk: 3290,
        MaxAtk: 3290,
        MinDef: 2555,
        MaxDef: 2555,
        MaxOutput: 150,
        Town1: "Digsite for Training Magistones +30%",
        Town2: "Protection Magistone Digsite +10%",
        Secret: `Reverse Fate Lv.MAX:
All-target space physical attack for 290%.`,
        SecretType: "All",
        Skill1: `Destroy Fate Lv.1/Lv.10:
Make another move (turn stays the same)Increases all souls' protection gauge increase by 10%/20% (Turns: 1) (Only 1 use per battle).
Lv.1/Lv.10 Cost: 40/30`,
        Skill1Icon: "",
        Skill2: `Alter Fate Lv.1/Lv.10:
Increases all allies' critical rate by 80%/100% (Turns: 1)Decreases all targets' critical resistance by 30% (Turns: 1).
Lv.1/Lv.10 Cost: 65/55`,
        Skill2Icon: "",
        Trait1: `Troop - Protection UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases protection gauge by 4 every 3 turns (available in support formation).`,
        Trait1A: `Troop - Protection UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases protection gauge by 6 every 3 turns (available in support formation).`,
        Stats: [2, 0, 0, 8, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Leon2: {
        Name: "Leon Cromwell [The Platinum Devil]",
        Art: "https://i.imgur.com/uqOnu3V.png",
        Icon: "https://i.imgur.com/Qfcxbbq.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Tome",
        Rarity: 5,
        MinHp: 6907,
        MaxHp: 6907,
        MinAtk: 3277,
        MaxAtk: 3277,
        MinDef: 2571,
        MaxDef: 2571,
        MaxOutput: 150,
        Town1: "Digsite for Attack Magistones +30%",
        Town2: "Laboratory +10%",
        Secret: `Punishment Blast Lv.Max:
All-target light magic attack for 270%.`,
        SecretType: "All",
        Skill1: `Sacred Power Lv.1/Lv.10:
Increases all allies' light ATK by 40%/50% (Turns: 1)
Lv.1/Lv.10 Cost: 65/55`,
        Skill1Icon: "",
        Skill2: `Eccentric Force Lv.1/Lv.10:
Changes Soul of Divine Protection x into Soul of Secrets. Increases all Soul of Secrets gauges' increase by 3%/5% (Max: 100%
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Troop - Secret Skill UP 2 (5* Awaken x1):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 5% every 3 turns (available in support formation).`,
        Trait1A: `Troop - Secret Skill UP 2 (5* Awaken x3):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 8% every 3 turns (available in support formation).`,
        Stats: [8, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Ranga1: {
        Name: "Ranga [Tempest Star Wolf]",
        Art: "https://i.imgur.com/lfZD1t2.png",
        Icon: "https://i.imgur.com/Bqi7P8m.png",
        Type: "https://i.imgur.com/z8bnSYg.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Fist",
        Rarity: 5,
        MinHp: 6891,
        MaxHp: 6891,
        MinAtk: 3253,
        MaxAtk: 3253,
        MinDef: 2601,
        MaxDef: 2601,
        MaxOutput: 150,
        Town1: "Mountain Supply Corps Base +30%",
        Town2: "Forest Supply Corps Base +10%",
        Secret: `Death Storm Lv.MAX:
All-target space magic attack for 270%.`,
        SecretType: "All",
        Skill1: `Pendulum Swing Lv.1/Lv.10:
Changes Soul of Secrets x2 into Soul of Skills. Increases all Soul of Skills gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Keen Smell Lv.1/Lv.10:
Increases all allies' pierce rate by 10%/20% (Turns: 1). Increases all allies' guard penetration by 30% (Turns: 1).
Lv.1/Lv.10 Cost: 40/30`,
        Skill2Icon: "",
        Trait1: `Effect - Pierce Power UP (5* Awaken x1):
When 1 or more vanguard are affected by Critical Rate UP, increases own pierce power by 5% at start of turn (available in support formation).`,
        Trait1A: `Effect - Pierce Power UP (5* Awaken x3):
When 1 or more vanguard are affected by Critical Rate UP, increases own pierce power by 8% at start of turn (available in support formation).`,
        Stats: [2, 0, 0, 8, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Milim2: {
        Name: "Milim Nava [The Enthusiastic Player]",
        Art: "https://i.imgur.com/KuYfLkp.png",
        Icon: "https://i.imgur.com/Nc9PTsX.png",
        Type: "https://i.imgur.com/QndVudD.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Fist",
        Rarity: 5,
        MinHp: 6880,
        MaxHp: 6880,
        MinAtk: 3276,
        MaxAtk: 3276,
        MinDef: 2582,
        MaxDef: 2582,
        MaxOutput: 150,
        Town1: "Cafe +30%",
        Town2: "Forest Supply Corps Base +10%",
        Secret: `Drago Upper Lv.MAX:
Single-target fire physical attack for 450%.`,
        SecretType: "Single",
        Skill1: `Top of Calamity Lv.1/Lv.10:
Increases all allies' critical rate by 80%/100% (Turns: 1). Chance to seal Critical Resistance UP on all targets: 100% (Turns: 1).
Lv.1/Lv.10 Cost: 65/55`,
        Skill1Icon: "",
        Skill2: `Draconic Racquet Lv.1:
Changes Soul of Skills x1 into Soul of Divine Protection. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `HP - Critical Damage UP (5* Awaken x1):
When you have 50% or lower HP, increases own critical damage by 5% at start of turn (available in support formation).`,
        Trait1A: `HP - Critical Damage UP (5* Awaken x3):
When you have 50% or lower HP, increases own critical damage by 8% at start of turn (available in support formation).`,
        Stats: [2, 8, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Shion1: {
        Name: "Shion [Steel Annihilator]",
        Art: "https://i.imgur.com/LgbstkD.png",
        Icon: "https://i.imgur.com/B8vhqUp.png",
        Type: "https://i.imgur.com/pzX6NRL.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Greatsword",
        Rarity: 5,
        MinHp: 6891,
        MaxHp: 6891,
        MinAtk: 3256,
        MaxAtk: 3256,
        MinDef: 2597,
        MaxDef: 2597,
        MaxOutput: 150,
        Town1: "Forest Supply Corps Base +30%",
        Town2: "Clothing Store +10%",
        Secret: `Ogre Guillotine Lv.Max:
All-target dark physical attack for 270%.`,
        SecretType: "All",
        Skill1: `Indigo Charge Lv.1/Lv.10:
Increases all allies' pierce rate by 80%/100% (Turns: 1). Increases all allies' pierce power by 20% (Turns: 2).
Lv.1/Lv.10 Cost: 65/55`,
        Skill1Icon: "",
        Skill2: `Advance Attack Lv.1/Lv.10:
Increases all allies' poison evasion rate by 90%/100% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Troop - Secret Skill UP 2 (5* Awaken x1):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 5% every 3 turns (available in support formation).`,
        Trait1A: `Troop - Secret Skill UP 2 (5* Awaken x3):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 8% every 3 turns (available in support formation).`,
        Stats: [8, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Velzard1: {
        Name: "Velzard [The White Ice Dragon]",
        Art: "https://i.imgur.com/UoA3mrK.png",
        Icon: "https://i.imgur.com/LNLspAn.png",
        Type: "https://i.imgur.com/NchScWh.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Fist",
        Rarity: 5,
        MinHp: 6896,
        MaxHp: 6896,
        MinAtk: 3280,
        MaxAtk: 3280,
        MinDef: 2569,
        MaxDef: 2569,
        MaxOutput: 150,
        Town1: "Tavern +30%",
        Town2: "Ocean Supply Corps Base +10%",
        Secret: `Freezing Splash Lv.MAX:
Single-target water magic attack for 450%.`,
        SecretType: "Single",
        Skill1: `Frozen Space Lv.1/Lv.10:
Increase own ATK by 25%/30% (Turns: 1). Increase own pierce power by 15% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Icy World Lv.1/Lv.10:
Chance to give frostbite to all targets: 80%/100% (Turns: 2).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Troop - Skill UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases skill points by 3 every 3 turns (available in support formation).`,
        Trait1A: `Troop - Skill UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases skill points by 5 every 3 turns (available in support formation).`,
        Stats: [2, 0, 0, 8, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Guy2: {
        Name: "Guy Crimson [Lord of Darkness]",
        Art: "https://i.imgur.com/m3kePsm.png",
        Icon: "https://i.imgur.com/LVspSnM.png",
        Type: "https://i.imgur.com/QndVudD.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Fist",
        Rarity: 5,
        MinHp: 6889,
        MaxHp: 6889,
        MinAtk: 3280,
        MaxAtk: 3280,
        MinDef: 2572,
        MaxDef: 2572,
        MaxOutput: 150,
        Town1: "Protection Magistone Digsite +30%",
        Town2: "Tavern +10%",
        Secret: `Demon's Blaze Lv.MAX:
All-target fire magic attack for 290%.`,
        SecretType: "All",
        Skill1: `God of Abyss Lv.1/Lv.10:
Chance to seal DEF UP on all targets: 80%/100% (Turns: 1).
Lv.1/Lv.10 Cost: 65/55`,
        Skill1Icon: "",
        Skill2: `Set Ablaze Lv.1/Lv.10:
Increases Activating Soul of Combos damage by 40%/50% (Turns: 1)Decreases all targets' critical resistance by 20% (Turns: 1).
Lv.1/Lv.10 Cost: 65/55`,
        Skill2Icon: "",
        Trait1: `Troop - Protection UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases protection gauge by 4 every 3 turns (available in support formation).`,
        Trait1A: `Troop - Protection UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases protection gauge by 6 every 3 turns (available in support formation).`,
        Stats: [2, 8, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Diablo2: {
        Name: "Diablo [Ebony Demon]",
        Art: "https://i.imgur.com/PsNyd6a.png",
        Icon: "https://i.imgur.com/Z1INgUB.png",
        Type: "https://i.imgur.com/pzX6NRL.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Katana",
        Rarity: 5,
        MinHp: 6910,
        MaxHp: 6910,
        MinAtk: 3285,
        MaxAtk: 3285,
        MinDef: 2556,
        MaxDef: 2556,
        MaxOutput: 150,
        Town1: "Laboratory +30%",
        Town2: "Ocean Supply Corps Base +10%",
        Secret: `Limited Zero Cannon Lv.MAX:
Single-target dark magic attack for 450%.`,
        SecretType: "Single",
        Skill1: `Mortuary Smash Lv.1/Lv.10:
Increases own Soul of Combos damage by 70%/80% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Spatial Abyss Lv.1/Lv.10:
Increases own counterattack rate by 80% (Turns: 1). Increases own counter power by 20% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Troop - Secret Skill UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 7% at the start of battle (Turns: 3) (available in support formation).`,
        Trait1A: `Troop - Secret Skill UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 11% at the start of battle (Turns: 3) (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 8, 0]
    },
    Milim3: {
        Name: "Milim Nava [The Dragon Fist]",
        Art: "https://i.imgur.com/3ziL84K.png",
        Icon: "https://i.imgur.com/NPGoCpt.png",
        Type: "https://i.imgur.com/z8bnSYg.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Fist",
        Rarity: 5,
        MinHp: 6880,
        MaxHp: 6880,
        MinAtk: 3292,
        MaxAtk: 3292,
        MinDef: 2561,
        MaxDef: 2561,
        MaxOutput: 150,
        Town1: "Digsite for Attack Magistones +30%",
        Town2: "Training Ground +10%",
        Secret: `Milim Punch Lv.MAX:
Single-target space magic attack for 470%.`,
        SecretType: "Single",
        Skill1: `Dragon Master Lv.1/Lv.10:
Increases all allies' space ATK by 40%/50% (Turns: 1).
Lv.1/Lv.10 Cost: 65/55`,
        Skill1Icon: "",
        Skill2: `Dragon Call Lv.1/Lv.10:
Chance to give Drago to self: 100% (Turns: 1)Increases own ATK by 10%/20% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Troop - Skill UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases skill points by 4 at the start of the battle (available in support formation).`,
        Trait1A: `Troop - Skill UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases skill points by 6 at the start of the battle (available in support formation).`,
        Stats: [2, 8, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Luminus2: {
        Name: "Luminus [The Queen of Nightmares]",
        Art: "https://i.imgur.com/sBjxtqS.png",
        Icon: "https://i.imgur.com/tJclorA.png",
        Type: "https://i.imgur.com/AHPti72.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Tome",
        Rarity: 5,
        MinHp: 6912,
        MaxHp: 6912,
        MinAtk: 3279,
        MaxAtk: 3279,
        MinDef: 2560,
        MaxDef: 2560,
        MaxOutput: 150,
        Town1: "Protection Magistone Digsite +30%",
        Town2: "Cafe +10%",
        Secret: `Scarlet Rain Lv.MAX:
Single-target earth magic attack for 450%.`,
        SecretType: "Single",
        Skill1: `Soul-Blood Reaper Lv.1/Lv.10:
Decreases a single targets' magic attack resistance by 20%/30% (Turns: 1). Increases own M-ATK by 30% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Road to Overcome Lv.1/Lv.10:
Decreases a single target's Secret Skill Gauge by 10%. Increases own secret skill gauge by 15%/25%.
Lv.1/Lv.10 Cost: 50/40`,
        Skill2Icon: "",
        Trait1: `Troop - Secret Skill UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 12% at the start of battle (available in support formation).`,
        Trait1A: `Troop - Secret Skill UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 18% at the start of battle (available in support formation).`,
        Stats: [2, 0, 0, 8, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Carrion1: {
        Name: "Carrion [Beastmaster] ",
        Art: "https://i.imgur.com/sHpUmjo.png",
        Icon: "https://i.imgur.com/zzwmDw4.png",
        Type: "https://i.imgur.com/z8bnSYg.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Fist",
        Rarity: 5,
        MinHp: 6858,
        MaxHp: 6858,
        MinAtk: 3276,
        MaxAtk: 3276,
        MinDef: 2588,
        MaxDef: 2588,
        MaxOutput: 150,
        Town1: "Tavern +30%",
        Town2: "Forest Supply Corps Base +10%",
        Secret: `Beast Roar Lv.MAX:
Single-target space physical attack for 450%.`,
        SecretType: "Single",
        Skill1: `Lion's Den Lv.1/Lv.10:
Increases own ATK by 10%/20% (Turns: 2). Increases all allies' critical damage by 20% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Mighty Roar Lv.1/Lv.10:
Changes Soul of Secrets x2 into Soul of Divine Protection. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill2Icon: "",
        Trait1: `Soul Combo - Critical Damage UP (5* Awaken x1):
When you unleash a 6 combo attack with Soul of Divine Protection, increases own critical damage by 10% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - Critical Damage UP (5* Awaken x3):
When you unleash a 6 combo attack with Soul of Divine Protection, increases own critical damage by 15% for the next turn (available in support formation).`,
        Stats: [8, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Veldora1: {
        Name: "Veldora Tempest [The True Butler]",
        Art: "https://i.imgur.com/uRgMBvh.png",
        Icon: "https://i.imgur.com/G2ES5QD.png",
        Type: "https://i.imgur.com/pQYVkI3.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Katana",
        Rarity: 5,
        MinHp: 6895,
        MaxHp: 6895,
        MinAtk: 3244,
        MaxAtk: 3244,
        MinDef: 2605,
        MaxDef: 2605,
        MaxOutput: 150,
        Town1: "Digsite for Attack Magistones +30%",
        Town2: "Field +10%",
        Secret: `Ornamental Spiral Lv.MAX:
Single-target wind physical attack for 450%.`,
        SecretType: "Single",
        Skill1: `Rapid Service Lv.1/Lv.10:
Change Soul of Secrets x2 to Soul of Skills. Increases all Soul of Skills gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Sacred Guidance Lv.1/Lv.10:
Decreases all targets' pierce power by 15% (Turns:2). Increases Soul of Skills damage until the end of battle by 5% (Max: 100%).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Soul Combo - ATK UP (5* Awaken x1):
When you unleash a 6 combo attack with Soul of Skills, increases own ATK by 5% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - ATK UP (5* Awaken x3):
When you unleash a 6 combo attack with Soul of Skills, increases own ATK by 8% for the next turn (available in support formation).`,
        Stats: [4, 0, 0, 4, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Hakurou1: {
        Name: "Hakurou [Instructor of Flashing Sword]",
        Art: "https://i.imgur.com/UQ2yjvm.png",
        Icon: "https://i.imgur.com/YbOF5fR.png",
        Type: "https://i.imgur.com/pQYVkI3.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Katana",
        Rarity: 5,
        MinHp: 6889,
        MaxHp: 6889,
        MinAtk: 3259,
        MaxAtk: 3259,
        MinDef: 2592,
        MaxDef: 2592,
        MaxOutput: 150,
        Town1: "Training Ground +30%",
        Town2: "Farm +10%",
        Secret: `Cicada Flash Lv.MAX:
Single-target wind physical attack for 450%.`,
        SecretType: "Single",
        Skill1: `Keigoku Lv.1/Lv.10:
Decreases all targets' DEF by 25%/30% (Turns: 1). Increases all allies' critical rate by 30% (Turns: 1).
Lv.1/Lv.10 Cost: 65/55`,
        Skill1Icon: "",
        Skill2: `Heaven's Eye Lv.1/Lv.10:
Decreases a single target's counterattack rate by 30%/40% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `HP - Pierce Rate Up (5* Awaken x1):
When you have 50% or lower HP, increases own pierce rate by 7% at start of turn (available in support formation).`,
        Trait1A: `HP - Pierce Rate Up (5* Awaken x3):
When you have 50% or lower HP, increases own pierce rate by 11% at start of turn (available in support formation).`,
        Stats: [2, 8, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Milim4: {
        Name: "Milim Nava [Manifestation of the Dragon]",
        Art: "https://i.imgur.com/UFP8Z8r.png",
        Icon: "https://i.imgur.com/iDq0yWQ.png",
        Type: "https://i.imgur.com/pzX6NRL.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Fist",
        Rarity: 5,
        MinHp: 6892,
        MaxHp: 6892,
        MinAtk: 3269,
        MaxAtk: 3269,
        MinDef: 2578,
        MaxDef: 2578,
        MaxOutput: 150,
        Town1: "Digsite for Stamina Magistones +30%",
        Town2: "Training Ground +10%",
        Secret: `Drago-Nova Lv.MAX:
Single-target dark magic attack for 450%.`,
        SecretType: "Single",
        Skill1: `Dragon Orb Lv.1/Lv.10:
Changes Soul of Secrets x2 into Soul of Divine Protection. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Dragon Thrash Lv.1/Lv.10:
Increases all allies' critical resistance by 40%/50% (Turns: 1). Increases own critical rate by 15% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Troop - Protection UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases protection gauge by 7 at the start of battle (available in support formation).`,
        Trait1A: `Troop - Protection UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases protection gauge by 11 at the start of battle (available in support formation).`,
        Stats: [2, 8, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Shion2: {
        Name: "Shion [Runaway Bride]",
        Art: "https://i.imgur.com/KL2ZxIF.png",
        Icon: "https://i.imgur.com/D45PsTC.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Lance",
        Rarity: 5,
        MinHp: 6900,
        MaxHp: 6900,
        MinAtk: 3289,
        MaxAtk: 3289,
        MinDef: 2552,
        MaxDef: 2552,
        MaxOutput: 150,
        Town1: "Clothing Store +30%",
        Town2: "Cafe +10%",
        Secret: `All My Love Lv.MAX:
Single-target light physical attack for 450%.`,
        SecretType: "Single",
        Skill1: `Blade of Blessing Lv.1/Lv.10:
Increases own ATK by 20%/30 (Turns: 1). Increases own pierce power by 25% (Turns: 1). Effect increases by 3% each time allies use battle skills from the start of battle to the end of Turn 3.
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Power of Love Lv.1/Lv.10:
Changes Soul of Secrets x1 into Soul of Skills. Increases Soul of Skills' skill point increase by 10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Troop - Secret Skill UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 7% once per turn from the start of battle to Turn 3(available in support formation).`,
        Trait1A: `Troop - Secret Skill UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 11% once per turn from the start of battle to Turn 3(available in support formation).`,
        Stats: [2, 0, 0, 2, 8, 0, 2, 0, 0, 2, 0, 0]
    },
    Veldora2: {
        Name: "Veldora [Seal Releaser]",
        Art: "https://i.imgur.com/Hw3Anff.png",
        Icon: "https://i.imgur.com/vDMGQeU.png",
        Type: "https://i.imgur.com/pzX6NRL.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Fist",
        Rarity: 5,
        MinHp: 6893,
        MaxHp: 6893,
        MinAtk: 3273,
        MaxAtk: 3273,
        MinDef: 2573,
        MaxDef: 2573,
        MaxOutput: 150,
        Town1: "Laboratory +30%",
        Town2: "Restaurant +10%",
        Secret: `Dragonic Burst Lv.MAX:
All-target dark physical attack for 270%.`,
        SecretType: "All",
        Skill1: `Dragon Smash Lv.1/Lv.10:
Increases activating Soul of Combos damage by 50%/60% (Turns: 1). Decreases all targets' pierce resistance by 10% (Turns: 1).
Lv.1/Lv.10 Cost: 65/55`,
        Skill1Icon: "",
        Skill2: `Faust Lv.1/Lv.10:
Decreases a single target's critical damage by 10%/20% (Turns: 3).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `HP - Enhance Counterattack Rate (5* Awaken x1):
When you have 50% or higher HP, increases own counterattack rate by 6% at start of turn (available in support formation).`,
        Trait1A: `HP - Enhance Counterattack Rate (5* Awaken x3):
When you have 50% or higher HP, increases own counterattack rate by 9% at start of turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 8, 0]
    },
    Milim5: {
        Name: "Milim Nava [One of Oldest Demon Lords]",
        Art: "https://i.imgur.com/1huDYDf.png",
        Icon: "https://i.imgur.com/CrXK94G.png",
        Type: "https://i.imgur.com/AHPti72.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Fist",
        Rarity: 5,
        MinHp: 6891,
        MaxHp: 6891,
        MinAtk: 3265,
        MaxAtk: 3265,
        MinDef: 2582,
        MaxDef: 2582,
        MaxOutput: 150,
        Town1: "Restaurant +30%",
        Town2: "Protection Magistone Digsite +10%",
        Secret: `Drago Driver Lv.MAX:
All-target earth physical attack for 270%.`,
        SecretType: "All",
        Skill1: `Change Dragon Magic Lv.1/Lv.10:
Changes Soul of Secrets x2 into Soul of Divine Protection. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Dragon's Magic's Call Lv.1/Lv.10:
Increases all allies' DEF by 20%/25% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill2Icon: "",
        Trait1: `Troop - Protection UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases protection gauge by 7 at the start of battle (available in support formation).`,
        Trait1A: `Troop - Protection UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases protection gauge by 11 at the start of battle (available in support formation).`,
        Stats: [4, 0, 0, 2, 0, 0, 4, 0, 0, 2, 0, 0]
    },
    Benimaru1: {
        Name: "Benimaru [Samurai General of Hellfire]",
        Art: "https://i.imgur.com/nMJ0N7A.png",
        Icon: "https://i.imgur.com/V9ZWWX5.png",
        Type: "https://i.imgur.com/QndVudD.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Tome",
        Rarity: 5,
        MinHp: 6894,
        MaxHp: 6894,
        MinAtk: 3269,
        MaxAtk: 3269,
        MinDef: 2576,
        MaxDef: 2576,
        MaxOutput: 150,
        Town1: "Farm +30%",
        Town2: "Digsite for Attack Magistones +10%",
        Secret: `Hell Flare Lv.MAX:
All-target fire magic attack for 270%.`,
        SecretType: "All",
        Skill1: `Ogre Hero Lv.1/Lv.10:
Increases own ATK by 25%/30% (Turns: 1). Increases Soul of Secrets damage by 10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `War Hero Lv.1/Lv.10:
Decreases a single target's pierce power by 10%/20% (Turns: 3).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Troop - Secret Skill UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 12% at the start of battle (available in support formation).`,
        Trait1A: `Troop - Secret Skill UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 18% at the start of battle (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 8, 0, 0, 2, 0, 0]
    },
    Gazel1: {
        Name: "Gazel Dwargo [King of an Armed Nation]",
        Art: "https://i.imgur.com/SYI7Oqm.png",
        Icon: "https://i.imgur.com/Dn4zis4.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Sword",
        Rarity: 5,
        MinHp: 6891,
        MaxHp: 6891,
        MinAtk: 3271,
        MaxAtk: 3271,
        MinDef: 2575,
        MaxDef: 2575,
        MaxOutput: 150,
        Town1: "Mountain Supply Corps Base +30%",
        Town2: "Tavern +10%",
        Secret: `Haze: Thunder of Heaven and Earth Lv.MAX:
Single-target light physical attack for 450%.`,
        SecretType: "Single",
        Skill1: `Heroes Haki Lv.1/Lv.10:
Increases own ATK by 20%/25% (Turns: 1). Increases own critical rate by 20% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Telepathy Lv.1/Lv.10:
Increases own critical damage by 10%/20% (Turns: 3). Increases own DEF by 20% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Troop - Protection UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases protection gauge by 7 at the start of battle (available in support formation).`,
        Trait1A: `Troop - Protection UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases protection gauge by 11 at the start of battle (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 8, 0, 0, 2, 0, 0]
    },
    Milim6: {
        Name: "Milim Nava [Dragonoid]",
        Art: "https://i.imgur.com/h1DG8iA.png",
        Icon: "https://i.imgur.com/ZIXrWrO.png",
        Type: "https://i.imgur.com/pQYVkI3.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Fist",
        Rarity: 5,
        MinHp: 6891,
        MaxHp: 6891,
        MinAtk: 3271,
        MaxAtk: 3271,
        MinDef: 2575,
        MaxDef: 2575,
        MaxOutput: 150,
        Town1: "Cafe +30%",
        Town2: "Digsite for Attack Magistones +10%",
        Secret: `Drago Buster Lv.MAX:
All-target wind magic attack for 270%.`,
        SecretType: "All",
        Skill1: `Dragon Power Lv.1/Lv.10:
Increases activating Soul of Combos damage by 60%/70% (Turns: 1). Increases own critical damage by 20% (Turns: 2).
Lv.1/Lv.10 Cost: 65/55`,
        Skill1Icon: "",
        Skill2: `Lord of Catastrophe Lv.1/Lv.10:
Increases all allies' guard penetration by 40%/50% (Turns: 1).
Lv.1/Lv.10 Cost: 40/30`,
        Skill2Icon: "",
        Trait1: `Troop - Protection UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases protection gauge by 4 every 3 turns (available in support formation).`,
        Trait1A: `Troop - Protection UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases protection gauge by 6 every 3 turns (available in support formation).`,
        Stats: [4, 0, 0, 2, 0, 0, 4, 0, 0, 2, 0, 0]
    },
    Benimaru2: {
        Name: "Benimaru [Undefeated General]",
        Art: "https://i.imgur.com/yw8Wc2L.png",
        Icon: "https://i.imgur.com/uXu736J.png",
        Type: "https://i.imgur.com/AHPti72.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Sword",
        Rarity: 5,
        MinHp: 6904,
        MaxHp: 6904,
        MinAtk: 3274,
        MaxAtk: 3274,
        MinDef: 2562,
        MaxDef: 2562,
        MaxOutput: 150,
        Town1: "Training Ground +30%",
        Town2: "Restaurant +10%",
        Secret: `Destructive Blaze Lv.MAX:
All-target earth magic attack for 270%.`,
        SecretType: "All",
        Skill1: `Boulder Buster Lv.1/Lv.10:
Transfer another random character's soul card x2 to self. Decreases all targets' earth resistance by 10%/20% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Cosmic Edge Lv.1/Lv.10:
Increases Soul of Secrets damage by 25%/35% (Turns: 1). Increases all Soul of Secrets gauges' increase by 30% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Troop - Secret Skill UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 12% at the start of battle (available in support formation).`,
        Trait1A: `Troop - Secret Skill UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases own Secret Skill Gauge by 18% at the start of battle (available in support formation).`,
        Stats: [2, 0, 0, 8, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Shuna2: {
        Name: "Shuna [Pink Ogre of Heavenly Light]",
        Art: "https://i.imgur.com/kmeZvFX.png",
        Icon: "https://i.imgur.com/svqUOwR.png",
        Type: "https://i.imgur.com/pQYVkI3.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Tome",
        Rarity: 5,
        MinHp: 5958,
        MaxHp: 5958,
        MinAtk: 2280,
        MaxAtk: 2280,
        MinDef: 2990,
        MaxDef: 2990,
        MaxOutput: 150,
        Town1: "Clothing Store +30%",
        Town2: "Digsite for Stamina Magistones +10%",
        Secret: `Phoenix Blast Lv.MAX:
All-target wind magic attack for 270%.`,
        SecretType: "All",
        Skill1: `Willow Talisman Lv.1/Lv.10:
Changes Soul of Divine Protection x2 into Soul of Skills. Increases all Soul of Skills gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Sublimate Lv.1/Lv.10:
Increases all allies' DEF by 20%/25% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill2Icon: "",
        Trait1: `HP - Critical Damage UP 2 (5* Awaken x1):
When you have 50% or higher HP, increases own critical damage by 5% at start of turn (available in support formation).`,
        Trait1A: `HP - Critical Damage UP 2 (5* Awaken x3):
When you have 50% or higher HP, increases own critical damage by 8% at start of turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 4, 4, 0, 2, 0, 0]
    },
    Trya1: {
        Name: "Trya [Summer Breeze of Benevolence]",
        Art: "https://i.imgur.com/52m9B5H.png",
        Icon: "https://i.imgur.com/bdK9a1H.png",
        Type: "https://i.imgur.com/AHPti72.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Tome",
        Rarity: 4,
        MinHp: 5983,
        MaxHp: 5983,
        MinAtk: 2255,
        MaxAtk: 2255,
        MinDef: 2997,
        MaxDef: 2997,
        MaxOutput: 300,
        Town1: "Cafe +30%",
        Town2: "Field +10%",
        Secret: `Aerial Slicer Lv.MAX:
All-target earth magic attack for 260%.`,
        SecretType: "All",
        Skill1: `Whisper Lv.1/Lv.10:
Increases all allies' DEF by 15%/20% (Turns: 3). Increases all allies' guard rate by 10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Have a Harp Lv.1/Lv.10:
Changes Soul of Skills x1 into Soul of Divine Protection. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Effect - Pierce Rate UP (5* Awaken x1):
When affected by counterattack rate UP, increases own pierce rate by 7% at start of turn (available in support formation).`,
        Trait1A: `Effect - Pierce Rate UP (5* Awaken x3):
When affected by counterattack rate UP, increases own pierce rate by 11% at start of turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 8, 0]
    },
    Shion3: {
        Name: "Shion [Ardent Attendant]",
        Art: "https://i.imgur.com/LDtzfde.png",
        Icon: "https://i.imgur.com/PEliko1.png",
        Type: "https://i.imgur.com/pQYVkI3.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Greatsword",
        Rarity: 4,
        MinHp: 5983,
        MaxHp: 5983,
        MinAtk: 2254,
        MaxAtk: 2254,
        MinDef: 2995,
        MaxDef: 2995,
        MaxOutput: 300,
        Town1: "Digsite for Training Magistones +30%",
        Town2: "Restaurant +10%",
        Secret: `Slashing Flurry Lv.MAX:
Single-target wind magic attack for 435%.`,
        SecretType: "Single",
        Skill1: `Blunt Strike Lv.1/Lv.10:
Chance to poison a single target: 60%/80% (Turns: 3).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Battle Stations Lv.1/Lv.10:
Decreases a single target's guard rate by 20%/30% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Effect - Critical Rate UP (5* Awaken x1):
When 1 or more enemies are affected by DEF DOWN, increases own critical rate by 6% at start of battle (available in support formation).`,
        Trait1A: `Effect - Critical Rate UP (5* Awaken x3):
When 1 or more enemies are affected by DEF DOWN, increases own critical rate by 9% at start of battle (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 8, 0]
    },
    Gabiru1: {
        Name: "Gabiru [Waving Spear]",
        Art: "https://i.imgur.com/rIPZt4q.png",
        Icon: "https://i.imgur.com/TVFFYfn.png",
        Type: "https://i.imgur.com/NchScWh.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Lance",
        Rarity: 4,
        MinHp: 5983,
        MaxHp: 5983,
        MinAtk: 2260,
        MaxAtk: 2260,
        MinDef: 2987,
        MaxDef: 2987,
        MaxOutput: 300,
        Town1: "Laboratory +30%",
        Town2: "Ocean Supply Corps Base +10%",
        Secret: `Vortex Crash Lv.MAX:
All-target water physical attack for 260%.`,
        SecretType: "All",
        Skill1: `Draconic Frenzy Lv.1/Lv.10:
Increases all allies' DEF by 15%/20% (Turns: 3). Increases all allies' guard rate by 10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Spear Swing Lv.1/Lv.10:
Increases all allies' critical resistance by 40%/50% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Effect - Guard Power UP (5* Awaken x1):
When affected by Guard Rate UP, increases own guard power by 6% at start of turn (available in support formation).`,
        Trait1A: `Effect - Guard Power UP (5* Awaken x3):
When affected by Guard Rate UP, increases own guard power by 9% at start of turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 2, 0, 0, 4, 0, 0]
    },
    Shuna3: {
        Name: "Shuna [Excellent Tailor]",
        Art: "https://i.imgur.com/Biifeaf.png",
        Icon: "https://i.imgur.com/SNj9EbC.png",
        Type: "https://i.imgur.com/z8bnSYg.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Tome",
        Rarity: 4,
        MinHp: 5986,
        MaxHp: 5986,
        MinAtk: 2261,
        MaxAtk: 2261,
        MinDef: 2980,
        MaxDef: 2980,
        MaxOutput: 300,
        Town1: "Restaurant +30%",
        Town2: "Tavern +10%",
        Secret: `Sealing Zone Lv.MAX:
Single-target space magic attack for 435%.`,
        SecretType: "Single",
        Skill1: `Enlightenment Lv.1/Lv.10:
Changes Soul of Secrets x2 into Soul of Divine Protection. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Blessing Lv.1/Lv.10:
Recovers all allies from Poison. Increases own poison evasion rate by 5%/10% (Turns: 3).
Lv.1/Lv.10 Cost: 40/30`,
        Skill2Icon: "",
        Trait1: `Soul Combo - Guard Rate UP (5* Awaken x1):
When you unleash a 4+ combo attack with Soul of Skills, increases own guard rate by 6% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - Guard Rate UP (5* Awaken x3):
When you unleash a 4+ combo attack with Soul of Skills, increases own guard rate by 9% for the next turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 4, 4, 0, 2, 0, 0]
    },
    Milim7: {
        Name: "Milim Nava [Delighter in Everyday Life]",
        Art: "https://i.imgur.com/FLW6IuF.png",
        Icon: "https://i.imgur.com/46EbzAS.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Fist",
        Rarity: 4,
        MinHp: 5983,
        MaxHp: 5983,
        MinAtk: 2266,
        MaxAtk: 2266,
        MinDef: 2975,
        MaxDef: 2975,
        MaxOutput: 300,
        Town1: "Clothing Store +30%",
        Town2: "Cafe +10%",
        Secret: `Drago Breaker Lv.MAX:
Single-target light magic attack for 435%.`,
        SecretType: "Single",
        Skill1: `Bright Eye Lv.1/Lv.10:
Changes Soul of Skills x2 into Soul of Divine Protection. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Shooting Star Lv.1/Lv.10:
Decreases a single target's DEF by 5%/10% (Turns: 2).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `HP - Pierce Power UP (5* Awaken x1):
When you have max HP, increases own pierce power by 6% at start of turn (available in support formation).`,
        Trait1A: `HP - Pierce Power UP (5* Awaken x3):
When you have max HP, increases own pierce power by 9% at start of turn (available in support formation).`,
        Stats: [4, 0, 0, 4, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Gelmud1: {
        Name: "Gelmud [Secret Operator]",
        Art: "https://i.imgur.com/F4WghDu.png",
        Icon: "https://i.imgur.com/oqBL34H.png",
        Type: "https://i.imgur.com/pzX6NRL.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Tome",
        Rarity: 4,
        MinHp: 5988,
        MaxHp: 5988,
        MinAtk: 2266,
        MaxAtk: 2266,
        MinDef: 2971,
        MaxDef: 2971,
        MaxOutput: 300,
        Town1: "Protection Magistone Digsite +30%",
        Town2: "Ocean Supply Corps Base +10%",
        Secret: `Deathmarch Dance Lv.MAX:
All-target dark magic attack for 260%.`,
        SecretType: "All",
        Skill1: `Rhapsodic Inspiration Lv.1/Lv.10:
Decreases a single target's ATK by 10%/15% (Turns: 1). Decreases a single target's pierce power by 10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Symphony of the Dead Lv.1/Lv.10:
Chance to poison a single target: 40%/60% (Turns: 3).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `HP - Critical Rate UP 2 (5* Awaken x1):
When you have 50% or lower HP, increases own critical rate by 6% at start of turn (available in support formation).`,
        Trait1A: `HP - Critical Rate UP 2 (5* Awaken x3):
When you have 50% or lower HP, increases own critical rate by 9% at start of turn (available in support formation).`,
        Stats: [4, 0, 0, 4, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Geld1: {
        Name: "Geld [Orc King]",
        Art: "https://i.imgur.com/VViWh7f.png",
        Icon: "https://i.imgur.com/HQ2kPIY.png",
        Type: "https://i.imgur.com/AHPti72.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Fist",
        Rarity: 4,
        MinHp: 5983,
        MaxHp: 5983,
        MinAtk: 2266,
        MaxAtk: 2266,
        MinDef: 2971,
        MaxDef: 2971,
        MaxOutput: 300,
        Town1: "Field +30%",
        Town2: "Digsite for Defense Magistones +10%",
        Secret: `Quake Slash Lv.MAX:
Single-target earth physical attack for 435%.`,
        SecretType: "Single",
        Skill1: `Guardian Lv.1/Lv.10:
Increases all allies' DEF by 25%/30% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Chaotic Beat Lv.1/Lv.10:
Decreases a single target's counterattack rate by 25%/35% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `HP - DEF UP (5* Awaken x1):
When you have 50% or lower HP, increases own DEF by 6% at start of turn (available in support formation).`,
        Trait1A: `HP - DEF UP (5* Awaken x3):
When you have 50% or lower HP, increases own DEF by 9% at start of turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 8, 0]
    },
    Ranga2: {
        Name: "Ranga [Loyal Horn]",
        Art: "https://i.imgur.com/yi29CTc.png",
        Icon: "https://i.imgur.com/D8sId0H.png",
        Type: "https://i.imgur.com/NchScWh.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Fist",
        Rarity: 4,
        MinHp: 7266,
        MaxHp: 7266,
        MinAtk: 2018,
        MaxAtk: 2018,
        MinDef: 2514,
        MaxDef: 2514,
        MaxOutput: 300,
        Town1: "Mountain Supply Corps Base +30%",
        Town2: "Farm +10%",
        Secret: `Spiral Stream Lv.MAX:
All-target water magic attack for 260%.`,
        SecretType: "All",
        Skill1: `Tempest Wave Lv.1/Lv.10:
Decreases all targets' guard power by 40%/50% (Turns: 1). Decreases all targets' pierce resistance by 30% (Turns: 1).
Lv.1/Lv.10 Cost: 40/30`,
        Skill1Icon: "",
        Skill2: `Twisting Current Lv.1/Lv.10:
Decreases all targets' counterattack rate by 20%/40% (Turns: 2). Increases all Soul of Skills gauges' increase by 10% (Turns: 2).
Lv.1/Lv.10 Cost: 35/25`,
        Skill2Icon: "",
        Trait1: `HP - Critical Damage UP (5* Awaken x1):
When you have 50% or lower HP, increases own critical damage by 5% at start of turn (available in support formation).`,
        Trait1A: `HP - Critical Damage UP (5* Awaken x3):
When you have 50% or lower HP, increases own critical damage by 8% at start of turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 2, 0, 0, 4, 0, 0]
    },
    Albis1: {
        Name: "Albis [The Golden Serpent]",
        Art: "https://i.imgur.com/CmffPis.png",
        Icon: "https://i.imgur.com/VQI5P3g.png",
        Type: "https://i.imgur.com/AHPti72.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Hammer",
        Rarity: 4,
        MinHp: 7262,
        MaxHp: 7262,
        MinAtk: 2036,
        MaxAtk: 2036,
        MinDef: 2487,
        MaxDef: 2487,
        MaxOutput: 300,
        Town1: "Field +30%",
        Town2: "Mountain Supply Corps Base +10%",
        Secret: `Supreme Strike Lv.MAX:
All-target earth magic attack for 260%.`,
        SecretType: "All",
        Skill1: `Suppressor Lv.1/Lv.10:
Transfers own soul orb x2 to another vanguard character. Increases all souls' secrets skill gauge increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Slithering Stare Lv.1/Lv.10:
Increases all allies' stun evasion rate by  80%/100% (Turns: 1). Increases own critical rate by 10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill2Icon: "",
        Trait1: `HP - DEF UP (5* Awaken x1):
When you have 50% or lower HP, increases own DEF by 6% at start of turn (available in support formation).`,
        Trait1A: `HP - DEF UP (5* Awaken x3):
When you have 50% or lower HP, increases own DEF by 9% at start of turn (available in support formation).`,
        Stats: [2, 8, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Rimuru7: {
        Name: "Rimuru Tempest [Reincarnated]",
        Art: "https://i.imgur.com/H8tsCsd.png",
        Icon: "https://i.imgur.com/lQvoiLI.png",
        Type: "https://i.imgur.com/NchScWh.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Tome",
        Rarity: 4,
        MinHp: 6035,
        MaxHp: 6035,
        MinAtk: 2514,
        MaxAtk: 2514,
        MinDef: 2518,
        MaxDef: 2518,
        MaxOutput: 300,
        Town1: "Ocean Supply Corps Base +30%",
        Town2: "Protection Magistone Digsite +10%",
        Secret: `Water Blade Torrent Lv.MAX:
All-target water magic attack for 260%.`,
        SecretType: "All",
        Skill1: `Water Control Lv.1/Lv.10:
Increases own ATK by 15%/20% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Self-regeneration Lv.1/Lv.10:
Heals all allies' by 15%/20% of their max HP.
Lv.1/Lv.10 Cost: 40/30`,
        Skill2Icon: "",
        Trait1: `Soul Combo - Enhance Counterattack Rate 2 (5* Awaken x1):
When you unleash a 4+ combo attack with Soul of Skills, increases own counterattack rate by 4% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - Enhance Counterattack Rate 2 (5* Awaken x3):
When you unleash a 4+ combo attack with Soul of Skills, increases own counterattack rate by 6% for the next turn (available in support formation).`,
        Stats: [8, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Suphia1: {
        Name: "Suphia [White Tiger Claw]",
        Art: "https://i.imgur.com/ftEkegQ.png",
        Icon: "https://i.imgur.com/WQib9TD.png",
        Type: "https://i.imgur.com/pzX6NRL.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Fist",
        Rarity: 4,
        MinHp: 6024,
        MaxHp: 6024,
        MinAtk: 2468,
        MaxAtk: 2468,
        MinDef: 2535,
        MaxDef: 2535,
        MaxOutput: 300,
        Town1: "Tavern +30%",
        Town2: "Mountain Supply Corps Base +10%",
        Secret: `Beast Rush Lv.MAX:
Single-target dark physical attack for 435%.`,
        SecretType: "Single",
        Skill1: `Honed Claws Lv.1/Lv.10:
Increases own guard penetration by 90/100% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Unleash the Wild Lv.1/Lv.10:
Transfers Soul of Secrets x2 to self. Increases all Soul of Secrets gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill2Icon: "",
        Trait1: `HP - Critical Damage UP (4* Awaken x1):
When you have 75% or higher HP, increases own critical damage by 8% at start of turn (available in support formation).`,
        Trait1A: `HP - Critical Damage UP (4* Awaken x3):
When you have 75% or higher HP, increases own critical damage by 12% at start of turn (available in support formation).`,
        Stats: [8, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Chloe1: {
        Name: "Chloe Aubert [Lovely Innocence]",
        Art: "https://i.imgur.com/C8KE1KS.png",
        Icon: "https://i.imgur.com/rDoEl2O.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Tome",
        Rarity: 4,
        MinHp: 6025,
        MaxHp: 6025,
        MinAtk: 2498,
        MaxAtk: 2498,
        MinDef: 2498,
        MaxDef: 2498,
        MaxOutput: 300,
        Town1: "Clothing Store +30%",
        Town2: "Field +10%",
        Secret: `Solar Rain Lv.MAX:
All-target light magic attack for 260%.`,
        SecretType: "All",
        Skill1: `Light Beyond Lv.1/Lv.10:
Heals all allies' by 15%/20% of their max HP.
Lv.1/Lv.10 Cost: 40/30`,
        Skill1Icon: "",
        Skill2: `Glowing Future Lv.1/Lv.10:
Recovers all allies from Stun. Increases own stun evasion rate by 5%/10% (Turns: 2).
Lv.1/Lv.10 Cost: 40/30`,
        Skill2Icon: "",
        Trait1: `HP - Pierce Resistance 2 (5* Awaken x1):
When you have max HP, increases own pierce resistance by 6% at start of turn (available in support formation).`,
        Trait1A: `HP - Pierce Resistance 2 (5* Awaken x3):
When you have max HP, increases own pierce resistance by 9% at start of turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 4, 4, 0, 2, 0, 0]
    },
    Gobta2: {
        Name: "Gobta [Hobgoblin Ascendant]",
        Art: "https://i.imgur.com/tHUsnHG.png",
        Icon: "https://i.imgur.com/eKixjNq.png",
        Type: "https://i.imgur.com/pQYVkI3.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Fist",
        Rarity: 4,
        MinHp: 6020,
        MaxHp: 6020,
        MinAtk: 2499,
        MaxAtk: 2499,
        MinDef: 2499,
        MaxDef: 2499,
        MaxOutput: 300,
        Town1: "Training Ground +30%",
        Town2: "Forest Supply Corps Base +10%",
        Secret: `Spinning Rush Lv.MAX:
Single-target wind physical attack for 435%.`,
        SecretType: "Single",
        Skill1: `Small Chance Lv.1/Lv.10:
Changes Soul of Skills x2 into Soul of Divine Protection. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Positive Position Lv.1/Lv.10:
Increases all allies' poison evasion rate by 90%/100% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Troop - Evade Poison (5* Awaken x1):
When your troop contains 3 or more battle characters, increases own poison evasion rate by 40% during battle (available in support formation).`,
        Trait1A: `Troop - Evade Poison (5* Awaken x3):
When your troop contains 3 or more battle characters, increases own poison evasion rate by 60% during battle (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 2, 0, 0, 4, 0, 0]
    },
    Souei3: {
        Name: "Souei [Blue Gale]",
        Art: "https://i.imgur.com/vWTwBp2.png",
        Icon: "https://i.imgur.com/4lC8clr.png",
        Type: "https://i.imgur.com/pQYVkI3.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Sword",
        Rarity: 4,
        MinHp: 6024,
        MaxHp: 6024,
        MinAtk: 2497,
        MaxAtk: 2497,
        MinDef: 2497,
        MaxDef: 2497,
        MaxOutput: 300,
        Town1: "Tavern +30%",
        Town2: "Mountain Supply Corps Base +10%",
        Secret: `Shadow Disruption Lv.MAX:
Single-target wind physical attack for 435%.`,
        SecretType: "Single",
        Skill1: `Supporting Wave Lv.1/Lv.10:
Increases all allies' ATK by 15%/20% (Turns: 1).
Lv.1/Lv.10 Cost: 65/55`,
        Skill1Icon: "",
        Skill2: `Siege Lv.1/Lv.10:
Recovers all allies from Poison. Increases own poison evasion rate by 5%/10% (Turns: 3).
Lv.1/Lv.10 Cost: 40/30`,
        Skill2Icon: "",
        Trait1: `HP - Critical Damage UP (5* Awaken x1):
When you have 50% or lower HP, increases own critical damage by 5% at start of turn (available in support formation).`,
        Trait1A: `HP - Critical Damage UP (5* Awaken x3):
When you have 50% or lower HP, increases own critical damage by 8% at start of turn (available in support formation).`,
        Stats: [2, 8, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Shuna4: {
        Name: "Shuna [Pink Ogre Princess]",
        Art: "https://i.imgur.com/lEcTp28.png",
        Icon: "https://i.imgur.com/whn0pHB.png",
        Type: "https://i.imgur.com/QndVudD.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Tome",
        Rarity: 4,
        MinHp: 6024,
        MaxHp: 6024,
        MinAtk: 2497,
        MaxAtk: 2497,
        MinDef: 2495,
        MaxDef: 2495,
        MaxOutput: 300,
        Town1: "Restaurant +30%",
        Town2: "Tavern +10%",
        Secret: `Chain of Blue Flames Lv.MAX:
All-target fire magic attack for 260%.`,
        SecretType: "All",
        Skill1: `Raging Blue Flames Lv.1/Lv.10:
Increases all allies' DEF by 15%/20% (Turns: 3). Increases all allies' guard rate by 10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Cradle Barrier Lv.1/Lv.10:
Increases all allies' pierce resistance by 40%/50% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `HP - DEF UP 2 (5* Awaken x1):
When you have max HP, increases own DEF by 7% at start of turn (available in support formation).`,
        Trait1A: `HP - DEF UP 2 (5* Awaken x3):
When you have max HP, increases own DEF by 11% at start of turn (available in support formation).`,
        Stats: [4, 0, 0, 4, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Hakurou2: {
        Name: "Hakurou [White Slash]",
        Art: "https://i.imgur.com/tRfIh0c.png",
        Icon: "https://i.imgur.com/EwB2lAR.png",
        Type: "https://i.imgur.com/z8bnSYg.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Katana",
        Rarity: 4,
        MinHp: 6021,
        MaxHp: 6021,
        MinAtk: 2497,
        MaxAtk: 2497,
        MinDef: 2495,
        MaxDef: 2495,
        MaxOutput: 300,
        Town1: "Training Ground +30%",
        Town2: "Mountain Supply Corps Base +10%",
        Secret: `Sudden Slice Lv.MAX:
Single-target space physical attack for 435%.`,
        SecretType: "Single",
        Skill1: `Contemplation Lv.1/Lv.10:
Changes Soul of Divine Protection x2 into Soul of Skills. Increases all Soul of Skills gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Trembling Glare Lv.1/Lv.10:
Decreases a single target's guard power by 10%/20% (Turns: 3).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `HP - Critical Damage UP (5* Awaken x1):
When you have 50% or lower HP, increases own critical damage by 5% at start of turn (available in support formation).`,
        Trait1A: `HP - Critical Damage UP (5* Awaken x3):
When you have 50% or lower HP, increases own critical damage by 8% at start of turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 8, 0]
    },
    Kurobe1: {
        Name: "Kurobe [Steel Heart of Forge]",
        Art: "https://i.imgur.com/5cQWCy8.png",
        Icon: "https://i.imgur.com/j4eztrv.png",
        Type: "https://i.imgur.com/AHPti72.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Hammer",
        Rarity: 4,
        MinHp: 6021,
        MaxHp: 6021,
        MinAtk: 2497,
        MaxAtk: 2497,
        MinDef: 2495,
        MaxDef: 2495,
        MaxOutput: 300,
        Town1: "Digsite for Defense Magistones +30%",
        Town2: "Tavern +10%",
        Secret: `Three Evils of the Forge Lv.MAX:
All-target earth physical attack for 260%.`,
        SecretType: "All",
        Skill1: `Magnum Opus Lv.1/Lv.10:
Changes Soul of Secrets x1 into Soul of Divine Protection. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Speed Sharpen Lv.1/Lv.10:
Increases all allies' pierce resistance by 40%/50% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Soul Combo - Enhance Counterattack Rate (5* Awaken x1):
When you unleash a 5+ combo attack with Soul of Divine Protection, increases own counterattack rate by 6% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - Enhance Counterattack Rate (5* Awaken x3):
When you unleash a 5+ combo attack with Soul of Divine Protection, increases own counterattack rate by 9% for the next turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 4, 4, 0, 2, 0, 0]
    },
    Rimuru8: {
        Name: "Rimuru Tempest [Swordsmanship Forge]",
        Art: "https://i.imgur.com/kftcjTW.png",
        Icon: "https://i.imgur.com/T983KYV.png",
        Type: "https://i.imgur.com/pzX6NRL.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Sword",
        Rarity: 4,
        MinHp: 6025,
        MaxHp: 6025,
        MinAtk: 2507,
        MaxAtk: 2507,
        MinDef: 2474,
        MaxDef: 2474,
        MaxOutput: 300,
        Town1: "Cafe +30%",
        Town2: "Training Ground +10%",
        Secret: `Binding Hell Flare Lv.MAX:
Single-target dark magic attack for 435%.`,
        SecretType: "Single",
        Skill1: `Forge Result Lv.1/Lv.10:
Increases all allies' ATK by 20%/25% (Turns: 1).
Lv.1/Lv.10 Cost: 65/55`,
        Skill1Icon: "",
        Skill2: `Anti-magic Wave Lv.1/Lv.10:
Decreases a single target's pierce resistance by 10%/20% (Turns: 2).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Soul Combo - Pierce Rate UP (5* Awaken x1):
When you unleash a 4+ combo attack with Soul of Secrets, increases own pierce rate by 5% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - Pierce Rate UP (5* Awaken x3):
When you unleash a 4+ combo attack with Soul of Secrets, increases own pierce rate by 8% for the next turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 2, 0, 0, 4, 0, 0]
    },
    Myulan1: {
        Name: "Myulan [Leisurely Lady]",
        Art: "https://i.imgur.com/ruxslcA.png",
        Icon: "https://i.imgur.com/HIUNb4E.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Greatsword",
        Rarity: 4,
        MinHp: 7355,
        MaxHp: 7355,
        MinAtk: 2169,
        MaxAtk: 2169,
        MinDef: 2179,
        MaxDef: 2179,
        MaxOutput: 300,
        Town1: "Clothing Store +30%",
        Town2: "Cafe +10%",
        Secret: `Confection Burst Lv.MAX:
All-target light magic attack for 260%.`,
        SecretType: "All",
        Skill1: `Destiny Rendezvous Lv.1/Lv.10:
Changes Soul of Skills x2 into Soul of Secrets. Increases all Soul of Secrets gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `It's a Date Lv.1/Lv.10:
Descreases all targets' critical damage by 20%/30% (Turns: 2).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Effect - Guard Power UP (5* Awaken x1):
When affected by Guard Rate UP, increases own guard power by 6% at start of turn (available in support formation).`,
        Trait1A: `Effect - Guard Power UP (5* Awaken x3):
When affected by Guard Rate UP, increases own guard power by 9% at start of turn (available in support formation).`,
        Stats: [2, 8, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Shinsha1: {
        Name: "Shinsha [Precocious Bride]",
        Art: "https://i.imgur.com/ilNQpEp.png",
        Icon: "https://i.imgur.com/R73eFTZ.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Fist",
        Rarity: 4,
        MinHp: 7376,
        MaxHp: 7376,
        MinAtk: 2176,
        MaxAtk: 2176,
        MinDef: 2174,
        MaxDef: 2174,
        MaxOutput: 300,
        Town1: "Clothing Store +30%",
        Town2: "Restaurant +10%",
        Secret: `Happyness Road Lv.MAX:
All-target light magic attack for 260%.`,
        SecretType: "All",
        Skill1: `Flower Confetti Lv.1/Lv.10:
Increases all allies' light ATK by 5%/15% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Bouquet Toss Lv.1/Lv.10:
Changes Soul of Divine Protection x1 into Soul of Skills. Increases Soul of Skills' skill point increase by 10%/20% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Soul Combo - Critical Rate UP (5* Awaken x1):
When you unleash a 4+ combo attack with Soul of Skills, increases own critical rate by 5% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - Critical Rate UP (5* Awaken x3):
When you unleash a 4+ combo attack with Soul of Skills, increases own critical rate by 8% for the next turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 2, 0, 0, 4, 0, 0]
    },
    Shuna5: {
        Name: "Shuna [The Holy Sunrise]",
        Art: "https://i.imgur.com/jTee43O.png",
        Icon: "https://i.imgur.com/soQ19j8.png",
        Type: "https://i.imgur.com/QndVudD.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Tome",
        Rarity: 4,
        MinHp: 7355,
        MaxHp: 7355,
        MinAtk: 2184,
        MaxAtk: 2184,
        MinDef: 2153,
        MaxDef: 2153,
        MaxOutput: 300,
        Town1: "Clothing Store +30%",
        Town2: "Field +10%",
        Secret: `New Dawn Lv.MAX:
All-target fire magic attack for 260%.`,
        SecretType: "All",
        Skill1: `Brilliant Dawn Lv.1/Lv.10:
Changes Soul of Skills x2 into Soul of Divine Protection. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Prayer of Plenty Lv.1/Lv.10:
Recovers all allies from Poison. Increases own poison evasion rate by 5%/10% (Turns: 3).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Soul Combo - Counter Power DOWN (5* Awaken x1):
When you unleash a 5+ combo attack with Soul of Divine Protection, decreases all targets' counter power by 8% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - Counter Power DOWN (5* Awaken x3):
When you unleash a 5+ combo attack with Soul of Divine Protection, decreases all targets' counter power by 12% for the next turn (available in support formation).`,
        Stats: [2, 0, 0, 8, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Shion4: {
        Name: "Shion [The Bold Servant]",
        Art: "https://i.imgur.com/wpWVxi0.png",
        Icon: "https://i.imgur.com/d1sbZFd.png",
        Type: "https://i.imgur.com/pQYVkI3.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Hammer",
        Rarity: 4,
        MinHp: 7349,
        MaxHp: 7349,
        MinAtk: 2177,
        MaxAtk: 2177,
        MinDef: 2161,
        MaxDef: 2161,
        MaxOutput: 300,
        Town1: "Restaurant +30%",
        Town2: "Clothing Store +10%",
        Secret: `Holy Circle Lv.MAX:
All-target wind physical attack for 260%.`,
        SecretType: "All",
        Skill1: `Dynamic Cooking Lv.1/Lv.10:
Heals self by 20%/25% of own max HP. Increases Soul of Skills damage until the end of battle by 5% (Max: 100%).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Destructive Cleaning Lv.1/Lv.10:
Increases all allies' pierce resistance by 20%/25% (Turns: 2).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `HP - Pierce Power UP 2 (5* Awaken x1):
When you have 75% or more HP, increases own pierce power by 8% at start of turn (available in support formation).`,
        Trait1A: `HP - Pierce Power UP 2 (5* Awaken x3):
When you have 75% or more HP, increases own pierce power by 12% at start of turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 8, 0]
    },
    Frey1: {
        Name: "Frey [The Sky Queen]",
        Art: "https://i.imgur.com/99ufpC4.png",
        Icon: "https://i.imgur.com/Olkblw6.png",
        Type: "https://i.imgur.com/z8bnSYg.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Tome",
        Rarity: 4,
        MinHp: 7316,
        MaxHp: 7316,
        MinAtk: 2213,
        MaxAtk: 2213,
        MinDef: 2124,
        MaxDef: 2124,
        MaxOutput: 300,
        Town1: "Mountain Supply Corps Base +30%",
        Town2: "Cafe +10%",
        Secret: `Queen's Embrace Lv.MAX:
Single-target space magic attack for 435%.`,
        SecretType: "Single",
        Skill1: `Heavenly Highness Lv.1/Lv.10:
Transfer own soul card x2 to another vanguard character. Increases all souls' protection gauge increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Swift Wing Lv.1/Lv.10:
Changes Soul of Skills and Soul of Secrets x1 each into Soul of Divine Protection. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 40/30`,
        Skill2Icon: "",
        Trait1: `Soul Combo - Enhance Counterattack Rate 2 (5* Awaken x1):
When you unleash a 4+ combo attack with Soul of Skills, increases own counterattack rate by 4% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - Enhance Counterattack Rate 2 (5* Awaken x3):
When you unleash a 4+ combo attack with Soul of Skills, increases own counterattack rate by 6% for the next turn (available in support formation).`,
        Stats: [2, 8, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Grucius1: {
        Name: "Grucius [Lupine Fighter]",
        Art: "https://i.imgur.com/wRngPaM.png",
        Icon: "https://i.imgur.com/maq96nT.png",
        Type: "https://i.imgur.com/z8bnSYg.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Sword",
        Rarity: 4,
        MinHp: 6010,
        MaxHp: 6010,
        MinAtk: 2432,
        MaxAtk: 2432,
        MinDef: 2432,
        MaxDef: 2432,
        MaxOutput: 300,
        Town1: "Tavern +30%",
        Town2: "Ocean Supply Corps Base +10%",
        Secret: `Beast Bullet Lv.MAX:
Single-target spacephysical attack for 435%.`,
        SecretType: "Single",
        Skill1: `Lupine Strike Lv.1/Lv.10:
Changes Soul of Skills x1 into Soul of Divine Protection. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Knife Thrower Lv.1/Lv.10:
Decreases a single target's physical attack resistance by 30%/40% (Turns: 1).
Lv.1/Lv.10 Cost: 65/55`,
        Skill2Icon: "",
        Trait1: `Effect - Guard Power DOWN (5* Awaken x1):
When affected by Critical Damage UP, decreases all targets' guard power by 3% at start of turn (available in support formation)`,
        Trait1A: `Effect - Guard Power DOWN (5* Awaken x3):
When affected by Critical Damage UP, decreases all targets' guard power by 5% at start of turn (available in support formation)`,
        Stats: [2, 0, 0, 2, 0, 0, 4, 4, 0, 2, 0, 0]
    },
    Benimaru3: {
        Name: "Benimaru [Valiant Kijin]",
        Art: "https://i.imgur.com/pOC2Ulr.png",
        Icon: "https://i.imgur.com/WhE37WV.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Katana",
        Rarity: 4,
        MinHp: 5787,
        MaxHp: 5787,
        MinAtk: 2711,
        MaxAtk: 2711,
        MinDef: 2161,
        MaxDef: 2161,
        MaxOutput: 300,
        Town1: "Restaurant +30%",
        Town2: "Mountain Supply Corps Base +10%",
        Secret: `Detonating Flash Lv.MAX:
All-target light physical attack for 260%.`,
        SecretType: "All",
        Skill1: `Lion Dance Lv.1/Lv.10:
Increases own critical rate by 80%/100% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Fair and Square Lv.1/Lv.10:
Increases all allies' critical resistance by 40%/50% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `HP - Pierce Rate Up 2 (5* Awaken x1):
When you have max HP, increases own pierce rate by 8% at start of turn (available in support formation).`,
        Trait1A: `HP - Pierce Rate Up 2 (5* Awaken x3):
When you have max HP, increases own pierce rate by 12% at start of turn (available in support formation).`,
        Stats: [2, 8, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Ranga3: {
        Name: "Ranga [Loyal Wolf]",
        Art: "https://i.imgur.com/K7LHBvp.png",
        Icon: "https://i.imgur.com/AAwN24v.png",
        Type: "https://i.imgur.com/pQYVkI3.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Fist",
        Rarity: 4,
        MinHp: 5783,
        MaxHp: 5783,
        MinAtk: 2713,
        MaxAtk: 2713,
        MinDef: 2158,
        MaxDef: 2158,
        MaxOutput: 300,
        Town1: "Digsite for Training Magistones +30%",
        Town2: "Mountain Supply Corps Base +10%",
        Secret: `Sonic Wolf Lv. MAX:
Single-target wind magic attack for 435%.`,
        SecretType: "Single",
        Skill1: `Wild Run Lv.1/Lv.10:
Changes Soul of Secrets x1 into Soul of Divine Protection. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Crowd Work Lv.1/Lv.10:
Increases all allies' critical rate by 15%/25% (Turns: 1).
Lv.1/Lv.10 Cost: 65/55`,
        Skill2Icon: "",
        Trait1: `HP - Critical Rate UP 2 (5* Awaken x1):
When you have 50% or lower HP, increases own critical rate by 6% at start of turn (available in support formation).`,
        Trait1A: `HP - Critical Rate UP 2 (5* Awaken x3):
When you have 50% or lower HP, increases own critical rate by 9% at start of turn (available in support formation).`,
        Stats: [4, 0, 0, 4, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Yuuki1: {
        Name: "Yuuki Kagurazaka [Grandmaster]",
        Art: "https://i.imgur.com/mh2veQd.png",
        Icon: "https://i.imgur.com/yvcGF0I.png",
        Type: "https://i.imgur.com/NchScWh.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Fist",
        Rarity: 4,
        MinHp: 5795,
        MaxHp: 5795,
        MinAtk: 2713,
        MaxAtk: 2713,
        MinDef: 2151,
        MaxDef: 2151,
        MaxOutput: 300,
        Town1: "Digsite for Attack Magistones +30%",
        Town2: "Ocean Supply Corps Base +10%",
        Secret: `Sonic Impact Lv.MAX:
Single-target water physical attack for 435%.`,
        SecretType: "Single",
        Skill1: `Oracle's Card Lv.1/Lv.10:
Changes Soul of Divine Protection x2 into Soul of Skills. Increases all Soul of Skills gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Mind Veil Lv.1/Lv.10:
Decreases a single target's critical damage by 10%/20% (Turns: 3).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Effect - Guard Rate UP (5* Awaken x1):
When affected by Critical Resistance UP, increases own guard rate by 8% at start of turn (available in support formation).`,
        Trait1A: `Effect - Guard Rate UP (5* Awaken x3):
When affected by Critical Resistance UP, increases own guard rate by 12% at start of turn (available in support formation).`,
        Stats: [2, 8, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Phobio1: {
        Name: "Phobio [Leopard Fang]",
        Art: "https://i.imgur.com/22heF7B.png",
        Icon: "https://i.imgur.com/PikL46R.png",
        Type: "https://i.imgur.com/QndVudD.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Fist",
        Rarity: 4,
        MinHp: 5783,
        MaxHp: 5783,
        MinAtk: 2719,
        MaxAtk: 2719,
        MinDef: 2150,
        MaxDef: 2150,
        MaxOutput: 300,
        Town1: "Digsite for Attack Magistones +30%",
        Town2: "Farm +10%",
        Secret: `Leopard Fang Flaming Palm Lv.MAX:
All-target fire magic attack for 260%.`,
        SecretType: "All",
        Skill1: `Thrill of the Hunt Lv.1/Lv.10:
Changes Soul of Skills x2 into Soul of Secrets. Increases all Soul of Secrets gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Leopard's Claw Lv.1/Lv.10:
Decreases a single target's critical resistance by 15%/25% (Turns: 2).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Soul Combo - Pierce Power UP 2 (5* Awaken x1):
When you unleash a 5+ combo attack with Soul of Secrets, increases own pierce power by 6% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - Pierce Power UP 2 (5* Awaken x3):
When you unleash a 5+ combo attack with Soul of Secrets, increases own pierce power by 9% for the next turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 8, 0]
    },
    Benimaru4: {
        Name: "Benimaru [Next Clan Leader]",
        Art: "https://i.imgur.com/14aW8sz.png",
        Icon: "https://i.imgur.com/3Nu4kOl.png",
        Type: "https://i.imgur.com/QndVudD.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Sword",
        Rarity: 4,
        MinHp: 5783,
        MaxHp: 5783,
        MinAtk: 2720,
        MaxAtk: 2720,
        MinDef: 2147,
        MaxDef: 2147,
        MaxOutput: 300,
        Town1: "Tavern +30%",
        Town2: "Farm +10%",
        Secret: `Spirit Slayer Lv.MAX:
Single-target fire physical attack for 435%.`,
        SecretType: "Single",
        Skill1: `Dancing Swords Lv.1/Lv.10:
Increases own ATK by 15%/20% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Vengeance Flourishing Lv.1/Lv.10:
Increases all allies' stun evasion rate by 90%/100% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill2Icon: "",
        Trait1: `Effect - Pierce Power UP 2 (5* Awaken x1):
When 1 or more enemies are affected by Pierce Resistance DOWN, increases own pierce power by 5% at start of turn (available in support formation).`,
        Trait1A: `Effect - Pierce Power UP 2 (5* Awaken x3):
When 1 or more enemies are affected by Pierce Resistance DOWN, increases own pierce power by 8% at start of turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 4, 4, 0, 2, 0, 0]
    },
    Souei4: {
        Name: "Souei [Instant Spy]",
        Art: "https://i.imgur.com/jB6H9uK.png",
        Icon: "https://i.imgur.com/Owj1Or2.png",
        Type: "https://i.imgur.com/pzX6NRL.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Katana",
        Rarity: 4,
        MinHp: 5788,
        MaxHp: 5788,
        MinAtk: 2720,
        MaxAtk: 2720,
        MinDef: 2141,
        MaxDef: 2141,
        MaxOutput: 300,
        Town1: "Farm +30%",
        Town2: "Training Ground +10%",
        Secret: `Shredding Darkness Lv.MAX:
Single-target dark physical attack for 435%.`,
        SecretType: "Single",
        Skill1: `Free Thread Lv.1/Lv.10:
Changes Soul of Skills x2 into Soul of Secrets. Increases all Soul of Secrets gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Dark Ogre Lv.1/Lv.10:
Recovers all allies from Poison. Increases own poison evasion rate by 5%/10% (Turns: 3).
Lv.1/Lv.10 Cost: 40/30`,
        Skill2Icon: "",
        Trait1: `HP - Critical Damage UP (5* Awaken x1):
When you have 50% or lower HP, increases own critical damage by 5% at start of turn (available in support formation).`,
        Trait1A: `HP - Critical Damage UP (5* Awaken x3):
When you have 50% or lower HP, increases own critical damage by 8% at start of turn (available in support formation).`,
        Stats: [8, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Shion5: {
        Name: "Shion [Purple Smash]",
        Art: "https://i.imgur.com/YSAgUQo.png",
        Icon: "https://i.imgur.com/GP9OFZs.png",
        Type: "https://i.imgur.com/z8bnSYg.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Hammer",
        Rarity: 4,
        MinHp: 5783,
        MaxHp: 5783,
        MinAtk: 2722,
        MaxAtk: 2722,
        MinDef: 2140,
        MaxDef: 2140,
        MaxOutput: 300,
        Town1: "Clothing Store +30%",
        Town2: "Forest Supply Corps Base +10%",
        Secret: `Purple Iron Hammer Lv.MAX:
All-target space physical attack for 260%.`,
        SecretType: "All",
        Skill1: `Destructive Strike Lv.1/Lv.10:
Decrease all targets' DEF by 25%/30% (Turns: 2).
Lv.1/Lv.10 Cost: 65/55`,
        Skill1Icon: "",
        Skill2: `Furious Shake Lv.1/Lv.10:
Increases own guard penetration by 60%/70% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Soul Combo - Pierce Power UP (5* Awaken x1):
When you unleash a 4+ combo attack with Soul of Skills, increases own pierce power by 4% for the next turn (available in support formation).`,
        Trait1A: `Soul Combo - Pierce Power UP (5* Awaken x3):
When you unleash a 4+ combo attack with Soul of Skills, increases own pierce power by 6% for the next turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 8, 0, 2, 0, 0, 2, 0, 0]
    },
    Benimaru5: {
        Name: "Benimaru [Crimson Ogre Warrior]",
        Art: "https://i.imgur.com/hDyFSBR.png",
        Icon: "https://i.imgur.com/DsI1r5V.png",
        Type: "https://i.imgur.com/pzX6NRL.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Katana",
        Rarity: 4,
        MinHp: 5713,
        MaxHp: 5713,
        MinAtk: 2355,
        MaxAtk: 2355,
        MinDef: 2355,
        MaxDef: 2355,
        MaxOutput: 300,
        Town1: "Tavern +30%",
        Town2: "Mountain Supply Corps Base +10%",
        Secret: `Dark Flame Flash:
Single-target dark physical attack for 435%.`,
        SecretType: "Single",
        Skill1: `Battle Rush Lv.1/Lv.10:
Decreases a single target's DEF by 10%/15% (Turns: 1). Increases own critical rate by 15% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Dark Tactics Lv.1/Lv.10:
Increases all allies' stun evasion rate by 90%/100% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill2Icon: "",
        Trait1: `HP - Lash Out (5* Awaken x1):
When you have 75% or higher HP, increasess own counter power by 4% at start of turn (available in support formation).`,
        Trait1A: `HP - Lash Out (5* Awaken x3):
When you have 75% or higher HP, increasess own counter power by 6% at start of turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 4, 4, 0, 2, 0, 0]
    },
    Rigurd1: {
        Name: "Rigurd [Hobgoblin Monarch]",
        Art: "https://i.imgur.com/0kTbVS5.png",
        Icon: "https://i.imgur.com/d0LJevx.png",
        Type: "https://i.imgur.com/pQYVkI3.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Fist",
        Rarity: 3,
        MinHp: 5679,
        MaxHp: 5679,
        MinAtk: 2134,
        MaxAtk: 2134,
        MinDef: 2803,
        MaxDef: 2803,
        MaxOutput: 450,
        Town1: "Digsite for Defense Magistones +30%",
        Town2: "Forest Supply Corps Base +10%",
        Secret: `Muscle Strike Lv.MAX:
Single-target wind physical attack for 420%.`,
        SecretType: "Single",
        Skill1: `Macho Armor Lv.1/Lv.10:
Increases own guard rate by 30%/50% (Turns: 3). Increases own DEF by 30% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Pump Up Lv.1/Lv.10:
Increases all allies' guard penetration by 40%/50% (Turns: 1).
Lv.1/Lv.10 Cost: 40/30`,
        Skill2Icon: "",
        Trait1: `Troop - Guard Rate UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases own guard rate by 3% during battle (available in support formation).`,
        Trait1A: `Troop - Guard Rate UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases own guard rate by 5% during battle (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 4, 4, 0, 0, 0, 0]
    },
    Alice2: {
        Name: "Alice Rondo [Golem Master]",
        Art: "https://i.imgur.com/Lds5tV8.png",
        Icon: "https://i.imgur.com/1hhxCwj.png",
        Type: "https://i.imgur.com/z8bnSYg.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Tome",
        Rarity: 3,
        MinHp: 5679,
        MaxHp: 5679,
        MinAtk: 2129,
        MaxAtk: 2129,
        MinDef: 2808,
        MaxDef: 2808,
        MaxOutput: 450,
        Town1: "Training Ground +30%",
        Town2: "Field +10%",
        Secret: `Puppet Rondo Lv.MAX:
Single-target space magic attack for 420%.`,
        SecretType: "Single",
        Skill1: `Sad Russian Doll Lv.1/Lv.10:
Chance to stun a single target: 10%/30% (Turns: 1).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `The Figurine's Curse Lv.1/Lv.10:
Decreases a single target's counterattack rate by 20%/30% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Troop - Guard Rate UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases own guard rate by 3% during battle (available in support formation).`,
        Trait1A: `Troop - Guard Rate UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases own guard rate by 5% during battle (available in support formation).`,
        Stats: [2, 0, 0, 8, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Kurobe2: {
        Name: "Kurobe [Immobile Black Ogre]",
        Art: "https://i.imgur.com/2GSfgkc.png",
        Icon: "https://i.imgur.com/5K05JMH.png",
        Type: "https://i.imgur.com/QndVudD.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Hammer",
        Rarity: 3,
        MinHp: 5679,
        MaxHp: 5679,
        MinAtk: 2125,
        MaxAtk: 2125,
        MinDef: 2811,
        MaxDef: 2811,
        MaxOutput: 450,
        Town1: "Digsite for Stamina Magistones +30%",
        Town2: "Farm +10%",
        Secret: `Heavy Blow Lv.MAX:
Single-target fire physical attack for 420%.`,
        SecretType: "Single",
        Skill1: `Flint Lv.1/Lv.10:
Increases all allies' pierce resistance by 40%/50% (Turns: 2).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Repair Equipment Lv.1/Lv.10:
Changes Soul of Divine Protection x1 into Soul of Secrets. Increases all Soul of Secrets gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `HP - Guard Power UP (5* Awaken x1):
When you have max HP, increases own guard power by 6% at start of turn (available in support formation).`,
        Trait1A: `HP - Guard Power UP (5* Awaken x3):
When you have max HP, increases own guard power by 9% at start of turn (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 4, 4, 0, 2, 0, 0]
    },
    Gale1: {
        Name: "Gale Gibson [Earth Spirit Lodger]",
        Art: "https://i.imgur.com/VsoXKTk.png",
        Icon: "https://i.imgur.com/GtQP5c1.png",
        Type: "https://i.imgur.com/AHPti72.png",
        AtkType: "https://i.imgur.com/tOS4FvO.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Weapon: "Tome",
        Rarity: 3,
        MinHp: 5679,
        MaxHp: 5679,
        MinAtk: 2133,
        MaxAtk: 2133,
        MinDef: 2801,
        MaxDef: 2801,
        MaxOutput: 450,
        Town1: "Training Ground +30%",
        Town2: "Digsite for Defense Magistones +10%",
        Secret: `Grand Blaster Lv.MAX:
Single-target earth magic attack for 420%.`,
        SecretType: "Single",
        Skill1: `Shield Field Lv.1/Lv.10:
Increases all allies' counter power by 10%/20% (Turns: 2).
Lv.1/Lv.10 Cost: 35/25`,
        Skill1Icon: "",
        Skill2: `Gardener Combat Lv.1/Lv.10:
Increases all allies' pierce resistance by 40%/50% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Troop - Pierce Rate UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases own pierce rate by 3% during battle (available in support formation).`,
        Trait1A: `Troop - Pierce Rate UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases own pierce rate by 5% during battle (available in support formation).`,
        Stats: [2, 0, 0, 2, 0, 0, 8, 0, 0, 2, 0, 0]
    },
    Ryota1: {
        Name: "Ryota Sekiguchi [Harmonizer of Insanity and Calm]",
        Art: "https://i.imgur.com/whRd2e0.png",
        Icon: "https://i.imgur.com/Uneh3sn.png",
        Type: "https://i.imgur.com/NchScWh.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Weapon: "Fist",
        Rarity: 3,
        MinHp: 5719,
        MaxHp: 5719,
        MinAtk: 2291,
        MaxAtk: 2291,
        MinDef: 2468,
        MaxDef: 2468,
        MaxOutput: 450,
        Town1: "Training Ground +30%",
        Town2: "Ocean Supply Corps Base +10%",
        Secret: `Berserk Break Lv.MAX:
Single-target water physical attack for 420%.`,
        SecretType: "Single",
        Skill1: `Support Stance Lv.1/Lv.10:
Increases all allies' max HP by 10%/20% (Turns: 3).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Breezy Reflection Lv.1/Lv.10:
Decreases all targets' counterattack resistance by 10%/20% (Turns: 2).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `Troop - Pierce Power UP (5* Awaken x1):
When your troop contains 3 or more battle characters, increases own pierce power by 3% during battle (available in support formation).`,
        Trait1A: `Troop - Pierce Power UP (5* Awaken x3):
When your troop contains 3 or more battle characters, increases own pierce power by 5% during battle (available in support formation).`,
        Stats: [2, 8, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Kenya1: {
        Name: "Kenya Misaki [Heroic Vessel]",
        Art: "https://i.imgur.com/QatDpdL.png",
        Icon: "https://i.imgur.com/rFjZCnv.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        AtkType: "https://i.imgur.com/P8lUDX0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Weapon: "Sword",
        Rarity: 3,
        MinHp: 5479,
        MaxHp: 5479,
        MinAtk: 2539,
        MaxAtk: 2539,
        MinDef: 2070,
        MaxDef: 2070,
        MaxOutput: 450,
        Town1: "Training Ground +30%",
        Town2: "Restaurant +10%",
        Secret: `Heroic Braver Lv.MAX:
Single-target light physical attack for 420%.`,
        SecretType: "Single",
        Skill1: `Support of the Spirits Lv.1/Lv.10:
Changes Soul of Secrets x1 into Soul of Divine Protection. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill1Icon: "",
        Skill2: `Concentrated Bonds Lv.1/Lv.10:
Redraws soul in hand. Increases all Soul of Divine Protection gauges' increase by 5%/10% (Turns: 1).
Lv.1/Lv.10 Cost: 25/15`,
        Skill2Icon: "",
        Trait1: `HP - Critical Damage UP 2 (5* Awaken x1):
When you have 50% or higher HP, increases own critical damage by 5% at start of turn (available in support formation).`,
        Trait1A: `HP - Critical Damage UP 2 (5* Awaken x3):
When you have 50% or higher HP, increases own critical damage by 8% at start of turn (available in support formation).`,
        Stats: [8, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
    },
    Milim8: {
        Name: "Milim Nava [Bellicose Dragoneye]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/W6OTYu5.png",
        Icon: "https://i.imgur.com/OQ6kcVD.png",
        Type: "https://i.imgur.com/NchScWh.png",
        SecondType: "https://i.imgur.com/z8bnSYg.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Rarity: 5,
        MinHp: 3585,
        MaxHp: 3585,
        MinAtk: 1164,
        MaxAtk: 1164,
        MinDef: 1471,
        MaxDef: 1471,
        MaxOutput: 220,
        Town1: "Water Magic Device +200%",
        Town2: "Space Magic Device +100%",
        DivineProtection: `Eternal Dragon Empress Lv.MAX:
    Increases all allies' water ATK at start of battle by 16%. Increases all allies' space ATK at start of battle by 8%.`,
        SupportDivineProtection: `Eternal Dragon Empress Lv.MAX:
    Increases all allies' water ATK at start of battle by 16%. Increases all allies' space ATK at start of battle by 8%.`,
        ProtectionSkill: `Drago Changer Lv.1/Lv.10:
    Increases all allies' guard rate by 60%/80% (Turns: 3). Increases Soul of Divine Protection damage until the end of battle by 20% (Max: 100%).`,
        ProtectionSkillIcon: "",
        Trait1: `HP - Critical Resistance (5* Awaken x1):
    When 3 vanguard have 50% or more HP, increases all allies' critical resistance by 10% at start of turn.`,
        Trait1A: `HP - Critical Resistance (5* Awaken x3):
    When 3 vanguard have 50% or more HP, increases all allies' critical resistance by 15% at start of turn.`,
    },
    Elemental1: {
        Name: "Elemental Colossus [Golem]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/Iv7k1gp.png",
        Icon: "https://i.imgur.com/6AmIGRh.png",
        Type: "https://i.imgur.com/AHPti72.png",
        SecondType: "https://i.imgur.com/NchScWh.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Rarity: 5,
        MinHp: 3579,
        MaxHp: 3579,
        MinAtk: 1165,
        MaxAtk: 1165,
        MinDef: 1469,
        MaxDef: 1469,
        MaxOutput: 220,
        Town1: "Earth Magic Device +200%",
        Town2: "Water Magic Device +100%",
        DivineProtection: `Spirit Engineering Crystal Lv.MAX:
    Increases all allies' earth ATK at start of battle by 16%. Increases all allies' water ATK at start of battle by 8%.`,
        SupportDivineProtection: `Spirit Engineering Crystal Lv.MAX:
    Increases all allies' earth ATK at start of battle by 16%. Increases all allies' water ATK at start of battle by 8%.`,
        ProtectionSkill: `Limit Break Lv.1/Lv.10:
    Increases all allies' guard rate by 60%/80% (Turns: 3). Increases all allies' counterattack rate by 60% (Turns: 2).`,
        ProtectionSkillIcon: "",
        Trait1: `HP - Pierce Resistance (5* Awaken x1):
    When 3 vanguard have 50% or more HP, increases all allies' pierce resistance by 10% at the start of turn.`,
        Trait1A: `HP - Pierce Resistance (5* Awaken x3):
    When 3 vanguard have 50% or more HP, increases all allies' pierce resistance by 15% at the start of turn.`,
    },
    Shuna6: {
        Name: "Shuna [The Faithful Housemaid]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/3qnn7Gg.png",
        Icon: "https://i.imgur.com/0sVXae5.png",
        Type: "https://i.imgur.com/pQYVkI3.png",
        SecondType: "https://i.imgur.com/NchScWh.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Rarity: 5,
        MinHp: 3581,
        MaxHp: 3581,
        MinAtk: 1171,
        MaxAtk: 1171,
        MinDef: 1446,
        MaxDef: 1446,
        MaxOutput: 220,
        Town1: "Wind Magic Device +200%",
        Town2: "Water Magic Device +100%",
        DivineProtection: `Training of the Maid Lv.MAX:
    Increases all allies' wind ATK at start of battle by 16%. Increases all allies' water ATK at start of battle by 8%.`,
        SupportDivineProtection: `Training of the Maid Lv.MAX:
    Increases all allies' wind ATK at start of battle by 16%. Increases all allies' water ATK at start of battle by 8%.`,
        ProtectionSkill: `Yuletide Sparkle Lv.1/Lv.10:
    Increases all allies' guard rate by 60%/80% (Turns: 3). Increases all Soul of Skills gauges' increase by 50% (Turns: 3).`,
        ProtectionSkillIcon: "",
        Trait1: `Combo - Pierce Resistance DOWN 2 (5* Awaken x1):
    When the enemy makes a combo attack, increases all allies' pierce resistance by 10% at the start of the next turn.`,
        Trait1A: `Combo - Pierce Resistance DOWN 2 (5* Awaken x3):
    When the enemy makes a combo attack, increases all allies' pierce resistance by 15% at the start of the next turn.`,
    },
    Veldora3: {
        Name: "Veldora Tempest [The Mighty Roar]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/MzhmtrU.png",
        Icon: "https://i.imgur.com/NxON4Pq.png",
        Type: "https://i.imgur.com/z8bnSYg.png",
        SecondType: "https://i.imgur.com/pzX6NRL.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Rarity: 5,
        MinHp: 3084,
        MaxHp: 3084,
        MinAtk: 1368,
        MaxAtk: 1368,
        MinDef: 1289,
        MaxDef: 1289,
        MaxOutput: 220,
        Town1: "Space Magic Device +200%",
        Town2: "Dark Magic Device +100%",
        DivineProtection: `Supreme Flight Lv.MAX:
    Increases all allies' space ATK at start of battle by 16%. Increases all allies' dark ATK at start of battle by 8%.`,
        SupportDivineProtection: `Supreme Flight Lv.MAX:
    Increases all allies' space ATK at start of battle by 16%. Increases all allies' dark ATK at start of battle by 8%.`,
        ProtectionSkill: `Tempest Blaster Lv.1/Lv.10:
    Increases all allies' space ATK until the end of battle by 5%/10% (Unlimited). Increases all souls' skill point increase until the end of battle by 50% (Max: 250%). Increases skill cost limit until the end of battle by 40 (Max: 999).`,
        ProtectionSkillIcon: "",
        Trait1: `HP - ATK UP (5* Awaken x1):
    When 1 or more enemies have 50% or lower HP, increases all allies' ATK by 4% at start of turn.`,
        Trait1A: `HP - ATK UP (5* Awaken x3):
    When 1 or more enemies have 50% or lower HP, increases all allies' ATK by 6% at start of turn.`,
    },
    Shizue3: {
        Name: "Shizue Izawa [Dream Bride]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/HOsDkgT.png",
        Icon: "https://i.imgur.com/cmcJR2T.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        SecondType: "https://i.imgur.com/EWYVugy.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Rarity: 5,
        MinHp: 3065,
        MaxHp: 3065,
        MinAtk: 1350,
        MaxAtk: 1350,
        MinDef: 1317,
        MaxDef: 1317,
        MaxOutput: 220,
        Town1: "Light Magic Device +200%",
        Town2: "Symbol of Protection +100%",
        DivineProtection: `Ceremonial Light Lv.MAX:
    Increases light ATK by 12%. Increases P-ATK by 5%/10%`,
        SupportDivineProtection: `Ceremonial Light Lv.MAX:
    Increases light ATK by 12%. Increases P-ATK by 5%/10%`,
        ProtectionSkill: `Rain Ends Lv.1/Lv.10:
    Changes Soul of Protection and Soul of Secrets x3 each into Soul of SkillsIncreases all allies' pierce rate by 50%/70% (Turns: 2). Effect increases by 5% each time allies use battle skills from the start of battle to the end of Turn 3. Increases Soul of Combos damage by 10% (Turns: 2).`,
        ProtectionSkillIcon: "",
        Trait1: `HP - Pierce Resistance DOWN (5* Awaken x1):
    When 3 vanguard have 75% or more HP, decreases all targets' pierce resistance by 6% at start of turn.`,
        Trait1A: `HP - Pierce Resistance DOWN (5* Awaken x3):
    When 3 vanguard have 75% or more HP, decreases all targets' pierce resistance by 9% at start of turn.`,
    },
    Veldora4: {
        Name: "Veldora Tempest [Storm Dragon]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/IoMmupm.png",
        Icon: "https://i.imgur.com/tge1oxf.png",
        Type: "https://i.imgur.com/pQYVkI3.png",
        SecondType: "https://i.imgur.com/pzX6NRL.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Rarity: 5,
        MinHp: 3062,
        MaxHp: 3062,
        MinAtk: 1316,
        MaxAtk: 1316,
        MinDef: 1316,
        MaxDef: 1316,
        MaxOutput: 220,
        Town1: "Wind Magic Device +200%",
        Town2: "Dark Magic Device +100%",
        DivineProtection: `Ambition of the Four True Dragons Lv.MAX:
    Increases all allies' wind ATK at start of battle by 16%. Increases all allies' dark ATK at start of battle by 8%.`,
        SupportDivineProtection: `Ambition of the Four True Dragons Lv.MAX:
    Increases all allies' wind ATK at start of battle by 16%. Increases all allies' dark ATK at start of battle by 8%.`,
        ProtectionSkill: `Tempest Shout Lv.1/Lv.10:
    Increases skill cost limit until the end of battle by 20/30 (Max: 999). Increases Soul of Combos damage by 10% (Max: 50%). Increases skill points by 30.`,
        ProtectionSkillIcon: "",
        Trait1: `HP - Critical Rate UP (5* Awaken x1):
    When 3 vanguard have 50% or lower HP, increases all allies' critical rate by 8% at start of turn.`,
        Trait1A: `HP - Critical Rate UP (5* Awaken x3):
    When 3 vanguard have 50% or lower HP, increases all allies' critical rate by 12% at start of turn.`,
    },
    Soka1: {
        Name: "Soka [The Lovestruck Maiden]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/Rj9TYq6.png",
        Icon: "https://i.imgur.com/qjERmjP.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        SecondType: "https://i.imgur.com/AHPti72.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Rarity: 5,
        MinHp: 3059,
        MaxHp: 3059,
        MinAtk: 1315,
        MaxAtk: 1315,
        MinDef: 1317,
        MaxDef: 1317,
        MaxOutput: 220,
        Town1: "Light Magic Device +200%",
        Town2: "Earth Magic Device +100%",
        DivineProtection: `Feelings Concealed Lv.Max:
    Increases all allies' light ATK at start of battle by 16%. Increases all allies' earth ATK at start of battle by 8%.`,
        SupportDivineProtection: `Feelings Concealed Lv.Max:
    Increases all allies' light ATK at start of battle by 16%. Increases all allies' earth ATK at start of battle by 8%.`,
        ProtectionSkill: `Pure Emotion Lv.1/Lv.10:
    Increases all allies' guard rate by 60%/80% (Turns: 3). Decreases the skill cost by 20 for vanguard allies (Cannot go below each skill's initial cost). Increases Soul of Secrets secret skill gauge increase by 20% (Turns: 3).`,
        ProtectionSkillIcon: "",
        Trait1: `HP - Critical Resistance (5* Awaken x1):
    When 3 vanguard have 50% or more HP, increases all allies' critical resistance by 10% at start of turn.`,
        Trait1A: `HP - Critical Resistance (5* Awaken x3):
    When 3 vanguard have 50% or more HP, increases all allies' critical resistance by 15% at start of turn.`,
    },
    Rimuru9: {
        Name: "Rimuru Tempest [Stately Sovereign]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/tYqOAy3.png",
        Icon: "https://i.imgur.com/sp0TBou.png",
        Type: "https://i.imgur.com/pzX6NRL.png",
        SecondType: "https://i.imgur.com/z8bnSYg.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Rarity: 5,
        MinHp: 3529,
        MaxHp: 3529,
        MinAtk: 1295,
        MaxAtk: 1295,
        MinDef: 1144,
        MaxDef: 1144,
        MaxOutput: 220,
        Town1: "Dark Magic Device +200%",
        Town2: "Space Magic Device +100%",
        DivineProtection: `Demon Lord's Resolve Lv.MAX:
    Increases all allies' dark ATK at start of battle by 16%. Increases all allies' space ATK at start of battle by 8%.`,
        SupportDivineProtection: `Demon Lord's Resolve Lv.MAX:
    Increases all allies' dark ATK at start of battle by 16%. Increases all allies' space ATK at start of battle by 8%.`,
        ProtectionSkill: `Tempest Guardian Lv.1/Lv.10:
    Increases all allies' DEF by 40%/50% (Turns: 2). Increases all allies' dark ATK by 15% (Turns: 2). Decreases the skill cost by 20 for vanguard allies (Cannot go below each skill's initial cost).`,
        ProtectionSkillIcon: "",
        Trait1: `Effect - DEF UP (5* Awaken x1):
    When 1 or more enemies are affected by ATK UP, increases all allies' DEF by 6% at start of turn.`,
        Trait1A: `Effect - DEF UP (5* Awaken x3):
    When 1 or more enemies are affected by ATK UP, increases all allies' DEF by 9% at start of turn.`,
    },
    Hakurou3: {
        Name: "Hakurou [Ultimate Blade]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/Di1wAQv.png",
        Icon: "https://i.imgur.com/QGp1ZJS.png",
        Type: "https://i.imgur.com/AHPti72.png",
        SecondType: "https://i.imgur.com/QndVudD.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Rarity: 5,
        MinHp: 3060,
        MaxHp: 3060,
        MinAtk: 1328,
        MaxAtk: 1328,
        MinDef: 1300,
        MaxDef: 1300,
        MaxOutput: 220,
        Town1: "Earth Magic Device +200%",
        Town2: "Fire Magic Device +100%",
        DivineProtection: `Steadfast Swordsman Lv.MAX:
    Increases all allies' earth ATK at the start of battle by 16%. Increases all allies ' fire ATK at start of battle by 8%.`,
        SupportDivineProtection: `Steadfast Swordsman Lv.MAX:
    Increases all allies' earth ATK at the start of battle by 16%. Increases all allies ' fire ATK at start of battle by 8%.`,
        ProtectionSkill: `World Cutter Lv.1/Lv.10:
    Changes Soul of Skills and Soul of Divine Protection x3 each into Soul of Secrets. Increases skill points by 30/40.`,
        ProtectionSkillIcon: "",
        Trait1: `HP - DEF DOWN (5* Awaken x1):
    When 3 vanguard have 75% or more HP, decreases all targets' DEF by 4% at start of turn.`,
        Trait1A: `HP - DEF DOWN (5* Awaken x3):
    When 3 vanguard have 75% or more HP, decreases all targets' DEF by 6% at start of turn.`,
    },
    Rimuru10: {
        Name: "Rimuru Tempest [The Chancellor of Prosperity]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/Sx3A82b.png",
        Icon: "https://i.imgur.com/1T3F6vl.png",
        Type: "https://i.imgur.com/QndVudD.png",
        SecondType: "https://i.imgur.com/pQYVkI3.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Rarity: 5,
        MinHp: 3045,
        MaxHp: 3045,
        MinAtk: 1321,
        MaxAtk: 1321,
        MinDef: 1309,
        MaxDef: 1309,
        MaxOutput: 220,
        Town1: "Fire Magic Device +200%",
        Town2: "Wind Magic Device +100%",
        DivineProtection: `Hour of Prosperity Lv.MAX:
    Increase all allies' fire ATK at the start of battle by 16%. Increase all allies' wind ATK at start of battle by 8%.`,
        SupportDivineProtection: `Hour of Prosperity Lv.MAX:
    Increase all allies' fire ATK at the start of battle by 16%. Increase all allies' wind ATK at start of battle by 8%.`,
        ProtectionSkill: `Tempest Daybreak Lv.1/Lv.10:
    Decrease all targets' fire resistance by 20%/30% (Turns: 3). Increase Soul of Divine Protection gauges' increase until the end of the battle by 20% (Max: 100%). Increase skill cost limit until the end of battle by 25 (Max: 999).`,
        ProtectionSkillIcon: "",
        Trait1: `HP - DEF DOWN (5* Awaken x1):
    When 3 vanguard have 50% or more HP, decreases all targets' DEF by 3% at start of turn.`,
        Trait1A: `HP - DEF DOWN (5* Awaken x3):
    When 3 vanguard have 50% or more HP, decreases all targets' DEF by 5% at start of turn.`,
    },
    Orc1: {
        Name: "Orc Disaster [Starved]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/fkdI43E.png",
        Icon: "https://i.imgur.com/1H4E9N5.png",
        Type: "https://i.imgur.com/pzX6NRL.png",
        SecondType: "https://i.imgur.com/QndVudD.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Rarity: 5,
        MinHp: 3051,
        MaxHp: 3051,
        MinAtk: 1312,
        MaxAtk: 1312,
        MinDef: 1311,
        MaxDef: 1311,
        MaxOutput: 220,
        Town1: "Dark Magic Device +200%",
        Town2: "Fire Magic Device +100%",
        DivineProtection: `Unending Thirst Lv.MAX:
    Increases all allies' dark ATK at start of battle by 16%. Increases all allies' fire ATK at start of battle by 8%.`,
        SupportDivineProtection: `Unending Thirst Lv.MAX:
    Increases all allies' dark ATK at start of battle by 16%. Increases all allies' fire ATK at start of battle by 8%.`,
        ProtectionSkill: `Chaos Control Lv.1/Lv.10:
    Increases skill cost limit until the end of battle by 10/20 (Max: 999). Changes Soul of Skills into Soul of Secrets. Increases skill points by 20.`,
        ProtectionSkillIcon: "",
        Trait1: `Effect - Pierce Resistance DOWN (5* Awaken x1):
    When 1 or more enemies are affected by DEF UP, decreases all targets' pierce resistance by 7% at start of turn.`,
        Trait1A: `Effect - Pierce Resistance DOWN (5* Awaken x3):
    When 1 or more enemies are affected by DEF UP, decreases all targets' pierce resistance by 11% at start of turn.`,
    },
    Charybdis1: {
        Name: "Charybdis [Swimming Calamity]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/fkdI43E.png",
        Icon: "https://i.imgur.com/Z3Ywuyj.png",
        Type: "https://i.imgur.com/z8bnSYg.png",
        SecondType: "https://i.imgur.com/pQYVkI3.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Rarity: 5,
        MinHp: 3058,
        MaxHp: 3058,
        MinAtk: 1309,
        MaxAtk: 1309,
        MinDef: 1310,
        MaxDef: 1310,
        MaxOutput: 220,
        Town1: "Space Magic Device +200%",
        Town2: "Wind Magic Device +100%",
        DivineProtection: `Swimming Calamity Lv.MAX:
    Increases all allies' space ATK at start of battle by 16%. Increases all allies' wind ATK at start of battle by 8%.`,
        SupportDivineProtection: `Swimming Calamity Lv.MAX:
    Increases all allies' space ATK at start of battle by 16%. Increases all allies' wind ATK at start of battle by 8%.`,
        ProtectionSkill: `Wicked Eye Lv.1/Lv.10:
    Increases skill cost limit until end of battle by 30/40 (Max: 999). Increases all Soul of Skills gauges' increase by 150% (Turns: 3).`,
        ProtectionSkillIcon: "",
        Trait1: `Effect - DEF DOWN (5* Awaken x1):
    When 1 or more enemies are affected by Guard Rate UP, decreases all targets' DEF by 4% at start of turn.`,
        Trait1A: `Effect - DEF DOWN (5* Awaken x3):
    When 1 or more enemies are affected by Guard Rate UP, decreases all targets' DEF by 6% at start of turn.`,
    },
    Chloe2: {
        Name: "Chloe Aubert [Quiet Knight Girl]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/xBSHDYV.png",
        Icon: "https://i.imgur.com/cSFbENz.png",
        Type: "https://i.imgur.com/NchScWh.png",
        SecondType: "https://i.imgur.com/hX15sR0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Rarity: 5,
        MinHp: 3474,
        MaxHp: 3474,
        MinAtk: 1290,
        MaxAtk: 1290,
        MinDef: 1136,
        MaxDef: 1136,
        MaxOutput: 220,
        Town1: "Water Magic Device +200%",
        Town2: "Light Magic Device +100%",
        DivineProtection: `Just Path Lv.MAX:
    Increases all allies' water ATK at the start of battle by 16%. Increases all allies ' light ATK at start of battle by 8%.`,
        SupportDivineProtection: `Just Path Lv.MAX:
    Increases all allies' water ATK at the start of battle by 16%. Increases all allies ' light ATK at start of battle by 8%.`,
        ProtectionSkill: `Peaceful Mind Lv.1/Lv.10:
    Increases Activating Soul of Combos damage by 30%/40% (Turns: 3). Change Soul of Secrets into Soul of Skills. Increases skill cost limit until the end of battle by 40 (Max:999)`,
        ProtectionSkillIcon: "",
        Trait1: `HP - DEF DOWN (5* Awaken x1):
    When 3 vanguard have 50% or more HP, decreases all targets' DEF by 3% at start of turn.`,
        Trait1A: `HP - DEF DOWN (5* Awaken x3):
    When 3 vanguard have 50% or more HP, decreases all targets' DEF by 5% at start of turn.`,
    },
    Ifrit1: {
        Name: "Ifrit [Burning Spirit]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/VD64F33.png",
        Icon: "https://i.imgur.com/X07Dq1N.png",
        Type: "https://i.imgur.com/QndVudD.png",
        SecondType: "https://i.imgur.com/hX15sR0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Rarity: 5,
        MinHp: 3471,
        MaxHp: 3471,
        MinAtk: 1285,
        MaxAtk: 1285,
        MinDef: 1129,
        MaxDef: 1129,
        MaxOutput: 220,
        Town1: "Fire Magic Device +200%",
        Town2: "Light Magic Device +100%",
        DivineProtection: `Burning Siege Lv.MAX:
    Increases all allies' fire ATK at start of battle by 16%. Increases all allies' light ATK at start of battle by 8%.`,
        SupportDivineProtection: `Burning Siege Lv.MAX:
    Increases all allies' fire ATK at start of battle by 16%. Increases all allies' light ATK at start of battle by 8%.`,
        ProtectionSkill: `Flame Zone Lv.1/Lv.10:
    Increases all allies' Secret Skill Gauge by 30%/40%. Increases all allies' fire ATK by 15% (Turns: 2).`,
        ProtectionSkillIcon: "",
        Trait1: `HP - DEF DOWN (5* Awaken x1):
    When 3 vanguard have 75% or more HP, decreases all targets' DEF by 4% at start of turn.`,
        Trait1A: `HP - DEF DOWN (5* Awaken x3):
    When 3 vanguard have 75% or more HP, decreases all targets' DEF by 6% at start of turn.`,
    },
    Ramiris2: {
        Name: "Ramiris [Fairy of the Labryrinth]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/0Ia2C6j.png",
        Icon: "https://i.imgur.com/XUqI1Ab.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        SecondType: "https://i.imgur.com/AHPti72.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Rarity: 5,
        MinHp: 3470,
        MaxHp: 3470,
        MinAtk: 1289,
        MaxAtk: 1289,
        MinDef: 1119,
        MaxDef: 1119,
        MaxOutput: 220,
        Town1: "Light Magic Device +200%",
        Town2: "Earth Magic Device +100%",
        DivineProtection: `Prank Illusion Lv.MAX:
    Increases all allies' light ATK at start of battle by 16%. Increases all allies' earth ATK at start of battle by 8%.`,
        SupportDivineProtection: `Prank Illusion Lv.MAX:
    Increases all allies' light ATK at start of battle by 16%. Increases all allies' earth ATK at start of battle by 8%.`,
        ProtectionSkill: `Small World Lv.1/Lv.10:
    Changes Soul of Secrets into Soul of Divine Protection. Increases all allies' light ATK by 10%/20% (Turns: 2).`,
        ProtectionSkillIcon: "",
        Trait1: `HP - ATK UP (5* Awaken x1):
    When all 3 vanguard have 75% or more HP, increases all allies' ATK by 4% at start of turn.`,
        Trait1A: `HP - ATK UP (5* Awaken x3):
    When all 3 vanguard have 75% or more HP, increases all allies' ATK by 6% at start of turn.`,
    },
    Shion6: {
        Name: "Shion [The Talented Secretary]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/jJyVwbY.png",
        Icon: "https://i.imgur.com/OcpjnwW.png",
        Type: "https://i.imgur.com/pzX6NRL.png",
        SecondType: "https://i.imgur.com/QndVudD.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Rarity: 5,
        MinHp: 3469,
        MaxHp: 3469,
        MinAtk: 1280,
        MaxAtk: 1280,
        MinDef: 1129,
        MaxDef: 1129,
        MaxOutput: 220,
        Town1: "Dark Magic Device +200%",
        Town2: "Fire Magic Device +100%",
        DivineProtection: `Unconcealed Power Lv.MAX:
    Increases all allies' dark ATK at start of battle by 16%. Increases all allies' fire ATK at start of battle by 8%.`,
        SupportDivineProtection: `Unconcealed Power Lv.MAX:
    Increases all allies' dark ATK at start of battle by 16%. Increases all allies' fire ATK at start of battle by 8%.`,
        ProtectionSkill: `Flawless Secretary Lv.1/Lv.10:
    Changes Soul of Skills into Soul of Divine Protection. Increases all allies' Secret Skill Gauge by 15%/25%.`,
        ProtectionSkillIcon: "",
        Trait1: `HP - DEF DOWN (5* Awaken x1):
    When 3 vanguard have 75% or more HP, decreases all targets' DEF by 4% at start of turn.`,
        Trait1A: `HP - DEF DOWN (5* Awaken x3):
    When 3 vanguard have 75% or more HP, decreases all targets' DEF by 6% at start of turn.`,
    },
    Sky1: {
        Name: "Sky Dragon [Soaring Dragon Calamity]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/WfkfCCa.png",
        Icon: "https://i.imgur.com/YtveCWp.png",
        Type: "https://i.imgur.com/pzX6NRL.png",
        SecondType: "https://i.imgur.com/z8bnSYg.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Rarity: 4,
        MinHp: 3091,
        MaxHp: 3091,
        MinAtk: 969,
        MaxAtk: 969,
        MinDef: 1178,
        MaxDef: 1178,
        MaxOutput: 220,
        Town1: "Dark Magic Device +200%",
        Town2: "Space Magic Device +100%",
        DivineProtection: `Falling Lightning Lv.MAX:
    Increases all allies' dark ATK at start of battle by 13%. Increases all allies' space ATK at start of battle by 5%.`,
        SupportDivineProtection: `Falling Lightning Lv.MAX:
    Increases all allies' dark ATK at start of battle by 13%. Increases all allies' space ATK at start of battle by 5%.`,
        ProtectionSkill: `Thunder and Rain Lv.1/Lv.10:
    Increases skill cost limit until the end of battle by 5/15 (Max: 999). Changes Soul of Divine Protection into Soul of Skills.`,
        ProtectionSkillIcon: "",
        Trait1: `Effect - Light Resistance (5* Awaken x1):
    When 1 or more enemies are affected by ATK UP, increases all allies' light resistance by 7% at start of turn.`,
        Trait1A: `Effect - Light Resistance (5* Awaken x3):
    When 1 or more enemies are affected by ATK UP, increases all allies' light resistance by 11% at start of turn.`,
    },
    Fuze1: {
        Name: "Fuze [Guildmaster]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/CADxrdN.png",
        Icon: "https://i.imgur.com/ExxEzPL.png",
        Type: "https://i.imgur.com/pQYVkI3.png",
        SecondType: "https://i.imgur.com/pzX6NRL.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Rarity: 4,
        MinHp: 3088,
        MaxHp: 3088,
        MinAtk: 968,
        MaxAtk: 968,
        MinDef: 1180,
        MaxDef: 1180,
        MaxOutput: 220,
        Town1: "Wind Magic Device +200%",
        Town2: "Dark Magic Device +100%",
        DivineProtection: `Guildmaster's Lead Lv.MAX:
    Increases all allies' wind ATK at start of battle by 13%. Increases all allies' dark ATK at start of battle by 5%.`,
        SupportDivineProtection: `Guildmaster's Lead Lv.MAX:
    Increases all allies' wind ATK at start of battle by 13%. Increases all allies' dark ATK at start of battle by 5%.`,
        ProtectionSkill: `Information Gathering Lv.1/Lv.10:
    Increases skill cost limit until the end of battle by 5/15 (Max: 999). Changes Soul of Secrets into Soul of Skills.`,
        ProtectionSkillIcon: "",
        Trait1: `HP - DEF UP 3 (5* Awaken x1):
    When 3 vanguard have max HP, increases all allies' DEF by 10% at start of turn.`,
        Trait1A: `HP - DEF UP 3 (5* Awaken x3):
    When 3 vanguard have max HP, increases all allies' DEF by 15% at start of turn.`,
    },
    Salamander1: {
        Name: "Salamander [The Flame Master]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/1ircS3x.png",
        Icon: "https://i.imgur.com/dAt7JWo.png",
        Type: "https://i.imgur.com/QndVudD.png",
        SecondType: "https://i.imgur.com/AHPti72.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Rarity: 4,
        MinHp: 3088,
        MaxHp: 3088,
        MinAtk: 968,
        MaxAtk: 968,
        MinDef: 1178,
        MaxDef: 1178,
        MaxOutput: 220,
        Town1: "Fire Magic Device +200%",
        Town2: "Earth Magic Device +100%",
        DivineProtection: `Burning Invasion Lv.MAX:
    Increases all allies' fire ATK at start of battle by 13%. Increases all allies' earth ATK at start of battle by 5%.`,
        SupportDivineProtection: `Burning Invasion Lv.MAX:
    Increases all allies' fire ATK at start of battle by 13%. Increases all allies' earth ATK at start of battle by 5%.`,
        ProtectionSkill: `Fire Blast Lv.1/Lv.10:
    Increases all Soul of Secrets gauges' increase by 25%/35% (Turns: 3). Increases all allies' fire ATK by 10% (Turns: 2).`,
        ProtectionSkillIcon: "",
        Trait1: `Combo - Pierce Resistance DOWN (5* Awaken x1):
    When the enemy makes a combo attack, decreases all target's pierce resistance by 6% for the next turn.`,
        Trait1A: `Combo - Pierce Resistance DOWN (5* Awaken x3):
    When the enemy makes a combo attack, decreases all target's pierce resistance by 9% for the next turn.`,
    },
    Light1: {
        Name: "Light Spirit [Heroic Conductor]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/Ym3Yt5Z.png",
        Icon: "https://i.imgur.com/D9aZOZT.png",
        Type: "https://i.imgur.com/hX15sR0.png",
        SecondType: "https://i.imgur.com/NchScWh.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Rarity: 4,
        MinHp: 2549,
        MaxHp: 2549,
        MinAtk: 1089,
        MaxAtk: 1089,
        MinDef: 1089,
        MaxDef: 1089,
        MaxOutput: 220,
        Town1: "Light Magic Device +200%",
        Town2: "Water Magic Device +100%",
        DivineProtection: `Happy Happy Happy Lv.MAX:
    Increases all allies' light ATK at start of battle by 13%. Increases all allies' water ATK at start of battle by 5%.`,
        SupportDivineProtection: `Happy Happy Happy Lv.MAX:
    Increases all allies' light ATK at start of battle by 13%. Increases all allies' water ATK at start of battle by 5%.`,
        ProtectionSkill: `Protection of Arrival Lv.1/Lv.10:
    Increases all Soul of Divine Protection gauges' increase by 40%/50% (Turns: 2). Increases all allies' light ATK by 10% (Turns: 2).`,
        ProtectionSkillIcon: "",
        Trait1: `Effect - Dark Resistance (5* Awaken x1):
    When 1 or more enemies are affected by ATK UP, increases all allies' dark resistance by at start of turn.`,
        Trait1A: `Effect - Dark Resistance (5* Awaken x3):
    When 1 or more enemies are affected by ATK UP, increases all allies' dark resistance by at start of turn.`,
    },
    Veldora5: {
        Name: "Veldora Tempest [Proud Kin of Dragons]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/1foKxR0.png",
        Icon: "https://i.imgur.com/vRmyHSS.png",
        Type: "https://i.imgur.com/NchScWh.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Rarity: 4,
        MinHp: 2551,
        MaxHp: 2551,
        MinAtk: 1085,
        MaxAtk: 1085,
        MinDef: 1084,
        MaxDef: 1084,
        MaxOutput: 220,
        Town1: "Water Magic Device +200%",
        Town2: "Symbol of Protection +100%",
        DivineProtection: `Terrifying Winds Lv.MAX:
    Increases all allies' water ATK at start of battle by 13%.`,
        SupportDivineProtection: `Terrifying Winds Lv.MAX:
    Increases all allies' water ATK at start of battle by 13%.`,
        ProtectionSkill: `Protection of the Storm Dragon Lv.1/Lv.10:
    Changes Soul of Skills into Soul of Secrets. Increases Soul of Secrets damage by 5%/15% (Turns: 1).`,
        ProtectionSkillIcon: "",
        Trait1: `Combo - ATK DOWN (5* Awaken x1):
    When the enemy makes a combo attack, decreases all targets' ATK by 5% for the next turn.`,
        Trait1A: `Combo - ATK DOWN (5* Awaken x3):
    When the enemy makes a combo attack, decreases all targets' ATK by 8% for the next turn.`,
    },
    Vesta1: {
        Name: "Vesta [Seeker]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/jtg2joP.png",
        Icon: "https://i.imgur.com/3www7X3.png",
        Type: "https://i.imgur.com/z8bnSYg.png",
        SecondType: "https://i.imgur.com/pQYVkI3.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Rarity: 4,
        MinHp: 2974,
        MaxHp: 2974,
        MinAtk: 1045,
        MaxAtk: 1045,
        MinDef: 928,
        MaxDef: 928,
        MaxOutput: 220,
        Town1: "Space Magic Device +200%",
        Town2: "Wind Magic Device +100%",
        DivineProtection: `Lab Results Lv.MAX:
    Increases all allies' space ATK at start of battle by 13%. Increases all allies' wind ATK at start of battle by 5%.`,
        SupportDivineProtection: `Lab Results Lv.MAX:
    Increases all allies' space ATK at start of battle by 13%. Increases all allies' wind ATK at start of battle by 5%.`,
        ProtectionSkill: `End of Searching Lv.1/Lv.10:
    Increases skill cost limit until the end of battle by 5/15 (Max: 999). Changes Soul of Secrets into Soul of Divine Protection.`,
        ProtectionSkillIcon: "",
        Trait1: `Effect - Critical Resistance DOWN (5* Awaken x1):
    When 1 or more enemies are affected by Guard Rate UP, decreases all targets' critical resistance by 7% at start of turn.`,
        Trait1A: `Effect - Critical Resistance DOWN (5* Awaken x3):
    When 1 or more enemies are affected by Guard Rate UP, decreases all targets' critical resistance by 11% at start of turn.`,
    },
    Kaijin1: {
        Name: "Kaijin [The Forge Artisan]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/WQpSjXK.png",
        Icon: "https://i.imgur.com/W776VYH.png",
        Type: "https://i.imgur.com/AHPti72.png",
        SecondType: "https://i.imgur.com/QndVudD.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Rarity: 4,
        MinHp: 2978,
        MaxHp: 2978,
        MinAtk: 1047,
        MaxAtk: 1047,
        MinDef: 922,
        MaxDef: 922,
        MaxOutput: 220,
        Town1: "Earth Magic Device +200%",
        Town2: "Fire Magic Device 100%",
        DivineProtection: `Sophisticated Armor Lv.MAX:
    Increases all allies' earth ATK at start of battle by 13%. Increases all allies' fire ATK at start of battle by 5%.`,
        SupportDivineProtection: `Sophisticated Armor Lv.MAX:
    Increases all allies' earth ATK at start of battle by 13%. Increases all allies' fire ATK at start of battle by 5%.`,
        ProtectionSkill: `Supreme Sword Lv.1/Lv.10:
    Increases all allies' guard rate by 50%/70% (Turns: 2). Increases Soul of Skills damage by 10% (Turns: 3).`,
        ProtectionSkillIcon: "",
        Trait1: `Secret Skill - ATK DOWN (5* Awaken x1):
    When the enemy activates secret skill, decreases all targets' ATK by 6% for the next turn.`,
        Trait1A: `Secret Skill - ATK DOWN (5* Awaken x3):
    When the enemy activates secret skill, decreases all targets' ATK by 9% for the next turn.`,
    },
    Gard1: {
        Name: "Gard Mjolmire [The Competent Merchant]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/keXmlP1.png",
        Icon: "https://i.imgur.com/0HI45mk.png",
        Type: "https://i.imgur.com/NchScWh.png",
        SecondType: "https://i.imgur.com/hX15sR0.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Rarity: 4,
        MinHp: 2973,
        MaxHp: 2973,
        MinAtk: 1047,
        MaxAtk: 1047,
        MinDef: 924,
        MaxDef: 924,
        MaxOutput: 220,
        Town1: "Water Magic Device +200%",
        Town2: "Light Magic Device +100%",
        DivineProtection: `Tough Business Lv.MAX:
    Increases all allies' water ATK at start of battle by 13%. Increases all allies' light ATK at start of battle by 5%.`,
        SupportDivineProtection: `Tough Business Lv.MAX:
    Increases all allies' water ATK at start of battle by 13%. Increases all allies' light ATK at start of battle by 5%.`,
        ProtectionSkill: `Distribution Support Lv.1/Lv.10:
    Increases all allies' guard rate by 50%/70% (Turns: 2). Increases all allies' guard power by 10% (Turns: 2).`,
        ProtectionSkillIcon: "",
        Trait1: `HP - Pierce Resistance DOWN (5* Awaken x1):
    When 3 vanguard have 50% or lower HP, decreases all targets' pierce resistance by 5% at start of turn.`,
        Trait1A: `HP - Pierce Resistance DOWN (5* Awaken x3):
    When 3 vanguard have 50% or lower HP, decreases all targets' pierce resistance by 8% at start of turn.`,
    },
    Garm1: {
        Name: "Garm [The Armor Artisan]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/w0rgfuW.png",
        Icon: "https://i.imgur.com/zIeVbH7.png",
        Type: "https://i.imgur.com/EWYVugy.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Rarity: 3,
        MinHp: 2980,
        MaxHp: 2980,
        MinAtk: 925,
        MaxAtk: 925,
        MinDef: 1118,
        MaxDef: 1118,
        MaxOutput: 220,
        Town1: "Symbol of Protection +200%",
        Town2: "Fire Magic Device +100%",
        DivineProtection: `Forged Armor Lv.MAX:
    Increases all allies' P-ATK at start of battle by 11%.`,
        SupportDivineProtection: `Forged Armor Lv.MAX:
    Increases all allies' P-ATK at start of battle by 11%.`,
        ProtectionSkill: `Craftsmanship Revelation Lv.1/Lv.10:
    Increases all allies' guard rate by 30%/40% (Turns: 2).`,
        ProtectionSkillIcon: "",
        Trait1: `Effect - DEF DOWN 2 (5* Awaken x1):
    When 1 or more allies are affected by ATK DOWN, decrease all targets' DEF by 4% at start of turn.`,
        Trait1A: `Effect - DEF DOWN 2 (5* Awaken x3):
    When 1 or more allies are affected by ATK DOWN, decrease all targets' DEF by 6% at start of turn.`,
    },
    Gobuichi1: {
        Name: "Gobuichi [The Hobgoblin Chef]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/6UOv4rz.png",
        Icon: "https://i.imgur.com/xj9fpjm.png",
        Type: "https://i.imgur.com/EWYVugy.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Rarity: 3,
        MinHp: 2983,
        MaxHp: 2983,
        MinAtk: 922,
        MaxAtk: 922,
        MinDef: 1119,
        MaxDef: 1119,
        MaxOutput: 220,
        Town1: "Symbol of Protection +200%",
        Town2: "Light Magic Device +100%",
        DivineProtection: `Healthy Food Master Lv.MAX:
    Increases all allies' P-ATK at start of battle by 11%.`,
        SupportDivineProtection: `Healthy Food Master Lv.MAX:
    Increases all allies' P-ATK at start of battle by 11%.`,
        ProtectionSkill: `Cooking Technique Lv.1/Lv.10:
    Increases Soul of Skills damage by 30%/40% (Turns: 3). Increases all Soul of Skills gauges' increase by 40% (Turns: 3).`,
        ProtectionSkillIcon: "",
        Trait1: `Effect - Pierce Resistance DOWN 2 (5* Awaken x1):
    When 1 or more enemies are affected by Critical Rate UP, decreases all targets' pierce resistance by 7% at start of turn.`,
        Trait1A: `Effect - Pierce Resistance DOWN 2 (5* Awaken x3):
    When 1 or more enemies are affected by Critical Rate UP, decreases all targets' pierce resistance by 11% at start of turn.`,
    },
    Psychic1: {
        Name: "Psychic Elf [Fortuneteller]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/IZ2dJw8.png",
        Icon: "https://i.imgur.com/NLOwWqY.png",
        Type: "https://i.imgur.com/SsC1hEj.png",
        Growth: "https://i.imgur.com/P4N7gFs.png",
        Rarity: 3,
        MinHp: 2982,
        MaxHp: 2982,
        MinAtk: 924,
        MaxAtk: 924,
        MinDef: 1116,
        MaxDef: 1116,
        MaxOutput: 220,
        Town1: "Symbol of Protection +200%",
        Town2: "Water Magic Device +100%",
        DivineProtection: `Peek Into the Future Lv.MAX:
    Increases all allies' M-ATK at start of battle by 11%.`,
        SupportDivineProtection: `Peek Into the Future Lv.MAX:
    Increases all allies' M-ATK at start of battle by 11%.`,
        ProtectionSkill: `Astrology Lv.1/Lv.10:
    Increases Soul of Secrets damage by 30%/40% (Turns: 3). Increases all Soul of Secrets gauges' increase by 40% (Turns: 3).`,
        ProtectionSkillIcon: "",
        Trait1: `Troop - Evade Poison 2 (5* Awaken x1):
    When your troop contains 3 or more battle characters, increases all allies' poison evasion rate by 10% during battle.`,
        Trait1A: `Troop - Evade Poison 2 (5* Awaken x3):
    When your troop contains 3 or more battle characters, increases all allies' poison evasion rate by 15% during battle.`,
    },
    Myrd1: {
        Name: "Myrd [The Construction Artisan]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/6r5Zfu5.png",
        Icon: "https://i.imgur.com/c61nALz.png",
        Type: "https://i.imgur.com/SsC1hEj.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Rarity: 3,
        MinHp: 2453,
        MaxHp: 2453,
        MinAtk: 1037,
        MaxAtk: 1037,
        MinDef: 1036,
        MaxDef: 1036,
        MaxOutput: 220,
        Town1: "Symbol of Protection +200%",
        Town2: "Space Magic Device +100%",
        DivineProtection: `Building a Base Lv.MAX:
    Increases all allies' M-ATK at start of battle by 11%.`,
        SupportDivineProtection: `Building a Base Lv.MAX:
    Increases all allies' M-ATK at start of battle by 11%.`,
        ProtectionSkill: `Silent Support Lv.1/Lv.10:
    Increases skill cost limit until the end of battle by 30/40 (Max: 999). Increases all Soul of Skills gauges' increase by 40% (Turns: 3).`,
        ProtectionSkillIcon: "",
        Trait1: `Effect - Critical Resistance DOWN 2 (5* Awaken x1):
    When 1 or more enemies are affected by ATK UP, decreases all targets' critical resistance by 7% at start of turn.`,
        Trait1A: `Effect - Critical Resistance DOWN 2 (5* Awaken x3):
    When 1 or more enemies are affected by ATK UP, decreases all targets' critical resistance by 11% at start of turn.`,
    },
    Haruna1: {
        Name: "Haruna [The Affectionate Hobgoblin]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/OQOow6f.png",
        Icon: "https://i.imgur.com/VcjUvRw.png",
        Type: "https://i.imgur.com/EWYVugy.png",
        Growth: "https://i.imgur.com/MLuLYZy.png",
        Rarity: 3,
        MinHp: 2456,
        MaxHp: 2456,
        MinAtk: 1035,
        MaxAtk: 1035,
        MinDef: 1035,
        MaxDef: 1035,
        MaxOutput: 220,
        Town1: "Symbol of Protection +200%",
        Town2: "Dark Magic Device +100%",
        DivineProtection: `Blooming Smile Lv.MAX:
    Increases all allies' P-ATK at start of battle by 11%.`,
        SupportDivineProtection: `Blooming Smile Lv.MAX:
    Increases all allies' P-ATK at start of battle by 11%.`,
        ProtectionSkill: `Gentle Prayer Lv.1/Lv.10:
    Increases skill cost limit until the end of battle by 20/30 (Max: 999). Increases skill points by 20.`,
        ProtectionSkillIcon: "",
        Trait1: `HP - ATK UP 2 (5* Awaken x1):
    When all 3 vanguard have 50% or more HP, increases all allies' ATK by 3% at start of turn.`,
        Trait1A: `HP - ATK UP 2 (5* Awaken x3):
    When all 3 vanguard have 50% or more HP, increases all allies' ATK by 5% at start of turn.`,
    },
    Butterflies1: {
        Name: "Butterflies of the Night Owner [Bewitching Shopkeeper]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/Wxg44eP.png",
        Icon: "https://i.imgur.com/GAREbBj.png",
        Type: "https://i.imgur.com/EWYVugy.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Rarity: 3,
        MinHp: 2874,
        MaxHp: 2874,
        MinAtk: 992,
        MaxAtk: 992,
        MinDef: 882,
        MaxDef: 882,
        MaxOutput: 220,
        Town1: "Symbol of Protection +200%",
        Town2: "Earth Magic Device +100%",
        DivineProtection: `Charitable Smile Lv.MAX:
    Increases all allies' P-ATK at start of battle by 11%.`,
        SupportDivineProtection: `Charitable Smile Lv.MAX:
    Increases all allies' P-ATK at start of battle by 11%.`,
        ProtectionSkill: `A Moment of Peace Lv.1/Lv.10:
    Increases Soul of Divine Protection damage by 50%/60% (Turns: 3). Increases all Soul of Divine Protection gauges' increase by 20% (Turns: 3).`,
        ProtectionSkillIcon: "",
        Trait1: `HP - Counterattack Resistance (5* Awaken x1):
    When 3 vanguard have max HP, increases all allies' counterattack resistance by 20% at start of turn.`,
        Trait1A: `HP - Counterattack Resistance (5* Awaken x3):
    When 3 vanguard have max HP, increases all allies' counterattack resistance by 30% at start of turn.`,
    },
    Dord1: {
        Name: "Dord [The Skilled Artisan]",
        UnitType: "Protection Characters",
        Art: "https://i.imgur.com/0b1HuS6.png",
        Icon: "https://i.imgur.com/8FfD8t2.png",
        Type: "https://i.imgur.com/SsC1hEj.png",
        Growth: "https://i.imgur.com/yduAVsz.png",
        Rarity: 3,
        MinHp: 2872,
        MaxHp: 2872,
        MinAtk: 993,
        MaxAtk: 993,
        MinDef: 881,
        MaxDef: 881,
        MaxOutput: 220,
        Town1: "Symbol of Protection +200%",
        Town2: "Wind Magic Device +100%",
        DivineProtection: `Jewelcraft Lv.MAX:
    Increases all allies' M-ATK at start of battle by 11%.`,
        SupportDivineProtection: `Jewelcraft Lv.MAX:
    Increases all allies' M-ATK at start of battle by 11%.`,
        ProtectionSkill: `Proficiency and Expertise Lv.1/Lv.10:
    Increases Soul of Skills damage by 30%/40% (Turns: 3). Increases all Soul of Skills gauges' increase by 30% (Turns: 3).`,
        ProtectionSkillIcon: "",
        Trait1: `Troop - Evade Poison 2 (5* Awaken x1):
    When your troop contains 3 or more battle characters, increases all allies' poison evasion rate by 10% during battle.`,
        Trait1A: `Troop - Evade Poison 2 (5* Awaken x3):
    When your troop contains 3 or more battle characters, increases all allies' poison evasion rate by 15% during battle.`,
    },
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


if (linksplit[linksplit.length - 2].split("?")[0] === "characters") {
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
    waitForElm('#trait1').then((elem) => { elem.innerHTML = cdata[page].Trait1.split(" (5* Awaken x1):")[0] })
    waitForElm('#trait1desc').then((elem) => { elem.innerHTML = cdata[page].Trait1.split(" (5* Awaken x1):")[1] })
    waitForElm('#trait1adesc').then((elem) => { elem.innerHTML = cdata[page].Trait1A.split(" (5* Awaken x3):")[1] })
    waitForElm('#trait1icon').then((elem) => { elem.setAttribute("src", cdata[page].Trait1Icon || "") })
    waitForElm('#trait1aicon').then((elem) => { elem.setAttribute("src", cdata[page].Trait1AIcon || "") })

    if (cdata[page].UnitType != "Protection Characters") {
        waitForElm('#weapon').then((elem) => { elem.setAttribute("src", weapons[cdata[page].Weapon] || cdata[page].Weapon) })
        waitForElm('#atktype').then((elem) => { elem.setAttribute("src", atktype[cdata[page].AtkType] || cdata[page].AtkType) })
        waitForElm('#skill1').then((elem) => { elem.innerHTML = cdata[page].Skill1.split(" Lv.1")[0] })
        waitForElm('#skill1desc').then((elem) => { elem.innerHTML = cdata[page].Skill1.split("10:")[1] })
        waitForElm('#skill2').then((elem) => { elem.innerHTML = cdata[page].Skill2.split(" Lv.1")[0] })
        waitForElm('#skill2desc').then((elem) => { elem.innerHTML = cdata[page].Skill2.split("10:")[1] })
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
        waitForElm('#skill1').then((elem) => { elem.innerHTML = cdata[page].DivineProtection.split(" Lv.")[0] })
        waitForElm('#skill1desc').then((elem) => { elem.innerHTML = cdata[page].DivineProtection.split("Lv.MAX:")[1] })
        waitForElm('#skill2').then((elem) => { elem.innerHTML = cdata[page].SupportDivineProtection.split(" Lv.")[0] })
        waitForElm('#skill2desc').then((elem) => { elem.innerHTML = cdata[page].SupportDivineProtection.split("Lv.MAX:")[1] })
        waitForElm('#skill1icon').then((elem) => { elem.setAttribute("src", "https://cdn.discordapp.com/attachments/633768073068806144/985265386582835320/icSkillBlessLeader.png") })
        waitForElm('#skill2icon').then((elem) => { elem.setAttribute("src", "") })
        waitForElm('#secreticon').then((elem) => { elem.setAttribute("src", "https://cdn.discordapp.com/attachments/633768073068806144/985265386582835320/icSkillBlessLeader.png") })
        waitForElm('#secret').then((elem) => { elem.innerHTML = cdata[page].ProtectionSkill.split(" Lv.1")[0] })
        waitForElm('#secretdesc').then((elem) => { elem.innerHTML = cdata[page].ProtectionSkill.split("10:")[1] })
        waitForElm('.statsback2').then((elem) => { elem.remove() })

    }
}
else {
    $(function () {
        $("#character-placeholder").load("/charactersbody");
    })
    function updatelist() {
        $('.charcontainer').hide()
        const docfrag = document.createDocumentFragment();
        let currentcreated = created
        //let sortedarray = Object.keys(cdata).sort(function(a, b) {return -(cdata[a].MaxAtk - cdata[b].MaxAtk)})
        let sortedarray = Object.keys(cdata)
        if (Filters.Sort == "Name")
            sortedarray = sortedarray.sort(function (a, b) { return (cdata[a].Name.localeCompare(cdata[b].Name)) })
        else
            sortedarray = sortedarray.sort(function (a, b) { return -(cdata[a][Filters.Sort] - cdata[b][Filters.Sort]) })
        if (Filters.SortDir == -1)
            sortedarray.reverse()

        waitForElm('.charactersbase').then((elem) => {
            sortedarray.forEach(function (key) {
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
                if (!$('#' + key).length) {
                    const para = document.createElement("a");
                    para.setAttribute("class", "charcontainer")
                    para.setAttribute("id", key)
                    para.setAttribute("href", "/characters/?" + key)
                    elem.appendChild(para);
                    $(para).load('/charactericon')
                    waitForElm("#" + key + ' > #icon').then((ele) => {
                        ele.onload = function () { para.setAttribute("turnon", "true") };
                        ele.src = cdata[key].Icon;

                    })
                    waitForElm("#" + key + ' > #rarity').then((ele) => { ele.setAttribute("src", stars[cdata[key].Rarity - 1]) })
                    waitForElm("#" + key + ' > #type').then((ele) => { ele.setAttribute("src", types[cdata[key].Type] || cdata[key].Type) })




                    if ("SecondType" in cdata[key]) {
                        para.setAttribute("secondtype", "true")
                        waitForElm("#" + key + ' > #secondtype').then((ele) => { ele.setAttribute("src", types[cdata[key].SecondType] || cdata[key].SecondType) })
                    }
                }
                else {
                    $('#' + key).show()
                    waitForElm("#" + key + ' > #name').then((ele) => { ele.innerHTML = cdata[key][Filters.Sort] })
                }
                $('#' + key).css("order", sortedarray.indexOf(key))
                if (Filters.Sort == "Name")
                    waitForElm("#" + key + ' > #name').then((ele) => { ele.innerHTML = cdata[key].Name.split(" ")[0] })
                else
                    waitForElm("#" + key + ' > #name').then((ele) => { ele.innerHTML = cdata[key][Filters.Sort] })

            });
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


}

waitForElm('.hamb').then(() => {
    const Hamb = document.querySelector('.hamb')
    const List = document.querySelector('.buttonsdiv')


    Hamb.addEventListener("click", () => {
        const clicked = List.getAttribute("clicked")

        if (clicked === "false") {
            List.setAttribute("clicked", "true")
        }
        else
            List.setAttribute("clicked", "false")
    })

})

