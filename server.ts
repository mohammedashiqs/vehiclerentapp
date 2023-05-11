import express from 'express'

const app:express.Application = express()






app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})