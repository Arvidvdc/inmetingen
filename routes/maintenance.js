// Require dependencies
const   express                     = require("express"),
        router                      = express.Router(),
        maintenance_controller      = require("../controllers/maintenance");

// Index route
router.get("/", maintenance_controller.index);

// ################ COLORS
// Color index route
router.get("/kleuren", maintenance_controller.color);

// Color add route
router.get("/kleuren/new", maintenance_controller.colorNew);

// Color create route
router.post("/kleuren/new", maintenance_controller.colorAdd);

// Color edit route
router.get("/kleuren/:id/edit", maintenance_controller.colorEdit);

// Color update route
router.put("/kleuren/:id", maintenance_controller.colorUpdate);

// Color destroy route
router.delete("/kleuren/:id/destroy", maintenance_controller.colorDestroy);

// ################ ROOFTOPS
// Rooftop index route
router.get("/dak", maintenance_controller.rooftop);

// Rooftop add route
router.get("/dak/new", maintenance_controller.rooftopNew);

// Rooftop create route
router.post("/dak/new", maintenance_controller.rooftopAdd);

// Rooftop edit route
router.get("/dak/:id/edit", maintenance_controller.rooftopEdit);

// Rooftop update route
router.put("/dak/:id", maintenance_controller.rooftopUpdate);

// Rooftop destroy route
router.delete("/dak/:id/destroy", maintenance_controller.rooftopDestroy);

// Export router
module.exports = router;