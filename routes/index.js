// Require dependencies
const   express             = require("express"),
        router              = express.Router(),
        index_controller    = require("../controllers/index");


// Default route
router.get("/", index_controller.home);

// Export router
module.exports = router;