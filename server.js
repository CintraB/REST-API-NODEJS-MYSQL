require("dotenv").config();
const app = require("./src/app.js");

app.listen(process.env.PORT, () => {
    console.log("Server listening on port "+ process.env.PORT);
});