import mongoose, {Schema, Model} from "mongoose";
import {IVehicleMaster} from './IVehicleMaster'


let vehicleMasterSchema: Schema = new mongoose.Schema({

    model: {type: String, required: true, unique: true},
    vehicle: {type: String, required: true, unique: true},
    type: {type: String, required: true, unique: true},
    wheels: {type: String, required: true, unique: true}

}, {timestamps:true});

let VehicleMaster:Model<IVehicleMaster> = mongoose.model<IVehicleMaster>('VehicleMaster', vehicleMasterSchema)
export default VehicleMaster