<template>
  <div class="docked-layout">
    <MainNav title="Consent" :back-to-overview="true" :show-help="true" :show-steps="true"/>
    <section>

      <section class="top">
        <DocumentViewer ref="consentViewer" :highlight-id="highlightId">
          <ConsentContent/>
        </DocumentViewer>
      </section>
      <section ref="summary" class="bottom summary">
        <div v-show="step === 1">
          <div class="header">
            <object data="/static/images/Comprehension.svg" type="image/svg+xml"></object>
            <h3>{{ $t('consent-screen.step-1.title') }}</h3>
          </div>
          <p>{{ $t('consent-screen.step-1.install-on-phone') }}</p>

          <p>{{ $t('consent-screen.step-1.use-app-to') }}:</p>

          <ul>
            <li>{{ $t('consent-screen.step-1.answer-health-questions') }} </li>
            <li>{{ $t('consent-screen.step-1.track-symptoms') }} </li>
            <li>{{ $t('consent-screen.step-1.complete-activities') }}</li>
          </ul>

          <p>{{ $t('consent-screen.step-1.participation-time') }} </p>
        </div>
        <div v-show="step === 2">
          <div class="header">
            <object data="/static/images/Privacy.svg" type="image/svg+xml"></object>
            <h3>{{ $t('consent-screen.step-2.title') }}</h3>
          </div>
          <ul>
            <li>{{ $t('consent-screen.step-2.data-encrypted') }}</li>
            <li>{{ $t('consent-screen.step-2.collect-data') }}</li>
            <li>{{ $t('consent-screen.step-2.not-location') }}</li>
            <li>{{ $t('consent-screen.step-2.use-guid') }} </li>
            <li>{{ $t('consent-screen.step-2.on-cloud') }}</li>
          </ul>
        </div>
        <div v-show="step === 3">
          <div class="header">
            <object data="/static/images/Data%20use%20and%20trends.svg" type="image/svg+xml"></object>
            <h3>{{ $t('consent-screen.step-3.title') }}</h3>
          </div>
          <ul>
            <li>{{ $t('consent-screen.step-3.view-activities') }} </li>
            <li>{{ $t('consent-screen.step-3.see-data') }}</li>
            <li>{{ $t('consent-screen.step-3.use-for-research') }} </li>
            <li>{{ $t('consent-screen.step-3.patterns') }}</li>
          </ul>
        </div>
        <div v-show="step === 4">
          <div class="header">
            <object data="/static/images/future%20research.svg" type="image/svg+xml"></object>
            <h3>Sharing for Future Research</h3>
          </div>
          <ul>
            <li>Sharing your coded study data broadly (without information such as your name) may benefit this and future research.</li>
            <li>You get to decide if you want to share your coded study data broadly with qualified researchers.</li>
            <li>Once we have shared your data with other researchers we cannot withdraw it.</li>
          </ul>
        </div>
        <div v-show="step === 5">
          <div class="header">
            <object data="/static/images/Risks.svg" type="image/svg+xml"></object>
            <h3>Potential Risks</h3>
          </div>
          <ul>
            <li>We expect the risk of participating in this study to be low.</li>
            <li>Some of the activities and questions we ask could be tiring, frustrating, boring or may make you feel uncomfortable.</li>
            <li>Seeing your data may cause many emotions. </li>
            <li>We will do our best to protect your information, but your data could be hacked.</li>
            <li>There may be other risks to participating that we do not know about yet.</li>
          </ul>
        </div>
        <div v-show="step === 6">
          <div class="header">
            <object data="/static/images/Benefits.svg" type="image/svg+xml"></object>
            <h3>Potential Benefits</h3>
          </div>
          <ul>
            <li>You may not directly benefit from taking part but seeing trends in your data may be interesting to you. </li>
            <li>You can share this data with your doctors, family members, or others.</li>
            <li>You may help researchers better understand Parkinson’s Disease. This may help future generations. </li>
          </ul>
        </div>
        <div v-show="step === 7">
          <div class="header">
            <object data="/static/images/Not%20medical%20care.svg" type="image/svg+xml"></object>
            <h3>NOT medical care</h3>
          </div>
          <ul>
            <li>mPower is a research study. </li>
            <li>mPower does not provide medical care, medical advice, or treatment.</li>
            <li>The mPower app is not a diagnosis tool. </li>
            <li>Contact your health provider if you have questions or concerns related to your health, or if you need medical care.</li>
          </ul>
        </div>
        <div v-show="step === 8">
          <div class="header">
            <object data="/static/images/Issues%20to%20consider.svg" type="image/svg+xml"></object>
            <h3>Issues to Consider</h3>
          </div>
          <ul>
            <li>The time you use on this app may count against your mobile data plan. You can set up the app to use Wi-Fi connections instead. </li>
            <li>You will not be paid for participating in this study. You will not be paid for sharing your data. </li>
            <li>You will not receive any profit from this or future research. </li>
            <li>The risk of injury is low in this study. You will not be compensated for injury.</li>
          </ul>
        </div>
        <div v-show="step === 9">
          <div class="header">
            <object data="/static/images/Leave.svg" type="image/svg+xml"></object>
            <h3>Leaving the Study</h3>
          </div>
          <ul>
            <li>Your participation is voluntary.</li>
            <li>You may leave the study at any time and for any reason.</li>
            <li>If you leave the study, you withdraw your consent.</li>
            <li>Your study data from before your withdrawal will continue to be used in the study. It will not be destroyed or deleted.</li>
          </ul>
        </div>
        <div v-show="step === 10">
          <div class="header">
            <object data="/static/images/contact.svg" type="image/svg+xml"></object>
            <h3>Contact</h3>
          </div>
          <ul>
            <li>If you have questions you can reach us by email at PDApp@sagebionetworks.org or call toll free +1.833-SAGEBIO.</li>
            <li>We may want to reach out to you.</li>
            <li>You can opt out of these follow up notifications at any time</li>
          </ul>
        </div>
        <p class="more"><a href="#" @click.prevent="showMore">See this on the information sheet.</a></p>
      </section>
            
    </section>
    <NavFooter v-if="review" label="Back" @click="backToReview"/>
    <Footer v-else v-freeze :step="step" :total-steps="totalSteps" :next-enabled="nextEnabled"
      v-on:back="doBack" v-on:next="doNext" v-on:submit="doSubmit" submit-label="Done"/>
  </div>
