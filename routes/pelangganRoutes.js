const express = require("express");
const router = express.Router();
// Import validator
const pelangganValidator = require('../middlewares/validators/pelangganValidator');

// Import controller
const pelangganController = require('../controllers/pelangganController');


// Get all pelanggan data
router.get("/", pelangganController.getAll);

// Get one pelanggan
router.get("/:id", pelangganValidator.getOne, pelangganController.getOne);

// Create pelanggan
router.post("/", pelangganValidator.create, pelangganController.create);

// Update pelanggan
router.put("/:id", pelangganValidator.update, pelangganController.update);

// Delete pelanggan
router.delete("/:id", pelangganValidator.delete, pelangganController.delete);

module.exports = router;