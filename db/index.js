const mongoose = require('mongoose');

const shipSchema = mongoose.Schema({
    name: String,
    tier: Number,
    type: String,
    hull: {
      lvl50: Number,
      lvl60: Number,
      lvl65: Number,
    },
    hullModifier: Number,
    shieldModifier: Number,
    turnRate: Number,
    impulseModifier: Number,
    inertiaRating: Number,
    warpCore: String,
    bonusPower: [String],
    bridgeOfficers: [String],
    weapons: {
      fore: Number,
      aft: Number,
    },
    deviceSlots: Number,
    consoles: {
      tactical: Number,
      engineering: Number,
      science: Number,
      universal: Number,
    },
    abilities: [String],
    admiralityStats: {
      tactical: Number,
      engineering: Number,
      science: Number,
    },
    photo: String,
});

const weaponSchema = mongoose.Schema({
    name: String,
    description: {
      type: String,
      arc: Number,
      damage: String,
      effects: [String],
    bind: String,
    restrictions: String,
    rank: String,
    photo: String,
  },
})

const userSchema = ({
  userName = String,
  password = String,
  userShips = [
    {
    buildName = String,
    }
  ],
})

const Ship = mongoose.model('Ship', shipSchema);
const Weapon = mongoose.model('Weapon', weaponSchema);
const User = mongoose.model('User', userSchema)

module.exports = {
  Ship,
  Weapon,
  User
};