const express = require("express");

const Show = require("../models/show.model");

const router = express.Router();

router.post(
  "/",
  // authenticate,
  // authorise(["seller", "admin"]),
  async (req, res) => {
    try {
      // const user = req.user;

      const show = await Show.create(req.body);

      return res.status(201).json({ show });
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  }
);

router.get("/", async (req, res) => {
  const show = await Show.find().lean().exec();

  return res.send(show);
});

router.get("/:id", async (req, res) => {
  // const show = await Author.findById(req.params.id).lean().exec();
  const show = await Show.find({movie:req.params.id}).lean().exec();
  // const show = await Show.find().lean().exec();

  return res.send(show);
});

router.get("/:id/:ie", async (req, res) => {
  // const show = await Author.findById(req.params.id).lean().exec();
  const show = await Show.find({movie:req.params.id}).lean().exec();
  // const screen = await Show.find().lean().exec();
  const location = req.params.ie;
  return res.send({location, show});
});

module.exports = router;
