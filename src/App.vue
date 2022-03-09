<template>
  <div>
    <div>
      <div><NavbarTop msg="" /></div>
      <div><Navbar msg="" /></div>
      <div id="app"></div>
      <button
        v-if="isShow"
        @click="topFunction"
        id="myBtn"
        title="Go to top"
      >
        ^
      </button>
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
    methods: {
      topFunction: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },
      handleScroll: function() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          this.isShow = true
        } else {
          this.isShow = false
        }
      }
    },
    data() {
      return {
        isShow: false
      }
    },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll)
    }
  };

  // script JS doang :v

  var btn = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      console.log("asw");
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }
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
  #myBtn {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: red;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 4px;
  }

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
