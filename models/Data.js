// "Company/Crypto Name, Stock/Crypto Symbol, Market Cap / Current Price";

import mongoose from "mongoose";
const DataSchema = new mongoose.Schema(
  {
    cryptoName: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
    currentPrice: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Data", DataSchema);
