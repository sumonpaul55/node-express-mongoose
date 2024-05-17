import express, { Request, Response } from 'express';
const app = express()
// parser
app.use(express.json())
app.use(express.text())

app.get('/', (req: Request, res:Response) => {
  res.send('Hello paul! world again paul')
})

app.post("/sumon", (req: Request, res:Response)=>{
    console.log(req.body)
    res.json({message: "Success"})
})

export default app;