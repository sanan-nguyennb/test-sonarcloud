<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: "TestSonar",
  data() {
    return {
      message: "Hello",
    };
  },
  created() {
    eval("console.log('This is a security issue')");
  },
};
</script>
