const express = require("express");
const mongoose = require("mongoose");
const data = require("./schema.js");
require("dotenv").config();

const PORT = process.env.PORT;

const URL = process.env.URL;

mongoose.connect(URL);
try{
    return "monodb is connect"
} catch(err){
    return `${500} facing internal server error`
}


const bookData = {
    app,GET(req,res){
        try{
            const dataId = book.findOnebyID();
            if(!book){
                return res.err(404).json;
            }
        } catch(err) {
            return res.err(500).json
        }
    },

    app,POST(req,res){
        try{
            if(!book){
                return res.err(404).json;
            }
        } catch(err) {
            return res.err(500).json
        }
    },
    
    app,DELETE(req,res){
        try{
            if(!book){
                return res.err(404).json;
            }
        } catch(err) {
            return res.err(500).json
        }
    }

}



app.listen.PORT ; {
    console.log(`Server is running on http://localhost:${PORT}`)
}