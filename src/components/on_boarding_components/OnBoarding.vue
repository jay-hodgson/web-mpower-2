<template>
  <v-app>
  
    <nav class="onboarding navbar navbar-fixed-top navbar-light pt-0 pb-0">
      <div class="container-fluid" style="display: block;">
        <div class="row">
  
          <div v-if="$router.currentRoute.fullPath.indexOf('OverviewEligibility') === -1" class="col-1 p-0 customCenterAlign handCursor" v-on:click="$router.push({name: 'OverviewEligibility'})"> 
            <img src="../../images/back-to-home-arrow.png" class="img-fluid backToHome pl-1 pr-1" alt="arrow leading back to home page"></img>
          </div>

        
          <div class="col-6 pl-1 mx-auto  text-center text-md-auto customCenterAlign text-sm-left col-sm-1">
              <h2 class="font-weight-normal" v-if="getHeader() !== 'Test your knowledge'"> {{getHeader()}}  </h2>
              <h4 v-else> {{getHeader()}} </h4>
          </div>

          <div class="text-center d-sm-none col-3">
            <span id="help" class="d-sm-none white--text  lead headerText light tinyFontSize"> Need Help? </span>
          </div>

          <div class="col-sm-10 text-center text-sm-right">
            <img src="../../images/check.png" class="img-fluid  d-none d-sm-inline-block check" alt="image of a check marked circle"></img>

            <img class="extraSpacing d-none d-sm-inline-block" v-bind:class="{'midOpacity':!requirements.hasCompletedEligibility}" src="../../images/step-7-consent-icon.png" ></img>

            <img  class="extraSpacing d-none d-sm-inline-block" v-bind:class="{'midOpacity':!requirements.hasCompletedConsent}" src="../../images/quiz-onboarding-icon.png" ></img>

            <img  class="extraSpacing d-none d-sm-inline-block" v-bind:class="{'midOpacity':!requirements.hasCompletedQuiz}" src="../../images/sign-header-icon.png" ></img>

            <img  class="extraSpacing d-none d-sm-inline-block" v-bind:class="{'midOpacity':!requirements.hasCompletedSign}" src="../../images/number-icon.png" ></img>

          
              <!--<svg  width="3" height="51">
                <rect width="2" height="50" style="fill:white" />
              </svg>-->

            <span class="d-none d-lg-inline-block hideOnSmall" style="font-size: 40px;"> | </span>

            <img class="d-none d-md-inline-block helpOval" src="../../images/need-help-button.png" ></img>
            <img class="d-none d-sm-inline-block d-md-none helpOval" src="../../images/need-help-button.png" ></img>


          </div>
  
        </div>
      </div>
    </nav>
    <router-view class="whiteBackground mediumFontSize mt-custom router container-fluid" v-bind:class="{fadeBackground: getHeader() === 'Sign' || getHeader() === 'Welcome' || isOnRetake(), 'mt-consent': getHeader() === 'Consent'}"></router-view>
    
  </v-app>
</template>

<style lang="scss">
@import '../../css/bootstrap/bootstrap';
@import '../../css/bootstrap/custom';

.midOpacity {
  opacity: 0.5 !important;
}

.mt-custom {
  padding-top: 120px;
}

.helpOval {
  height: 56px;
  border-radius: 28px !important;
  width: 120px !important;  
  margin-left: 15px !important;
}

.extraSpacing {
  margin-left: 25px !important;
}

  @media(max-width: 766px) { 
    .mt-consent {
      padding-top: 90px;
    }

    .extraSpacing {
      margin-left: 6% !important;
    }
  }



</style>

<script>
  import {requirements} from '../../state_objects/requirements'

  export default {
    // Here we get the correct placement text when switching between pages
    data () {
      return {
        requirements: requirements
      }
    },
    methods: {
      getHeader () {
        var route = this.$router.currentRoute.fullPath
        if (route.indexOf('OverviewEligibility') !== -1) {
          return 'Overview'
        } else if (route.indexOf('Eligibility') !== -1 || route.indexOf('SubjectInterest') !== -1 || route.indexOf('WhyInterested') !== -1) {
          return 'Eligibility'
        } else if (route.indexOf('Question') !== -1 || route.indexOf('RetakeQuiz') !== -1) {
          return 'Test your knowledge'
        } else if (route.indexOf('Consent') !== -1) {
          return 'Consent'
        } else if (route.indexOf('Sign') !== -1) {
          return 'Sign'
        } else if (route.indexOf('RegistrationLinkSent') !== -1) {
          return 'Welcome'
        }
      },
      isOnRetake () {
        var route = this.$router.currentRoute.fullPath
        if (route.indexOf('RetakeQuiz') !== -1) {
          return true
        }
      }
    }
  }
</script>
