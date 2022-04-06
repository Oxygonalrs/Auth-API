import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';

var checkUserAuth = async(req, res, next) => {
    let token;

    // Get Token from Headers
    const {authorization} = req.headers
   
    if(authorization && authorization.startsWith('Bearer'))
    {
        try
        {
            token = authorization.split(' ')[1];

            // Verify Token
            const {userID} = jwt.verify(token, process.env.JWT_SECRET_KEY)

            // Get User from Token
            req.user = await UserModel.findById(userID).select('-password')
            
            // res.send({"status" : "success", "message" : "Token Found"});
            next()
        }
        catch{
            res.send({"status" : "failed", "message" : "Error"});
        }
    }
    if(!token)
    {
        res.send({"status" : "failed", "message" : "Unauthorized Used, No Token"});
    }
}

export default checkUserAuth;