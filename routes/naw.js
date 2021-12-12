// Required dependencies
const   express             = require("express"), 
        router              = express.Router(),
        naw_controller      = require("../controllers/naw");

// Show route
router.get("/", naw_controller.show);

// Create route
router.post("/new", naw_controller.new_post);

// New route
router.get("/new", naw_controller.new);

// Export router
module.exports = router;