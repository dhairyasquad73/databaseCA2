const mongoose = require("mongoose");

const bookData = {
    title: {
        type:String,
        required:true
    },
    author: {
        type:String,
        required:true
    },
    genre: {
        type:String,
        required:true
    },
    publishedYear: {
        type:Number,
    },
    availableCopies: {
        type:Number,
        required:true
    },
    borrowedBy: {
        type:Array,
        required:true
    },
}
{
    timestamps:true;
}
