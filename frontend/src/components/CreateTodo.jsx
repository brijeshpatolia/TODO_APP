import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="max-w-lg mx-auto mt-16 p-8 bg-white shadow-2xl rounded-xl border border-gray-300">
            <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
                Create a New Task
            </h2>
            <div className="space-y-8">
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-3">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter task title"
                        className="w-full px-6 py-4 text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-sm transition duration-300 ease-in-out"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-3">
                        Description
                    </label>
                    <textarea
                        id="description"
                        placeholder="Enter task description"
                        className="w-full px-6 py-4 text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-400 shadow-sm h-48 resize-none transition duration-300 ease-in-out"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="pt-8">
                    <button
                        className="w-full bg-blue-600 text-white py-4 text-xl font-semibold rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                        onClick={() => {
                            fetch('http://localhost:3000/todo', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    title,
                                    description,
                                    completed: false,
                                }),
                            }).then(async (response) => {
                                if (!response.ok) {
                                    throw new Error(`HTTP error! status: ${response.status}`);
                                }
                                const json = await response.json();
                                alert(`Task added successfully`);
                        })
                        }} // Handle form submission here
                    >
                        Add Todo
                    </button>
                </div>
            </div>
        </div>
    );
}
