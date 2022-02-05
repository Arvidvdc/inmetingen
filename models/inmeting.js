const   mongoose                = require("mongoose"),
        passportLocalMongoose   = require("passport-local-mongoose");

const InmetingSchema = new mongoose.Schema(
    {
        typeinmeting: String,
        aanmaakdatum: {
            type: Date,
            default: Date.now
        },
        laatstewijziging: Date
    }
);

InmetingSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("INMETING", InmetingSchema);