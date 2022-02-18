const   mongoose                = require("mongoose"),
        passportLocalMongoose   = require("passport-local-mongoose");

const DOWNLOADSchema = new mongoose.Schema({
    filename: String,
    description: String,
    location: String,
    aanmaakdatum: {
        type: Date,
        default: Date.now
    },
    laatstewijziging: Date
});

DOWNLOADSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("DOWNLOAD", DOWNLOADSchema);