<template>
  <div>
    <div class="container">
      <div class="navbar">
        <vs-tabs alignment="right" :color="colorx">
          >
          <span>
            <button>
              <img src="../assets/logo-600x200-1.png" class="logo" />
            </button>
          </span>
          <header>
            <vs-tab label="Home" @click="goto('home')">
              <div></div>
            </vs-tab>
            <vs-tab label="Benefit" @click="goto('benefit')">
              <div></div>
            </vs-tab>
            <vs-tab label="About" @click="goto('about')">
              <div></div>
            </vs-tab>
            <vs-tab label="Features" @click="goto('feat')">
              <div></div>
            </vs-tab>
            <vs-tab class="last" label="Contact" @click="goto('contact')">
              <div></div>
            </vs-tab>

            <vs-tab label="🧑">
              <label>
                <img src="../assets/icon/user.png" alt="" />
              </label>
            </vs-tab>
          </header>
        </vs-tabs>
        <div class="component">
          <div class="div" ref="home">
            <Blogs />
          </div>
          <div class="div" ref="benefit">
            <Benefit />
          </div>
          <div class="div" ref="about"><About /></div>
          <div class="div" ref="feat"><Features /></div>
        </div>
      </div>
    </div>
    <span class="bg" ref="contact"><Contact /></span>
  </div>
</template>

<script>
  export default {
    components: {
      Blogs,
      Benefit,
      About,
      Features,
      Contact,
    },
    name: "Navbar",
    props: {
      msg: String,
    },

    methods: {
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

  import About from "./Blog/About.vue";
  import Blogs from "./Blog/Blogs.vue";
  import Benefit from "./Blog/Benefit.vue";
  import Features from "./Blog/Features.vue";
  import Contact from "./Blog/Contact.vue";

  import "vuesax/dist/vuesax.css";
  Vue.use(Vuesax, {
    // options here
  });
</script>
<style scoped>
  .bg {
    margin: 0 !important;
    width: 97.8%;
    margin-left: -40px !important;
  }
  button {
    border: none;
  }
  .vs-tabs--ul {
    width: 100%;
    padding-left: 0;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
  .vs-tabs {
    position: fixed;
    left: 0;
    top: 0;
    right: 200px !important;
    width: 100%;
    z-index: 200;
    background-color: white;
  }
  .navbar {
    position: relative;
    margin-top: 100px;
  }
  .navbar > div:first-child {
    padding-top: 20px;
    margin: 0 20px;
  }
  .logo {
    position: absolute;
    top: -80px;
    width: 200px;
    left: 20px;
  }
  .line-vs-tabs {
    top: 60px !important;
  }
  span {
    position: fixed;
  }
  button {
    width: 1px !important;
    left: -5px;
    position: absolute;
  }
  .vs-tabs--li:hover {
    color: green !important;
  }
  div.con-ul-tabs > ul {
    height: 60px !important;
  }
  .vs-tabs--li {
    top: 15px;
  }
  .component {
    width: 100%;
  }
  .component > div {
    /* height: 1000px; */
    min-height: 700px;
    width: 100%;
    margin-bottom: 40px;
  }

  .component > span {
    margin: unset !important;
    padding: unset !important;
    position: absolute !important;
    width: 100%;
  }
</style>
