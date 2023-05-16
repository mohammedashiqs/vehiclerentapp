import mongoose, {Schema, Model} from "mongoose";
import {IBooking} from './IBooking'


let bookingSchema: Schema = new mongoose.Schema({

    userId: {type: mongoose.Types.ObjectId, required: true, unique: true},
    ModelId: {type: mongoose.Types.ObjectId, required: true},
    fromDate: {type: Date, required: true},
    toDate: {type: Date, required: true},
    status: {type:String, default:'pending'} //pending, paid, delivered etc

}, {timestamps:true});

let Booking:Model<IBooking> = mongoose.model<IBooking>('Booking', bookingSchema)
export default Booking