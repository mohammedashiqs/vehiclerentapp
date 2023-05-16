import mongoose, {Document} from "mongoose";


export interface IVehicleMaster extends Document {
    _id?: string,
    model: String,
    type: String,
    vehicle: String,
    wheels: String,
    createdAt?: string,
    updatedAt?: string
}