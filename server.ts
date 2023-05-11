import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bookingRouter from "./src/routes/booking"

const app:express.Application = express()
dotenv.config()
const dbUrl: string | undefined = process.env.MONGODB_URL

if(dbUrl){
    mongoose.connect(dbUrl).then((resoponse)=>{
        console.log('Connected to mongodb successfully');
        
    }).catch((err)=>{
        console.log(err);
        process.exit(1)  //stops the nodejs process
        
    })
    
}

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send("Welcome to home page")
})


//router configuration
app.use('/bookings', bookingRouter)


app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})