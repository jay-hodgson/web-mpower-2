<template>
  <div class="docked-layout">
    <MainNav/>
    <section class="smooth-scroller">
      <PrivacyPolicyContent/>
      <Footer/>
    </section>
  </div>
</template>

<script>
import MainNav from './MainNav.vue';
import PrivacyPolicyContent from './PrivacyPolicyContent.vue';
import Footer from './Footer.vue';

export default {
  name: 'PrivacyPolicy',
  components: { MainNav, PrivacyPolicyContent, Footer },
}
</script>

<style scoped>
li {
  line-height: 1.5;
}
</style>
