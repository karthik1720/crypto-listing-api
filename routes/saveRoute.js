import express, { Router } from "express";
import { saveData, getData } from "../crud/save.js";

const router = express.Router();

router.post("/save", saveData);
router.get("/get", getData);
router.get("/delete/:id", getData);
export default router;
