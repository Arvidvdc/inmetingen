const res = require("express/lib/response");

// HOME controller
exports.home = (req,res) => {
    res.render("./index/home", { page: "Home" });
}

// ThE SARgE controller
exports.SARgE = (req,res) => {
    res.render("./index/ThESARgE", { page: "SARgE" });
}