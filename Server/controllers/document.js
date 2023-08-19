"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDocument = exports.saveDocument = void 0;
const Document_1 = __importDefault(require("../models/Document"));
const saveDocument = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const document = new Document_1.default({
        title: req.body.title,
        content: req.body.content,
        creator: req.body.creator,
        createdAt: new Date().toISOString(),
    });
    try {
        yield document.save();
        res.status(201).json(document);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
});
exports.saveDocument = saveDocument;
const getDocument = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const document = yield Document_1.default.findById(req.params.id);
        res.status(200).json(document);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getDocument = getDocument;
