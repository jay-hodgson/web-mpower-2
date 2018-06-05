<template>
  <div class="docked-layout">
    <MainNav title="Eligibility"/>
    <section>
      <div class="container">
        <h3>Let’s find out if you’re eligible</h3>

        <div class="question" v-if="step >= 1">
          <span>I am </span>
          <mdc-textfield style="width:3rem" v-model="age" type="tel" label="Age"/>
          <span>years old</span>
        </div>

        <div class="question" v-if="step >= 2">
          <span>I live </span>
          <div class="mdc-select">
            <select dense v-model="residence" class="mdc-select__surface">
              <option :key="state" v-for="state in states">{{state}}</option>
            </select>
            <div class="mdc-select__bottom-line"></div>
          </div>
        </div>

        <div class="question" v-if="step >= 3">
          <span>I </span>
          <div class="mdc-select">
            <select dense v-model="comfort" class="mdc-select__surface">
              <option>Select</option>
              <option>have</option>
              <option>do not have</option>
            </select>
            <div class="mdc-select__bottom-line"></div>
          </div>
          <span>a smart phone.</span>
        </div>
      </div>
    </section>

    <Footer v-freeze :step="step" :total-steps="totalSteps" :next-enabled="nextEnabled" 
      @back="doBack" @next="doNext" @submit="doSubmit"/>
  </div>
</template>

<script>
import MainNav from './MainNav.vue'
import Footer from './Footer.vue'
import Store from '../store';

const STATES = ['Select', "in the United States", "outside of the United States"]

export default {
  name: 'StudyEligibility',
  components: { MainNav, Footer },
  data() {
    return {
      step: 1,
      totalSteps: 3,
      residence: 'select where',
      comfort: 'select response',
      states: STATES,
      age: ''
    }
  },
  computed: {
    nextEnabled() {
      let age = parseInt(this.age);
      if (this.step === 1 && age) {
        return true
      } else if (this.step === 2 && this.residence !== 'Select') {
        return true
      } else if (this.step === 3 && this.comfort !== 'Select') {
        return true
      }
      return false
    }
  },
  methods: {
    doBack() {
      this.step -= 1;
    },
    doNext() {
      this.step += 1;
    },
    doSubmit() {
      var validResidence = (this.residence === "in the United States")
      var validComfort = (this.comfort === 'have')
      var validAge = this.age >= 18;

      if (!validAge || !validResidence || !validComfort ) {
        this.$router.push('/study/ineligible')
      } else {
        this.$store.setCurrentStep(Store.ELIGIBILITY_DONE)
        this.$router.push('/study/overview')
      }
    }
  }
}
</script>

<style scoped>
.mdc-textfield-wrapper {
  min-width: 8rem;
}
h3 {
  text-align: center;
  margin-bottom: 2rem;
}
.question {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 1.5rem;
}
  .question > * {
    padding: 0 .25rem;
    margin-bottom: .25rem;
  }
select {
  background-color: transparent;
}
@media screen and (max-width: 50em) {
  .question {
    flex-direction: column;
  }
  .mdc-select {
    height: 2rem;
  }
  .mdc-textfield-wrapper {
    height: 3rem;
  }
}
</style>
