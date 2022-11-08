const mongoose = require('mongoose');

const MagicSchema = new mongoose.Schema({

    // Your Name
    yourName: {
        type: String,
        required: [true, "Please enter your name"],
        minLength: [1, "Must be filled in"]
    },

    // Plural Noun
    pluralNoun: {
        type: String,
        required: [true, "Please enter an plural noun"],
        minLength: [1, "Must be filled in"],
    },

    // Adjective
    adjective: {
        type: String,
        required: [true, "Please enter an adjective"],
        minLength: [1, "Must be filled in"]
    },

    // Adjective2
    adjective2: {
        type: String,
        required: [true, "Please enter an adjective"],
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

    // Noun3
    noun3: {
        type: String,
        required: [true, "Please enter a noun"],
        minLength: [1, "Must be filled in"]
    },

    // Noun4
    noun4: {
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

    // Part of the Body
    bodyPart: {
        type: String,
        required: [true, "Please enter a part of the body"],
        minLength: [1, "Must be filled in"],
    },

    // Plural Noun2
    pluralNoun2: {
        type: String,
        required: [true, "Please enter an plural noun"],
        minLength: [1, "Must be filled in"],
    },

    // Adjective4
    adjective4: {
        type: String,
        required: [true, "Please enter an adjective"],
        minLength: [1, "Must be filled in"]
    },

    // Noun5
    noun5: {
        type: String,
        required: [true, "Please enter a noun"],
        minLength: [1, "Must be filled in"]
    },

    // Adjective5
    adjective5: {
        type: String,
        required: [true, "Please enter an adjective"],
        minLength: [1, "Must be filled in"]
    },

    // Noun6
    noun6: {
        type: String,
        required: [true, "Please enter a noun"],
        minLength: [1, "Must be filled in"]
    },

    // Parts of the Body
    bodyParts: {
        type: String,
        required: [true, "Please enter parts of the body"],
        minLength: [1, "Must be filled in"],
    },

    // Part of the Body2
    bodyPart2: {
        type: String,
        required: [true, "Please enter a part of the body"],
        minLength: [1, "Must be filled in"],
    },

    // Plural Noun3
    pluralNoun3: {
        type: String,
        required: [true, "Please enter a plural noun"],
        minLength: [1, "Must be filled in"],
    },

}, { timestamps: true });

module.exports = mongoose.model('Magic', MagicSchema);