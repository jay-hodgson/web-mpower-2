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
  components: { Footer },
  beforeCreate() {
    let meta = this.meta = document.createElement("meta");
    meta.name = 'apple-itunes-app';
    meta.content = 'app-id=1375781575, app-argument=' + document.location.toString();
    document.head.appendChild(meta);
  },
  destroyed() {
    document.head.removeChild(this.meta);
  }
};
</script>

<style scoped>
</style>
