<template>
    <div class="home">
        <h1>Welcome to Home Page</h1>
        <p>This is the home page of your application.</p>
        <router-link to="/about">Go to About</router-link>
        <p>Count: {{ counter.count }}</p>
        <p>Double count: {{ counter.doubleCount }}</p>
        <button @click="counter.increment">+</button>
        <button @click="counter.decrement">-</button>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter';

// Component logic here
const counter = useCounterStore();
</script>

<style scoped>
.home {
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
