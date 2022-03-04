<template>
  <div class="bg">
    <div class="col-md-12">
      <div class="box-link">
        <h6>Zevalink</h6>
        <p>
          Jl. Pecandran No.14, RT.6/RW.5 Rawa Baru, Kec. Kby. Baru, Kota Jakarta
          Selatan <br />
          Daerah Khusus Ibukota Jakarta 12180 <br />
          Indonesia
        </p>
        <a target="_blank" href="https://goo.gl/maps/WxU1cERbcwdZ2Rnq8">
          <vs-button line-origin="left" color="#fff" type="line"
            >Get direction</vs-button
          >
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {};
</script>
<style lang="css">
  .bg {
    margin: 0 !important;
    padding: 0 !important;
    position: absolute !important;
    height: 700px;
    width: 100%;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-image: url("https://source.unsplash.com/featured/1800x700/daily/?working");
  }
  .box-link {
    margin-top: 20% !important;
    width: 260px;
    background-color: blue;
    color: white;
    height: 295px;
    position: flex;
    margin: 50px;
    padding: 25px;
    bottom: 0;
    border-radius: 20px;
  }
</style>
