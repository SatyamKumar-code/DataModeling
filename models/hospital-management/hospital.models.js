import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    addreddLine1: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    specializedIn: [
        {
            type: String,
        },
    ]
}, { timestamps: true});

export const MedicalRecord = mongoose.model('Hospital', hospitalSchema)