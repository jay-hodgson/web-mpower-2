<template>
  <div class="docked-layout">
    <nav class="basic">
      <div>About mPower</div>
    </nav>
    <section v-freeze>
      <div class="container">
        <div class="screen" v-show="step === 1">
          <div class="panel">
            <BridgeImage src="/static/images/about%20the%20study.svg"/>
            <h3>About the study</h3>
            <p>mPower research study was developed by Sage Bioneworks (non-profit) to measure the symptoms, day to day changes, and long-term changes in people with Parkinson’s Disease (PD). </p>
          </div>
          <div class="buttons">
            <button @click="doBack" disabled>Back</button>
            <button @click="doNext">Next</button>
          </div>
        </div>
        <div class="screen" v-show="step === 2">
          <div class="panel">
            <BridgeImage src="/static/images/procedures%20activities.svg"/>
            <h3>Procedures and Activities</h3>
            <p>
              1. Join the study if you are 18 years old, live in the United States and have PD.<br>
              2. Complete a brief survey<br>
              3. Track your symptoms, triggers, and medication<br>
              4. Do short physical and cognitive activities
            </p>
          </div>
          <div class="buttons">
            <button @click="doBack">Back</button>
            <button @click="doNext">Next</button>
          </div>
        </div>
        <div class="screen" v-show="step === 3">
          <div class="panel">
            <BridgeImage src="/static/images/how%20long%20does%20it%20last.svg"/>
            <h3>How long does it last?</h3>
            <p>We will ask you to participate for 2 weeks every three months. We would like you to participate for 2 years, but you can participate as long as you like.</p>
          </div>
          <div class="buttons">
            <button @click="doBack">Back</button>
            <button @click="doNext">Next</button>
          </div>
        </div>
        <div class="screen" v-show="step === 4">
          <div class="panel">
            <BridgeImage src="/static/images/benefits%20and%20risks.svg"/>
            <h3>What are the benefits and risks?</h3>
            <p>You may help researchers better understand PD. You may not directly benefit from taking part but seeing trends in your data may be interesting to you. </p>

            <p>Participating in the study and seeing your data may cause a range of emotions.</p>
          </div>
          <div class="buttons">
            <button @click="doBack">Back</button>
            <button @click="doSubmit">Next</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MainNav from './MainNav.vue'

export default {
  name: 'StudyIntroduction',
  components: { MainNav },
  data() {
    return {
      step: 1,
      totalSteps: 4
    }
  },
  created() {
  },
  methods: {
    doBack() {
      if (this.step > 1) {
        this.step -= 1
      }
    },
    doNext() {
      if (this.step < this.totalSteps) {
        this.step += 1
      }
    },
    doSubmit() {
      this.$router.push('/study/overview?start=true')
    }
  }
}
</script>

<style scoped>
section {
  padding-top: 0;
}
.container {
  max-width: 30rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.screen {
  margin: 0 auto;
  text-align: center;
}
.panel {
  height: 20rem;
}
h3 {
  font-size: 1.3rem;
}
p {
  font-size: .8rem;
}
h3, p {
  color: white;
}
a {
  font-size: .7rem;
  color: white;
}
img {
  height: 12rem;
  display: block;
  margin: 1rem auto;
}
.buttons {
  margin: 2rem auto 0;
  text-align: center;
}
  .buttons button {
    font-size: 1rem;
    background-color: white;
    padding: .75rem 2rem;
    border-radius: 100px;
    cursor: pointer;
  }
  .buttons button + button {
    margin-left: 1rem;
  }
  button[disabled] {
    opacity: .5;
  }
@media screen and (max-width: 50em) {
  h3, p {
    line-height: 1.1;
  }
}
</style>
