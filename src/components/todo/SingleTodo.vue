<template>
    <div>
        {{todo.id}}
        <strong>
            <router-link 
                :to="{name: 'todo-description', params: {todoId: todo.id }}"
            >
                {{todo.title}}
            </router-link>
        </strong>
        {{todo.description}}
    </div>
</template>


<script>
export default {
    name: 'todo',
    props: ['todo']
}
</script>
