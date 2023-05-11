import express from 'express'
import { body, validationResult } from 'express-validator'
import { IUser } from '../user/models/IUser'
import User from "../user/models/userModel"
import jwt from "jsonwebtoken"
import TokenVerifier from '../middlewares/token'
import Wheel from '../wheel/models/wheelModel'
import { IWheel } from '../wheel/models/IWheel'
import Vehicle from '../wheel copy/models/vehicleModel'
import { IVehicle } from '../wheel copy/models/IVehicle'

const bookingRouter: express.Router = express.Router();

bookingRouter.post('/register', [
    body('firstName').not().isEmpty().withMessage('First name is required'),
    body('lastName').not().isEmpty().withMessage('Last name is required')
], async (req: express.Request, res: express.Response) => {
    console.log(req);

    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    try {
        let { firstName, lastName } = req.body

        //check the user is exists
        let user: IUser | null = await User.findOne({ firstName: firstName, lastName: lastName })
        if (user) {
            return res.status(400).json({
                errors: [
                    { msg: 'User is Already Exists' }
                ]
            })
        }
        //register the user
        user = new User({ firstName, lastName });
        user = await user.save()

        //create token
        let payload: any = {
            user: {
                id: user.id,
                firstName: user.firstName
            }
        }

        let secretkey: string | undefined = process.env.JWT_SECRET_KEY
        if (secretkey) {
            let token = await jwt.sign(payload, secretkey)

            res.status(200).json({
                msg: "user added successfully",
                token: token
            })


        }


    } catch (err) {
        console.log(err);
        res.status(500).json({
            errors: [
                {
                    msg: err
                }
            ]
        })

    }

})



bookingRouter.get('/wheels', TokenVerifier, async (req: express.Request, res: express.Response) => {



    try {
        let requestedUser: any = req.headers['user'];
        let user: IUser | null = await User.findById(requestedUser.id)
        if (!user) {
            return res.status(400).json({
                errors: [
                    {
                        msg: 'User data not found'
                    }
                ]
            })
        }

        let wheels: IWheel[] | null = await Wheel.find()
        if (wheels.length == 0) {
            res.status(400).json({
                errors: [
                    {
                        msg: 'wheels not found'
                    }
                ]
            })
        }



        res.status(200).json({
            msg: "wheels fetched successfully",
            wheels: wheels

        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            errors: [
                {
                    msg: err
                }
            ]
        })

    }

})




bookingRouter.get('/wheels', TokenVerifier, async (req: express.Request, res: express.Response) => {



    try {
        let requestedUser: any = req.headers['user'];
        let user: IUser | null = await User.findById(requestedUser.id)
        if (!user) {
            return res.status(400).json({
                errors: [
                    {
                        msg: 'User data not found'
                    }
                ]
            })
        }

        let wheels: IWheel[] | null = await Wheel.find()
        if (wheels.length == 0) {
            res.status(400).json({
                errors: [
                    {
                        msg: 'wheels not found'
                    }
                ]
            })
        }



        res.status(200).json({
            msg: "wheels fetched successfully",
            wheels: wheels

        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            errors: [
                {
                    msg: err
                }
            ]
        })

    }

})





bookingRouter.get('/vehicle', TokenVerifier, async (req: express.Request, res: express.Response) => {



    try {
        let requestedUser: any = req.headers['user'];
        let user: IUser | null = await User.findById(requestedUser.id)
        if (!user) {
            return res.status(400).json({
                errors: [
                    {
                        msg: 'User data not found'
                    }
                ]
            })
        }

        let filter: {}


        if (req.query && req.query.wheels) {
            filter = req.query.wheels == "2" ? { "vehicle": { $in: ["scooter", "bike"] } } : req.query.wheels == "4" ? { "vehicle": { $in: ["car"] } } : {}

            let vehicles: IVehicle[] | null = await Vehicle.find(filter)
            if (vehicles.length == 0) {
                res.status(400).json({
                    errors: [
                        {
                            msg: 'vehicles not found'
                        }
                    ]
                })
            }
    
    
    
            res.status(200).json({
                msg: "vehicles fetched successfully",
                vehicles: vehicles
    
            })


        } else {
            res.status(400).json({
                errors: [
                    {
                        msg: 'wheel count is required'
                    }
                ]
            })
        }

       

    } catch (err) {
        console.log(err);
        res.status(500).json({
            errors: [
                {
                    msg: err
                }
            ]
        })

    }

})








bookingRouter.get('/type', (req: express.Request, res: express.Response) => {
    console.log(req);


    try {
        res.status(200).json({
            msg: "types fetched successfully"
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            errors: [
                {
                    msg: err
                }
            ]
        })

    }

})



bookingRouter.get('/model', (req: express.Request, res: express.Response) => {
    console.log(req);


    try {
        res.status(200).json({
            msg: "model added successfully"
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            errors: [
                {
                    msg: err
                }
            ]
        })

    }

})




bookingRouter.post('/dates', (req: express.Request, res: express.Response) => {
    console.log(req);


    try {
        res.status(200).json({
            msg: "dates added successfully"
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            errors: [
                {
                    msg: err
                }
            ]
        })

    }

})



export default bookingRouter
