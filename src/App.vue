<template>
  <div>
    <div>
      <!-- <div class="accounted">
        <a
          href="https://zeva.co.id/client-dashboard/demo1/pages/auth/register-plan.html"
          >Don’t Have Account? Sign Up Now</a
        >
      </div> -->
      <div><NavbarTop msg="" /></div>
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
  import NavbarTop from "./components/NavbarTop.vue";
  export default {
    name: "App",
    components: {
      Navbar,
      NavbarTop,
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
    padding-right: 30px;
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
  .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
  }
  .before-enter2 {
    opacity: 0;
    transform: translateX(100px);
    transition: all 1.2s cubic-bezier(0.41, 0.01, 0.57, 1.61);
  }
  /* 
    If the element intersects with the viewport, the before-enter class is added.
  */
  .enter2 {
    opacity: 1;
    transform: translateX(0px);
  }
  .enter {
    opacity: 1;
    transform: translateX(0px);
  }
</style>
