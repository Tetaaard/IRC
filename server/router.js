const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

// router.get('/', function (req, res) {
//   res.sendFile('index.html', { root: __dirname })
// })


module.exports = router;