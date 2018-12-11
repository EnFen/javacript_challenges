const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Connect Mongoose to the MongoDB
// recipe database
mongoose.connect('mongodb://localhost/recipes', err => {
    if (err) {
        console.log('Error connecting to database', err)
    } else {
        console.log('Connected to database!')
    }
})

// Create a new schema (only Mongoose knows about the schema. Mongo itself does not...)
const ingredientSchema = new Schema({
    name: String,
    created_at: {
        type: Date,
        default: Date.now
    }
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema)

module.exports = Ingredient