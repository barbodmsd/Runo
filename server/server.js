import app from "./app.js";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
// introduce env variable 
configDotenv({ path: "./config.env" });

// connect to mongo.db
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("MONGOOSE CONNECT"))
  .catch((err) => console.log(err));

//   port and start the server
const port = process.env.PORT || 7001;
app.listen(port, () => console.log("server is run :)"));
