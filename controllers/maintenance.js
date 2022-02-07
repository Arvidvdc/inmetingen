// Required dependencies
const COLOR   = require("../models/color");

// Index controller
exports.index = (req,res) => {
    res.render("./maintenance/index", {page: "maintenanceIndex"});
}

// Color index controller
exports.color = (req,res) => {
    COLOR.find({}, (err, foundColors) => {
        if(err) {
            console.log("COLORINDEX - Something went wrong");
            res.send("Er is een foutmelding ontstaan. Raadpleeg de beheerder.")
        } else {
            res.render("./maintenance/color", {foundColors: foundColors, page: "colorsIndex"});
        }
    });
}

// Color new controller
exports.colorNew = (req, res) => {
    res.render("./maintenance/colorNew", {page: "colorsNew"});
}

// Color create controler
exports.colorAdd = (req,res) => {
    let kleurnummer         = req.body.nummer,
        kleuromschrijving   = req.body.omschrijving;

    let designline          = false,
        ecoline             = false,
        luxline             = false,
        topline             = false,
        trendline           = false,
        ultraline           = false,

        al22                = false,
        al23                = false,
        al24                = false,
        w350zip             = false,
        t350zip             = false,
        w350                = false,
        t350                = false,
        verandawanden       = false,
        schuttingplanken    = false,
        screenlinef513zip   = false;

    if(req.body.designline == "on") {
        designline = true;
    }
    if(req.body.ecoline == "on") {
        ecoline = true;
    }
    if(req.body.luxline == "on") {
        luxline = true;
    }
    if(req.body.topline == "on") {
        topline = true;
    }
    if(req.body.trendline == "on") {
        trendline = true;
    }
    if(req.body.ultraline == "on") {
        ultraline = true;
    }
    if(req.body.al22 == "on") {
        al22 = true;
    }
    if(req.body.al23 == "on") {
        al23 = true;
    }
    if(req.body.al24 == "on") {
        al24 = true;
    }
    if(req.body.w350zip == "on") {
        w350zip = true;
    }
    if(req.body.t350zip == "on") {
        t350zip = true;
    }
    if(req.body.w350 == "on") {
        w350 = true;
    }
    if(req.body.t350 == "on") {
        t350 = true;
    }
    if(req.body.verandawanden == "on") {
        verandawanden = true;
    }
    if(req.body.schuttingplanken == "on") {
        schuttingplanken = true;
    }
    if(req.body.screenlinef513zip == "on") {
        screenlinef513zip = true;
    }

    let newColor = {kleurnummer: kleurnummer, kleuromschrijving: kleuromschrijving, designline: designline, ecoline: ecoline, luxline: luxline, topline: topline, trendline: trendline, ultraline: ultraline, al22: al22, al23: al23, al24: al24, w350zip: w350zip, t350zip: t350zip, w350: w350, t350: t350, verandawanden: verandawanden, schuttingplanken: schuttingplanken, screenlinef513zip: screenlinef513zip};
    COLOR.create(newColor, (err,color) => {
        if(err){
            console.log("Create color: Something went wrong. \n" + err);
            res.redirect("back");
        } else {
            res.redirect("/maintenance/kleuren");
        };
    });
}