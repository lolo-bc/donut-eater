var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(req.body.name,
  function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/api/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update(condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
  });
});



module.exports = router;
