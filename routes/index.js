// Require dependencies
const   express             = require("express"),
        router              = express.Router(),
        index_controller    = require("../controllers/index");


// Default route
router.get("/", index_controller.home);

// ThE SARgE route
router.get("/sgt", index_controller.SARgE);

// Export router
module.exports = router;