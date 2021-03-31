module.exports = [
  {
    Name: "Advanced Inhibiting Heavy Turret",
    Description: {
      Type: "Energy"
      Arc: 360,
      Damage: "__damage(__dps)"
      Effects: [ "- __ Weapon Power to self while this     weapon is firing", "2.5% chance: Engines Offline to     foes within 4km of target for 4 sec", "When shooting     foes slower than you -10 All Damage Resistance Rating     for 5 sec", "+20 Accuracy Rating", "+2% Critical     Chance”, “3 sec recharge"]
    Bind: "on pick-up"
    Restrictions: "cannot equip more than 1 of this item"
    Rank: "Rear Admiral, Upper Half"
    },
]
