<template>
  <div>
    <div class="container">
      <div class="accounted">
        <a
          href="https://zeva.co.id/client-dashboard/demo1/pages/auth/register-plan.html"
          >Don’t Have Account? Sign Up Now</a
        >
      </div>
      <div><Navbar msg="" /></div>
      <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
        <!-- <Compon msg="" /> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  // import Content from "./components/Content.vue";
  // import Compon from "./components/Compon.vue";

  // import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: "App",
    components: {
      Navbar,
    },
  };
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 200px;
  }
  @import "~bootstrap/dist/css/bootstrap.css";

  .vs-tabs--ul {
    width: 100%;
    padding-left: 0;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    padding-right: 150px;
  }
  .con-slot-tabs {
    height: 0 !important;
  }
  .accounted {
    background-color: aquamarine;
    width: 100%;
    height: 25px;
  }
  .vs-tabs--li > button > span {
    color: #3e6fe1;
  }
  .vs-tabs--li > button > span:hover {
    color: #00ab66;
  }
</style>
