import mongoose, {Schema, Model} from "mongoose";
import {IUser} from './Iuser'


let userSchema: Schema = new mongoose.Schema({

    firstName: {type: String, required: true, unique: true},
    lastName: {type: String, required: true, unique: true}

}, {timestamps:true});

let User:Model<IUser> = mongoose.model<IUser>('User', userSchema)
export default User