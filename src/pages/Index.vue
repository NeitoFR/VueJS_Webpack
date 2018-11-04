<template>
  <div class="container">
    <Header></Header>
    <HomePage></HomePage>
  </div>
    
</template>

<script>
import Header from "../components/common/Header"
import HomePage from "../components/HomePage"

export default {
  name: "Index",
  components: {
    Header,
    HomePage
  }
};
</script>

<style>
</style>
