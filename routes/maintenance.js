// Require dependencies
const   express                     = require("express"),
        router                      = express.Router(),
        maintenance_controller      = require("../controllers/maintenance");

// Index route
router.get("/", maintenance_controller.index);

// Color index route
router.get("/kleuren", maintenance_controller.color);

// Color add route
router.get("/kleuren/new", maintenance_controller.colorNew);

// Color create route
router.post("/kleuren/new", maintenance_controller.colorAdd);

// Rooftop index route
router.get("/dak", maintenance_controller.rooftop);

// Rooftop add route
router.get("/dak/new", maintenance_controller.rooftopNew);

// Rooftop create route
router.post("/dak/new", maintenance_controller.rooftopAdd);

// Export router
module.exports = router;