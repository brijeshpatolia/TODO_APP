const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { Todo } = require('./db');

const app = express();
app.use(express.json());


app.get('/todos', async (req, res) => {

    const todos = await Todo.find({});
    res.json({ todos });
    console.log(todos);
});
app.post('/todo', async (req, res) => {

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        return res.status(400).json(parsedPayload.error.message);
    }

    await Todo.create({
        title: parsedPayload.data.title,
        description: parsedPayload.data.description,
        completed: false

    })
    res.json({ message: 'Todo created successfully!' });

});


app.put('/complete', async (req, res) => {
    const upadatPayload = req.body;
    const parsedPayload = updateTodo.safeParse(upadatPayload);
    if (!parsedPayload.success) {
        return res.status(400).json(parsedPayload.error.message);

    }
    await todo.update({
        _id: parsedPayload.id
    },
        {
            completed: true
        })
});





app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
