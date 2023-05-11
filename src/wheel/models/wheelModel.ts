import mongoose, {Schema, Model} from "mongoose";
import {IWheel} from './IWheel'


let wheelSchema: Schema = new mongoose.Schema({

    wheelNo: {type: Number, required: true, unique: true}

}, {timestamps:true});

let Wheel:Model<IWheel> = mongoose.model<IWheel>('Wheel', wheelSchema)
export default Wheel