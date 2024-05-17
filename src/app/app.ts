import express, { NextFunction, Request, Response } from 'express';
const app = express()
// parser
app.use(express.json())
app.use(express.text())

// express router
const userRouter = express.Router();
const coureRouter = express.Router()

app.use("/api/v1/course", coureRouter)
app.use("/api/v1/users", userRouter)


userRouter.post("/create-user", (req:Request, res:Response)=>{
    const user= req.body;
    console.log(user)
    res.json({success: "user is created", user: user})
})

coureRouter.post("/create-course", (req:Request, res:Response)=>{
    console.log("courser", req.body)
    res.json({message: "success"})
})






// middleware
const logger = (req:Request, res:Response, next:NextFunction)=>{
    console.log(req.url, req.method, req.hostname)
    next()
}

app.get('/',logger, (req: Request, res:Response) => {
  res.send('Hello paul! world again paul')
 
})

app.post("/sumon/:id/:page",logger, (req: Request, res:Response)=>{
    console.log(req.params)
    res.json({message: "Success"})
})
app.post("/query",logger, (req: Request, res:Response)=>{
    console.log(req.query)
    res.json({message: "Success"})
})
export default app;