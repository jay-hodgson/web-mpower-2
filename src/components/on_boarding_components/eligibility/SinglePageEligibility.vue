<template>
  <v-app class="page-overview">

    <div class="row text-center anchorBottom customRowHeight">

        <div class="col-8 customCenterAlign col-md-10 mx-auto">
            <div clas="row text-center">
                <p class="col-11  mx-auto text-left tinyFontSize  mb-0 lightLead"> 
                   {{ getProgress()}}
                </p>
                <v-progress-linear class="col-11 text-center mx-auto pr-0  centerAlign" v-model="progress" height="16" color="success"> </v-progress-linear>
            </div>
        </div>
        
        <div class="col-4 p-0 customNavButton d-sm-none text-center">
            <v-btn v-bind:class="[hasFilledPartOneRequirements ? '': 'lowOpacity']"
             class="navyBlue white--text mediumFontSize" v-on:click="handleController()"> {{indexInVowSection === 3? 'Review': 'Next'}} </v-btn>
        </div>

        
        <div class="customNavButton  customCenterAlign col-2 d-none d-sm-inline-block">
            <v-btn v-bind:class="[hasFilledPartOneRequirements ? '': 'lowOpacity']"
             class="navyBlue largeButton small ml-0 mediumFontSize  white--text" v-on:click="handleController()"> {{indexInVowSection === 3? 'Review Responses': 'Next'}}
            </v-btn>
        </div>


    </div>

    <div class="row mt-3">
      <p id="greatFit" class="lead font-weight-bold  text-center col-md-10 col-lg-8 mx-auto lato "> Let's find out if you're eligible </p>
    </div>
    <div class="row mt-3">

    </div>
    <div class="row mt-sm-4">
      <div class=" col-md-10 col-lg-8 mx-auto text-center">
        <div class="row">
          <p class="lead col-auto mx-auto mediumFontSize customCenterAlign pb-0 lato mx-md-0"> I am </p>
          <v-flex class="col-md-3">
            <v-text-field suffix="years old" name="input-1" placeholder="45" id="testing"  pattern="\d*" auto-grow v-model.number="personInfo.age">
            </v-text-field>
          </v-flex>

          <p class="lead col-auto mx-auto mediumFontSize customCenterAlign lato mx-md-0" v-if="isUnderage !== null && personInfo.age !== ''" > I live in </p>
          <v-flex class="col-12 mb-3 col-md-4" v-if="isUnderage !== null && personInfo.age != ''">
            <v-select autocomplete class="d-none d-sm-inline-block eligibility" v-bind:items="states" hide-details auto single-line  name="input-1" placeholder="select where" id="placeField" v-model="personInfo.stateChosen"></v-select>
            <v-select class="eligibility d-sm-none" v-bind:items="states" hide-details auto single-line  name="input-1" placeholder="select where" id="placeField" v-model="personInfo.stateChosen"></v-select>
          </v-flex>
          
        </div>
      </div>
    </div>

    <div id="option" class="row mt-2" v-if="isResident !== null && personInfo.stateChosen !== '' ">
      <div class=" col-md-10 col-lg-8 mx-auto text-center text-md-left">
        <div class="row">
          <p class="lead col-12 mediumFontSize customCenterAlign col-md-auto lato text-center text-md-left">
            I feel </p>
          <v-select single-line id="comfortable" class="col-sm-4" placeholder="Select" v-bind:items="phoneChoices" v-model="personInfo.selectedOptionForPhone"></v-select>
          </v-select>
          <p class="lead mediumFontSize customCenterAlign col-md-auto lato text-center text-md-left">
            using my smart phone.</p>
        </div>
      </div>
    </div>

   <!-- extra-padding -->
    <div class="row" style="height: 400px;" > </div>
  </v-app>
</template>

