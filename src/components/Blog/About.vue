<template>
  <!-- <div>
    <div class="container">
      <div class="row">
        <div class=".col-md-6 .col-md-offset-3">
          <h2>Integrasi API</h2>
          <span class="line"></span>
        </div>
      </div>
    </div>
  </div> -->
  <b-container
    fluid
    class="bv-example-row"
    v-scrollanimation2
    @scroll="handleScroll"
  >
    <b-row>
      <b-col sm="12" md="6" offset-md="3">
        <h3 class="center">Integrasi API</h3>
        <span class="line center"></span>
        <span class="text"
          >Zevalink menawarkan integrasi API dengan cara yang mudah. API kami
          dapat membantu Anda melalui seluruh proses pemenuhan pesanan dan
          manajemen pengiriman, mulai dari tarif pengiriman dari beberapa kurir
          dan logistik hingga memvalidasi alamat dan melacak kiriman Anda ke
          tujuan akhir.</span
        >
      </b-col>
    </b-row>
    <br />
    <br />

    <carousel
      :autoplay="false"
      :margin="90"
      :nav="false"
      :loop="false"
      :responsive="{
        0: { items: 1 },
        699: { items: 2 },
        1001: { items: 3 },
      }"
      v-scrollanimation2
    >
      <span>
        <div class="box" id="home">
          <span class="iconfa"> <fa-icon :icon="['fas', 'home']" /> </span>
          <h4>Validasi Alamat dengan API Pengiriman Kami</h4>
          <p>
            Pastikan paket Anda tiba di tujuan yang tepat setiap saat dengan
            validasi alamat. Validasi alamat meningkatkan kepuasan pelanggan dan
            membatasi pengembalian yang tidak perlu. Anda menghemat uang dan
            pelanggan Anda menikmati pengalaman yang lebih baik saat Anda
            memvalidasi alamat menggunakan API pengiriman kami.
          </p>
        </div>
      </span>
      <span>
        <div class="box" id="window">
          <span class="iconfa"> <fa-icon :icon="['fas', 'map']" /> </span>
          <h4>Pengiriman Dengan Menggunakan API Kami</h4>
          <p>
            Saat Anda mendaftar Zevalink, Anda akan mendapatkan akses langsung
            ke API pengiriman yang dapat Anda integrasikan untuk memulai proses
            pengiriman, memvalidasi alamat, melacak paket, dan banyak lagi.
            Mulai integrasi sekarang!
          </p>
        </div>
      </span>
      <span>
        <div class="box" id="clac">
          <span class="iconfa">
            <fa-icon :icon="['fas', 'calculator']" />
          </span>
          <h4>Periksa Tarif Dengan API Tarif Pengiriman Kami</h4>
          <p>
            Periksa tarif secara real-time di berbagai pilihan kurir dan
            logistik kemudian pilih yang tepat untuk setiap pengiriman. Anda
            dapat membuat pilihan terbaik untuk bisnis Anda berdasarkan biaya
            pengiriman, waktu pengiriman, dan lainnya. Lebih banyak opsi berarti
            Anda benar-benar dapat menyesuaikan alur kerja Anda.
          </p>
        </div>
      </span>
      <span>
        <div class="box" id="maps">
          <span class="iconfa">
            <fa-icon :icon="['fas', 'location-dot']" />
          </span>
          <h4>Update Status Paket Dengan API Pengiriman Kami</h4>
          <p>
            Dapatkan informasi update pengiriman secara real-time sehingga Anda
            tahu persis di mana paket Anda berada dan kapan akan tiba. Kemampuan
            API pengiriman kami membuat bisnis Anda dan pelanggannya mendapat
            informasi tentang lokasi pesanan secara real-time.
          </p>
        </div>
      </span>

      <template slot=""></template>
      <template slot=""></template>
    </carousel>
  </b-container>
</template>
<script>
  import carousel from "vue-owl-carousel";

  export default {
    components: { carousel },
  };
</script>
<style>
  h3.center {
    font-weight: 600;
    color: #3e6fe1;
  }
  .text {
    opacity: 0.75;
    text-align: center !important;
  }
  .line {
    width: 120px;
    height: 3px;
    background-color: #00ab66;
    display: block;
    margin: 20px auto;
  }
  .box > span.iconfa {
    color: #3e6fe1;
    font-size: 45px;
  }
  .box > span.iconfa:hover {
    color: #fff;
    font-size: 45px;
  }
  .box > h4 {
    margin: 20px 0;
    font-weight: 600;
    font-size: 20px !important;
  }
  .box > p {
    font-size: 14px;
    opacity: 0.75;
  }
  .box {
    width: 300px;
    height: 400px;
    margin: auto;
  }
  .owl-dot > span {
    background: #82a3f0 !important;
  }
  .owl-dot.active > span {
    background: #3e6fe1 !important;
  }
  .box:hover {
    border: none;
    border-radius: 10px;
    background-color: #3e6fe1;
    transition: all 0.5s cubic-bezier(0.25, 1, 0.2, 1);
    padding: 20px 10px;
    background-blend-mode: multiply;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
  }
  .box:hover * {
    color: #fff !important;
  }

  .offset-md-3 {
    text-align: center;
  }
</style>
