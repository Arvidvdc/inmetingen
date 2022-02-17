// Required dependencies
const   COLOR   = require("../models/color"),
        ROOF    = require("../models/rooftop"),
        PRODUCT = require("../models/product");

const   SARgEModule = require("../SARgEModules/SARgEmodules");

// Index controller
exports.index = (req,res) => {
    res.render("./maintenance/index", {page: "maintenanceIndex"});
}

// ################ COLORS
// Color index controller
exports.color = (req,res) => {
    COLOR.find({}, (err, foundColors) => {
        if(err) {
            console.log("COLORINDEX - Something went wrong");
            res.send("Er is een foutmelding ontstaan. Raadpleeg de beheerder.")
        } else {
            res.render("./maintenance/color", {foundColors: foundColors, page: "colorsIndex"});
        }
    }).sort({ kleurnummer: 1});
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
        t200                = false,
        verandawanden       = false,
        schuttingplanken    = false,
        screenlinef513zip   = false;

    if(req.body.designline == "on") {designline = true;}
    if(req.body.ecoline == "on") {ecoline = true;}
    if(req.body.luxline == "on") {luxline = true;}
    if(req.body.topline == "on") {topline = true;}
    if(req.body.trendline == "on") {trendline = true;}
    if(req.body.ultraline == "on") {ultraline = true;}
    if(req.body.al22 == "on") {al22 = true;}
    if(req.body.al23 == "on") {al23 = true;}
    if(req.body.al24 == "on") {al24 = true;}
    if(req.body.w350zip == "on") {w350zip = true;}
    if(req.body.t350zip == "on") {t350zip = true;}
    if(req.body.w350 == "on") {w350 = true;}
    if(req.body.t350 == "on") {t350 = true;}
    if(req.body.t200 == "on") {t200 = true;}
    if(req.body.verandawanden == "on") {verandawanden = true;}
    if(req.body.schuttingplanken == "on") {schuttingplanken = true;}
    if(req.body.screenlinef513zip == "on") {screenlinef513zip = true;}

    let newColor = {kleurnummer: kleurnummer, kleuromschrijving: kleuromschrijving, designline: designline, ecoline: ecoline, luxline: luxline, topline: topline, trendline: trendline, ultraline: ultraline, al22: al22, al23: al23, al24: al24, w350zip: w350zip, t350zip: t350zip, w350: w350, t350: t350, t200: t200, verandawanden: verandawanden, schuttingplanken: schuttingplanken, screenlinef513zip: screenlinef513zip};
    COLOR.create(newColor, (err,color) => {
        if(err){
            console.log("Create color: Something went wrong. \n" + err);
            res.redirect("back");
        } else {
            res.redirect("/maintenance/kleuren");
        };
    });
}

// Color edit controller
exports.colorEdit = (req,res) => {
    COLOR.findById(req.params.id, (err,foundColors) => {
        if(err) {
            redirect("back");
        } else {
            res.render("./maintenance/colorEdit", {page: "colorsEdit", foundColor: foundColors});
        }
    });
}

//Color update controller
exports.colorUpdate = (req,res) => {
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
        t200                = false,
        verandawanden       = false,
        schuttingplanken    = false,
        screenlinef513zip   = false;

    if(req.body.designline == "on") {designline = true;}
    if(req.body.ecoline == "on") {ecoline = true;}
    if(req.body.luxline == "on") {luxline = true;}
    if(req.body.topline == "on") {topline = true;}
    if(req.body.trendline == "on") {trendline = true;}
    if(req.body.ultraline == "on") {ultraline = true;}
    if(req.body.al22 == "on") {al22 = true;}
    if(req.body.al23 == "on") {al23 = true;}
    if(req.body.al24 == "on") {al24 = true;}
    if(req.body.w350zip == "on") {w350zip = true;}
    if(req.body.t350zip == "on") {t350zip = true;}
    if(req.body.w350 == "on") {w350 = true;}
    if(req.body.t350 == "on") {t350 = true;}
    if(req.body.t200 == "on") {t200 = true;}
    if(req.body.verandawanden == "on") {verandawanden = true;}
    if(req.body.schuttingplanken == "on") {schuttingplanken = true;}
    if(req.body.screenlinef513zip == "on") {screenlinef513zip = true;}

    let updateColor = {kleurnummer: kleurnummer, kleuromschrijving: kleuromschrijving, designline: designline, ecoline: ecoline, luxline: luxline, topline: topline, trendline: trendline, ultraline: ultraline, al22: al22, al23: al23, al24: al24, w350zip: w350zip, t350zip: t350zip, w350: w350, t350: t350, t200: t200, verandawanden: verandawanden, schuttingplanken: schuttingplanken, screenlinef513zip: screenlinef513zip};
    
    COLOR.findByIdAndUpdate(req.params.id, updateColor, (err) => {
        if(err) {
            console.log("Error updating COLOR" + err);
        } else {
            res.redirect("/maintenance/kleuren");
        }
    });
}

// Color destroy controller
exports.colorDestroy = (req,res) => {
    COLOR.findByIdAndDelete(req.params.id, (err) => {
        if(err) {
            console.log("Error deleting record:" + req.params.id);
            res.redirect("back");
        } else {
            res.redirect("/maintenance/kleuren/");    
        }
    });
}

