// HOME
exports.home = (req,res) => {
    res.render("./index/home", { page: "Home" });
}