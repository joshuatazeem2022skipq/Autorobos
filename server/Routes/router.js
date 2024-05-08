const express = require("express");
const router = new express.Router();

router.post("/sendmail", (req, res) => {
  console.log(req.body);
});

module.exports = router;
