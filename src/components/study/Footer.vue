<template>
  <footer>
    <div>
      <div class="label">STEP {{step}} OF {{totalSteps}}</div>
      <div class="metering"><div class="progress" ref="progress" v-bind:style="{ width: meterWidth }"></div></div>
    </div>
    <div>
      <button v-bind:style="{visibility: viewBack}" @click="back">Back</button>
      <button v-if="step < totalSteps" :disabled="!nextEnabled" @click="next">Next</button>
      <button v-if="step === totalSteps" :disabled="!nextEnabled" @click="submit">{{submitLabel || 'Submit'}}</button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "StudyFooter",
  props: ["step", "totalSteps", "nextEnabled","submitLabel"],
  computed: {
    meterWidth: function() {
      return (this.step-1) / this.totalSteps * 100 + "%";
    },
    viewBack() {
      return this.step > 1 ? "visible" : "hidden";
    }
  },
  methods: {
    back() {
      this.$emit("back");
    },
    next() {
      this.$emit("next");
    },
    submit() {
      this.$refs.progress.style.width = "100%";
      setTimeout(() => {
        this.$emit("submit");
      }, 300);
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
  padding: 0.5rem;
}
.label {
  font-size: 0.7rem;
  color: #6c7a89;
  margin-bottom: 0.25rem;
}
footer > div:first-child {
  flex: 1;
}
.metering {
  width: 100%;
  height: 10px;
  border-radius: 0.25rem;
  background-color: #eeeeee;
}
.progress {
  height: 10px;
  transition: width 0.25s linear;
  border-radius: 0.25rem;
  background-color: #68bf60;
}

footer > div:last-child {
  padding-left: 2vw;
}
button {
  font-size: 1rem;
  margin: 0;
  padding: 0.25rem 2rem;
  text-align: center;
  border-radius: 0.4rem;
  background-color: #3b4a63;
  color: white;
  transition: opacity 0.1s linear;
}
button:disabled {
  opacity: 0.5;
}
</style>
