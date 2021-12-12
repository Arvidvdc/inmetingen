const   mongoose                = require("mongoose"),
        passportLocalMongoose   = require("passport-local-mongoose");

const NAWSchema = new mongoose.Schema({
    aanhef: String,
    voornaam: String,
    tussenvoegsels: String,
    achternaam: String,
    adres: String,
    postcode: String,
    woonplaats: String,
    huistelefoon: String,
    mobiel01: String,
    mobiel01omschrijving: String,
    mobiel02: String,
    mobiel02omschrijving: String,
    description: String
});

NAWSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("NAW", NAWSchema);