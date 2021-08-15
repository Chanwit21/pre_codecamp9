const express = require("express");
const router = express.Router();
const branchControllers = require("../controllers/Branch");

router.get("/", branchControllers.getAllBranches);
router.post("/", branchControllers.createNewBranchesAndManager);

module.exports = router;
