<template>
  <div class="docked-layout">
    <MainNav title="Quiz" :back-to-overview="true" :show-help="true" :show-steps="true"/>
    <section>
      <div class="failure" v-if="showFailure" v-freeze>
        <div>
          <h4>Not quite!</h4>
          <p v-if="step === 1">The purpose of this study is to understand the fluctuations of Parkinson’s disease symptoms. This is not a treatment study. The app does not replace your usual medical care.</p>
          <p v-if="step === 2">Your name and contact information will NOT be stored with your study data. We will use a random code instead of your name on all your study data.</p>
          <p v-if="step === 3">Your coded study data cannot be deleted once it is used in another research. </p>
          <p v-if="step === 4">Answering questions may cause a wide range of emotions. It can be stressful.</p>
          <p v-if="step === 5">The mPower app does not connect to your doctor or health care provider. It does allow you to track your symptoms and triggers.</p>
        </div>
      </div>
      <div class="success" v-if="showSuccess" v-freeze>
        <div>
          <h4>Great job!</h4>
          <p v-if="step === 1">The purpose of this study is to better understand the fluctuations of Parkinson’s disease symptoms. It is not a treatment study. The app does not replace your usual medical care.</p>
          <p v-if="step === 2">Your name and contact information will not be stored with your study data. We will use a random code instead of you name on all of your study data.</p>
          <p v-if="step === 3">Your coded study data cannot be deleted once it is used in another research. </p>
          <p v-if="step === 4">Answering questions may cause a wide range of emotions. It can be stressful.</p>
          <p v-if="step === 5">The mPower app does not connect to your doctor or health care provider. It does allow you to track your symptoms and triggers.</p>
          <div style="text-align:right">
            <button v-if="step !== 5" @click="doNext">Next</button>
            <button v-if="step === 5" @click="doSubmit">Done</button>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="question" v-show="step === 1">
          <label>QUESTION {{step}}</label>
          <h3>What is the purpose of this study?</h3>

          <RadioButton @change="updateQuizState" name="purpose" value="right">
            Understand the fluctuations of Parkinson’s disease symptoms
          </RadioButton>
          <RadioButton @change="updateQuizState"  name="purpose" value="wrong">
            Give medical advice and diagnose people with Parkinson’s disease
          </RadioButton>
        </div>

        <div class="question" v-show="step === 2">
          <label>QUESTION {{step}}</label>
          <h3>Will my name be stored with my study data?</h3>

          <RadioButton @change="updateQuizState"  name="anon" value="wrong">
            Yes
          </RadioButton>
          <RadioButton @change="updateQuizState"  name="anon" value="right">
            No
          </RadioButton>
        </div>
        
        <div class="question" v-show="step === 3">
          <label>QUESTION {{step}}</label>
          <h3>If I decide to share my data with qualified researchers and then I change my mind, can my data be deleted from their studies?</h3>

          <RadioButton @change="updateQuizState"  name="deletable" value="wrong">
            Yes
          </RadioButton>
          <RadioButton @change="updateQuizState"  name="deletable" value="right">
            No
          </RadioButton>
        </div>

        <div class="question" v-show="step === 4">
          <label>QUESTION {{step}}</label>
          <h3>For some people, seeing their data may be stressful.</h3>

          <RadioButton @change="updateQuizState"  name="stressful" value="right">
            Yes
          </RadioButton>
          <RadioButton @change="updateQuizState"  name="stressful" value="wrong">
            No
          </RadioButton>
        </div>

        <div class="question" v-show="step === 5">
          <label>QUESTION {{step}}</label>
          <h3>With the mPower app I will be able to:</h3>

          <RadioButton @change="updateQuizState"  name="pausable" value="right">
            Track my symptoms and triggers
          </RadioButton>
          <RadioButton @change="updateQuizState"  name="pausable" value="wrong">
            Schedule an appointment with my doctor
          </RadioButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MainNav from './MainNav.vue'
import Footer from './Footer.vue'
import Store from '../store'
import RadioButton from './RadioButton'

export default {
  name: 'StudyQuiz',
  components: { MainNav, Footer, RadioButton },
  data() {
    return {
      step: 1,
      totalSteps: 5,
      furthestStep: 0,
      answer: '',
      showSuccess: false,
      showFailure: false
    }
  },
  created() {
    this.$store.setCurrentStep(2)
  },
  computed: {
    nextEnabled: function() {
      return this.furthestStep >= this.step
    }
  },
  methods: {
    updateQuizState(name, value) {
      this.answer = value
      this.furthestStep = this.step
      if (this.step === this.furthestStep) {
        this.doSubmit()
      } else {
        this.doNext()
      }
    },
    doBack() {
      if (this.step > 1) {
        this.step -= 1
        this.answer = '';
        this.showSuccess = false
        this.showFailure = false        
      }
    },
    doNext() {
      if (this.showSuccess && this.answer !== 'wrong') {
        this.showSuccess = false
        this.showFailure = false
        if (this.step < this.totalSteps) {
          this.step += 1
        }
      } else if (this.answer === 'wrong') {
        setTimeout(() => {
          this.showSuccess = false
          this.showFailure = true
        }, 20);
      } else {
        setTimeout(() => {
          this.showSuccess = true
          this.showFailure = false
        }, 20);
      }
    },
    doSubmit() {
      if (this.showSuccess && this.answer !== 'wrong') {
        this.$store.setCurrentStep(Store.QUIZ_DONE)
        this.$router.push('/study/overview')
      } else if (this.answer === 'wrong') {
        this.showSuccess = false
        this.showFailure = true
      } else {
        this.showSuccess = true
        this.showFailure = false
      }
    }/*,
    doAnimateSubmitDone() {
    }*/
  }
}
</script>

<style scoped>
section {
  padding-top: 0;
}
.container {
  padding: 0;
  max-width: 30rem;
}
.question {
  padding: 1.5rem 1.5rem .5rem 1.5rem;
}
.question > label {
  color: #6c7a89;
  font-size: .7rem;
  margin-bottom: 1rem;
  display: block;
}
.question > h3 {
  color: #3b4a63;
  margin-bottom: 1rem;
}
.radio-holder {
  display: block;
}
.success, .failure {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
  .success h4, .failure h4 {
    font-size: 1.2rem;
    margin: .5rem 0;
  }
  .success div, .failure div {
    max-width: 30rem;
    margin: 0 auto; 
    padding: 0rem 1.5rem;
  }
  .success p, .failure p {
    line-height: 1.1;
  }
  .success {
    background-color: #f0faf6;
  }
    .success h4 {
      color: #63D49E;
      font-weight: normal;
    }
    .success button {
       font-size: 1.3rem; 
       background-color: #5A478F; 
       color: white; 
       border-radius: 100px; 
       padding: .25rem 2rem;
       margin-top: -1rem;
       margin-bottom: 1rem;
    }
  .failure {
    background-color: #fef0f1;
  }
    .failure h4 {
      color: #EE6070;
      font-weight: normal;
    }
</style>
