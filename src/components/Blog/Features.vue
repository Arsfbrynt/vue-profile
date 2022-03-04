<template>
  <b-container fluid class="bv-example-row">
    <b-row class="m10">
      <b-col md="6" offset-md="3">
        <h2>Komparasi Metode Konvensional dengan <u>Zevalink</u></h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6">
        <b-card title="Dengan Zevalink" class="mb-2 blue">
          <span>RECOMMENDED</span>
          <b-card-text>
            <ul class="ilang">
              <li><fa-icon :icon="['fas', 'check']" /> Multiple Partners</li>
              <li><fa-icon :icon="['fas', 'check']" /> Single Dashboard</li>
              <li><fa-icon :icon="['fas', 'check']" />Pelacakan Pesanan</li>
              <li>
                <fa-icon :icon="['fas', 'check']" />Satu Dokumentasi Integrasi
              </li>
              <li>
                <fa-icon :icon="['fas', 'check']" /> Satu Kali Proses Integrasi
              </li>
            </ul>
          </b-card-text>

          <b-button
            href="https://zeva.co.id/client-dashboard/demo1/pages/auth/register-plan.html"
            variant="primary"
            class="center"
          >
            <div>
              <b-row>
                <b-col sm="6"> <span>Sign Up Now</span></b-col>
                <b-col sm="6"
                  ><span>
                    <fa-icon :icon="['fas', 'long-arrow-alt-right']" /> </span
                ></b-col>
              </b-row>
            </div>
          </b-button>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Metode Konvensional" class="green">
          <b-card-text>
            <ul class="ilang2">
              <li><fa-icon :icon="['fas', 'check']" /> Multiple Partners</li>
              <li>
                <fa-icon :icon="['fas', 'circle-xmark']" /> Single Dashboard
              </li>
              <li>
                <fa-icon :icon="['fas', 'circle-xmark']" />Pelacakan Pesanan
              </li>
              <li>
                <fa-icon :icon="['fas', 'circle-xmark']" />Satu Dokumentasi
                Integrasi
              </li>
              <li>
                <fa-icon :icon="['fas', 'circle-xmark']" />Satu Kali Proses
                Integrasi
              </li>
            </ul>
          </b-card-text>
        </b-card>
      </b-col>
      <br />
      <b-col md="6">
        <div class="featbot">
          <h5>Pilihan Zevalink yang tersedia</h5>
          <p>
            Zevalink menyediakan beragam pengiriman dengan berbagai pilihan
            kurir dan logistik. Dengan mengintegrasikan langsung antara Zevalink
            dan sistem anda, maka layanan pengiriman online terkemuka langsung
            tersedia dan dapat menyinkronkan aktivitas pesanan dalam satu
            tampilan dashboard.
          </p>
        </div>
      </b-col>
      <b-col md="6">
        <div class="featbot">
          <h5>Kriteria Integrasi Dengan Zevalink</h5>
          <p>
            Berbagai macam dan jenis industri dapat melakukan proses integrasi
            dengan Zevalink. Zevalink memberikan kesempatan kepada para pelaku
            usaha mulai dari UMKM hingga usaha dengan skala Nasional. Daftarkan
            segera untuk mendapatkan kemudahan dalam pengiriman yang
            terintegrasi pada satu platform.
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
  export default {
    name: "Features",
    props: {
      msg: String,
    },
  };
</script>
<style lang="css">
  .m10 {
    margin-bottom: 50px;
  }
  h2 {
    text-align: center;
  }
  .ilang,
  .ilang2 {
    list-style-type: none;
  }
  .ilang > li > svg {
    margin-left: -20px;
    margin-right: 5px;
    color: #00ab66;
  }
  .ilang2 > li > svg {
    margin-left: -20px;
    margin-right: 5px;
  }
  .ilang2 > li {
    opacity: 0.5;
  }
  .ilang2 > li:first-child {
    opacity: 1;
  }
  .ilang2 > li:first-child > svg {
    color: #00ab66;
  }
  u {
    text-decoration: underline #3e6fe1;
  }
  .mb-2 {
    box-shadow: 0px 15px 30px rgb(0 0 0 / 6%);
    -webkit-box-shadow: 0px 15px 30px rgb(0 0 0 / 6%);
    -moz-box-shadow: 0px 15px 30px rgb(0 0 0 / 6%);
    border: none !important;
    border-radius: 20px;
    transition: box-shadow 0.2s linear;
    -webkit-transition: box-shadow 0.2s linear;
  }
  .green {
    border: none !important;
  }
  .green::before {
    content: "";
    width: 100%;
    height: 7px;
    position: absolute;
    display: block;
    background-color: #00ab66;
    top: -20px;
    left: 0px;
  }
  .blue {
    float: right;
    width: 50% !important;
    padding: 20px;
    padding-top: 60px;
  }
  .blue > .card-body > span {
    background-color: #3e6fe1;
    position: absolute;
    top: 0px;
    width: 100% !important;
    left: 0;
    padding: 10px;
    text-align: center;
    color: white;
  }
  .col-sm-6 > span {
    font-size: 14px;
  }
  .green {
    margin-right: 200px;
    display: inline-block;
    margin-top: 110px;
  }
  .col-md-6 {
    padding: 0 20px !important;
  }
  .green > .card-body > h4.card-title {
    color: #00ab66 !important;
  }

  .blue > .card-body > h4.card-title {
    color: #3e6fe1 !important;
  }
  h4.card-title {
    font-size: 36px !important;
    display: block;
    padding: 18px 0;
    font-weight: 600;
  }
  a.btn-primary {
    padding: 15px 22px;
    border-radius: 4px;
    width: 100%;
    height: 100%;
  }
  a.btn-primary > span {
    display: inline-block;
  }
  .featbot {
    margin-top: 40px;
  }
</style>
