<template>
  <div class="docked-layout">
    <MainNav title="Sign" :back-to-overview="true" :show-help="true" :show-steps="true"/>
    <section>
      <ConsentSummaryViewer/>
    </section>
    <footer>
      <div class="slider">
        <div class="slider-element animated" :class="{'slideOutLeft': showSharing}">
          <div class="inner">
            <h1>Sharing your coded study data more broadly (without information such as your name) may benefit this and future research.</h1>
            <RadioButton @change="updateSharing"  name="sharing" value="sponsors_and_partners" color="white">
              Yes, share my data with Sage Bionetworks and qualified researchers worldwide for future research
            </RadioButton>
            <RadioButton @change="updateSharing"  name="sharing" value="all_qualified_researchers" color="white">
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

<style scoped>
footer {
  background-image: linear-gradient(90deg, #332069, #907FBA);
  background-attachment: fixed;
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
    color: white;
    font-size: .9rem;
    font-weight: normal;
    margin-bottom: .5rem;
    line-height: 1.2;
  }
  .slider-element p {
    color: white;
    font-size: .7rem;
    line-height: 1.1;
  }
  .slider-element input {
    color: white;
    font-size: 1rem;
    padding: .2rem .4rem;
    margin: .5rem auto 0;
    display: block;
    width: 95%;
    text-align: center;
    background-color: transparent;
    border: none;
  }
  .slider-element input::placeholder {
    color: rgba(255,255,255,0.65);
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
    color: rgba(255,255,255,0.85);
    text-decoration: underline;
    font-size: .9rem;
  }
  .slider-element .radio-holder {
    margin-left: .5rem;
  }
</style>
