<template>
    <div>
        <strong>{{todo.title}}</strong>
        <br />
            <p v-if="!editDescription" @click="setEditDescription">{{todo.description}}</p>
            <form v-else @submit.prevent="submitDescription">
                <input v-model="todo.description" />
                <button type="submit">Edit</button>
            </form>
    </div>
</template>


<script>
export default {
    created: function() {
        this.$store.dispatch("todo/findTodoById", {
            id: this.$route.params.todoId
        }).then(todo => {
            this.todo = todo
        }).catch(error => {
            console.error(error);
        })
    },
    data: () => {
        return {
            todo: {},
            editDescription: false,
        };
    },
    methods: {
        setEditDescription () {
            this.editDescription = !this.editDescription
        },
        submitDescription() {
            this.$store.dispatch("todo/editDescription", {
                id: this.$route.params.todoId,
                description: this.todo.description,
            }).then(() => {
                this.editDescription = false
            }).catch(err => {
                console.log(err);
            })
        }
    }
};
</script>
