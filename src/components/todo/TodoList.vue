<template>
    <div>
        <br />
        <form @submit.prevent="addTodo">
            <input v-model="todoInput" placeholder="title" />
            <input v-model="todoDescription" placeholder="description"/>
            <button type="submit">Submit</button>
        </form>
        <br />
        <Todo v-for="(todo, index) in todos" 
            :key="index"
            :todo="todo"
        />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Todo from "./SingleTodo.vue";
const { mapState } = createNamespacedHelpers('todo')
export default {
    computed: {
        ...mapState(['todos'])
    },
    methods: {
        addTodo(){
            this.$store.commit({
                type: 'todo/addTodo',
                value: this.todoInput,
                description: this.todoDescription
            })
            this.todoInput = ''
            this.todoDescription = ''
        }
    },
    data: () => {
        return {
            todoInput: '',
            todoDescription: '',
        }
    },
    components: {
        Todo,
    }
}
</script>
