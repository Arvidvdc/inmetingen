const   mongoose                = require("mongoose"),
        passportLocalMongoose   = require("passport-local-mongoose");

const PRODUCTSchema = new mongoose.Schema({
    product: String,
    categorie: String,
    aanmaakdatum: {
        type: Date,
        default: Date.now
    },
    laatstewijziging: Date
});

PRODUCTSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("PRODUCT", PRODUCTSchema);