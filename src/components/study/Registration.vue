<template>
  <div>
    <MainNav title="Install The App"/>
    <div class="container">
      <p>Enter your mobile phone number and select your phone type to receive your download link for the app:</p>

      <p style="text-align: center">
        <mdc-textfield ref="phoneField" v-model="phone" label="(###) ###-####"/>
      </p>
      <div class="buttons">
        <a @click="apple">
          <img src="/static/images/AppStoreButton.gif" :style="{opacity: hasNumber}">
        </a>
        <a @click="google">
          <img src="/static/images/PlayStoreButton.gif" :style="{opacity: hasNumber}">
        </a>
      </div>
    </div>
    <mdc-snackbar ref="snackbar"/>
  </div>
</template>

<script>
import MainNav from './MainNav.vue'
import store from '../store'
import axios from 'axios';

export default {
  name: 'StudyRegistration',
  components: { MainNav },
  data() {
    return {
      phone: ''
    }
  }/*,
  beforeMount() {
    this.$store.setCurrentStep(Store.SIGN_DONE)
  }*/,
  mounted() {
    var input = this.$refs.phoneField.$refs.input
    input.type = "tel"
    input.pattern = "[0-9]*"
  },
  computed: {
    hasNumber: function() {
      return this.phone.replace(/\D/g,'').length >= 10 ? 1 : .5
    }
  },
  methods: {
    apple: function() {
      console.log(this);
      if (this.hasNumber === 1) {
        this.post('iPhone OS')
      }
    },
    google: function() {
      if (this.hasNumber === 1) {
        this.post('Android')
      }
    },
    post: function(osName) {
      var snackbar = this.$refs.snackbar
      
      this.$store.setPhone(this.phone)
      axios.post('https://webservices.sagebridge.org/v3/itp', {
        studyId: 'sage-mpower-2',
        phone: {number: this.phone, regionCode: 'US'},
        subpopGuid: 'sage-mpower-2',
        osNName: osName,
        consentSignature: {
          name: this.$store.getName(),
          birthdate: this.$store.getBirthdate(),
          scope: 'sponsors_and_partners'
        }
      }).then(() => {
        this.$router.push("/study/done")
      }).catch(function(error) {
        if (error.response && error.response.data && error.response.data.message) {
          snackbar.show(error.response.data)
        } else {
          snackbar.show(error)
        }
      })
    }
  }
}
</script>

<style scoped>
.container {
  padding-top: 5rem;
}
.buttons {
  width: 15em;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.buttons a {
  cursor: pointer;
}
.buttons img {
  width: 8rem;
}
</style>
