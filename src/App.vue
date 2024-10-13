<template>
  <div class="container">
    <nav>
      <router-link to="/">Task Manager</router-link> |
      <router-link to="/songs">Song List</router-link> |
      <router-link to="/events">Event Planner</router-link>
    </nav>

    <router-view></router-view>
    <!-- This is where the components will be rendered -->
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin: 0 10px;
  color: #42b983;
  text-decoration: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
