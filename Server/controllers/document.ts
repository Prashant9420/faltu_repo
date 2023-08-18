import Document from "../models/Document";
import { Request, Response } from "express";

export const saveDocument = async (req: Request, res: Response) => {
  const document = new Document({
    title: req.body.title,
    content: req.body.content,
    creator: req.body.creator,
    createdAt: new Date().toISOString(),
  });
  try {
    await document.save();
    res.status(201).json(document);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getDocument = async (req: Request, res: Response) => {
  try {
    const document = await Document.findById(req.params.id);
    res.status(200).json(document);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
