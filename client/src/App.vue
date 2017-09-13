<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
.wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
}

.sidebar {
  grid-column: 1;
  grid-row: 1;
  background-color: red;
}
.lists {
  grid-column: 2;
  grid-row: 1;
  background-color: green;
}

</style>
