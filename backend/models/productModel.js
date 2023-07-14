// create the database schema and export as model
import mongoose from "mongoose";

// creating the review schema
const reviewSchema = new mongoose.Schema({
    user: { // which user has added this product
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const productSchema = new mongoose.Schema({
    user: { // which user has added this product
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        requied: true,
    },
    image: {
        type: String,
        requied: true,
    },
    brand: {
        type: String,
        requied: true,
    },
    category: {
        type: String,
        requied: true,
    },
    description: {
        type: String,
        requied: true,
    },
    reviews: [reviewSchema], // because review will be a different schema
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    }
}, {
    timestamps: true, // automatically adds timestamps with each entry
});

const Product = mongoose.model("Product", productSchema);

export default Product;