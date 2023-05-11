import mongoose, {Document} from "mongoose";


export interface IWheel extends Document {
    _id?: string,
    wheelNo: number,
    createdAt?: string,
    updatedAt?: string
}