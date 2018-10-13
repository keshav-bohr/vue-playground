const counterModule = {
    namespaced: true,
    state: {
        counter: 0,
    },
    mutations: {
        increment(state) {
            state.counter += 1;
        },
        decrement(state) {
            state.counter -= 1;
        },
        reset(state) {
            state.counter = 0;
        },
    },
};

export default counterModule;
