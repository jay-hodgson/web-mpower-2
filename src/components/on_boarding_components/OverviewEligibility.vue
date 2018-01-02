<template>
    <v-app class="fadeBackground ">

        <template v-if="requirements.isOnEligibility && !requirements.hasCompletedEligibility">
            <div class="row">
                <p class="mx-auto font-weight-bold white--text"> Welcome to mPower! </p>
            </div>
            <div class="row text-center mb-2">
                <p class="col-md-8 mx-auto  mediumFontSize white--text">                  
                        mPower is a study to track the symptoms of Parkinson’s Disease over time. 
                        Here you can learn about the study and decide if you want to join! Let’s get started.
                </p>
            </div>
        </template>
        <template v-else-if="requirements.isOnConsent && !requirements.hasCompletedConsent">
            <div class="row">
                <p class="mx-auto white--text"> Congratulations, you’re eligible! </p>
            </div>
            <div class="row text-center mb-2">
                <p class="col-md-8 mx-auto  mediumFontSize white--text">
                    Now that we have found out that you are eligible, let’s move on to the next step. Your next step will be Consent where you’ll learn some more about the study.
                </p>
            </div>
        </template>
        <template v-else-if="requirements.isOnQuiz && !requirements.hasCompletedQuiz">
            <div class="row text-center mb-2">
                <p class="mx-auto white--text"> Thanks for walking through Consent! </p>
            </div>
            <div class="row text-center mb-2">
                <p class="col-md-8 mx-auto  mediumFontSize white--text">
                    Next we will ask you 5 questions. They will tell you if we did a good job explaining the study. </p>
            </div>
        </template>
        <template v-else-if="requirements.isOnSign && !requirements.hasCompletedSign && hasPassed">
            <div class="row text-center">
                <p class="mx-auto white--text"> Great Job! </p>
            </div>
            <div class="row text-center mb-2">
                <p class="col-md-8 mx-auto  mediumFontSize white--text">
                    You’ve passed the quiz, now let’s review the consent document that you looked at one more time before we can register you for the study.                </p>
            </div>
        </template>
       

        <div class="row customRow mb-4 ml-1 mr-1 ml-1 mr-1">
            <div v-on:click="$router.push({name: 'SinglePageEligibility'})" class="mx-auto rect smooth col-md-8" v-bind:class="{current_Requirements: requirements.isOnEligibility && !requirements.hasCompletedEligibility,
            completedrequirements: requirements.hasCompletedEligibility }">
                <div class="row">
                    <div class="col-1 verticalCenter ml-md-3 mr-5 pl-0 ">
                        <img  src="../../images/eligibility-icon.png" class="checkOnOverview"> </img>
                    </div>
                    <div class="col-md-8 col-7 mb-0 pr-0 ml-2 mt-3">
                        <p class="mediumFontSize default mb-0" v-bind:class="{whiteText: requirements.hasCompletedEligibility }"><strong>  Eligibility </strong>
                            <p class="pb-0 mb-0 smallFontSize lightGrayText" v-bind:class="{whiteText: requirements.hasCompletedEligibility }"> Let’s see if you are eligible for the Parkinsons Disease study. </p>
                            <p class="tinyFontSize default" v-bind:class="{whiteText: requirements.hasCompletedEligibility }"> 2 minutes </p>
                        </p>
                    </div>
                    <div class="col-1 col-xl-2 pl-0 pl-1 verticalCenter">
                        <p v-if="!requirements .hasCompletedEligibility" class="font-weight-bold m-0 lead tinyFontSize mx-auto"> Start </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1">
            <div v-on:click="requirements.hasCompletedEligibility ? $router.push({name: 'ConsentOne'}) : null" class="mx-auto rect smooth col-md-8" v-bind:class="{current_Requirements: requirements.isOnConsent, completedrequirements: requirements.hasCompletedConsent}">
                <div class="row">
                    <div class="col-1 verticalCenter  ml-md-3 pl-0 pl-sm-auto mr-5">
                        <img  src="../../images/consent-icon.png"> </img>
                    </div>
                    <div class="col-7 col-md-8 mb-0 mt-3">
                        <p class="mediumFontSize default mb-0" v-bind:class="{whiteText: requirements.hasCompletedConsent }"><strong>  Consent </strong>
                            <p class="pb-0 mb-0 smallFontSize lightGrayText" v-bind:class="{whiteText: requirements.hasCompletedConsent }"> Learn about the study and the risks and benefits of joining. </p>
                            <p class="tinyFontSize default" v-bind:class="{whiteText: requirements.hasCompletedConsent }"> 5 minutes </p> 
                        </p>
                    </div>
                    <div v-if="!requirements.isOnConsent" class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-icon large v-bind:class="{greenText: requirements.hasCompletedConsent}" class="lock">{{requirements.hasCompletedEligibility ? '': 'fa-lock'  }}</v-icon>
                    </div>                          
                    <div v-if="requirements.isOnConsent" class="col-1 col-xl-2 pl-0 verticalCenter">
                        <p  class="font-weight-bold m-0 lead tinyFontSize mx-auto"> Start </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1">
            <div v-on:click="requirements.hasCompletedConsent ? $router.push({name: 'QuestionOne'}) : null" class="mx-auto rect smooth col-md-8" v-bind:class="{current_Requirements: requirements.isOnQuiz, completedrequirements: requirements.hasCompletedQuiz}">
                <div class="row">
                    <div class="col-1 verticalCenter ml-md-3 mr-5 pl-0 pl-sm-auto">
                        <img  src="../../images/quiz-onboarding-icon.png" class="checkOnOverview"> </img>
                    </div>
                    <div class="col-7 col-md-8 mb-0 mt-3">
                        <p class="mediumFontSize default mb-0" v-bind:class="{whiteText: requirements.hasCompletedQuiz }"><strong>  Quiz </strong>
                            <p class="pb-0 mb-0 smallFontSize lightGrayText" v-bind:class="{whiteText: requirements.hasCompletedQuiz }"> Let’s see what you have learned from the consent document. </p>
                            <p class="tinyFontSize default" v-bind:class="{whiteText: requirements.hasCompletedQuiz }"> 5 minutes </p>
                        </p>
                    </div>
                    <div v-if="!requirements.isOnQuiz" class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-icon large v-bind:class="{greenText: requirements.hasCompletedQuiz}" class="lock">{{requirements.hasCompletedConsent ? '': 'fa-lock'  }}</v-icon>
                    </div>
                    <div v-if="requirements.isOnQuiz" class="col-1 col-xl-2 pl-0  verticalCenter">
                        <p  class="font-weight-bold m-0 lead tinyFontSize mx-auto">  Start </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1">
            <div v-on:click="requirements.hasCompletedQuiz ? $router.push({name: 'Sign'}) : null" class="mx-auto rect smooth col-md-8" v-bind:class="{current_Requirements: requirements.isOnSign, completedrequirements: requirements.hasCompletedSign}">
                <div class="row">
                    <div class="col-1 verticalCenter ml-md-3 mr-5 pl-0 pl-sm-auto">
                        <img  src="../../images/sign-consent-icon.png" class="checkOnOverview"> </img>
                    </div>
                    <div class="col-7 col-md-8  mb-0 mt-3">
                        <p class="mediumFontSize default mb-0" v-bind:class="{whiteText: requirements.hasCompletedSign }"><strong>  Sign </strong>
                            <p class="pb-0 mb-0 smallFontSize lightGrayText" v-bind:class="{whiteText: requirements.hasCompletedSign }" > Sign the consent document. </p>
                            <p class="tinyFontSize default" v-bind:class="{whiteText: requirements.hasCompletedSign }"> 2 minutes </p>
                        </p>
                    </div>
                    <div v-if="!requirements.isOnSign" class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-icon large v-bind:class="{greenText: requirements.hasCompletedSign}" class="lock">{{requirements.hasCompletedQuiz ? '': 'fa-lock'  }}</v-icon>
                    </div>
                    <div v-if="requirements.isOnSign" class="col-1 col-xl-2 pl-0  verticalCenter">
                        <p  class="font-weight-bold m-0 lead tinyFontSize mx-auto">  Start </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1">
            <div  v-on:click="requirements.hasCompletedSign ? $router.push({name: 'RegistrationMobile'}) : null" class="mx-auto rect smooth col-md-8" v-bind:class="{current_Requirements: requirements.isOnRegistration, completedrequirements: requirements.hasCompletedRegistration}">
                <div class="row">
                    <div class="col-1 verticalCenter ml-md-3 mr-5 pl-0 pl-sm-auto">
                        <img  src="../../images/number-icon.png" class="checkOnOverview"> </img>
                    </div>
                    <div class="col-7 col-md-8 mb-0 mt-3">
                        <p class="mediumFontSize default mb-0" v-bind:class="{whiteText: requirements.hasCompletedRegistration }"><strong>  Registration </strong>
                            <p class="pb-0 mb-0 smallFontSize lightGrayText" v-bind:class="{whiteText: requirements.hasCompletedRegistration }"> Add your phone number so you can join the study! </p>
                            <p class="tinyFontSize default" v-bind:class="{whiteText: requirements.hasCompletedRegistration }"> 2 minutes </p>
                        </p>
                    </div>
                    <div v-if="!requirements.isOnRegistration" class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-icon large v-bind:class="{greenText: requirements.hasCompletedRegistration}" class="lock">{{requirements.hasCompletedSign ? '': 'fa-lock'  }}</v-icon>
                    </div>
                     <div v-if="requirements.isOnRegistration" class="col-1 col-xl-2 pl-0  verticalCenter">
                        <p  class="font-weight-bold m-0 lead tinyFontSize mx-auto"> Start </p>
                    </div>
                </div>
            </div>
        </div>

        <br>
        <br>
        <br>

    </v-app>
