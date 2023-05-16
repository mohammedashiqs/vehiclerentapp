import mongoose, {Document} from "mongoose";


export interface IBooking extends Document {
    _id?: string,
    userId: String,
    modelId: String,
    fromDate: String,
    toDate: Date,
    status: Date,
    createdAt?: string,
    updatedAt?: string
}