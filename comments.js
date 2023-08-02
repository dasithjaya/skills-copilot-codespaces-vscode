// Create web server application
const express = require('express');
const app = express();
const port = 3000;

// Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Import mongoose
const mongoose = require('mongoose');

// Connect to mongoose
mongoose.connect('mongodb://localhost:27017/express-mongo', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema
const commentSchema = new mongoose.Schema({
    username: String,
    content: String,
    like: Number
});

// Create a model
const Comment = mongoose.model('Comment', commentSchema, 'comment');

// Create a document
// const comment = new Comment({
//     username: 'Nguyễn Văn A',
//     content: 'Bài viết rất hay!',
//     like: 0
// });

// Save document to database
// comment.save(function(err) {
//     if (err) return handleError(err);
//     console.log('Saved!');
// });

// Comment.find().then(function(comments) {
//     console.log(comments);
// });

// Comment.find({ username: 'Nguyễn Văn A' }).then(function(comments) {
//     console.log(comments);
// });

// Comment.find({ username: 'Nguyễn Văn A' }, function(err, comments) {
//     if (err) return handleError(err);
//     console.log(comments);
// });

// Comment.findById('5e8b9e1a7d9d4a0f5c7a8d0e', function(err, comment) {
//     if (err) return handleError(err);
//     console.log(comment);
// });

// Comment.findByIdAndRemove('5e8b9e1a7d9d4a0f5c7a8d0e', function(err, comment) {
//     if (err) return handleError(err);
//     console.log(comment);
// });

// Comment.findByIdAndUpdate('5e8b9e1a7d9d4a0f5c7a8d0e', { like: 1 }, function(err, comment) {
//     if (err) return handleError(err);
//     console.log(comment);
// });

// Set Pug as view engine
app.set('view engine', 'pug');
app.set('views', './views');
