import express from "express";
import {getShoes} from "../controller/shoes.controller.js";


const router = express.Router();

router.get("/", getShoes);

export default router;