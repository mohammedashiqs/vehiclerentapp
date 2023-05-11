import mongoose, {Document} from "mongoose";


export interface IWheel extends Document {
    _id?: string,
    wheelNo: String,
    createdAt?: string,
    updatedAt?: string
}