<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6" v-scrollanimation2>
          <h1>Kembangkan bisnis anda dengan beragam layanan delivery</h1>
          <h6>
            Cukup satu integrasi, bisnis anda terkoneksi dengan berbagai pilihan
            kurir dan logistic
          </h6>

          <span class="img">
            <div class="row">
              <div class="col-md-4">
                <img
                  src="../../assets/logo_ekspedisi/gosend.svg"
                  title="Gosend"
                />
              </div>
              <div class="col-md-4">
                <img src="../../assets/logo_ekspedisi/Grab.svg" title="Grab" />
              </div>

              <div class="col-md-4">
                <img
                  src="../../assets/logo_ekspedisi/anteraja.svg"
                  title="Anter Aja"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <img
                  src="../../assets/logo_ekspedisi/paxxel.svg"
                  title="Paxel"
                />
              </div>
              <div class="col-md-4">
                <img src="../../assets/logo_ekspedisi/jne.svg" title="JNE" />
              </div>

              <div class="col-md-4">
                <img src="../../assets/logo_ekspedisi/tiki.svg" title="Tiki" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <img
                  src="../../assets/logo_ekspedisi/borzo.svg"
                  title="borzo"
                />
              </div>
              <div class="col-md-6">
                <img
                  src="../../assets/logo_ekspedisi/sicepatt.svg"
                  title="Sicepat"
                />
              </div>
            </div>
          </span>
        </div>
        <div class="col-md-6" v-scrollanimation style="z-index: 2">
          <span class="img"><img src="../../assets/home.png" alt="" /> </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Blogs",
    props: {
      msg: String,
    },
  };
</script>

<style lang="css" scoped>
  h1 {
    color: #3e6fe1;
    font-size: 52px;
    font-weight: 700;
  }
  h6 {
    font-weight: 600 !important;
  }

  img {
    width: 100%;
  }
  .col-md-4 {
    margin: 20px 0;
  }
  .img > .row > .col-md-6 > img {
    padding: 0 20px;
  }
  .img > .row > .col-md-6:last-child > img {
    margin-top: -10px;
  }
</style>
