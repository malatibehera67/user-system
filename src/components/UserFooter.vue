<template>
  <footer class="footer">
    <div>
      <a href="https://github.com/">
        <img class="site-logo" src="../assets/logo1.png" alt="logo" />
      </a>
      <p class="footer-text">
        &#169;<span class="rights-text">All rights reserved, 2022</span>
      </p>
    </div>
  </footer>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";

.footer {
  background-color: $black_color;
  height: 10vh;
  z-index: 2;
  bottom: 0;
  position: fixed;
  display: flex;
  width: 100vw;
  color: #fff;
  align-items: center;
  justify-content: center;
  .site-logo {
    height: 2em;
    object-fit: contain;
  }
  .footer-text {
    font-size: 10px;
    margin: 5px;
    .rights-text {
      margin-left: 5px;
    }
  }
}
</style>