import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import axios from "axios";
import saveRoute from "./routes/saveRoute.js";

const app = express();
app.use(express.json());
dotenv.config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.get("/live/get", async (req, res) => {
//   const { apikey, apiurl } = process.env;
//   const response = await axios.get(apiurl + "v1/exchanges" + apikey);
//   res.header("Access-Control-Allow-Origin", "*");
//   res.json(response.data);
// });

app.get("/live/get", async (req, res) => {
  const options = {
    method: "GET",
    url: process.env.APIURL,
    params: {
      referenceCurrencyUuid: process.env.CURUUID,
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": process.env.HEADERKEY,
      "X-RapidAPI-Host": process.env.APIHOST,
    },
  };

  const response = await axios.request(options);
  res.json(response.data);
});

app.use("/api/", saveRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  connect();
  console.log("listening to" + PORT);
});

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});
