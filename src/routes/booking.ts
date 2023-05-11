import express from 'express'


const bookingRouter: express.Router = express.Router();

bookingRouter.post('/user', (req:express.Request, res:express.Response)=>{

    try{
        // let {firstName, lastName} = req.body
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


export default bookingRouter
