<template>
  <div class="about">
    <h1>About Us</h1>
    <p>This is the about page of your application.</p>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
.about {
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style> 