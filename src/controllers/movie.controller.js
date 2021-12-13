const express = require("express");

const Movie = require("../models/movie.model");

const authenticate = require("../../middlewares/authenticate");
// const authorise = require("../middlewares/authorise");

const router = express.Router();

router.post(
  "/",
  authenticate,
  // authorise(["seller", "admin"]),
  async (req, res) => {
    try {
      // const user = req.user;

      const movie = await Movie.create(req.body);

      return res.status(201).json({ movie });
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  }
);

router.get("/", async (req, res) => {
  const movie = await Movie.find().lean().exec();

  return res.send(movie);
});

router.get("/:id", async (req, res) => {
  const movie = await Movie.find({actors:req.params.id}).lean().exec();
  // console.log(req.params.id)
  return res.send(movie);
});

module.exports = router;
