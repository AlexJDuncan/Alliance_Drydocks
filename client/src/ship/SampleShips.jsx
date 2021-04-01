const Ships = [
  {
    name: "Martok Tactical Battlecruiser",
    tier: 6,
    type: "Battlecruiser",
    hull: {
      lvl50: 50888,
      lvl60: 59000,
      lvl65: 66375,
    },
    hullModifier: 1.475,
    shieldModifier: 1.10,
    turnRate: 6.5,
    impulseModifier: 0.15,
    inertiaRating: 30,
    warpCore: "Matter-Antimatter",
    bonusPower: ["+10 weapon power", "+10 engine power"],
    bridgeOfficers: ["Lieutenant Commander Tactical", "Commander Engineer", "Lieutenant Science", "Lieutenant Commander Universal-Command", "Ensign Universal"],
    weapons: {
      fore: 4,
      aft: 4,
    },
    deviceSlots: 4,
    consoles: {
      tactical: 5,
      engineering: 4,
      science: 2,
      universal: 0,
    },
    abilities: ["Cloak", "Weapon System Efficiency", "Shield Frequency Modulation", "Strategic Maneuvering"],
    admiralityStats: {
      tactical: 46,
      engineering: 48,
      science: 23,
    },
    photo: 'https://i.ibb.co/zGV9fZq/Martok-Battle-Cruiser.png'
  },
]

export default Ships;