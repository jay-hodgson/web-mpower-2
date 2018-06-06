<template>
  <div ref="dockedLayout" class="docked-layout">
    <MainNav title="Consent" :show-back="!review"/>
    <section>
      <div class="consent-viewer-holder">
        <ConsentViewer :highlight-id="highlightId"/>
      </div>
      <div class="summary">
        <div v-if="step === 1">
          <!-- regular images were not appearing correctly, object is a weird tag to use, but it works. -->
          <object data="/static/images/Comprehension.svg" type="image/svg+xml"></object>
          <h3>What is involved</h3>
          <p>Install the mPower app on your phone. </p>
          <p>To understand changes in your health we will ask you to do:</p>
          <ul>
            <li>At the start of the study you will answer a few questions about your health (5 minutes). </li>
            <li>You can track your health daily through your symptoms, triggers and medications (5 minutes). </li>
            <li>Every three months you will be asked to complete activities on the app like tapping your fingers or doing a cognitive game daily for 2 weeks (10 minutes)</li>
          </ul>
          <p>We would like you to participate for 2 years but you can participate as long as you like. </p>
        </div>
        <div v-if="step === 2">
          <object data="/static/images/Privacy.svg" type="image/svg+xml"></object>
          <h3>Data Collection, Storage & Privacy</h3>
          <ul>
            <li>Your data is encrypted on your phone.</li>
            <li>We collect the encrypted survey and activity data from your phone. </li>
            <li>We replace your name with a random code and combine your coded study data with data from other volunteers. </li>
            <li>We store the coded study data on a secure cloud server. </li>
          </ul>
        </div>
        <div v-if="step === 3">
          <object data="/static/images/Data%20use%20and%20trends.svg" type="image/svg+xml"></object>
          <h3>Data Use & Trends</h3>
          <ul>
            <li>You will be able to view your symptoms, triggers, medication adherence and sensor based activities. </li>
            <li>You will be able to see your data and can start to see trends in your data. </li>
            <li>We will use your study data for research. </li>
            <li>We will use the study data to look for patterns. These patterns may help us better understand the symptoms of PD.</li>
          </ul>
        </div>
        <div v-if="step === 4">
          <object data="/static/images/future%20research.svg" type="image/svg+xml"></object>
          <h3>Sharing for Future Research</h3>
          <ul>
            <li>Sharing your coded study data broadly (without information such as your name) may benefit this and future research.</li>
            <li>You get to decide if you want to share your coded study data broadly.</li>
            <li>Once we have shared your data with other researchers we cannot withdraw it.</li>
          </ul>
        </div>
        <div v-if="step === 5">
          <object data="/static/images/Risks.svg" type="image/svg+xml"></object>
          <h3>Potential Risks</h3>
          <ul>
            <li>We expect the risk of participating in this study to be low.</li>
            <li>Some of the activities and questions we ask could be tiring, frustrating, boring or may make you feel uncomfortable.</li>
            <li>Seeing your data may cause many emotions. </li>
            <li>We will do our best to protect your information, but your data could be hacked.</li>
            <li>There may be other risks to participating that we do not know about yet.</li>
          </ul>
        </div>
        <div v-if="step === 6">
          <object data="/static/images/Benefits.svg" type="image/svg+xml"></object>
          <h3>Potential Benefits</h3>
          <ul>
            <li>You may not directly benefit from taking part but seeing trends in your data may be interesting to you. </li>
            <li>You can share this data with your doctors, family members, or others.</li>
            <li>You may help researchers better understand Parkinson’s Disease. This may help future generations. </li>
          </ul>
        </div>
        <div v-if="step === 7">
          <object data="/static/images/Issues%20to%20consider.svg" type="image/svg+xml"></object>
          <h3>Issues to Consider</h3>
          <ul>
            <li>The time you use on this app may count against your mobile data plan. You can set up the app to use Wi-Fi connections instead. </li>
            <li>You will not be paid for participating in this study. You will not be paid for sharing your data. </li>
            <li>You will not receive any profit from this or future research. </li>
            <li>The risk of injury is low in this study. You will not be compensated for injury.</li>
          </ul>
        </div>
        <div v-if="step === 8">
          <object data="/static/images/Not%20medical%20care.svg" type="image/svg+xml"></object>
          <h3>NOT medical care</h3>
          <ul>
            <li>mPower is a research study. </li>
            <li>mPower does not provide medical care, medical advice, or treatment.</li>
            <li>The mPower app is not a diagnosis tool. </li>
            <li>Contact your health provider if you have questions or concerns related to your health, or if you need medical care.</li>
          </ul>
        </div>
        <div v-if="step === 9">
          <object data="/static/images/Leave.svg" type="image/svg+xml"></object>
          <h3>Leaving the Study</h3>
          <ul>
            <li>Your participation is voluntary.</li>
            <li>You may leave the study at any time and for any reason.</li>
            <li>If you leave the study, you withdraw your consent.</li>
            <li>Your study data from before your withdrawal will continue to be used in the study. It will not be destroyed or deleted.</li>
          </ul>
        </div>
        <div v-if="step === 10">
          <object data="/static/images/contact.svg" type="image/svg+xml"></object>
          <h3>Contact</h3>
          <ul>
            <li>If you have questions you can reach us by email at PDApp@sagebase.org or call toll free 1-844-822-4708.</li>
            <li>We may want to reach out to you.</li>
            <li>You can opt out of these follow up notifications at any time</li>
          </ul>
        </div>
      </div>
    </section>
    <NavFooter v-freeze v-if="review" label="Back" @click="backToReview"/>
    <Footer v-freeze v-else :step="step" :total-steps="totalSteps" :next-enabled="nextEnabled"
      v-on:back="doBack" v-on:next="doNext" v-on:submit="doSubmit" submit-label="Done"/>
  </div>
</template>

<script>
import ConsentViewer from './ConsentViewer.vue'
import Footer from './Footer.vue'
import MainNav from './MainNav.vue'
import NavFooter from './NavFooter.vue'
import Store from '../store'

const REFERENCE_IDS = ['', 'what-is-involved', 'data-collection', 'trends', 'sharing', 'risks', 
  'benefits', 'issues', 'not-medical', 'leaving', 'contact'];

export default {
  name: 'StudyConsent',
  components: { ConsentViewer, Footer, MainNav, NavFooter },
  data() {
    return {
      step: 1,
      totalSteps: 10,
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
      this.$store.setCurrentStep(Store.CONSENT_DONE)
      this.$router.push('/study/overview')
    },
    backToReview() {
      this.$router.push('/study/retake-quiz')
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
.summary img, .summary object {
  height: 3rem;
  width: 3rem;
  float: left;
  margin-right: 1rem;
}
.summary h3 {
  padding: 1rem;
}
.summary p, .summary li, .summary ul {
  clear: both;
  margin: .4rem 0;
  line-height: 1.2;
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
  .summary img, .summary object {
    height: 7rem;
    width: 100%;
    float: none;
  }
  .summary h3 {
    padding: 1rem 0;
    text-align: center;
    font-size: 1.2rem;
  }
}
</style>
