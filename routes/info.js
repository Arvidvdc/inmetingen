// Require dependencies
const   express             = require("express"),
        router              = express.Router(),
        info_controller    = require("../controllers/info");

// Index route
router.get("/", info_controller.index);

// Export router
module.exports = router;