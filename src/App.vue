<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/logo.png" />
    </div>
      <router-link to="/counter">Counter</router-link> |
      <router-link to="/todo">Todo</router-link>
    <router-view/>
  </div>
</template>


<script>
export default {
  
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
