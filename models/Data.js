// "Company/Crypto Name, Stock/Crypto Symbol, Market Cap / Current Price";

import mongoose from "mongoose";
const DataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    iconUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Data", DataSchema);
