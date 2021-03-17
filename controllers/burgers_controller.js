const path = require("path");
const express = require("express");
var router = express.Router();

var burger = require(path.resolve(__dirname, "../models/burger.js"));

router.get("/", (req, res) => {
  burger.all((data) => {
    var handleBarsObj = {
      burgers: data,
    };
    res.render("index", handleBarsObj);
  });
});

router.post("/burgers", (req, res) => {
  console.log(">", req.body.burger_name);
  burger.create(["burger_name"], [req.body.burger_name], (data) => {
    res.redirect("/");
  });
});

router.put("/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition: ", condition);
  burger.update(
    {
      devoured: true,
    },
    condition,
    function (data) {
      res.redirect("/");
    }
  );
});

module.exports = router;