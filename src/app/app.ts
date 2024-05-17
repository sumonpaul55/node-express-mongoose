import express, { NextFunction, Request, Response } from 'express';
const app = express()
// parser
app.use(express.json())
app.use(express.text())
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