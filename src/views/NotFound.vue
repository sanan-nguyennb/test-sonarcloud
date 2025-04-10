<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>The page you are looking for doesn't exist or has been moved.</p>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
.not-found {
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 6rem;
  color: #2c3e50;
  margin: 0;
  line-height: 1;
}

h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin: 1rem 0;
}

p {
  color: #666;
  margin-bottom: 2rem;
}

a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style> 