// ################ ROOFTOPS
// Rooftop index controller
exports.rooftop = (req,res) => {
    ROOF.find({}, (err, foundRoofs) => {
        if(err) {
            console.log("ROOFTOPINDEX - Something went wrong");
            res.send("Er is een foutmelding ontstaan. Raadpleeg de beheerder.")
        } else {
            res.render("./maintenance/rooftop", {foundRoofs: foundRoofs, page: "roofIndex"});
        }
    }).sort({ dakplaat: 1});
}

// Rooftop new controller
exports.rooftopNew = (req, res) => {
    res.render("./maintenance/rooftopNew", {page: "roofNew"});
}

// Rooftop create controler
exports.rooftopAdd = (req,res) => {
    let dakplaat                = req.body.dakplaat,
        dakplaatomschrijving    = req.body.omschrijving;

    let designline          = false,
        ecoline             = false,
        luxline             = false,
        topline             = false,
        trendline           = false,
        ultraline           = false;

    if(req.body.designline == "on") {designline = true;}
    if(req.body.ecoline == "on") {ecoline = true;}
    if(req.body.luxline == "on") {luxline = true;}
    if(req.body.topline == "on") {topline = true;}
    if(req.body.trendline == "on") {trendline = true;}
    if(req.body.ultraline == "on") {ultraline = true;}

    let newROOF = {dakplaat: dakplaat, dakplaatomschrijving: dakplaatomschrijving, designline: designline, ecoline: ecoline, luxline: luxline, topline: topline, trendline: trendline, ultraline: ultraline};
    ROOF.create(newROOF, (err,roof) => {
        if(err){
            console.log("Create rooftop: Something went wrong. \n" + err);
            res.redirect("back");
        } else {
            res.redirect("/maintenance/dak");
        };
    });
}

// Rooftop edit controller
exports.rooftopEdit = (req,res) => {
    ROOF.findById(req.params.id, (err,foundRoofs) => {
        if(err) {
            redirect("back");
        } else {
            res.render("./maintenance/rooftopEdit", {page: "roofEdit", foundRoof: foundRoofs});
        }
    });
}

// Rooftop update controler
exports.rooftopUpdate = (req,res) => {
    let dakplaat                = req.body.dakplaat,
        dakplaatomschrijving    = req.body.omschrijving;

    let designline          = false,
        ecoline             = false,
        luxline             = false,
        topline             = false,
        trendline           = false,
        ultraline           = false;

    if(req.body.designline == "on") {designline = true;}
    if(req.body.ecoline == "on") {ecoline = true;}
    if(req.body.luxline == "on") {luxline = true;}
    if(req.body.topline == "on") {topline = true;}
    if(req.body.trendline == "on") {trendline = true;}
    if(req.body.ultraline == "on") {ultraline = true;}

    let updateROOF = {dakplaat: dakplaat, dakplaatomschrijving: dakplaatomschrijving, designline: designline, ecoline: ecoline, luxline: luxline, topline: topline, trendline: trendline, ultraline: ultraline};
    ROOF.findByIdAndUpdate(req.params.id, updateROOF, (err) => {
        if(err) {
            console.log("Error updating Roof" + err);
        } else {
            res.redirect("/maintenance/dak");
        }
    });
}

// Rooftop destroy controller
exports.rooftopDestroy = (req,res) => {
    ROOF.findByIdAndDelete(req.params.id, (err) => {
        if(err) {
            console.log("Error deleting record:" + req.params.id);
            res.redirect("back");
        } else {
            res.redirect("/maintenance/dak/");    
        }
    });
}

// ################ PRODUCTS
// Product index controller
exports.product = (req,res) => {
    let veranda    = SARgEModule.sortType(res.results,"veranda"),
        gsw         = SARgEModule.sortType(res.results,"gsw"),
        zonwering   = SARgEModule.sortType(res.results,"zonwering"),
        overig      = SARgEModule.sortType(res.results,"overig");

    res.render("./maintenance/product", {veranda: veranda, gsw: gsw, zonwering: zonwering, overig: overig, results: res.results, page: "productIndex"});
}

// Product new controller
exports.productNew = (req, res) => {
    res.render("./maintenance/productNew", {page: "productNew"});
}

// Product create controler
exports.productAdd = (req,res) => {
    let product     = req.body.product,
        categorie   = req.body.categorie;

    let newProduct = {product: product, categorie: categorie};
    PRODUCT.create(newProduct, (err,product) => {
        if(err){
            console.log("Create product: Something went wrong. \n" + err);
            res.redirect("back");
        } else {
            res.redirect("/maintenance/product");
        };
    });
}

// Product edit controller
exports.productEdit = (req,res) => {
    PRODUCT.findById(req.params.id, (err,foundProduct) => {
        if(err) {
            redirect("back");
        } else {
            res.render("./maintenance/productEdit", {page: "productEdit", foundProduct: foundProduct});
        }
    });
}

// Product update controler
exports.productUpdate = (req,res) => {
    let product     = req.body.product,
        categorie   = req.body.categorie;

    let updateProduct = {product: product, categorie: categorie};
    PRODUCT.findByIdAndUpdate(req.params.id, updateProduct, (err) => {
        if(err) {
            console.log("Error updating Product" + err);
        } else {
            res.redirect("/maintenance/product");
        }
    });   
}

// Product destroy controller
exports.productDestroy = (req,res) => {
    PRODUCT.findByIdAndDelete(req.params.id, (err) => {
        if(err) {
            console.log("Error deleting record:" + req.params.id);
            res.redirect("back");
        } else {
            res.redirect("/maintenance/product/");
        }
    });
}