import express from 'express'
import {body, validationResult} from 'express-validator'


const bookingRouter: express.Router = express.Router();

bookingRouter.post('/register', [
    body('firstName').not().isEmpty().withMessage('First name is required'),
    body('lastName').not().isEmpty().withMessage('Last name is required')
], (req:express.Request, res:express.Response)=>{
    console.log(req);
    
    let errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }

    try{
        let {firstName, lastName} = req.body

        //check the user is exists
        //register the user

        res.status(200).json({
            msg: "user added successfully"
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            errors:[
                {
                    msg: err
                }
            ]
        })
        
    }

})



bookingRouter.get('/wheels', (req:express.Request, res:express.Response)=>{
    console.log(req);


    try{
        res.status(200).json({
            msg: "wheels fetched successfully"
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            errors:[
                {
                    msg: err
                }
            ]
        })
        
    }

})


bookingRouter.get('/wheels', (req:express.Request, res:express.Response)=>{
    console.log(req);


    try{
        res.status(200).json({
            msg: "wheels fetched successfully"
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            errors:[
                {
                    msg: err
                }
            ]
        })
        
    }

})



bookingRouter.post('/wheels', (req:express.Request, res:express.Response)=>{
    console.log(req);


    try{
        res.status(200).json({
            msg: "wheels added successfully"
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            errors:[
                {
                    msg: err
                }
            ]
        })
        
    }

})


bookingRouter.get('/vehicle', (req:express.Request, res:express.Response)=>{
    console.log(req);


    try{
        res.status(200).json({
            msg: "vehicle fetched successfully"
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            errors:[
                {
                    msg: err
                }
            ]
        })
        
    }

})


bookingRouter.post('/vehicle', (req:express.Request, res:express.Response)=>{
    console.log(req);


    try{
        res.status(200).json({
            msg: "wheels added successfully"
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            errors:[
                {
                    msg: err
                }
            ]
        })
        
    }

})


bookingRouter.get('/model', (req:express.Request, res:express.Response)=>{
    console.log(req);


    try{
        res.status(200).json({
            msg: "model fetched successfully"
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            errors:[
                {
                    msg: err
                }
            ]
        })
        
    }

})



bookingRouter.get('/model', (req:express.Request, res:express.Response)=>{
    console.log(req);


    try{
        res.status(200).json({
            msg: "model added successfully"
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            errors:[
                {
                    msg: err
                }
            ]
        })
        
    }

})




bookingRouter.post('/dates', (req:express.Request, res:express.Response)=>{
    console.log(req);


    try{
        res.status(200).json({
            msg: "dates added successfully"
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            errors:[
                {
                    msg: err
                }
            ]
        })
        
    }

})



export default bookingRouter
