import mongoose, {Schema, Model} from "mongoose";
import {IVehicle} from './IVehicle'


let vehicleSchema: Schema = new mongoose.Schema({

    model: {type: String, required: true, unique: true},
    type: {type: String, required: true, unique: true},
    vehicleName: {type: String, required: true, unique: true},
    wheels: {type: String, required: true, unique: true}

}, {timestamps:true});

let Vehicle:Model<IVehicle> = mongoose.model<IVehicle>('Vehicle', vehicleSchema)
export default Vehicle