</template>


<script>
import DocumentViewer from './DocumentViewer.vue'
import ConsentContent from '../web/ConsentContent.vue'
import Footer from './Footer.vue'
import MainNav from './MainNav.vue'
import NavFooter from './NavFooter.vue'
import Store from '../store'

const REFERENCE_IDS = ['', 'what-is-involved', 'data-collection', 'trends', 'sharing', 'risks', 
  'benefits', 'not-medical', 'issues', 'leaving', 'contact'];

export default {
  name: 'StudyConsent',
  components: { ConsentContent, DocumentViewer, Footer, MainNav, NavFooter },
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
        this.$refs.summary.scrollTo(0,0)
      }
    },
    doSubmit() {
      this.$store.setCurrentStep(Store.CONSENT_DONE)
      this.$router.push('/study/overview')
    },
    backToReview() {
      this.$router.push('/study/retake-quiz')
    },
    showMore() {
      let cv = this.$refs.consentViewer;
      cv.toggleMax()
      cv.highlightId = REFERENCE_IDS[this.step];
    }
  }
}
</script>

<style scoped>
.docked-layout > section {
  display: flex;
  box-sizing: border-box;
}
.docked-layout > section > section {
  margin: 2rem;
  background-color: white;
  flex: 1;
  overflow-y: auto;
  width: 40vw;
}
.top {
  border: solid 3px rgba(108, 122, 137, 0.3);
}
.summary {
  font-size: 1.1rem;
}
.summary img, .summary object {
  height: 3rem;
  width: 3rem;
  float: left;
  margin-right: 1rem;
}
.summary .header {
  display: flex;
  align-items: center;
}
.summary p, .summary li, .summary ul {
  clear: both;
  margin: .4rem 0;
  line-height: 1.2;
}
.more {
  display: none;
}
@media screen and (max-width: 50em) {
  .docked-layout > section {
    flex-direction: column;
    align-items: stretch;
  }
  .docked-layout > section > section {
    flex: 1;
    border: none;
    margin: 0;
    width: auto;
  }
  .top {
    display: none;
  }
  .bottom {
    padding: 1rem;
  }
  .more {
    display: block;
    margin-top: 1.5rem!important;
  }
}
</style>
