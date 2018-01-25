<template>
  <div ref="dockedLayout" class="docked-layout">
    <MainNav title="Consent" :show-back="!review"/>
    <section>
      <div class="consent-viewer-holder">
        <ConsentViewer :highlight-id="highlightId"/>
      </div>
      <div class="summary">
        <div v-if="step === 1">
          <h3 class="activities">Activities & Surveys</h3>
          <ul>
            <li>We will ask you to do activities on your phone like tapping your fingers or holding your phone steady.</li>
            <li>We will as you to do the activities a certain number of times. But you can do them as often as you like.</li>
            <li>We will ask you questions about your health and your medical history.</li>
          </ul>
        </div>
        <div v-if="step === 2">
          <h3 class="sensors">Sensor data</h3>
          <ul>
            <li>In some activities on the app, we will use data from the sensors in your phone. </li>
            <li>We will also ask for data from your phone about your overall physical activity.</li>
            <li>You can decide what data you want to share with us.</li>
          </ul>
        </div>
        <div v-if="step === 3">
          <h3 class="trends">View your data trends</h3>
          <ul>
            <li>You can view your data at any time.</li>
            <li>When you look at your data you may notice patterns.</li>
            <li>Seeing health patterns can generate a wide range of emotions.</li>
          </ul>
        </div>
        <div v-if="step === 4">
          <h3 class="privacy">Your privacy</h3>
          <ul>
            <li>We will protect your privacy to the best of our ability. </li>
            <li>Your study data will be encrypted on your phone. </li>
            <li>We will replace your name with a random code.</li> 
            <li>We will store your study data on a secure cloud server. But we cannot promise total privacy.</li>
          </ul>
        </div>
        <div v-if="step === 5">
          <h3 class="usage">Data use</h3>
          <ul>
            <li>Your coded study data will be used for research. </li>
            <li>It will be combined with data from other volunteers. </li>
            <li>It will be transferred to an analysis platform in the United States. </li>
          </ul>
        </div>
        <div v-if="step === 6">
          <h3 class="time">Time commitment</h3>
          <ul>
            <li>This study will take about 10 minutes per day. Some days we will ask for you more time than others.</li>
            <li>The time you spend on the app may count against your mobile data plan.</li>
            <li>You can set up the app to use Wi-Fi connections to avoid using your mobile data.</li>
          </ul>
        </div>
        <div v-if="step === 7">
          <h3 class="surveys">Study surveys</h3>
          <ul>
            <li>We will ask you to update your answers about your health and medical history.</li>
            <li>We may ask you other questions about how you use the app.</li>
          </ul>
        </div>
        <div v-if="step === 8">
          <h3 class="benefits">Potential benefits</h3>
          <ul>
            <li>Your participation could help researchers understand chronic anemia better. </li>
            <li>You may or may not benefit from this research study. </li>
          </ul>
        </div>
        <div v-if="step === 9">
          <h3 class="risks">Potential risks</h3>
          <ul>
            <li>If you participate in this study, your privacy may be at risk.</li>
            <li>There may be other risks to participating that we do not know about yet.</li>
          </ul>
        </div>
        <div v-if="step === 10">
          <h3 class="research">NOT medical care</h3>
          <ul>
            <li>mPower is not used for medical care, it is a research study. </li>
            <li>The mPower app is not a diagnosis tool. </li>
            <li>We do not give medical advice or treatment recommendations. </li>
          </ul>
        </div>
        <div v-if="step === 11">
          <h3 class="contact">Follow up</h3>
          <ul>
            <li>We might want to reach out to you.</li>
            <li>You can opt out of these follow up notifications at any time.</li>
          </ul>
        </div>
        <div v-if="step === 12">
          <h3 class="quitable">Pause or quit</h3>
          <ul>
            <li>Your participation is voluntary. </li>
            <li>You can pause your participation or you can leave the study at any time.</li>
          </ul>
        </div>
        <div v-if="step === 13">
          <h3 class="consider">Think it over</h3>
          <ul>
            <li>Your participation is voluntary. </li>
            <li>Take time to think it over and ask questions. </li>
          </ul>
        </div>
      </div>
    </section>
    <NavFooter v-if="review" :reset-step="2" label="Back" path="/study/retake-quiz"/>
    <Footer v-else :step="step" :total-steps="totalSteps" :next-enabled="nextEnabled"
      v-on:back="doBack" v-on:next="doNext" v-on:submit="doSubmit" submit-label="Done"/>
  </div>
