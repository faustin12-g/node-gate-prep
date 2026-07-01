import express from 'express'
import dotenv from 'dotenv'
import { timeStamp } from 'node:console';

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000

app.use(express.json());

app.get('/health', (req, res)=>{
    res.status(200).json({status: 'up', timeStamp: new Date})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http:localhost/${PORT}`)
})