<template>
  <div class="docked-layout">
    <MainNav/>
    <section class="smooth-scroller">
      <div style="max-width: 40rem; margin: 0 auto">
        <ConsentContent/>
      </div>
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
