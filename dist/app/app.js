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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use(express_1.default.text());
// express router
const userRouter = express_1.default.Router();
const coureRouter = express_1.default.Router();
app.use("/api/v1/course", coureRouter);
app.use("/api/v1/users", userRouter);
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({ success: "user is created", user: user });
});
coureRouter.post("/create-course", (req, res) => {
    console.log("courser", req.body);
    res.json({ message: "success" });
});
app.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //   console.log(req.params)
        res.send(something);
    }
    catch (error) {
        next(error);
        // console.log(error)
        // res.status(400).json({success:false, message: "something went wrong"})
    }
}));
app.post("/sumon/:id/:page", logger, (req, res) => {
    console.log(req.params);
    res.json({ message: "Success" });
});
app.post("/query", logger, (req, res) => {
    console.log(req.query);
    res.json({ message: "Success" });
});
// global error handler
app.use((error, req, res, next) => {
    console.log(error, req, res, next);
    if (error) {
        res.status(400).json({ success: false, message: "something error" });
    }
});
exports.default = app;
