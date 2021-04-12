const weapons = [
  {
    name: "Advanced Inhibiting Heavy Turret",
    description: {
      type: "Energy",
      arc: 360,
      damage: "__damage(__dps)",
      effects: [ "- __ Weapon Power to self while this weapon is firing", "2.5% chance: Engines Offline to foes within 4km of target for 4 sec", "When shooting foes slower than you 10 All Damage Resistance rating for 5 sec", "+20 Accuracy Rating", "+2% Critical Chance", "3 sec recharge"],
    bind: "on pick-up",
    restrictions: "cannot equip more than 1 of this item",
    rank: "Rear Admiral, Upper Half",
    photo: "https://i.ibb.co/7RP2sJG/Advanced-Inhibiting-Polaron-Heavy-Turret-icon.png",
    },
  },
  {
    name: "Advanced Inhibiting Poloran Omni-Directional Beam",
    description: {
      type: "Energy",
      arc: 360,
      damage: "__Polaron Damage(__dps)",
      effects: [ "- __ Weapon Power to self while this weapon is firing", "2.5% chance: Engines Offline to foes within 4km of target for 4 sec", "When shooting foes slower than you -10 All Damage Resistance rating for 5 sec", "+10 Accuracy Rating", "1 sec recharge"],
    bind: "on pick-up",
    restrictions: "cannot equip more than 1 of this item",
    rank: "Rear Admiral, Upper Half",
    photo: "https://i.ibb.co/7RP2sJG/Advanced-Inhibiting-Polaron-Heavy-Turret-icon.png",
    },
  },
  {
    name: "Advanced Inhibiting Chroniton Rapid Mine Launcher",
    description: {
      type: "Chroniton",
      arc: 360,
      damage: "1692 Kinetic Damage per mine, Slow",
      effects: [ "Creates 4 level 60 Inhibiting Chroniton Quick-Arming Mines in a wide pattern in front of your ship", "Explosions significantly reduce Flight Speed and Turn Rate for 10 sec per mine", "Chase Range: 3.5 Km", "+2% Critical Chance", "20 sec recharge"],
    bind: "on pick-up",
    restrictions: "cannot equip more than 1 of this item",
    rank: "Rear Admiral, Upper Half",
    photo: "https://i.ibb.co/7RP2sJG/Advanced-Inhibiting-Polaron-Heavy-Turret-icon.png",
    },
  },
];

export default weapons;