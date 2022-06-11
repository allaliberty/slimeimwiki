
var linksplit = window.location.href.split("/");
var page = linksplit[linksplit.length - 2];



$(function () {
    $("#nav-placeholder").load("/nav");
})

const stars = ["https://cdn.discordapp.com/attachments/633768073068806144/982527855407792168/1star.png", "https://cdn.discordapp.com/attachments/633768073068806144/982527856968073227/2star.png", "https://cdn.discordapp.com/attachments/633768073068806144/982527856418648135/3star.png", "https://cdn.discordapp.com/attachments/633768073068806144/982527856775143484/4star.png", "https://cdn.discordapp.com/attachments/633768073068806144/982527856162799626/5star.png", "https://cdn.discordapp.com/attachments/633768073068806144/982527855953063976/6star.png"]
const weapons = {
    Sword: "https://cdn.discordapp.com/attachments/633768073068806144/982523252985446460/unknown.png",
    Katana: "https://cdn.discordapp.com/attachments/633768073068806144/982523309382053898/unknown.png",
    Hammer: "https://cdn.discordapp.com/attachments/633768073068806144/982527713015373824/Layer_3.png",
    Lance: "https://cdn.discordapp.com/attachments/633768073068806144/982523242931683328/unknown.png",
    Greatsword: "https://cdn.discordapp.com/attachments/633768073068806144/982523229736402964/unknown.png",
    Tome: "https://cdn.discordapp.com/attachments/633768073068806144/982523214364291112/unknown.png",
    Fist: "https://cdn.discordapp.com/attachments/633768073068806144/985207460614774835/Layer_32.png",
    "Magic Tome": "https://cdn.discordapp.com/attachments/633768073068806144/982523214364291112/unknown.png",
}

