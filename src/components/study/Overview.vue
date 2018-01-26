<template>
  <div>
    <nav>
      <div v-if="currentStep == 0">Welcome</div>
      <div v-if="currentStep != 0">Overview</div>
    </nav>    
    <div class="container">
      <div class="intro">
        <template v-if="currentStep === Store.UNSTARTED">
          <h2>Welcome to mPower!</h2>
          <p>mPower is a study to track the symptoms of Parkinson’s Disease over time. Here you can learn about the study and decide if you want to join! Let’s get started.</p>
        </template>
        <template v-if="currentStep === Store.ELIGIBILITY_DONE">
          <h2>Congratulations, you’re eligible!</h2>
          <p>Now that we have found out that you are eligible, let’s move on to the next step. Your next step will be Consent where you’ll learn some more about the study.</p>
        </template>
        <template v-if="currentStep === Store.CONSENT_DONE">
          <h2>Thanks for walking through consent!</h2>
          <p>Next we will ask you 5 questions. They will tell you if we did a good job explaining the study.</p>
        </template>
        <template v-if="currentStep === Store.QUIZ_DONE">
          <h2>Great job!</h2>
          <p>You’ve passed the quiz, now let’s review the consent document that you looked at one more time before we can register you for the study.</p>
        </template>
        <template v-if="currentStep === Store.SIGN_DONE">
          <h2>Install the app!</h2>
          <p>Register your phone so you can download and install the app.</p>
        </template>
      </div>
      <router-link to="/study/eligibility" class="step" 
        v-bind:class="{ done: currentStep > Store.UNSTARTED, current: currentStep === Store.UNSTARTED }">
        <div class="icon eligibility"></div>
        <div class="content">
          <h3>Eligibility</h3>
          <p>Let’s see if you are eligible for the Parkinsons Disease study.<br>2 minutes</p>
        </div>
        <div class="lock"></div>
        <div class="start">Start</div>
      </router-link>

      <router-link to="/study/consent" class="step" 
        v-bind:class="{ done: currentStep > Store.ELIGIBILITY_DONE,  current: currentStep === Store.ELIGIBILITY_DONE }">
        <div class="icon consent"></div>
        <div class="content">
          <h3>Consent</h3>
          <p>Learn about the study and the risks and benefits of joining.<br>5 minutes</p>
        </div>
        <div class="lock"></div>
        <div class="start">Start</div>
      </router-link>
      
      <router-link to="/study/quiz" class="step" 
        v-bind:class="{ done: currentStep > Store.CONSENT_DONE, current: currentStep === Store.CONSENT_DONE }">
        <div class="icon quiz"></div>
        <div class="content">
          <h3>Quiz</h3>
          <p>Make sure you know important facts about the study.<br>5 minutes</p>
        </div>
        <div class="lock"></div>
        <div class="start">Start</div>
      </router-link>

      <router-link to="/study/sign" class="step" 
        v-bind:class="{ done: currentStep > Store.QUIZ_DONE, current: currentStep === Store.QUIZ_DONE }">
        <div class="icon sign"></div>
        <div class="content">
          <h3>Sign</h3>
          <p>Sign the consent document.<br>2 minutes</p>
        </div>
        <div class="lock"></div>
        <div class="start">Start</div>
      </router-link>

      <router-link to="/study/registration" class="step" 
        v-bind:class="{ done: currentStep > Store.SIGN_DONE, current: currentStep === Store.SIGN_DONE }">
        <div class="icon registration"></div>
        <div class="content">
          <h3>Install the App</h3>
          <p>Add your phone number so you can join the study!<br>1 minute</p>
        </div>
        <div class="lock"></div>
        <div class="start">Start</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import MainNav from './MainNav.vue'
import Store from '../store';

export default {
  name: 'StudyOverview',
  components: { MainNav },
  created() {
    if (this.$route.query.start) {
      this.$store.setCurrentStep(Store.UNSTARTED)
    }
    this.currentStep = this.$store.getCurrentStep()
  },
  data() {
    return {
      currentStep: null,
      Store: Store
    }
  }
}
</script>

<style scoped>
nav {
  color: white;
  background-image: linear-gradient(86deg, #473b7b, #3584a7 76%, hsl(173, 64%, 51%));
  background-blend-mode: multiply;

  display: flex;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
}
nav > div {
  height: 2.2rem;
  line-height: 2.2rem;
  padding: .25rem 1rem;
}
.icon {
  width: 8vw; /* height is 0.85222 of width */
  min-width: 3rem;
  align-self: stretch;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center 20%;
}
  .eligibility {
    background-image: url(/static/images/eligibility-icon.png);
  }
  .consent {
    background-image: url(/static/images/consent-icon.png);
  }
  .quiz {
    background-image: url(/static/images/quiz-onboarding-icon.png);
  }
  .sign {
    background-image: url(/static/images/sign-consent-icon.png);
  }
  .registration {
    background-image: url(/static/images/InstallApp.png);
  }
.container {
  padding-bottom: 3rem;
}
.intro {
  padding: 0 0 1.5rem 0;
}
.intro h2, .into h3, .intro p {
  color: white;
  line-height: 1.3;
}
  .intro h2 {
    font-size: 1.3rem;
  }
  .intro p {
    font-size: .9rem;
  }
.step {
  display: flex;
  align-items: center;
  background-color: rgba(255,255,255,.6);
  border-radius: .75rem;
  color: #473b7b;
  padding: .5rem;
  margin-bottom: 1rem;
}
.content {
  flex: 1;
  padding: .25rem;
}
  .content h3 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: .1rem;
  }
  .content p {
    font-size: .7rem;
    line-height: 1.3;
    margin: 0;
  }
.done {
  background-color: #049372;
  color: white;
}
  .done, .done h3, .done p {
    color: white;
  }
.current {
  background-color: white;
}
  .current h3, .current p {
    color: #4a4a4a;
  }
.lock {
  background: transparent url(/static/images/lock-icon-onboarding-overview.png) center no-repeat;
  width: 2.5rem;
  height: 2.5rem;
}
  .done .lock, .current .lock {
    display: none;
  }
.start {
  display: none;
  width: 2.25rem;
}
  .current .start {
    display: block;
  }

</style>
