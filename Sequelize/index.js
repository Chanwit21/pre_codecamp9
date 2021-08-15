const db = require("./models/index");
const express = require("express");
const app = express();
const cors = require("cors");
const managerRoutes = require("./routes/Manager");
const branchRoutes = require("./routes/Branch");
const accountRoutes = require("./routes/Account");
const customerRoutes = require("./routes/Customer");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/managers", managerRoutes);
app.use("/branches", branchRoutes);
app.use("/accounts", accountRoutes);
app.use("/customers", customerRoutes);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(8000, () => {
    console.log("Server is Rinning at port 8000");
  });
});
