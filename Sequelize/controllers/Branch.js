const db = require("../models");

const getAllBranches = async (req, res) => {
  const allBranches = await db.Branch.findAll({
    include: [db.Manager],
  });
  res.status(200).send(allBranches);
};

const createNewBranchesAndManager = async (req, res) => {
  const { managerName, managerExperience } = req.body;
  const { branchName, branchSize } = req.body;
  console.log(req.body);
  const newManager = await db.Manager.create({
    name: managerName,
    experience: managerExperience,
  });
  const newBranch = await db.Branch.create({
    name: branchName,
    size: branchSize,
    manager_id: newManager.id,
  });
  res.status(201).send(newBranch);
};
module.exports = {
  getAllBranches,
  createNewBranchesAndManager,
};
