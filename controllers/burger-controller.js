const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    const hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  const newBurgerNotEaten = false
  burger.insertOne(["burger_name", "devoured"], 
  [red.body.burger, newBurgerNotEaten],
  function(result) {
    res.json({ id: result.insertId })
  });
});

router.put("/api/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.updateOne({
    devoured: req.body.devoured },
    condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
  });
});



// Export routes for server.js to use.
module.exports = router;
