const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { Todo } = require('./db');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

app.get('/todos', async (req, res) => {
    const todos = await Todo.find({});
    res.json(todos); // Return the array directly
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
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        return res.status(400).json(parsedPayload.error.message);
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
        parsedPayload.data.id,
        { completed: true },
        { new: true }
    );

    if (!updatedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    res.json({ message: 'Todo marked as completed successfully!', todo: updatedTodo });
});




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});







