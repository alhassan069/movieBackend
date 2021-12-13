const express = require("express");

const Seat = require("../models/seat.model");

const router = express.Router();

router.post(
  "/",
  // authenticate,
  // authorise(["seller", "admin"]),
  async (req, res) => {
    try {
      // const user = req.user;

      const seat = await Seat.create(req.body);

      return res.status(201).json({ seat });
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  }
);

router.get("/", async (req, res) => {
  const seat = await Seat.find().lean().exec();
  
  return res.send(seat);
});

router.get("/:id", async (req, res) => {
  const seat = await Seat.find({show:req.params.id}).lean().exec();
  
  return res.send(seat);
});

router.post(
  "/:id",
  async (req, res) => {
    try {
      // const user = req.user;

      const seat = await Seat.find({show:req.params.id});
      const bookingStatus = {
        "status" : "booked the seats"
      }
      return res.status(201).json({bookingStatus, seat});
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  }
);

module.exports = router;
