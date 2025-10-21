import mongoose from "mongoose"

const dataschema = new mongoose.Schema({

    name: String,
    salary: String,
    language: String,
    city:String,
    isManager: Boolean

});

export const names = new mongoose.model('employers', dataschema)