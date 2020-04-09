<template>
  <main>
    <ex-header></ex-header>
    <router-view class="container px-5 sm:px-20 py-20 flex justify-center" />
  </main>
</template>

<script>
import ExHeader from "@/components/ExHeader";
export default {
  name: "App",
  components: {
    ExHeader
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
