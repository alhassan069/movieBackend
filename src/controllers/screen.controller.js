const express = require("express");

const Screen = require("../models/screen.model");

const router = express.Router();

router.post(
  "/",
  // authenticate,
  // authorise(["seller", "admin"]),
  async (req, res) => {
    try {
      // const user = req.user;

      const screen = await Screen.create(req.body);

      return res.status(201).json({ screen });
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  }
);

router.get("/", async (req, res) => {
  const screen = await Screen.find().lean().exec();

  return res.send(screen);
});

module.exports = router;
