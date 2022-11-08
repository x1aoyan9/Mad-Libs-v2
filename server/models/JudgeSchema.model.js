const mongoose = require('mongoose');

const JudgeSchema = new mongoose.Schema({

    // Your Name
    yourName: {
        type: String,
        required: [true, "Please enter your name"],
        minLength: [1, "Must be filled in"]
    },

    // Noun
    noun: {
        type: String,
        required: [true, "Please enter a noun"],
        minLength: [1, "Must be filled in"]
    },

    // Noun2
    noun2: {
        type: String,
        required: [true, "Please enter a noun"],
        minLength: [1, "Must be filled in"]
    },

    // Part of the Body
    bodyPart: {
        type: String,
        required: [true, "Please enter a part of the body"],
        minLength: [1, "Must be filled in"],
    },

    // Noun3
    noun3: {
        type: String,
        required: [true, "Please enter a noun"],
        minLength: [1, "Must be filled in"]
    },

    // Adverb
    adverb: {
        type: String,
        required: [true, "Please enter a noun"],
        minLength: [1, "Must be filled in"],
    },

    // Female Name
    fName: {
        type: String,
        required: [true, "Please enter a female name"],
        minLength: [1, "Must be filled in"]
    },

    // Adjective
    adjective: {
        type: String,
        required: [true, "Please enter an adjective"],
        minLength: [1, "Must be filled in"]
    },

    // Plural Noun
    pluralNoun: {
        type: String,
        required: [true, "Please enter an plural noun"],
        minLength: [1, "Must be filled in"],
    },

    // Random Name
    name: {
        type: String,
        required: [true, "Please enter a name"],
        minLength: [1, "Must be filled in"]
    },

    // Animal
    animal: {
        type: String,
        required: [true, "Please enter a random animal"],
        minLength: [1, "Must be filled in"]
    },

    // Plural Noun2
    pluralNoun2: {
        type: String,
        required: [true, "Please enter an plural noun"],
        minLength: [1, "Must be filled in"],
    },

    // Random Location
    location: {
        type: String,
        required: [true, "Please enter a location"],
        minLength: [1, "Must be filled in"],
    },

    // Random Name2
    name2: {
        type: String,
        required: [true, "Please enter a name"],
        minLength: [1, "Must be filled in"]
    },

    // Adjective2
    adjective2: {
        type: String,
        required: [true, "Please enter an adjective"],
        minLength: [1, "Must be filled in"]
    },

    // Noun4
    noun4: {
        type: String,
        required: [true, "Please enter a noun"],
        minLength: [1, "Must be filled in"]
    },

    // Noun5
    noun5: {
        type: String,
        required: [true, "Please enter a noun"],
        minLength: [1, "Must be filled in"]
    },

    // Noun6
    noun6: {
        type: String,
        required: [true, "Please enter a noun"],
        minLength: [1, "Must be filled in"]
    },

    // Adjective3
    adjective3: {
        type: String,
        required: [true, "Please enter an adjective"],
        minLength: [1, "Must be filled in"]
    },

}, { timestamps: true });

module.exports = mongoose.model('Judge', JudgeSchema);