<script>
  import {requirements} from '../../../state_objects/requirements'
  import {personInfo} from '../../../state_objects/personInfo'
  import _ from 'lodash'

  export default {
    data () {
      return {
        personInfo: personInfo,
        isUnderage: null,
        isResident: null,
        hasChosenOption: null,
        hasCompletedForm: false,
        phoneChoices: ['comfortable', 'uncomfortable'],
        states: [
          'I don\'t live in the US', 'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ],
        requirements: requirements,
        progress: (100.0 / 3),
        progressStep: (100.0 / 3),
        hasCompletedPartOne: false,
        progressIndex: 0,
        hasAnswered: [false, false, false],
        indexInVowSection: 1
      }
    },
    // syntax below allows for inner object property to be appropriately called
    watch: {
      'personInfo.age': function () {
        this.setIsUnderage()
      },
      'personInfo.stateChosen': function () {
        this.setIsPlaceAnswered()
      },
      'personInfo.selectedOptionForPhone': function () {
        this.setHasChosenOption()
      }
    },
    computed: {
      hasFilledPartOneRequirements: function () {
        return this.isUnderage !== null && this.isResident !== null && this.hasChosenOption !== null
      }
    },
    methods: {
      scrollPage: _.debounce(
        function (arg1) {
          this.$scrollTo(arg1, 750, {easing: 'linear', offset: -500}) // temporarily disable scrolling
        }
        , 200),
      handleController () {
        if (this.hasFilledPartOneRequirements && !this.hasCompletedPartOne) {
          this.hasCompletedPartOne = true
          this.handleEligibility()
        }
      },
      // TODO: below is a depreciated method of getting the results- should switch to using
      // the object personInfo.js, vue discourages coupling data to the $router.
      goDownSadPath () {
        this.$router.data = {
          isUnderage: this.personInfo.age < 18,
          isNotFromUS: !this.isResident,
          isNotComfortable: (this.personInfo.selectedOptionForPhone !== 'comfortable')
        }
        this.$router.push('Ineligible')
      },
      setSelection (index) {
        this.$set(this.selectedChoice, index, !this.selectedChoice[index])
      },
      handleEligibility () {
        this.isNotEligible = (this.personInfo.age < 18) || (!this.isResident) || (this.personInfo.selectedOptionForPhone !== 'comfortable')
        if (this.isNotEligible) {
          this.goDownSadPath()
        } else {
          this.requirements.isOnElgibility = false
          this.requirements.hasCompletedEligibility = true
          this.requirements.isOnConsent = true
          this.$router.push({name: 'OverviewEligibility'})
        }
      },
      addProgress (index) {
        if (!this.hasAnswered[index]) {
          this.hasAnswered[index] = true
          this.progressIndex += 1
          this.progress += this.progressStep
        }
      },
      getProgress () {
        if (this.progressIndex + 1 === 3 && this.hasCompletedPartOne) {
          return 'ELIGBILITY DONE'
        }
        if (this.progressIndex > 2) {
          this.progressIndex = 2
        }
        return 'STEP ' + (this.progressIndex + 1) + ' OF 3'
      },
      setIsUnderage: _.debounce(
        function () {
          if (this.personInfo.age === '') {
            this.isUnderage = null
          } else {
            this.isUnderage = this.personInfo.age < 18
            this.addProgress(0)
          }
          this.scrollPage('#placeField')
        }, 500
      ),
      setIsPlaceAnswered: _.debounce(
        function () {
          if (this.personInfo.stateChosen === '') {
            this.isResident = null
          } else {
            this.addProgress(1)
            this.scrollPage('#comfortable')
            this.isResident = this.personInfo.stateChosen !== 'I don\'t live in the US'
          }
        }, 500
      ),
      setHasChosenOption: _.debounce(
        function () {
          if (personInfo.selectedOptionForPhone === '') {
            this.hasChosenOption = null
          } else {
            this.hasChosenOption = this.personInfo.selectedOptionForPhone !== ''
            this.addProgress(2)
          }
        }, 500
      ),
      sethasCompletedForm: _.debounce(
        function () {
          this.hasCompletedForm = (!this.personInfo.isUnderage && this.personInfo.stateChosen !== '' && this.personInfo.hasChosenOption)
          if (this.hasCompletedForm) {
            this.scrollPage('#submit')
          }
        }, 500
      )
    },
    // If the user has already filled out the form then we load their values and show the form already completed
    mounted: function () {
      if (this.personInfo.age !== '' && this.personInfo.stateChosen !== '' && this.personInfo.selectedOptionForPhone) {
        this.isUnderage = false
        this.isResident = true
        this.hasChosenOption = true
        this.progress = 100
        this.progressIndex = 2
      }
    }
  }
</script>

<style lang="scss">

  div.menu__content {
    z-index: 1000 !important;
    min-width: 290px !important;
  }

  #placeField {
    color: #3a539b !important;
  }

  label {
    color: #3a539b !important;
   }

  
</style>
