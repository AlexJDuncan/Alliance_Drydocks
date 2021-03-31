module.exports = [
  {
    Name: "Martok Tactical Battlecruiser"
    Tier: 6
    Type: "Battlecruiser"
    Hull: {
      Lvl-50: 50888
      Lvl-60: 59000
      Lvl-65: 66375
    }
    HullModifier: 1.475
    ShieldModifier: 1.10
    TurnRate: 6.5
    impulseModifier: 0.15
    inertiaRating: 30
    warpCore: "Matter-Antimatter"
    bonusPower: ["+10 weapon power", "+10 engine power"]
    bridgeOfficers: ["Lieutenant Commander Tactical", "Commander Engineer", "Lieutenant Science", "Lieutenant Commander Universal-Command", "Ensign Universal"]
    Weapons: {
      Fore: 4
      Aft: 4
    }
    deviceSlots: 4
    Consoles: {
      Tactical: 5
      Engineering: 4
      Science: 2
      Universal: 0
    }
    Abilities: ["Cloak", "Weapon System Efficiency", "Shield Frequency Modulation", "Strategic Maneuvering"]
    admiralityStats: {
      Tactical: 46
      Engineering: 48
      Science: 23
    }
  },
]