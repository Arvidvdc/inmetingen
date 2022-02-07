const   mongoose                = require("mongoose"),
        passportLocalMongoose   = require("passport-local-mongoose");

const COLORSchema = new mongoose.Schema({
    kleurnummer: String,
    kleuromschrijving: String,
    designline: Boolean,
    ecoline: Boolean,
    luxline: Boolean,
    topline: Boolean,
    trendline: Boolean,
    ultraline: Boolean,
    al22: Boolean,
    al23: Boolean,
    al24: Boolean,
    w350zip: Boolean,
    t350zip: Boolean,
    w350: Boolean,
    t350: Boolean,
    verandawanden: Boolean,
    schuttingplanken: Boolean,
    screenlinef513zip: Boolean,
    aanmaakdatum: {
        type: Date,
        default: Date.now
    },
    laatstewijziging: Date
});

COLORSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("COLOR", COLORSchema);