<template>
  <footer>
    <div>
      <div>2017 mPower</div>
      <router-link to="/privacy-policy">PRIVACY POLICY</router-link>
      <div>|</div>
      <router-link to="/terms-of-service">TERMS OF SERVICE</router-link>
      <div>|</div>
      <router-link to="/faq">FAQ</router-link>
      <div>|</div>
      <router-link to="/contact">CONTACT</router-link>
    </div>
    <div>
      mPower is for research use only and does not provide medical advice, diagnosis or treatment.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
footer {
  align-items: baseline;
  background-image: linear-gradient(87deg, #473b7b, #3584a7 76%, #30d2be);
  color: white;
  display: flex;
  flex-wrap: wrap;
  font-size: .55rem;
  justify-content: space-around;
  padding: 1rem 0;
}
footer > div {
  display: flex;
  align-items: baseline;
}
a {
  color: white;
}
footer > div:first-child > * {
  padding: .3rem;
  line-height: 1.3;
}
</style>
