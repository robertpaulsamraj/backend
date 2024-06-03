import { Schema, model } from "mongoose";


// Write the schema
const schema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
})
//Create your modal
const Movie = model('Movie', schema)

export default Movie;
