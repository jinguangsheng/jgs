<template>
  <div id="app">
    <h1>home页面</h1>
    <button @click="gotoabout()">111111111111111</button>
  </div>
</template>

<script>
export default {
  methods: {
    gotoabout() {
      this.$router.push({
        name: "list"
      });
    }
  }
};
</script>

<style>
</style>
