export function Todos({ todos }) {
    return (
        <div className="max-w-lg mx-auto mt-10 space-y-6">
            {todos.map(todo => (
                <div
                    key={todo._id} // Use todo._id as the key
                    className="p-6 bg-white shadow-lg rounded-lg border border-gray-300"
                >
                    <h1 className="text-2xl font-semibold text-gray-800 mb-3">
                        {todo.title}
                    </h1>
                    <p className="text-gray-600 mb-4">
                        {todo.description}
                    </p>
                    <button
                        className={`px-4 py-2 text-white font-medium rounded-lg ${
                            todo.completed
                                ? 'bg-green-500 hover:bg-green-600'
                                : 'bg-blue-600 hover:bg-blue-700'
                        } transition duration-300 ease-in-out`}
                        onClick={() => {
                            // Handle completion toggle here
                        }}
                    >
                        {todo.completed ? 'Completed' : 'Mark as Complete'}
                    </button>
                </div>
            ))}
        </div>
    );
}
