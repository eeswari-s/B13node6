import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    items:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"product"
            },
            quantity:Number,
            price:Number
        }
    ],
    totalAmount:{
        type:Number,
        default:0
    }
},{timestamps:true});

export default mongoose.model("cart",cartSchema);