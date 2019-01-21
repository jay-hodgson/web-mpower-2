<template>
  <div class="docked-layout">
    <MainNav/>
    <section class="smooth-scroller">
      <FaqContent/>
      <Footer/>
    </section>
  </div>
</template>

<script>
import MainNav from './MainNav.vue';
import Footer from './Footer.vue';
import FaqContent from './FaqContent.vue';

export default {
  name: 'FAQ',
  components: { MainNav, Footer, FaqContent },
}
</script>
