import {Document, model, Schema} from "mongoose";

export interface ServiceSupplier extends Document {
    _id: number,
    fullName: string,
    nic: string,
    contactNumber: string,
    email: string,
    image: string,
    gender: string,
    address: string,
    workingArea: string,
    workingTimeStart: string,
    workingTimeEnd: string,
    serviceTypes: string[],
    copyOfCertificate: string[], // images urls
    workingExperience: string,
    selectedPlan: string,
    paymentType: string,
    isVip: boolean,
    expiredDate: Date,
    rate: number,
    status: number, // 0- not approve, 1- approved, 3: deleted
    createdAt: Date,
    updatedAt: Date
}

export interface ServiceSupplierModel extends ServiceSupplier {
}

const ServiceSupplierSchema = new Schema({
    _id: {
        type: Number,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    nic: {
        type: String,
        required: true,
        unique: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    workingArea: {
        type: String,
        required: true
    },
    workingTimeStart: {
        type: String,
        required: true
    },
    serviceTypes: {
        type: [String],
        required: true
    },
    copiesOfCertificate: {
        type: [String],
        required: false
    },
    workingTimeEnd: {
        type: String,
        required: true
    },
    workingExperience: {
        type: String,
        required: false
    },
    selectedPlan: {
        type: String,
        required: true
    },
    paymentType: {
        type: String,
        required: true
    },
    isVip: {
        type: Boolean,
        required: true
    },
    expiredDate: {
        type: Date,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    updatedAt: {
        type: String,
        required: true
    },
}, {
timestamps: true
});

export default model<ServiceSupplierModel>('serviceSupplier', ServiceSupplierSchema); // serviceSupplier mean the collection name
