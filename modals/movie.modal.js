import { Schema, model } from "mongoose";


// Write the schema
const schema = new Schema({
    title: String,
    desc: String,
})
//Create your modal
const Movie = model('Movie', schema)

export default Movie;
