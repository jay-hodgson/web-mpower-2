<template>
  <v-app>

    <div class="row">
      <div v-if="showConsentDoc" class='customHeightFrame mt-0 m-0 p-0 col-md-5 ml-md-2 mr-md-4 order-2'>
         <iframe id="iFrame" ref="frame" src="/#/ConsentDocText"
        class='fillParent  mask'>
        </iframe> 
      </div>

        <!-- modal to show up if user clicks the expand button -->
       <v-dialog v-if="showOverlay" max-width="90%" v-model="showOverlay" scrollable>
        <v-card height="400px ">
            <iframe id="overlayFrame" ref="frame" src="/#/ConsentDocText"
            class='fillParent'>
            </iframe>
        </v-card>
       </v-dialog>


      <div style="outline: 1px solid red" class="col-md-8 col-lg-6  mt-2 mx-auto" v-bind:class="{'order-1': showConsentDoc }" >
        <router-view class="whiteBackground fillParentRouter consentView router container-fluid"></router-view>
        <div class="row mt-md-5 m-md-3">
            <div class="ml-5 smallFontSize">  
              <a v-on:click="showConsentDoc = !showConsentDoc" class="defaultBlue font-weight-bold ">
                <u> See Consent Document with this section </u>
              </a>
            </div>
        </div>
      </div>
    </div>

    <div class="row anchorBottom customRowHeight">

      <template v-if="!isReviewingQuestion">
        <div class="col-3 p-0 customNavButton hideOnLarge text-center">
          <v-btn class="navyBlue white--text mediumFontSize" v-on:click="navigate(0)">
            Back </v-btn>
        </div>

        <div class="customNavButton pl-4 col-2 hideOnSmall ml-0 mr-0">
          <v-btn class="navyBlue largeButton mediumFontSize white--text" v-on:click="navigate(0)"> Back
          </v-btn>
        </div>

        <div class="customCenterAlign col-6 col-md-8">
          <div clas="row text-center">
            <p class="col-11  mx-auto text-center tinyFontSize  mb-0 lightLead"> Step {{' ' + indexInStack }} </p>
            <v-progress-linear class="col-11 text-center mx-auto pr-0  centerAlign" v-model="progress" height="16" color="success"> </v-progress-linear>
          </div>
        </div>

        <div class="col-3 p-0 customNavButton hideOnLarge text-center">
          <v-btn class="navyBlue white--text  mediumFontSize" v-on:click="navigate(1)"> Next </v-btn>
        </div>

        <div class="customNavButton  pr-4 col-2 hideOnSmall">
          <v-btn class="navyBlue largeButton mediumFontSize white--text" v-on:click="navigate(1)"> Next
          </v-btn>
        </div>
      </template>
      <template v-else>
        <!--for mobile-->
        <div class="col-12 mx-auto p-0 customNavButton hideOnLarge text-center">
          <v-btn class="navyBlue white--text mediumFontSize" v-on:click="$router.push({name: 'RetakeQuiz'})">
            Back To Overview 
          </v-btn>
        </div>

        <!--for desktop-->
        <div class="customNavButton col-6 text-center mx-auto hideOnSmall ml-0 mr-0">
          <v-btn class="navyBlue largeButton mediumFontSize white--text" v-on:click="$router.push({name: 'RetakeQuiz'})"> 
            Back To Overview
          </v-btn>
        </div>

      </template>

    </div>

  </v-app>
</template>


<script>
import {requirements} from '../../../state_objects/requirements'
// question results imported because if person needs to review section
import {questionResults} from '../../../state_objects/questionResults'

export default {
  data () {
    return {
      questionResults: questionResults,
      callStack: [
        'OverviewEligibility',
        'ConsentOne',
        'ConsentTwo',
        'ConsentThree',
        'ConsentFour',
        'ConsentFive',
        'ConsentSix',
        'ConsentSeven',
        'ConsentEight',
        'ConsentNine',
        'ConsentTen',
        'ConsentEleven',
        'ConsentTwelve',
        'ConsentThirteen',
        'OverviewEligibility'
      ],
      indexInStack: 1,
      requirements: requirements,
      multiple13: 100.0 / 13,
      progress: 100.0 / 13,
      iframe: '',
      showOverlay: false,
      showConsentDoc: false,
      isReviewingQuestion: undefined
    }
  },
  mounted: function () {
    // if they have wrong questions we don't show nav and let user pop out of screen
    this.isReviewingQuestion = Object.values(this.questionResults).includes('false')
  },
  methods: {
    navigate (index) {
      var frame = ''
      // if 0 then we go backwards otherwise it means we clicked next
      if (index === 0) {
        this.indexInStack = this.indexInStack - 1
        this.progress = this.progress - this.multiple13
      } else {
        this.progress = this.progress + this.multiple13
        this.indexInStack = this.indexInStack + 1
      }
      // if they're going through consent for the first time and are on the last page then
      // transition them over and set properties of requirements object.
      if (this.indexInStack === 14 && !this.requirements.hasCompletedConsent) {
        this.requirements.isOnConsent = false
        this.requirements.hasCompletedConsent = true
        this.requirements.isOnQuiz = true
      }
      frame = this.callStack[this.indexInStack]
      var message = {indexInStack: this.indexInStack}
      if (index === 0) {
        message['forward'] = false
      } else {
        message['forward'] = true
      }
      this.callFrame(message)
      this.$router.push({name: frame})
    },
    callFrame (message) {
      // this statement checks whether or not the iframe modal is popped out or not
      if (!this.iframe && document.getElementById('iFrame')) {
        this.iframe = document.getElementById('iFrame').contentWindow
        this.iframe.postMessage(message, window.origin + '/#/ConsentDocText')
      } else if (this.iframe) {
        this.iframe.postMessage(message, window.origin + '/#/ConsentDocText')
      }
    },
    recieveMessage: function (event) {
      // if (event.origin !== 'http://web-mpower-2-michael.lee.s3-website-us-east-1.amazonaws.com') {
      if (event.origin !== 'http://localhost:8080' || event.data !== 'switch overlay') {
        return ''
      } else {
        this.showOverlay = !this.showOverlay
        /* eslint-enable */
      }
    }
  },
  // event listener to respond to ConsentDocText-- this tells ConsentDoc whether to show the modal
  // or not.
  created: function () {
    window.addEventListener('message', this.recieveMessage, false)
  }
}
</script>


<style>

  .fillParent > *.application {
    display: -webkit-box !important;
  }

  .midOpacity {
    opacity: 0.5;
  }
  .show {
    opacity: 1;
  }

  .hide {
    opacity: 0;
    z-index: 0 !important;
  }

  .fixPosition {
    position: fixed;
  }
  .topLevel {
    z-index: 1000;
  }


  .shadowBackground {
    background-color: rgba(74, 74, 74, 0.9) !important;
  }

  .inheritBackground {
    background-color: inherit !important;
  }
</style>
