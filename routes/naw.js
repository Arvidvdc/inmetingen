const naw = require("../models/naw");

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

// EDIT route
router.get("/:id/edit", naw_controller.edit);

router.put("/:id", naw_controller.update);

// DESTROY route
router.delete("/:id/destroy", naw_controller.destroy);

// DELETE DOB route
router.get("/:id/dob", naw_controller.dob);

// Export router
module.exports = router;