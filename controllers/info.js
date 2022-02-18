// Required dependencies
const   DOWNLOAD    = require("../models/download");

// INDEX controller
exports.index = (req,res) => {
    res.render("./info/index", {page: "infoIndex"});
}

// MAATVOERING controller
exports.maatvoering = (req,res) => {
    res.render("./info/maatvoering",{page: "infoMaatvoering"});
}

// Downloads index controller
exports.downloads = (req,res) => {
    DOWNLOAD.find({}, (err,foundDownloads) => {
        if(err) {
            console.log("downloadIndex - ERROR: \n" + err.message);
            res.send("Er is een foutmelding ontstaan. Raadpleeg de beheerder.")
        } else {
            res.render("./info/downloads", {foundDownloads: foundDownloads, page: "downloadIndex"});
        }
    });
}

// Downloads new controller
exports.downloadNew = (req,res) => {
    res.render("./info/downloadNew", {page: "downloadnew"});
}