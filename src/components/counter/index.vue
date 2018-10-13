<template>
    <div>
        <p>{{counter}}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="reset">Reset</button>
    </div>
</template>


<script>
import { createNamespacedHelpers } from "vuex";
const  { mapState, mapMutations } = createNamespacedHelpers('counter')
export default {
    computed: {
        ...mapState(['counter'])
    },
    methods: {
        ...mapMutations(['increment', 'decrement', 'reset'])
    }
}
</script>
