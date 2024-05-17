"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use(express_1.default.text());
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get('/', logger, (req, res) => {
    res.send('Hello paul! world again paul');
});
app.post("/sumon/:id/:page", logger, (req, res) => {
    console.log(req.params);
    res.json({ message: "Success" });
});
app.post("/query", logger, (req, res) => {
    console.log(req.query);
    res.json({ message: "Success" });
});
exports.default = app;
