import {Document, model, Schema} from "mongoose";

export interface Payment extends Document {
    serviceSupplierId: number,
    accountNumber: string,
    amount: number,
    description: string,
    paymentMethod: string,
    slipId: string,
    image: string,
    bank: string,
    status: string,  // 1 success, 0 fail
    createdAt: Date,
}

export interface PaymentModel extends Payment {
}

const PaymentSchema = new Schema({
    serviceSupplierId: {
        type: Number,
        required: true,
    },
    accountNumber: {
        type: String,
        required: false,
    },
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    slipId: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    bank: {
        type: String,
        required: false,
    },
    branch: {
        type: String,
        required: false,
    },
    status:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        required: true,
    }
}, {
timestamps: true
});

export default model<PaymentModel>('payment', PaymentSchema); // payment mean the collection name
