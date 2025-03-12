import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    prodectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})


const orderSchema = new mongoose.Schema(
    {
        orderprice: {
            type: Number,
            required: true
        },
        custemer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        orderItems: {
            type: [orderItemSchema]
        },
        address: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["PENDING", "CANCELLED", "DELIEVERED"],
            default: "PENDING"
        }
    }, {timestamps: true});

export const Order = mongoose.model("Oreder", orderSchema)