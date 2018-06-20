<template>
  <div class="docked-layout">
    <MainNav/>
    <section class="smooth-scroller">
      <ConsentContent/>
      <Footer/>
    </section>
  </div>
</template>

<script>
import MainNav from './MainNav.vue';
import Footer from './Footer.vue';
import ConsentContent from './ConsentContent.vue';

export default {
  name: 'Consent',
  components: { MainNav, Footer, ConsentContent },
}
</script>
