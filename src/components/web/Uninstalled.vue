<template>
  <div class="docked-layout">
    <nav class="basic" style="background-color: #5A478F">
      <div>mPower 2.0</div>
    </nav>
    <section>
      <div class="container">
        <h2>You have uninstalled mPower 2.0</h2>
        <p>It looks to us like you’re still receiving text messages for the mPower 2.0 app, which you uninstalled from your phone. To stop these messages, go back to the text you received and reply “STOP”.</p>

        <p>Thanks!</p>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./Footer.vue";

export default {
  name: "Uninstalled",
  components: { Footer }
};
</script>

<style scoped>
</style>
