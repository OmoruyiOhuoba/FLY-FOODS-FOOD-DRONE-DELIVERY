const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String
    },
    orders: [
        {type: mongoose.Schema.Types.Array, ref: 'Order'}
    ]
}, {collection: "User" });

module.exports = mongoose.model("User", userSchema);


