<template>
  <div class="docked-layout">
    <MainNav title="Sign" :back-to-overview="true" :show-help="true" :show-steps="true"/>
    <section>
      <div ref="consentDoc" class="consent-doc">
        <section class="preamble-section">
          <div class="preamble container">
            <div>
              <h2>mPower 2.0</h2>
              <h3>Consent Signature</h3>
            </div>
          </div>
        </section>
        <section></section> <!-- flip zebra striping -->
        <section>
          <div class="assertion container">
            <div>I know and agree that:</div>
          </div>
        </section>
        <section>
          <div class="will-use container">
            <object data="/static/images/Step1.svg" type="image/svg+xml"></object>
            <div>I will use the Mpower app to answer questions and do short physical and cognitive activities. The app will help me track my symptoms, triggers and medications.</div>
          </div>
        </section>
        <section>
          <div class="privacy container">
            <object data="/static/images/Step2.svg" type="image/svg+xml"></object>
            <div>My study data and personal information (Data) will be encrypted and transferred from my phone. It will be stored in Sage Bionetworks’ secure cloud-based database.</div>
          </div>
        </section>
        <section>
          <div class="research container">
            <object data="/static/images/Step3.svg" type="image/svg+xml"></object>
            <div>My Data will be used for research as described in the study information.</div>
          </div>
        </section>
        <section>
          <div class="sharing-scope container">
            <object data="/static/images/Step4.svg" type="image/svg+xml"></object>
            <div>I have the option to share my coded study data for future research. It is up to me. I can say yes or no.</div>
          </div>
        </section>
        <section>
          <div class="risks-benefits container">
            <object data="/static/images/Step5.svg" type="image/svg+xml"></object>
            <div>The main risk of participating in mPower study is to my privacy. This is risk is low but not zero. The main benefit is seeing my trends over time.</div>
          </div>
        </section>
        <section>
          <div class="not-medical container">
            <object data="/static/images/Step6.svg" type="image/svg+xml"></object>
            <div>mPower is a research study. The mPower app shouldn’t be used for diagnosis or treatment decisions.</div>
          </div>
        </section>
        <section>
          <div class="unpaid container">
            <object data="/static/images/Step7.svg" type="image/svg+xml"></object>
            <div>I will not get paid for participating in this study. I will not receive any profit from use of my Data in this or future research study.</div>
          </div>
        </section>
        <section>
          <div class="voluntary container">
            <object data="/static/images/Step8.svg" type="image/svg+xml"></object>
            <div>I can withdraw (quit) at any time for any reason. There is no penalty if I withdraw.</div>
          </div>
        </section>
      </div>
      <footer>
        <div class="slider">
          <div class="slider-element animated" :class="{'slideOutLeft': showSharing}">
            <div class="inner">
              <h1>Sharing your coded study data more broadly (without information such as your name) may benefit this and future research.</h1>
              <RadioButton @change="updateSharing"  name="sharing" value="sponsors_and_partners">
                Yes, share my data with Sage Bionetworks and qualified researchers worldwide for future research
              </RadioButton>
              <RadioButton @change="updateSharing"  name="sharing" value="all_qualified_researchers">
                No, only share my data with Sage Bionetworks and its partners
              </RadioButton>
            </div>
          </div>
          <div class="slider-element slider-offscreen animated" :class="{'slideInRight': showSharing}">
            <div class="inner">
              <h1>Please review and sign the consent document</h1>
              <p>By signing your name, you have indicated that you have read and fully agree with the consent form given below. This is the document which you just went through in the consent and quiz process.</p>
              <input v-model="name" placeholder="Please type your full name here">
              <div class="buttons">
                <router-link to="/">Disagree</router-link>
                <button class="join-button" :disabled="canSubmit" @click="advance">ACCEPT</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
import ConsentSummaryViewer from './ConsentSummaryViewer.vue'
import MainNav from './MainNav.vue'
import Store from '../store'
import RadioButton from './RadioButton'

