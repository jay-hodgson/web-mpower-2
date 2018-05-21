<template>
  <div class="docked-layout">
    <MainNav title="Sign"/>
    <section>
      <ConsentViewer/>
    </section>
    <footer>
      <div class="slider">
        <div class="slider-element animated" :class="{'slideOutLeft': showSharing}">
          <h1>Please review and sign the consent document</h1>
          <p>By signing your name, you have indicated that you have read and fully agree with the consent form given below. This is the document which you just went through in the consent and quiz process.</p>
          <input v-model="name" placeholder="Please type your full name here">
        </div>
        <div class="slider-element slider-offscreen animated" :class="{'slideInRight': showSharing}">
          <h1>How widely can we share your data with other researchers?</h1>
          <RadioButton @change="updateSharing"  name="sharing" value="sponsors_and_partners" color="white">
            Sponsors and Partners
          </RadioButton>
          <RadioButton @change="updateSharing"  name="sharing" value="all_qualified_researchers" color="white">
            All Qualified Researchers
          </RadioButton>
        </div>
      </div>
      <div class="buttons">
        <a href="#" @click="cancel">DISAGREE</a>
        <button :disabled="canSubmit" @click="advance">ACCEPT</button>
      </div>
    </footer>
  </div>
</template>

<script>
import ConsentViewer from './ConsentViewer.vue'
import MainNav from './MainNav.vue'
import Store from '../store'
import RadioButton from './RadioButton'

export default {
  name: 'StudySign',
  components: { ConsentViewer, MainNav, RadioButton },
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
    }
  }
}
</script>

<style scoped>
.docked-layout section {
  overflow-y: hidden;
}
  strong {
    font-weight: normal;
  }
  h2, h3 {
    text-align: left;
  }
section {
  padding: 0;
}
footer {
  background-image: linear-gradient(86deg, #473b7b, #3584a7 76%, hsl(173, 64%, 51%));
  padding: 1rem 0;

}
  footer h1 {
    color: white;
    text-align: center;
    font-size: .9rem;
    font-weight: normal;
    margin-bottom: .75rem;
    margin: 0 1rem .5rem 1rem;
  }
  footer p {
    color: white;
    text-align: center;
    font-size: .7rem;
    line-height: 1.1;
    margin: 0 1rem;
  }
  footer input {
    color: white;
    font-size: 1rem;
    padding: .2rem .4rem;
    margin: .5rem auto;
    display: block;
    width: 80vw;
    text-align: center;
    background-color: transparent;
    border: none;
  }
  footer input::placeholder {
    color: rgba(255,255,255,0.85);
  }
  footer .buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
  }
  footer a {
    color: rgba(255,255,255,0.85);
    text-decoration: underline;
    font-size: .9rem;
  }
  footer button {
    color: #3a539b;
    background-color: white;
    border-radius: 4px;
    border: none;
    padding: .7rem 2rem;
    text-decoration: none;
    font-weight: bold;
  }
  footer button:disabled {
    background-color: rgba(255,255,255,0.65);
  }
  .slider {
    height: 130px; 
    position: relative;
    overflow:hidden;
  }
  .slider-element {
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0;
  }
  .slider-offscreen {
    transform: translate(100vw,0); 
    text-align: center; 
    display:flex; 
    flex-direction: column; 
    align-items: center;
  }
</style>
