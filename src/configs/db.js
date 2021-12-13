const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect(" mongodb+srv://alhassan069:AtlasDb@cluster0.xcdqu.mongodb.net/movie");

}