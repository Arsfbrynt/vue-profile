<template>
  <div>
    <div>
      <div class="navbar">
        <vs-tabs alignment="right" class="headers">
          >
          <span>
            <button>
              <img src="../assets/logo-600x200-1.png" class="logo" />
            </button>
          </span>

          <header id="header">
            <vs-tab
              v-bind:class="{ activeChild: menu === 'home' }"
              label="Home"
              @click="goto('home')"
            >
            </vs-tab>
            <vs-tab
              v-bind:class="{ activeChild: menu === 'benefit' }"
              label="Benefit"
              @click="goto2('benefit')"
            >
            </vs-tab>
            <vs-tab
              v-bind:class="{ activeChild: menu === 'about' }"
              label="About"
              @click="goto('about')"
            >
            </vs-tab>
            <vs-tab
              v-bind:class="{ activeChild: menu === 'feat' }"
              label="Features"
              @click="goto('feat')"
            ></vs-tab>
            <vs-tab
              v-bind:class="{ activeChild: menu === 'contact' }"
              class="last"
              label="Contact"
              @click="goto('contact')"
            >
            </vs-tab>
          </header>
        </vs-tabs>

        <div class="navmob container">
          <header class="headert container">
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"
              ><span class="navicon"></span>
              <img src="../assets/logo-600x200-1.png" alt=""
            /></label>

            <ul class="menu">
              <li>
                <a href="#" @click="goto('home')">Home</a>
              </li>
              <li>
                <a href="#" @click="goto('benefit')">Benefit</a>
              </li>
              <li><a href="#" @click="goto('about')">About</a></li>
              <li><a href="#" @click="goto('feat')">Features</a></li>
              <li><a href="#" @click="goto('contact')">Contact</a></li>
              <li>
                <a
                  href="https://zeva.co.id/client-dashboard/demo1/pages/auth/login.html"
                  >Login</a
                >
              </li>
              <li>
                <a
                  href="https://zeva.co.id/client-dashboard/demo1/pages/auth/register-plan.html"
                  >Register</a
                >
              </li>
            </ul>
          </header>
        </div>

        <div class="component">
          <div class="div" ref="home">
            <Blogs />
          </div>

          <div ref="benefit">
            <div class="custom-shape-divider-bottom-1646585658">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
            <Benefit />
          </div>
          <div class="div container" ref="about"><About /></div>
          <div class="div" ref="feat"><Features /></div>
        </div>
      </div>
    </div>
    <div class="bg2" ref="contact"><Contact /></div>
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
      goto2(refName) {
        var element = this.$refs[refName];
        var top = element.offsetTop + 250;

        window.scrollTo(200, top);
      },
      handleScroll: function () {
        if (
          document.body.scrollTop > 150 ||
          document.documentElement.scrollTop > 150
        ) {
          this.menu = "benefit";
          console.log("benefit");
        } else if (
          document.body.scrollTop + 450 ||
          document.documentElement.scrollTop + 450
        ) {
          this.menu = "about";
          console.log("about");
        } else {
          this.menu = "asw";
          console.log("asw");
        }
      },
    },
    data() {
      return {
        menu: "home",
      };
    },
    beforeMount() {
      window.addEventListener("scroll", this.handleScroll);
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
  .navlog {
    position: absolute;
    top: 0;
    width: 200px;
    right: 20px;
    float: right;
  }
  .bg {
    margin: 0 !important;
    /* width: 97.8%; */
    left: 0px !important;
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
  .fw {
    width: 100vw !important;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: 0vw;
    min-height: 700px;
  }

  .activeChild {
    background-color: turquoise !important;
  }

  .vs-tabs {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 200;
    background-color: white;
  }
  .navbar {
    position: relative;
    margin-top: 100px;
  }
  .navbar > div:first-child {
    margin: 0;
    margin-top: 40px;
    padding-top: 0 !important;
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
  .custom-shape-divider-bottom-1646585658 {
    margin-top: -255px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1646585658 svg {
    position: relative;
    display: block;
    width: calc(122% + 1.3px);
    height: 256px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1646585658 .shape-fill {
    fill: #ebf0fc;
  }
  .pick::before {
    width: inherit;
    height: 5px;
    background-color: turquoise;
  }
</style>
