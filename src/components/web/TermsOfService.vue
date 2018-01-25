<template>
  <div>
    <MainNav/>
    <div class="container">
      <h2>Terms of Service</h2>
      <p>These are the terms of service. </p>
    </div>
    <Footer/>
  </div>
</template>

<script>
import MainNav from "./MainNav.vue";
import Footer from "./Footer.vue";

export default {
  name: "TermsOfService",
  components: { MainNav, Footer }
};
</script>

<style scoped>
</style>
