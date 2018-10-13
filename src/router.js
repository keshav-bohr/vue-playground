import Vue from 'vue';
import Router from 'vue-router';
import Counter from './components/counter/index.vue';
import Todo from './components/todo/TodoList.vue';
import TodoDescription from './components/todo/TodoDescription.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/counter',
            name: 'counter',
            component: Counter,
        },
        {
            path: '/todo',
            name: 'todo',
            component: Todo,
        },
        {
            path: '/todo/:todoId',
            name: 'todo-description',
            component: TodoDescription,
        },
    ],
});
