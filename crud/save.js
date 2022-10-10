import Data from "../models/Data.js";

export const saveData = async (req, res) => {
  const newData = new Data(req.body);
  try {
    const savedData = await newData.save();
    res.status(200).json(savedData);
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
