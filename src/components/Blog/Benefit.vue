<template>
  <div class="bgbenf">
    <h2 class="center" v-scrollanimation>Kenapa menggunakan Zevalink</h2>
    <div class="row center">
      <div class="col-md-2" v-scrollanimation2>
        <div class="icon">
          <span>
            <img src="@/assets/icon/basic-chronometer.svg" alt="" />
          </span>
          <h5>Save Time</h5>
          <span class="body"
            >Hemat waktu untuk menjalani proses dan persyaratan integrasi</span
          >
        </div>
      </div>
      <div class="col-md-2" v-scrollanimation>
        <div class="icon">
          <span>
            <img src="@/assets/icon/software-layers2.svg" alt="" />
          </span>
          <h5>Seamless Technology</h5>
          <span class="body"
            >Efisiensikan Kebutuhan development untuk API integration
            Development Infrastructure requirements Different technical
            compliance</span
          >
        </div>
      </div>
      <div class="col-md-2" v-scrollanimation2>
        <div class="icon">
          <span>
            <img src="@/assets/icon/ecommerce.svg" alt="" />
          </span>
          <h5>Commercial</h5>
          <span class="body">
            Bebas biaya pendaftaran, dan minimum volume
          </span>
        </div>
      </div>
      <div class="col-md-2" v-scrollanimation>
        <div class="icon">
          <span>
            <img src="@/assets/icon/expandalt.svg" alt="" />
          </span>
          <h5>Extent</h5>
          <span class="body"
            >Perluas jangkauan hingga nasional bahkan internasional untuk bisnis
            anda
          </span>
        </div>
      </div>
      <div class="col-md-2" v-scrollanimation2>
        <div class="icon">
          <span>
            <img
              src="@/assets/icon/basic-elaboration-browser-check.svg"
              alt=""
            />
          </span>
          <h5>Single Dashboard</h5>
          <span class="body"
            >Cukup satu dashboard untuk memantau seluruh pengiriman bisnis anda
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Benefit",
    props: {
      msg: String,
    },
  };
</script>

<style>
  h2.center {
    margin-bottom: 100px;
    color: #3e6fe1;
    font-weight: 600;
  }
  .bgbenf {
    background-color: #ebf0fc;
    padding: 50px 0;
  }
  .icon > h5 {
    font-weight: 600;
    margin-bottom: 20px;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .col-md-2 {
    text-align: center;
  }
  .icon > span {
    font-size: 14px;
  }

  .icon > span > img {
    width: 64px;
    margin: auto;
    position: relative;
    margin-bottom: 40px;
  }
</style>
