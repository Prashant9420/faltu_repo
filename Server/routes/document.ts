import express from "express";
import { saveDocument, getDocument } from "../controllers/document";

const router = express.Router();

router.post("/", saveDocument);
router.get("/:id", getDocument);

export default router;

