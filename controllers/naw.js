// Required dependencies
const NAW   = require("../models/naw");

// Moment module
let moment = require("moment"); //code voor opmaak datum
const { utc, now } = require("moment");

// NAW Index route
exports.index = (req,res) => {
    NAW.find({}, (err, foundNAW) => {
        if(err){
            console.log("Something went wrong");
        } else {
            res.render("./naw/index", {foundNAW: foundNAW, page: "nawIndex"});
        };
    });
}

// NAW Create
exports.new_post = (req,res) => {
    let aanhef                  = req.body.aanhef,
        achternaam              = req.body.achternaam,
        tussenvoegsels          = req.body.tussenvoegsels,
        voornaam                = req.body.voornaam,
        adres                   = req.body.adres,
        postcode                = req.body.postcode,
        woonplaats              = req.body.woonplaats,
        huistelefoon            = req.body.telefoonnummer,
        mobiel01                = req.body.mobiel01,
        mobiel01Omschrijving    = req.body.mobiel01Omschrijving,
        mobiel02                = req.body.mobiel02,
        mobiel02Omschrijving    = req.body.mobiel02Omschrijving,
        description             = req.body.description,
        newNAW                  = {aanhef: aanhef, achternaam: achternaam, tussenvoegsels: tussenvoegsels, voornaam: voornaam, adres: adres, postcode: postcode, woonplaats: woonplaats, huistelefoon: huistelefoon, mobiel01: mobiel01, mobiel01Omschrijving: mobiel01Omschrijving, mobiel02: mobiel02, mobiel02Omschrijving: mobiel02Omschrijving, description: description};
    NAW.create(newNAW, (err,naw) => {
        if(err){
            console.log("Create NAW: Something went wrong. \n" + err);
        } else {
            res.redirect("/naw");
        };
    });
}

// NAW New
exports.new = (req,res) => {
    res.render("./naw/new", {moment: moment, page: "nawNew"});
}

