const app = require("./index");

const connect = require("./configs/db");

app.listen(3007, async function () {
    await connect();
    console.log(" Hello I am listening on port 3007")
});