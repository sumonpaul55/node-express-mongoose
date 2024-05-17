import express, { NextFunction, Request, response, Response } from 'express';
const app = express()
// parser
app.use(express.json())
app.use(express.text())

// express router
const userRouter = express.Router();
const coureRouter = express.Router()

app.use("/api/v1/course", coureRouter)
app.use("/api/v1/users", userRouter)








// middleware
const logger = (req:Request, res:Response, next:NextFunction)=>{
    console.log(req.url, req.method, req.hostname)
    next()
}





userRouter.post("/create-user", (req:Request, res:Response)=>{
    const user= req.body;
    console.log(user)
    res.json({success: "user is created", user: user})
})

coureRouter.post("/create-course", (req:Request, res:Response)=>{
    console.log("courser", req.body)
    res.json({message: "success"})
})






app.get('/', async(req: Request, res:Response, next:NextFunction) => {
    try {
    //   console.log(req.params)
    res.send(something)

    } catch (error) {
        next(error)
        // console.log(error)
        // res.status(400).json({success:false, message: "something went wrong"})
    }
    
})

app.post("/sumon/:id/:page",logger,  (req: Request, res:Response)=>{
    console.log(req.params)
    res.json({message: "Success"})
})
app.post("/query",logger, (req: Request, res:Response)=>{
    console.log(req.query)
    res.json({message: "Success"})
})





// global error handler
app.use((error:any, req:Request, res:Response, next:NextFunction)=>{
    console.log(error, req, res, next)
    if(error){
        res.status(400).json({success:false, message:"something error"})
    }
   
})
export default app;