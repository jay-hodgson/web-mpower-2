<template>
  <footer>
    <button @click="exec">{{label}}</button>
  </footer>
</template>

<script>
export default {
  name: "NavFooter",
  props: {
      label: String,
      step: Number,
      path: String
  },
  methods: {
    exec() {
      this.$store.setCurrentStep(this.step)
      this.$router.push(this.path)
    }
  }
};
</script>

<style scoped>
footer {
  background-color: #fafafa;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: .5rem;
}
button {
  cursor: pointer;
  font-size: 1rem;
  margin: 0;
  padding: .5rem 2rem;
  text-align: center;
	border-radius: .4rem;
  background-color: #3b4a63;
  color: white;
  transition: opacity .1s linear;
}
</style>
