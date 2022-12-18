<template>
  <div id="app">
    <UserHeader />
    <div class="page-container">
      <router-view />
    </div>
    <UserFooter />
  </div>
</template>

<script>
import UserHeader from "./components/UserHeader.vue";
import UserFooter from "./components/UserFooter.vue";

export default {
  name: "App",
  components: {
    UserHeader,
    UserFooter,
  },
};
</script>

<style>
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
#app > header,
#app > div {
  padding-left: 25%;
  padding-right: 25%;
}
.page-container {
  margin-bottom: 10vh;
  margin-top: 10vh;
}
</style>
