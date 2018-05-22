<template>
  <div class="docked-layout">
    <nav>
      <div class="title">
        Retake Quiz
      </div>
      <div class="step-icons">
      </div>
      <div class="nav-right">
        <router-link to="/study/help" class="help-link">Need Help?</router-link>
      </div>
    </nav>
    
    <section>
      <div class="container">
        <div class="preamble">
          <img src="/static/images/warning-icon.png">
          <h2>You’re almost there!</h2>
          <p>You answered one or more questions incorrectly. We want to make sure that you understand what this study is about and what is involved before you proceed. Please review the sections again. </p>
        </div>
        
        <div class="questions">
          <div class="question" :class="{error: isError('purpose')}">
            <label>QUESTION 1</label>
            <p>What is the purpose of this study?</p>
            <div>
              <router-link to="/study/consent?review=1">(Review section)</router-link>
            </div>
          </div>
          <div class="question" :class="{error: isError('anon')}">
            <label>QUESTION 2</label>
            <p>Will my name be stored with my study data?</p>
            <div>
              <router-link to="/study/consent?review=2">(Review section)</router-link>
            </div>
          </div>
          <div class="question" :class="{error: isError('deletable')}">
            <label>QUESTION 3</label>
            <p>If I decide to share my data with qualified researchers and then I change my mind, can my data be deleted from their studies?</p>
            <div>
              <router-link to="/study/consent?review=3">(Review section)</router-link>
            </div>
          </div>
          <div class="question" :class="{error: isError('stressful')}">
            <label>QUESTION 4</label>
            <p>The survey questions may be stressful for some people</p>
            <div>
              <router-link to="/study/consent?review=4">(Review section)</router-link>
            </div>
          </div>
          <div class="question" :class="{error: isError('pausable')}">
            <label>QUESTION 5</label>
            <p>I can pause / resume participating at any time.</p>
            <div>
              <router-link to="/study/consent?review=5">(Review section)</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <NavFooter label="Retake quiz" @click="navigate"></NavFooter>
  </div>
</template>

<script>
import MainNav from './MainNav.vue'
import NavFooter from './NavFooter.vue'
import Store from '../store'

export default {
  name: 'StudyRetakeQuiz',
  components: { MainNav, NavFooter },
  created() {
    // due to failure, we're back to consent. When they are done reviewing, 
    // then we advance them to consent being done again.
    this.$store.setCurrentStep(Store.ELIGIBILITY_DONE)
  },
  methods: {
    isError: function(tag) {
      return this.$store.getAnswers()[tag] === 'wrong'
    },
    navigate() {
      this.$store.setCurrentStep(Store.CONSENT_DONE)
      this.$router.push('/study/quiz')
    }
  }
}
</script>

<style scoped>
nav {
  background-image: linear-gradient(86deg, #473b7b, #3584a7 76%, hsl(173, 64%, 51%));
  background-blend-mode: multiply;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
}
.title {
  flex: 1;
  align-self: center;
  line-height: 1.1;
  margin: .6rem;
}
.nav-right {
  display: flex;
  margin: .6rem;
}
.help-link {
  color: #3b4a63; 
  background-color: white; 
  font-size: .7rem;
  height: 2.2rem;
  line-height: 2.2rem;
  padding: 0 .5rem;
  border-radius: 1.5rem;
}
.preamble img {
  width: 8rem;
  height: 8rem;
  display: block;
  margin: 0 auto;
}
.preamble p, .preamble h2 {
  color: white;
}
  .preamble h2 {
    margin-top: 0;
    font-size: 1rem;
  }
  .preamble p {
    font-size: .8rem;
  }
.questions {
  background-color: white;
  padding: .5rem 2rem;
}
label {
  font-size: .7rem;
  color: #6c7a89;
  display: block;
  margin-bottom: .25rem;
}
.question p {
  margin: 0;
  font-size: .9rem;
  line-height: 1.2;
  color: #3b4a63;
}
.question div {
  text-align: right;
  display: none;
}
.question.error div {
  display: block;
}
.question a {
  text-decoration: underline;
  font-size: .8rem;
}
.question {
  border-bottom: 1px solid rgba(0, 0, 0, 0.24);
  padding: .5rem;
  background: transparent url(/static/images/check-mark.png) left 15%;
  background-repeat: no-repeat;
  background-size: 2rem 2rem;
  padding-left: 3rem;
}
.error {
  background: transparent url(/static/images/wrong-icon.png) left 15%;
  background-repeat: no-repeat;
  background-size: 2rem 2rem;
  padding-left: 3rem;
}
.error label, .error p {
  color: #ff8a80;
}
.question:last-child {
  padding-bottom: .5rem;
  border-bottom: none;
}
</style>