</template>

<script>
import {requirements} from '../../state_objects/requirements'
import {questionResults} from '../../state_objects/questionResults'

export default {
  data () {
    return {
      requirements: requirements,
      questionResults: questionResults
    }
  },
  computed: {
    hasPassed: function () {
      return this.reduce(this.questionResults) === 5
    }
  },
  methods: {
    reduce: function () {
      var count = 0
      for (var key in this.questionResults) {
        if (this.questionResults.hasOwnProperty(key)) {
          count = count + JSON.parse(this.questionResults[key])
        }
      }
      return count
    }
  }
}
</script>

<style lang="scss">

    .whiteText {
       color: white !important;
     }

    .checkOnOverview {
        height: 80px;
    }

    .smooth {
        border-radius: 12px !important;
    }

    .rect {
        background-color: rgba(255,255,255,0.7)
    }

    .rect:hover {
        cursor: pointer !important; 
    }

    .lock {
        width: 23px;
        height: 35px;
        color: #bbbbbc;
    }

    .current_Requirements {
        background-color: rgba(255,255,255,1)
    }

    .verticalCenter {
        align-items: center;
        display:flex;
    }

    .greenText {
        color: green !important;
        font-weight: bold;
    }

    .completedrequirements {
        background-color: #049372;
    }

    p.default.completedrequirements {
        color: white !important;
    }


</style>
