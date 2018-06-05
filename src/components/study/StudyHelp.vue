<template>
  <div class="docked-layout">
    <MainNav :showSteps="false" :showHelp="false"/>
    <section>
      <div class="container">
        <h2>Help</h2>
        <p>This is the help page.</p>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import MainNav from './MainNav.vue';
import Footer from '../web/Footer.vue';

export default {
  name: 'StudyHelp',
  components: { MainNav, Footer },
}
</script>
