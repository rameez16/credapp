<template>
  <div id="app">
    <Header id="header" />

    <div id="form">
      <Form />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Form from "./components/form.vue";
export default {
  name: "App",
  components: {
    Header,
    Form,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif git push --set-upstream origin main
#form {
  width: 50%;
  height: 50%;
  margin: 0 auto;
}
</style>
