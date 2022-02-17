
// INDEX controller
exports.index = (req,res) => {
    res.render("./info/index", {page: "infoIndex"});
}

// MAATVOERING controller
exports.maatvoering = (req,res) => {
    res.render("./info/maatvoering",{page: "infoMaatvoering"});
}