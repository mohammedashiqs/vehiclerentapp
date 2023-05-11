import  express from 'express'
import jwt from 'jsonwebtoken'

let TokenVerifier = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
        let token = req.headers['x-auth-token'];
        if(!token){
            return res.status(401).json({
                msg: 'No token provided. Access Denied'
            })
        }

        let secretKey: string | undefined = process.env.JWT_SECRET_KEY;
        if(typeof token === "string"){
            let decode: any =  jwt.verify(token, secretKey)

            req.headers['user'] = decode.user
        }

    }catch(err){

    }

}

export default TokenVerifier ;