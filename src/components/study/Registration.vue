<template>
  <div>
    <MainNav title="Install The App" :back-to-overview="true" :show-help="true" :show-steps="true"/>
    <div class="container">
      <p>Enter your mobile phone number and select your phone type to receive your download link for the app:</p>

      <p style="text-align: center">
        <mdc-textfield ref="phoneField" v-model="phone" label="(###) ###-####" type="tel" pattern="[0-9]*"/>
      </p>
      <div class="buttons">
        <a @click="apple">
          <BridgeImage src="/static/images/AppStoreButton.gif" :style="{opacity: hasNumber}"/>
        </a>
        <a @click="google">
          <BridgeImage src="/static/images/PlayStoreButton.gif" :style="{opacity: hasNumber}"/>
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
  },
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
      var phoneFormatted = this.phone.replace(/[^\d]/g,'')

      this.$store.setPhone(this.phone)
      axios.post('https://webservices.sagebridge.org/v3/itp', {
        studyId: 'sage-mpower-2',
        phone: {number: phoneFormatted, regionCode: 'US'},
        subpopGuid: 'sage-mpower-2',
        osName: osName,
        consentSignature: {
          name: this.$store.getName(),
          scope: this.$store.getSharingScope()
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
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
}
.buttons img {
  width: 38vw;
  max-width: 10rem;
}
</style>