</template>

<script>
import ConsentViewer from './ConsentViewer.vue'
import Footer from './Footer.vue'
import MainNav from './MainNav.vue'
import NavFooter from './NavFooter.vue'
import store from '../onboarding_store';

const REFERENCE_IDS = ['activities', 'activities', 'risks', 'privacy', 'data-use', 'time', 
  'surveys', 'benefits', 'risks', 'not-medical-care', 'notifications', 'voluntary'];

export default {
  name: 'StudyConsent',
  components: { ConsentViewer, Footer, MainNav, NavFooter },
  store: store,
  data() {
    return {
      step: 1,
      resetStep: 2,
      totalSteps: 13,
      review: false,
      highlightId: ''
    }
  },
  computed: {
    nextEnabled() {
      return true
    }
  },
  created() { 
    if (this.$route.query.review) {
      this.review = true
      this.step = parseInt(this.$route.query.review)
    }
  },
  mounted() {
    this.highlightId = REFERENCE_IDS[this.step];
  },
  methods: {
    scrollTo(delta) {
      this.step += delta
      this.highlightId = REFERENCE_IDS[this.step]
    },
    doBack() {
      if (this.step > 1) {
        this.scrollTo(-1)
      }
    },
    doNext() {
      if (this.step < this.totalSteps) {
        this.scrollTo(1)
      }
    },
    doSubmit() {
      this.$store.setCurrentStep(2)
      this.$router.push('/study/overview')
    }
  }
}
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-around;
  padding: 0;
}
.summary {
  margin: 2rem 0;
  width: 40%;
  font-size: .9rem;
}
.summary h3 {
  padding: 1rem 1rem 1rem 3.5rem;
  background-repeat: no-repeat;
  background-size: contain;
}
  .activities {
      background-image: url(/static/images/step-1-consent-icon.png);
  }
  .sensors {
      background-image: url(http://via.placeholder.com/91x91);
  }
  .trends {
      background-image: url(/static/images/step-3-consent-icon.png);
  }
  .privacy {
      background-image: url(/static/images/step-4-consent-icon.png);
  }
  .usage {
      background-image: url(/static/images/step-5-consent-icon.png);
  }
  .time {
      background-image: url(/static/images/step-6-consent-icon.png);
  }
  .surveys {
      background-image: url(/static/images/step-7-consent-icon.png);
  }
  .benefits {
      background-image: url(/static/images/step-8-consent-icon.png);
  }
  .risks {
      background-image: url(/static/images/step-9-consent-icon.png);
  }
  .research {
      background-image: url(/static/images/step-10-consent-icon.png);
  }
  .contact {
      background-image: url(/static/images/step-11-consent-icon.png);
  }
  .quitable {
      background-image: url(/static/images/step-12-consent-icon.png);
  }
  .consider {
      background-image: url(/static/images/step-13-consent-icon.png);
  }
.consent-viewer-holder {
  border: solid 10px rgba(108, 122, 137, 0.3);
  width: 40%;
  margin: 2rem 0 3rem 0;
}
@media screen and (max-width: 50em) {
  section {
    display: block;
    overflow: hidden;
  }
  .consent-viewer-holder {
    width: 100%;
    height: 50%;
    margin: 0;
    border: none;
  }
  .summary {
    margin: 0;
    width: 100%;
    border: none;
    height: 50%;
    border-top: solid 3px rgba(108, 122, 137, 0.3);
    padding: 1rem;
    box-sizing: border-box;
    overflow-y: auto;
  }
  .summary h3 {
    padding: .5rem .5rem .5rem 2.5rem;
  }
  
}
</style>
