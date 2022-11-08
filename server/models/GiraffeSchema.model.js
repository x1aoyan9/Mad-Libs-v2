const mongoose = require('mongoose');

const GiraffeSchema = new mongoose.Schema({

    // Your Name
    yourName: {
        type: String,
        required: [true, "Please enter your name"],
        minLength: [1, "Must be filled in"]
    },

    // Plural Noun
    pluralNoun: {
        type: String,
        required: [true, "Please enter a plural noun"],
        minLength: [1, "Must be filled in"],
    },

    // Plural Noun2
    pluralNoun2: {
        type: String,
        required: [true, "Please enter a plural noun"],
        minLength: [1, "Must be filled in"],
    },

    // Part of the Body
    bodyPart: {
        type: String,
        required: [true, "Please enter a part of the body"],
        minLength: [1, "Must be filled in"],
    },

    // Number
    number: {
        type: Number,
        required: [true, "Please enter a number"],
        min: [0, "Must be greater than or equal to zero"],
        max: [100000000001, "Must be less than or equal to 100,000,000,000"],
    },

    // Plural Noun3
    pluralNoun3: {
        type: String,
        required: [true, "Please enter a plural noun"],
        minLength: [1, "Must be filled in"],
    },

    // Part of the Body2
    bodyPart2: {
        type: String,
        required: [true, "Please enter a part of the body"],
        minLength: [1, "Must be filled in"],
    },

    // Liquid
    liquid: {
        type: String,
        required: [true, "Please name a type of liquid"],
        minLength: [1, "Must be filled in"],
    },

    // Parts of the Body
    bodyParts: {
        type: String,
        required: [true, "Please enter parts of the body"],
        minLength: [1, "Must be filled in"],
    },

    // Part of the Body3
    bodyPart3: {
        type: String,
        required: [true, "Please enter a part of the body"],
        minLength: [1, "Must be filled in"],
    },

    // Adjective
    adjective: {
        type: String,
        required: [true, "Please enter an adjective"],
        minLength: [1, "Must be filled in"],
    },

    // Plural Noun4
    pluralNoun4: {
        type: String,
        required: [true, "Please enter a plural noun"],
        minLength: [1, "Must be filled in"],
    },

    // Adjective2
    adjective2: {
        type: String,
        required: [true, "Please enter an adjective"],
        minLength: [1, "Must be filled in"],
    },

    // Adjective3
    adjective3: {
        type: String,
        required: [true, "Please enter an adjective"],
        minLength: [1, "Must be filled in"],
    },

    // Verb Ending in '-ING'
    verbEnding_ING: {
        type: String,
        required: [true, "Please enter a verb ending with '-ING'"],
        minLength: [1, "Must be filled in"],
    },

    // Noun
    noun: {
        type: String,
        required: [true, "Please enter a noun"],
        minLength: [1, "Must be filled in"],
    },

    // Plural Noun5
    pluralNoun5: {
        type: String,
        required: [true, "Please enter a plural noun"],
        minLength: [1, "Must be filled in"],
    },

    // Noun2
    noun2: {
        type: String,
        required: [true, "Please enter a noun"],
        minLength: [1, "Must be filled in"],
    },

}, { timestamps: true });

module.exports = mongoose.model('Giraffe', GiraffeSchema);