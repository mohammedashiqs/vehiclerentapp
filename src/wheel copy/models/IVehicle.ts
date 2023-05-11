import mongoose, {Document} from "mongoose";


export interface IVehicle extends Document {
    _id?: string,
    model: string,
    type: string,
    vehicleName: string,
    wheels: string
    createdAt?: string,
    updatedAt?: string
}