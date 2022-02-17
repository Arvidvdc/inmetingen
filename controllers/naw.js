// Required dependencies
const NAW   = require("../models/naw");

// Moment module
let moment = require("moment"); //code voor opmaak datum
const { utc, now } = require("moment");
const { redirect } = require("express/lib/response");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { findByIdAndUpdate } = require("../models/naw");

// NAW Index controller
exports.index = (req,res) => {
    if(Object.keys(req.query).length >= 1) {
        NAW.find({achternaam: new RegExp('^'+req.query.search+'$', "i") }, (err, foundNAW) => {
            if(err) {
                console.log("You FUCKED it UP");
            } else {
                res.render("./naw/index", {foundNAW: foundNAW, page: "nawIndex"});
            }
        }).sort({ achternaam: 1});
    } else {
        NAW.find({}, (err, foundNAW) => {
            if(err) {
                console.log("Something went wrong");
            } else {
                res.render("./naw/index", {foundNAW: foundNAW, page: "nawIndex"});
            };
        }).sort({ achternaam: 1});
    }
}

// NAW Create controller
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
        omschrijving            = req.body.omschrijving,
        newNAW                  = {klantnummer: klantnummer, aanhef: aanhef, achternaam: achternaam, tussenvoegsels: tussenvoegsels, voornaam: voornaam, adres: adres, postcode: postcode, woonplaats: woonplaats, huistelefoon: huistelefoon, mobiel01: mobiel01, mobiel01omschrijving: mobiel01omschrijving, mobiel02: mobiel02, mobiel02omschrijving: mobiel02omschrijving, email: email, omschrijving: omschrijving};
    NAW.create(newNAW, (err,naw) => {
        if(err){
            console.log("Create NAW: Something went wrong. \n" + err);
        } else {
            res.redirect("/naw");
        };
    });
}

// NAW New controller
exports.new = (req,res) => {
    res.render("./naw/new", {moment: moment, page: "nawNew"});
}

// NAW Show controller
exports.show = (req,res) => {
    NAW.findById(req.params.id, (err, foundNAW) => {
        if(err) {
            redirect("back");
        } else {
            res.render("./naw/show", {moment: moment, foundNAW: foundNAW, page: "nawShow"});
        }
    })
}

// NAW EDIT controller
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
    let klantnummer             = req.body.update.klantnummer,
        aanhef                  = req.body.update.aanhef,
        achternaam              = req.body.update.achternaam,
        tussenvoegsels          = req.body.update.tussenvoegsels,
        voornaam                = req.body.update.voornaam,
        adres                   = req.body.update.adres,
        postcode                = req.body.update.postcode,
        woonplaats              = req.body.update.woonplaats,
        huistelefoon            = req.body.update.telefoonnummer,
        mobiel01                = req.body.update.mobiel01,
        mobiel01omschrijving    = req.body.update.mobiel01omschrijving,
        mobiel02                = req.body.update.mobiel02,
        mobiel02omschrijving    = req.body.update.mobiel02omschrijving,
        email                   = req.body.update.email,
        omschrijving            = req.body.update.omschrijving,
        laatstewijziging        = Date.now(),
        updateNAW               = {klantnummer: klantnummer, aanhef: aanhef, achternaam: achternaam, tussenvoegsels: tussenvoegsels, voornaam: voornaam, adres: adres, postcode: postcode, woonplaats: woonplaats, huistelefoon: huistelefoon, mobiel01: mobiel01, mobiel01omschrijving: mobiel01omschrijving, mobiel02: mobiel02, mobiel02omschrijving: mobiel02omschrijving, email: email, omschrijving: omschrijving, laatstewijziging: laatstewijziging};

    NAW.findByIdAndUpdate(req.params.id, updateNAW, (err) => {
        if(err) {
            console.log("Error updating NAW" + err);
        } else {
            res.redirect("/naw/" + req.params.id);
        }
    });
}

// NAW DESTROY controller
exports.destroy = (req,res) => {
    NAW.findByIdAndDelete(req.params.id, (err) => {
        if(err) {
            console.log("Error deleting record:" + req.params.id);
            res.redirect("back");
        } else {
            res.redirect("/naw/");    
        }
    });
}