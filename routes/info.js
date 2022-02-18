// Require dependencies
const   express             = require("express"),
        router              = express.Router(),
        info_controller    = require("../controllers/info");

// Index route
router.get("/", info_controller.index);

// Maatvoering route
router.get("/maatvoering", info_controller.maatvoering);

// Downloads route
router.get("/download", info_controller.downloads);

// Download new route
router.get("/download/new", info_controller.downloadNew);

// Export router
module.exports = router;