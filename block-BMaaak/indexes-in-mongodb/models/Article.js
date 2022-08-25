const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var articleSchema = new Schema ({
    title: { type: String },
    description:{ type: String },
    tags:[String]
});

articleSchema.index({ tags: 1 }); //? multi key index

articleSchema.index({ title: "text" }); //? text indexes

articleSchema.index({ description: "text" }); //? text indexes

module.exports = mongoose.model( "Article", articleSchema );