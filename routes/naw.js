// Require dependencies
const   express             = require("express"), 
        router              = express.Router(),
        naw_controller    = require("../controllers/naw");

// Show route
router.get("/", naw_controller.show);

// Export router
module.exports = router;