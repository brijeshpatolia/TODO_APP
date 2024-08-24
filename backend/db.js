const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pledith31:brijesh1715@cluster0.crjzm.mongodb.net/todo_app')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));


const todoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
    description: String
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo
};
