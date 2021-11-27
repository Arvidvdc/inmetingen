// Require dependencies
const NAW   = require("../models/naw");

// NAW show
exports.show =  (req,res) => {
    NAW.find({}, (err, foundNAW) => {
        if(err){
            console.log("Something went wrong");
        } else {
            res.render("./naw/show", {foundNAW: foundNAW, page: "nawOverzicht"});
        };
    });
}