const types = {
    Fire: "https://i.imgur.com/QndVudD.png",
    Wind: "https://i.imgur.com/pQYVkI3.png",
    Space: "https://i.imgur.com/z8bnSYg.png",
    Light: "https://i.imgur.com/hX15sR0.png",
    Dark: "https://i.imgur.com/pzX6NRL.png",
    Earth: "https://i.imgur.com/AHPti72.png",
    Water: "https://i.imgur.com/NchScWh.png",
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


console.log(page)
console.log(window.top)

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
            Stats: [2, 0, 0, 2, 0, 0, 2, 0, 0, 4, 0, 0]
        },
        Milim1: {
            Name: "Milim Nava [The Proud Dragon Demon Lord]",
            Art: "",
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
            Stats: [4, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
        },
        Leon1: {
            Name: "Leon Cromwell [The Flashing Blade]",
            Art: "",
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
            Stats: [2, 0, 0, 8, 0, 0, 2, 0, 0, 2, 0, 0]
        },
        Guy1: {
            Name: "Guy Crimson [The Beginning]",
            Art: "",
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
            Stats: [8, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
        },
        Treyni1: {
            Name: "Treyni [Budding of Deep Green]",
            Art: "",
            Icon: "https://i.imgur.com/aEKewa3.png",
            Type: "https://i.imgur.com/AHPti72.png",
            AtkType: "https://i.imgur.com/tOS4FvO.png",
            Growth: "https://i.imgur.com/P4N7gFs.png",
            Weapon: "Magic Tome",
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
            Stats: [0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0]
        },
        Shizue1: {
            Name: "Shizue Izawa [Date Night Beauty]",
            Art: "",
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
            Stats: [2, 0, 0, 2, 0, 0, 4, 4, 0, 2, 0, 0]
        },
        Rimuru1: {
            Name: "Rimuru Tempest [Harmonizer of Monsters and Humans]",
            Art: "",
            Icon: "https://i.imgur.com/T7wNg1P.png",
            Type: "https://i.imgur.com/NchScWh.png",
            AtkType: "https://i.imgur.com/tOS4FvO.png",
            Growth: "https://i.imgur.com/P4N7gFs.png",
            Weapon: "Magic Tome",
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
            Stats: [2, 0, 0, 8, 0, 0, 2, 0, 0, 2, 0, 0]
        },
        Rimuru2: {
            Name: "Rimuru Tempest [The Master of Maids]",
            Art: "",
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
            Stats: [8, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
        },
        Hinata1: {
            Name: "Hinata Sakaguchi [Captain of the Holy Knights]",
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
            Icon: "https://i.imgur.com/fJWzoXo.png",
            Type: "https://i.imgur.com/hX15sR0.png",
            AtkType: "https://i.imgur.com/tOS4FvO.png",
            Growth: "https://i.imgur.com/MLuLYZy.png",
            Weapon: "Magic Tome",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
            Icon: "https://i.imgur.com/vM872go.png",
            Type: "https://i.imgur.com/pzX6NRL.png",
            AtkType: "https://i.imgur.com/tOS4FvO.png",
            Growth: "https://i.imgur.com/MLuLYZy.png",
            Weapon: "Magic Tome",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
            Icon: "https://i.imgur.com/V9ZWWX5.png",
            Type: "https://i.imgur.com/QndVudD.png",
            AtkType: "https://i.imgur.com/tOS4FvO.png",
            Growth: "https://i.imgur.com/yduAVsz.png",
            Weapon: "Magic Tome",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
            Icon: "https://i.imgur.com/svqUOwR.png",
            Type: "https://i.imgur.com/pQYVkI3.png",
            AtkType: "https://i.imgur.com/tOS4FvO.png",
            Growth: "https://i.imgur.com/P4N7gFs.png",
            Weapon: "Magic Tome",
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
            Art: "",
            Icon: "https://i.imgur.com/bdK9a1H.png",
            Type: "https://i.imgur.com/AHPti72.png",
            AtkType: "https://i.imgur.com/tOS4FvO.png",
            Growth: "https://i.imgur.com/P4N7gFs.png",
            Weapon: "Magic Tome",
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
            Art: "",
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
            Art: "",
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
            Art: "",
            Icon: "https://i.imgur.com/SNj9EbC.png",
            Type: "https://i.imgur.com/z8bnSYg.png",
            AtkType: "https://i.imgur.com/tOS4FvO.png",
            Growth: "https://i.imgur.com/P4N7gFs.png",
            Weapon: "Magic Tome",
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
            Art: "",
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
            Art: "",
            Icon: "https://i.imgur.com/oqBL34H.png",
            Type: "https://i.imgur.com/pzX6NRL.png",
            AtkType: "https://i.imgur.com/tOS4FvO.png",
            Growth: "https://i.imgur.com/P4N7gFs.png",
            Weapon: "Magic Tome",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
            Icon: "https://i.imgur.com/lQvoiLI.png",
            Type: "https://i.imgur.com/NchScWh.png",
            AtkType: "https://i.imgur.com/tOS4FvO.png",
            Growth: "https://i.imgur.com/MLuLYZy.png",
            Weapon: "Magic Tome",
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
            Art: "",
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
            Art: "",
            Icon: "https://i.imgur.com/rDoEl2O.png",
            Type: "https://i.imgur.com/hX15sR0.png",
            AtkType: "https://i.imgur.com/tOS4FvO.png",
            Growth: "https://i.imgur.com/MLuLYZy.png",
            Weapon: "Magic Tome",
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
            Art: "",
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
            Art: "",
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
            Art: "",
            Icon: "https://i.imgur.com/whn0pHB.png",
            Type: "https://i.imgur.com/QndVudD.png",
            AtkType: "https://i.imgur.com/tOS4FvO.png",
            Growth: "https://i.imgur.com/MLuLYZy.png",
            Weapon: "Magic Tome",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
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
            Art: "",
            Icon: "https://i.imgur.com/1hhxCwj.png",
            Type: "https://i.imgur.com/z8bnSYg.png",
            AtkType: "https://i.imgur.com/tOS4FvO.png",
            Growth: "https://i.imgur.com/P4N7gFs.png",
            Weapon: "Magic Tome",
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
            Art: "",
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
            Art: "",
            Icon: "https://i.imgur.com/GtQP5c1.png",
            Type: "https://i.imgur.com/AHPti72.png",
            AtkType: "https://i.imgur.com/tOS4FvO.png",
            Growth: "https://i.imgur.com/P4N7gFs.png",
            Weapon: "Magic Tome",
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
            Art: "",
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
            Art: "",
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


if (linksplit[linksplit.length-3] === "characters") {
    $(function () {
        $("#character-placeholder").load("/character");
    })
    waitForElm('title').then((elem) => {elem.innerHTML = cdata[page].Name})
    waitForElm('#title').then((elem) => {elem.innerHTML = cdata[page].Name.split(" [")[1].split("]")[0]})
    waitForElm('#name').then((elem) => {elem.innerHTML = cdata[page].Name.split(" [")[0]})
    waitForElm('#icon').then((elem) => {elem.setAttribute("src", cdata[page].Icon)})
    waitForElm('#art').then((elem) => {elem.setAttribute("src", cdata[page].Art)})
    waitForElm('#rarity').then((elem) => {elem.setAttribute("src", stars[cdata[page].Rarity - 1])})
    waitForElm('#type').then((elem) => {elem.setAttribute("src", types[cdata[page].Type] || cdata[page].Type)})
    waitForElm('#weapon').then((elem) => {elem.setAttribute("src", weapons[cdata[page].Weapon]|| cdata[page].Weapon)})
    waitForElm('#atktype').then((elem) => {elem.setAttribute("src", atktype[cdata[page].AtkType] || cdata[page].AtkType)})
    waitForElm('#growth').then((elem) => {elem.setAttribute("src", growth[cdata[page].Growth] || cdata[page].Growth)})
    waitForElm('#attack').then((elem) => {elem.innerHTML = cdata[page].MinAtk.toString().concat(" - ", cdata[page].MaxAtk.toString())})
    waitForElm('#health').then((elem) => {elem.innerHTML = cdata[page].MinHp.toString().concat(" - ", cdata[page].MaxHp.toString())})
    waitForElm('#defense').then((elem) => {elem.innerHTML = cdata[page].MinDef.toString().concat(" - ", cdata[page].MaxDef.toString())})

    waitForElm('#attack').then((elem) => {elem.innerHTML = cdata[page].MaxAtk.toString()})
    waitForElm('#health').then((elem) => {elem.innerHTML =cdata[page].MaxHp.toString()})
    waitForElm('#defense').then((elem) => {elem.innerHTML =cdata[page].MaxDef.toString()})

    waitForElm('#skill1').then((elem) => {elem.innerHTML = cdata[page].Skill1.split(" Lv.1")[0]})
    waitForElm('#skill1desc').then((elem) => {elem.innerHTML = cdata[page].Skill1.split("10:")[1]})
    waitForElm('#skill2').then((elem) => {elem.innerHTML = cdata[page].Skill2.split(" Lv.1")[0]})
    waitForElm('#skill2desc').then((elem) => {elem.innerHTML = cdata[page].Skill2.split("10:")[1]})
    waitForElm('#skill1icon').then((elem) => {elem.setAttribute("src", cdata[page].Skill1Icon)})
    waitForElm('#skill2icon').then((elem) => {elem.setAttribute("src", cdata[page].Skill2Icon)})
    waitForElm('#secreticon').then((elem) => {elem.setAttribute("src", secrettype[cdata[page].SecretType] || cdata[page].SecretType)})
    waitForElm('#secret').then((elem) => {elem.innerHTML = cdata[page].Secret.split(" Lv.")[0]})
    waitForElm('#secretdesc').then((elem) => {elem.innerHTML = cdata[page].Secret.split("Lv.MAX:")[1]})
    waitForElm('#trait1').then((elem) => {elem.innerHTML = cdata[page].Trait1.split(" (5* Awaken x1):")[0]})
    waitForElm('#trait1desc').then((elem) => {elem.innerHTML = cdata[page].Trait1.split(" (5* Awaken x1):")[1]})
    waitForElm('#trait1adesc').then((elem) => {elem.innerHTML = cdata[page].Trait1A.split(" (5* Awaken x3):")[1]})
    cdata[page].Stats.forEach((element, index) => {
        if (index < 6)
            waitForElm('.statsleft').then((elem) => {elem.children.item(index).children.item(1).innerHTML = element.toString().concat("%")})
        else
            waitForElm('.statsright').then((elem) => {elem.children.item(index - 6).children.item(1).innerHTML = element.toString().concat("%")})

    })
    waitForElm('#output1').then((elem) => {elem.innerHTML = cdata[page].Town1.split(" +")[0]})
    waitForElm('#output1percent').then((elem) => {elem.innerHTML = "+".concat(cdata[page].Town1.split(" +")[1])})
    waitForElm('#output2').then((elem) => {elem.innerHTML = cdata[page].Town2.split(" +")[0]})
    waitForElm('#output2percent').then((elem) => {elem.innerHTML = "+".concat(cdata[page].Town2.split(" +")[1])})
}
else
{
$(function () {
    $("#character-placeholder").load("/charactersbody");
})
    waitForElm('.charactersbase').then((elem) => {
        Object.keys(cdata).forEach(key => {
            const para = document.createElement("a");
            para.setAttribute("class", "charcontainer")
            para.setAttribute("id", key)
            para.setAttribute("href", "/characters/"+key)
            elem.appendChild(para);
            $(para).load('/charactericon')
            waitForElm("#" + key + ' > #icon').then((ele) => {console.log("found"); ele.setAttribute("src", cdata[key].Icon)})
            waitForElm("#" + key + ' > #rarity').then((ele) => {ele.setAttribute("src", stars[cdata[key].Rarity - 1])})
            waitForElm("#" + key + ' > #type').then((ele) => {ele.setAttribute("src", types[cdata[key].Type] || cdata[key].Type)})
            waitForElm("#" + key + ' > #name').then((ele) => {ele.innerHTML = cdata[key].Name.split(" ")[0]})
            $(para).ready(function() {
                para.setAttribute("turnon", "true")
            });
            
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

