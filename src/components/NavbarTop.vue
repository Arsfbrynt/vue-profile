<template>
  <div>
    <div style="height: 5px">
      <div class="navbar">
        <vs-tabs alignment="right" class="headers2">
          >

          <header id="header">
            <vs-tab class="border" label="Login" @click="showMore">
              <div></div>
            </vs-tab>
            <vs-tab class="border2" label="Register" @click="showMore">
              <div></div>
            </vs-tab>
          </header>
        </vs-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavbarTop",
    props: {
      msg: String,
    },
    data: () => ({
      colorx: "success",
    }),

    methods: {
      showMore: function () {
        alert("Pindah link");
        window.open("https://detik.com");
      },
      goto(refName) {
        var element = this.$refs[refName];
        var top = element.offsetTop;

        window.scrollTo(200, top);
      },
    },
  };
  import Vue from "vue";
  import Vuesax from "vuesax";
  //   import Compon from "./Compon.vue";

  import "vuesax/dist/vuesax.css";
  Vue.use(Vuesax, {
    // options here
  });
</script>
<style>
  .vs-tabs {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 200;
    background-color: white;
  }
  .navbar {
    position: relative;
  }
  .navlog {
    position: absolute;
    top: 0;
    width: 200px;
    right: 20px;
    float: right;
  }
  .disnon {
    visibility: hidden;
  }
  .bg {
    margin: 0 !important;
    /* width: 97.8%; */
    left: 0px !important;
  }
  .vs-tabs--ul {
    width: 100%;
    padding-left: 0;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }

  .headers2 > div > ul > li > button {
    margin: 30px;
    height: 40px;
    padding-top: 5px !important;
    border-radius: 8px;
  }
  .headers2 > div > ul > li > button > span {
    color: #fff;
  }
  .headers2 > div > ul > li:first-child > button {
    background-color: #3e6fe1;
    border: 1px solid #3e6fe1;
  }
  .headers2 > div > ul > li:last-child > button {
    background-color: #00ab66;
    border: 1px solid #00ab66;
  }
  .headers2 > div > ul > li {
    margin: 0 5px;
  }
  .headers2 > div > ul {
    padding-top: 15px;
  }
  .headers2 > div > span {
    display: none;
  }
  .headers2 > div > ul > li > button:hover {
    background-color: #fff;
    border: 1px solid #00ab66;
  }

  .headers2 > div > ul > li:first-child > button:hover {
    border: 1px solid #3e6fe1;
  }
  .headers2 > div > ul > li > button:hover * {
    color: #00ab66;
  }
  .headers2 > div > ul > li:first-child > button:hover * {
    color: #3e6fe1;
  }

  a {
    color: #000;
  }

  /* .headert */

  .headert {
    position: fixed;
    left: 0;
    background-color: #fff;
    right: 0;
    width: 100%;
    top: 0;
    z-index: 200;
  }

  .headert ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
  }

  .headert li a {
    display: block;
    padding: 20px 20px;
    border-right: 1px solid #f4f4f4;
    text-align: center;
    text-decoration: none;
  }

  .headert li a::after {
    content: "";
    width: 60px;
    margin: 0 auto;
    background-color: #00ab66;
    height: 2px;
    display: block;
  }

  .headert li a:hover,
  .headert .menu-btn:hover {
    background-color: #f4f4f4;
  }

  .headert .logo {
    display: block;
    float: left;
    font-size: 2em;
    padding: 10px 20px;
    text-decoration: none;
  }

  /* menu */

  .headert .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  /* menu icon */

  .headert .menu-icon {
    cursor: pointer;
    float: left;
    background-color: #fff;
    height: 60px !important;

    padding: 28px 20px !important;
    position: relative;
    user-select: none;
  }

  .headert .menu-icon .navicon {
    background: #333;
    display: block;
    float: right;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .headert .menu-icon .navicon:before,
  .headert .menu-icon .navicon:after {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .headert .menu-icon .navicon:before {
    top: 5px;
  }

  .headert .menu-icon .navicon:after {
    top: -5px;
  }

  /* menu btn */

  .headert .menu-btn {
    display: none;
  }

  .headert .menu-btn:checked ~ .menu {
    max-height: 540px;
    z-index: -2;
    top: 0px;
    position: relative;
  }

  .headert .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .headert .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .headert .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .headert .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .headert .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  /* 48em = 768px */

  @media (min-width: 48em) {
    .headert li {
      float: left;
    }
    .headert li a {
      padding: 20px 30px;
    }
    .headert .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .headert .menu-icon {
      display: none;
    }
  }

  .menu-icon > img {
    width: 35%;
    z-index: 9;
    margin: 0 30%;
    margin-top: -30px;
  }
</style>
