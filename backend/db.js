const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pledith31:brijesh1715@cluster0.crjzm.mongodb.net/todo_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const todoSchema = new mongoose.Schema({
    title:string,
    completed: boolean,
    description: string
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo
}
