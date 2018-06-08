<template>
  <footer>
    <div>
      <div>2018 mPower</div>
      <router-link to="/privacy-policy">PRIVACY POLICY</router-link>
      <div>|</div>
      <router-link to="/license">LICENSE</router-link>
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
  background-color: #5A478F;
  color: white;
  display: flex;
  flex-wrap: wrap;
  font-size: .55rem;
  justify-content: space-around;
  padding: .25rem .75rem .5rem .75rem;
}
footer > div {
  display: flex;
  align-items: baseline;
  text-align: center;
}
a {
  color: white;
}
footer > div:first-child > * {
  padding: .3rem;
  line-height: 1.3;
}
</style>
