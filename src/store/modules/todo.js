const todoModule = {
    namespaced: true,
    state: {
        todos: [
            {
                id: 1,
                title: 'hello',
                description: 'hello',
            },
            {
                id: 0,
                title: 'world',
                description: 'world',
            },
        ],
    },
    mutations: {
        addTodo(state, payload) {
            state.todos = [{
                id: state.todos[0].id + 1,
                title: payload.value,
                description: payload.description,
            }].concat(state.todos);
        },
    },
    actions: {
        findTodoById({ state }, payload) {
            const requiredTodo = state.todos.filter(todo => (
                todo.id === Number(payload.id)
            ));
            return requiredTodo ? requiredTodo[0] : {};
        },
        editDescription({ state }, payload) {
            state.todos = state.todos.map((todo) => {
                if (todo.id === payload.id) {
                    todo.description = payload.description;
                }
                return todo;
            });
        },
    },
};

export default todoModule;
