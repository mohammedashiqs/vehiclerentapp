import mongoose, {Document} from "mongoose";


export interface IUser extends Document {
    _id?: string,
    firstName: string,
    lastName: string,
    createdAt?: string,
    updatedAt?: string
}