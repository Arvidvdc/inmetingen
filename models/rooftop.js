const   mongoose                = require("mongoose"),
        passportLocalMongoose   = require("passport-local-mongoose");

const ROOFSchema = new mongoose.Schema({
    dakplaat: String,
    dakplaatomschrijving: String,
    designline: Boolean,
    ecoline: Boolean,
    luxline: Boolean,
    topline: Boolean,
    trendline: Boolean,
    ultraline: Boolean,
    aanmaakdatum: {
        type: Date,
        default: Date.now
    },
    laatstewijziging: Date
});

ROOFSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("ROOF", ROOFSchema);