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

const Ship = mongoose.model('Ship', shipSchema);

module.exports = User;