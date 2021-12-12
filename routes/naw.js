// Required dependencies
const   express             = require("express"), 
        router              = express.Router(),
        naw_controller      = require("../controllers/naw");

// NAW Index route
router.get("/", naw_controller.index);

// NAW Create route
router.post("/new", naw_controller.new_post);

// NAW New route
router.get("/new", naw_controller.new);

// NAW Show route
router.get("/:id", naw_controller.show);

// Export router
module.exports = router;