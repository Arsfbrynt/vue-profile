<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <h1>Kembangkan bisnis anda dengan beragam layanan delivery</h1>
          <h6>
            Cukup satu integrasi, bisnis anda terkoneksi dengan berbagai pilihan
            kurir dan logistic
          </h6>

          <span class="img">
            <img src="../../assets/atas.png" alt="" />
            <img src="../../assets/tengah.png" alt="" />
            <img src="../../assets/bawah.png" alt="" />
          </span>
        </div>
        <div class="col-sm-6">
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

<style>
  h1 {
    color: #3e6fe1;
    font-size: 52px !important;
    font-weight: 600 !important;
  }
  h6 {
    font-weight: 600 !important;
  }
  span.img > img {
    width: 100%;
  }
</style>