export default {
  name: 'StudySign',
  components: { ConsentSummaryViewer, MainNav, RadioButton },
  data() {
    return {
      name: '',
      showSharing: false,
      scope: ''
    }
  },
  computed: {
    canSubmit: function() {
      if (!this.showSharing) {
        return this.name.length === 0;
      } else {
        return this.scope === '';
      }
    },
    isEmbedded: function() {
      return !!(window.consentsToResearch || window.document.consentsToResearch);
    }
  },
  methods: {
    cancel: function() {
      this.$store.setCurrentStep(Store.UNSTARTED)
      this.$router.push('/study/overview')
    },
    advance: function() {
      if (!this.showSharing) {
        this.showSharing = true;
        return;
      }
      this.accept();
    },
    accept: function() {
      if (this.isEmbedded) {
        var obj = {'name': this.name, 'scope': this.scope};
        if (window.consentsToResearch) {
          window.consentsToResearch(obj)
        } else if (window.document.consentsToResearch) {
          window.document.consentsToResearch(obj)
        }
      } else {
        this.$store.setName(this.name)
        this.$store.setSharingScope(this.scope)
        this.$store.setCurrentStep(Store.SIGN_DONE)
        this.$router.push('/study/overview')
      }
    },
    updateSharing: function(name, value) {
      this.scope = value;
      this.advance();
    }
  }
}
</script>

<style>
  label {
    line-height: 1;
  }
</style>
<style scoped>
.consent-doc {
  padding: 0;
  font-size: 1rem;
  /*
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  */
}
.container {
  padding: .75rem;
}
.consent-doc h2, .consent-doc h3 {
  text-align: left;
}
.container {
  box-sizing: border-box;
}
.preamble-section {
  background-color: #51417b;
}
.preamble h2, .preamble h3 {
  color: white;
  margin: 0;
}
.preamble.container object {
  width: 7rem;
  height: 7rem;
  margin-bottom: -1rem;
  margin-top: -1rem;
  margin-left: 0rem;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container object {
  width: 4rem;
  height: 4rem;
  margin-left: .75rem;
}
.container div {
  flex: 1;
  padding-left: .75rem;
  padding-right: .5rem;
}
.assertion {
  color: #51417B;
  padding-left: 0;
}

footer {
  box-shadow: 0px 2px 7px black;
  z-index: 1;
}
    .slider {
      position: relative;
      overflow: hidden;
      height: 12rem;
    }
    .slider-element {
      position: absolute; 
      top: 0; 
      left: 0; 
      right: 0; 
      bottom: 0;
    }
      .inner {
        padding: 1rem; 
        max-width: 30rem; 
        margin: 0 auto;
      }
    .slider-offscreen {
      transform: translate(100%,0);
      -webkit-transform: translate(100%,0);

      display:flex; 
      flex-direction: column; 
      align-items: center;
    }
    .slider-element .radio-holder {
      margin-left:0!important;
    }
  .slider-element h1 {
    font-size: .9rem;
    margin-bottom: .5rem;
    line-height: 1;
  }
  .slider-element p {
    font-size: .7rem;
    line-height: 1;
  }
  .slider-element input {
    font-size: 1rem;
    padding: .2rem .4rem;
    margin: .5rem auto 0;
    display: block;
    width: 95%;
    text-align: center;
    border: none;
  }
  .slider-element input::placeholder {
    text-decoration: underline;
  }
  .slider-element .buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
  }
  .slider-element button {
    color: #332069;
    padding: .7rem 2rem;
    font-size: .7rem;
    cursor: pointer;
    font-weight: bold;
  }
  .slider-element .buttons a {
    margin-right: 6rem;
  }
  .slider-element button:disabled {
    opacity: .8;
  }
  .slider-element a {
    text-decoration: underline;
    font-size: .9rem;
  }
  .slider-element .radio-holder {
    margin-left: .5rem;
  }
</style>
