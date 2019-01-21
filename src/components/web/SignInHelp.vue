<template>
  <div class="docked-layout">
    <nav class="basic" style="background-color: #5A478F">
      <div>mPower 2.0</div>
    </nav>
    <section>
      <div class="container">
        <h2>Oops</h2>
        <p>You tried signing in, but the message link didn’t open our app! </p>
        
        <p>Enter this code into the app to sign in:</p>

        <p class="signin-code">{{ signInToken }}</p>
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
  computed: {
    signInToken() {
      let str = this.$route.params.signInToken.replace("-", "")
      return str.substring(0,3) + ' ' + str.substring(3)
    }
  },
  destroyed() {
    document.head.removeChild(this.meta);
  }
};
</script>

<style scoped>
p {
  text-align: center;
}
.signin-code {
  font-size: 2rem;
  font-weight: bold;
  letter-spacing:3px
}
</style>

