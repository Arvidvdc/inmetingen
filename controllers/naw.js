// Required dependencies
const NAW   = require("../models/naw");

// Moment module
let moment = require("moment"); //code voor opmaak datum
const { utc, now } = require("moment");
const { redirect } = require("express/lib/response");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { findByIdAndUpdate } = require("../models/naw");

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
    let klantnummer             = req.body.klantnummer,
        aanhef                  = req.body.aanhef,
        achternaam              = req.body.achternaam,
        tussenvoegsels          = req.body.tussenvoegsels,
        voornaam                = req.body.voornaam,
        adres                   = req.body.adres,
        postcode                = req.body.postcode,
        woonplaats              = req.body.woonplaats,
        huistelefoon            = req.body.telefoonnummer,
        mobiel01                = req.body.mobiel01,
        mobiel01omschrijving    = req.body.mobiel01omschrijving,
        mobiel02                = req.body.mobiel02,
        mobiel02omschrijving    = req.body.mobiel02omschrijving,
        email                   = req.body.email,
        omschrijving             = req.body.omschrijving,
        newNAW                  = {klantnummer: klantnummer, aanhef: aanhef, achternaam: achternaam, tussenvoegsels: tussenvoegsels, voornaam: voornaam, adres: adres, postcode: postcode, woonplaats: woonplaats, huistelefoon: huistelefoon, mobiel01: mobiel01, mobiel01omschrijving: mobiel01omschrijving, mobiel02: mobiel02, mobiel02omschrijving: mobiel02omschrijving, email: email, omschrijving: omschrijving};
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

// NAW Show
exports.show = (req,res) => {
    NAW.findById(req.params.id, (err, foundNAW) => {
        if(err) {
            redirect("back");
        } else {
            res.render("./naw/show", {moment: moment, foundNAW: foundNAW, page: "nawShow"});
        }
    })
}

// EDIT
exports.edit = (req, res) => {
    NAW.findById(req.params.id, (err,foundNAW) => {
        if(err) {
            redirect("back");
        } else {
            res.render("./naw/edit", {page: "nawEdit", foundNAW: foundNAW});
        }
    })
}

exports.update = (req,res) => {
    NAW.findByIdAndUpdate(req.params.id, req.body.update, (err) => {
        if(err) {
            console.log("Error updating NAW" + err);
        } else {
            res.redirect("/naw/" + req.params.id);
        }
    });
}