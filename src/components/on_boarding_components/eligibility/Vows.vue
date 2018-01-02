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
        
        <div class="col-4 p-0 customNavButton hideOnLarge text-center">
            <v-btn v-bind:class="[currentVowSectionHasValues() ? '': 'lowOpacity', indexInVowSection === 5 ? ['smallFontSize',''] : 'mediumFontSize' ]"
             class="navyBlue white--text" v-on:click="handleVows()"> {{indexInVowSection === 5? 'Review': 'Next'}} </v-btn>
        </div>

        
        <div class="customNavButton col-2 hideOnSmall">
            <v-btn v-bind:class="[currentVowSectionHasValues() ? '': 'lowOpacity', indexInVowSection === 5 ? ['smallFontSize','font-weight-bold'] : 'mediumFontSize' ]"
             class="navyBlue largeButton small ml-0  white--text" v-on:click="handleVows()"> {{indexInVowSection === 5? 'Review Responses': 'Next'}}
            </v-btn>
        </div>


    </div>

    <!--For extra padding-->
    <template>
    
        <!-- Section 1.
          I'm interest in joining because  
        -->
      
      <div class="row mt-5">
        <p class="lead font-weight-bold col-sm-6 col-lg-8 baseFontSize mx-auto text-center pt-0 pt-md-0"> Why are you interested in joining mPower?
        </p>
      </div>

      <div class="row">
        <p id="understandInterest" class="lead col-md-8 col-lg-8 mediumFontSize mx-auto text-left pt-0 pt-md-0"> 
          Understanding what interests you and what you are willing to do helps us shape an experience that aligns with your expectations.
        </p>
      </div>

      <div class="row mt-3">
        <span id="interest" class="francisco lato smallFontSize default pt-sm-0 col-md-6 col-sm-7 col-lg-8 text-left mx-auto mb-4"> I'm interested in joining mPower because I 
    
          <span v-if="controller[0].edit" class="ml-0 p-0">
            <v-btn flat :ripple="false" v-if="checkboxChoices[0]" @click.native="handleEdit(0)" class=" text-capitalize clickableLink pl-0 middle francisco"> Want to help myself         
            </v-btn>
              {{getPlacementText(0,6)}}
            <v-btn flat :ripple="false" v-if="checkboxChoices[1]" @click.native="handleEdit(0)" class=" pb-3 francisco text-capitalize clickableLink pl-0"> Want to help a loved one 
                {{getPlacementText(1,6)}}
            </v-btn>
            <v-btn flat :ripple="false" v-if="checkboxChoices[2]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink pl-0"> help others
            </v-btn>
            {{getPlacementText(2,6)}}
            <v-btn flat :ripple="false" v-if="checkboxChoices[3]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink pl-0"> Am curious
            </v-btn>
            {{getPlacementText(3,6)}}
            <v-btn flat :ripple="false" v-if="checkboxChoices[4]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink pl-0"> another reason
            </v-btn>
            {{ getPlacementText(4,6)}}
            <v-btn flat :ripple="false" v-if="checkboxChoices[5]" @click.native="handleEdit(0)" class="francisco  text-capitalize clickableLink pl-0"> not interested
            </v-btn>
          </span>
          <v-btn v-if="!controller[0].edit && controller[0].submit" flat class="francisco clickableLink white--text text-capitalize pl-0" @click.native="handleEdit(0)"> {{controller[0].edit ? "(Add More)": "Resubmit"}} </v-btn>
        </span>
      </div>
    
      <template v-if="!controller[0].edit">
         <div class="row">
              <checkbox-smooth label="want to help myself" class=" col-sm-7 col-md-6 col-lg-8 mx-auto text-left pt-2 pb-2 stencilBorderTop stencilBorder mb-2 mb-sm-0"  v-model="checkboxChoices[0]"></checkbox-smooth>         
        </div> 

        <div class="row">
          <checkbox-smooth label="want to help a loved one" v-model="checkboxChoices[1]" class="mx-auto text-left pt-2 pb-2  stencilBorder mb-4 mb-sm-0 col-sm-7 col-md-6 col-lg-8 customCheck wrapLabel"></checkbox-smooth>
        </div>
        <div class="row">
          <checkbox-smooth label="want to help others" v-model="checkboxChoices[2]" class="mx-auto text-left pt-2 pb-2  stencilBorder col-sm-7 col-md-6 col-lg-8 customCheck "></checkbox-smooth>
        </div>
        <div class="row">
          <checkbox-smooth label="am curious" v-model="checkboxChoices[3]" class="mx-auto text-left pt-2 pb-2 stencilBorder col-sm-7 col-md-6 customCheck col-lg-8 "></checkbox-smooth>
        </div>
        <div class="row">
          <checkbox-smooth label="another reason" v-model="checkboxChoices[4]" class="mx-auto text-left pt-2 pb-2 stencilBorderBottom col-sm-7 col-md-6 customCheck col-lg-8"></checkbox-smooth>
        </div>
        <div class="row">
          <checkbox-smooth label="not interested" v-model="checkboxChoices[5]" class="mx-auto text-left pt-2 pb-2 stencilBorderBottom col-sm-7 col-md-6 customCheck col-lg-8"></checkbox-smooth>
        </div>
      </template>
    
      
      <!-- Section 2.
    
        I would be willing to try
          
        -->
      <span id="willing" v-if="controller[0].click">
        <div class="row">
          <span class="mx-auto text-left col-sm-7 col-md-6 col-lg-8 francisco mediumFontSize mb-4 text-left lead"> I would be willing to try
            <span v-if="controller[1].edit" class="p-0">
              
              <v-btn flat :ripple="false" v-if="checkboxChoices[6]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> finger tapping
              </v-btn>
              {{ getPlacementText(6,12)}}
              <v-btn flat :ripple="false" v-if="checkboxChoices[7]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> hand tremor activity
              </v-btn>
              {{ getPlacementText(7,12)}}
              <v-btn flat :ripple="false" v-if="checkboxChoices[8]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> balance activity
              </v-btn>
              {{ getPlacementText(8,12)}}
              <v-btn flat :ripple="false" v-if="checkboxChoices[9]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> brain teaser activity
              </v-btn>
              {{ getPlacementText(9,12)}}
              <v-btn flat :ripple="false" v-if="checkboxChoices[10]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> surveys
              </v-btn>
              {{ getPlacementText(10,12)}}
              <v-btn flat :ripple="false" v-if="checkboxChoices[11]" @click.native="handleEdit(1)" class=" text-capitalize clickableLink pl-0 francisco"> none of the above
              </v-btn>
            </span>
            <v-btn v-if="!controller[1].edit && controller[1].submit" flat class="clickableLink pl-0 text-capitalize" v-on:click="handleEdit(1)"> {{controller[1].edit ? "(Add Choices)": "Resubmit"}} </v-btn>
          </span>
        </div>

        <template v-if="!controller[1].edit">
            <div class="row">
              <checkbox-smooth label="finger tapping" v-model="checkboxChoices[6]" class="stencilBorderTop stencilBorder pt-2 pb-2 col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></checkbox-smooth>
            </div>
            <div class="row">
              <checkbox-smooth label="hand tremor activity" v-model="checkboxChoices[7]" class="  stencilBorder pt-2 pb-2 col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></checkbox-smooth>
            </div>
            <div class="row">
              <checkbox-smooth label="balance activity" v-model="checkboxChoices[8]" class=" stencilBorder pt-2 pb-2 col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></checkbox-smooth>
            </div>
            <div class="row">
              <checkbox-smooth label="brain teaser activity" v-model="checkboxChoices[9]" class=" stencilBorder pt-2 pb-2 col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></checkbox-smooth>
            </div>
            </div>
            <div class="row">
              <checkbox-smooth label="surveys" v-model="checkboxChoices[10]" class=" stencilBorderTop stencilBorder pt-2 pb-2 col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></checkbox-smooth>
            </div>
            <div class="row">
              <checkbox-smooth label="none of the above" v-model="checkboxChoices[11]" class=" stencilBorderTop stencilBorder pt-2 pb-2 col-sm-7 col-md-6 text-left mx-auto col-lg-8 customCheck darkPurple--text"></checkbox-smooth>
            </div>
        </template>

      </span>
    
      <!-- Section 3.
    
          On a _____ Basis
    
        -->
      <span id="basis" v-if="controller[1].click">
        <div class="row">
          <p class="francisco col-sm-7 col-md-6 col-lg-8 mediumFontSize mx-auto text-left lead"> on a {{(controller[2].click)? "": "_____"}}
            <span class="p-0" v-if="controller[2].edit">
              <v-btn v-on:click="handleEdit(2)" flat class=" text-capitalize pl-0 clickableLink francisco"> {{radioChoice}}
              </v-btn>
            </span>
            basis
            <v-btn v-if="!controller[2].edit && controller[2].submit" flat class=" white--text text-capitalize pl-0 clickableLink" v-on:click="handleEdit(2)"> {{controller[2].edit ? "(Edit Choice)": "Resubmit"}} </v-btn>
          </p>
        </div>

         <div class="row" v-if="!controller[2].edit">
          <radio-smooth label="Daily" @change="changeValue" :value="radioChoice"  class="mx-auto text-left pt-2 pb-2  stencilBorder mb-4 mb-sm-0 col-sm-7 col-md-6 col-lg-8 customCheck wrapLabel"></radio-smooth>
          <radio-smooth label="Weekly" @change="changeValue" :value="radioChoice"  class="mx-auto text-left pt-2 pb-2  stencilBorder mb-4 mb-sm-0 col-sm-7 col-md-6 col-lg-8 customCheck wrapLabel"></radio-smooth>
          <radio-smooth label="Biweekly" @change="changeValue" :value="radioChoice"  class="mx-auto text-left pt-2 pb-2  stencilBorder mb-4 mb-sm-0 col-sm-7 col-md-6 col-lg-8 customCheck wrapLabel"></radio-smooth>
          <radio-smooth label="Monthly" @change="changeValue" :value="radioChoice"  class="mx-auto text-left pt-2 pb-2  stencilBorder mb-4 mb-sm-0 col-sm-7 col-md-6 col-lg-8 customCheck wrapLabel"></radio-smooth>
          <radio-smooth label="Never" @change="changeValue" :value="radioChoice"  class="mx-auto text-left pt-2 pb-2  stencilBorder mb-4 mb-sm-0 col-sm-7 col-md-6 col-lg-8 customCheck wrapLabel"></radio-smooth>
        </div> 

      </span>
    
      <!-- Section 4.
    
            What would you like from us
    
        -->
      <span id="request" v-if="controller[2].click">
        <div class="row">
          <p class="francisco col-sm-7 col-md-6 col-lg-8 mx-auto text-left mediumFontSize lead"> I would like to recieve
            <span v-if="controller[3].edit">
              <v-btn flat :ripple="false" v-if="checkboxChoices[12]" v-on:click="handleEdit(3)" class=" text-capitalize clickableLink pl-0 francisco"> Updates on the study
              </v-btn>
              {{ getPlacementText(12,16)}}
              <v-btn flat :ripple="false" v-if="checkboxChoices[13]" v-on:click="handleEdit(3)" class=" text-capitalize clickableLink pl-0 francisco"> Updates on participation stats
              </v-btn>
              {{ getPlacementText(13,16)}}
              <v-btn flat :ripple="false" v-if="checkboxChoices[14]" v-on:click="handleEdit(3)" class=" text-capitalize clickableLink pl-0 francisco"> Data about personal performance
              </v-btn>
              {{ getPlacementText(14,16)}}
              <v-btn flat :ripple="false" v-if="checkboxChoices[15]" v-on:click="handleEdit(3)" class=" text-capitalize clickableLink pl-0 francisco"> No updates or stats
              </v-btn>
            </span>
            <v-btn v-if="!controller[3].edit && controller[3].submit" flat class="white--text text-capitalize clickableLink pl-0" v-on:click="handleEdit(3)"> {{controller[3].edit ? "(Add Choices)": "Resubmit"}} </v-btn>
          </p>
        </div>
    
        <template v-if="!controller[3].edit">
          <div class="row">
            <checkbox-smooth label="Updates on the study" v-model="checkboxChoices[12]" class="stencilBorderTop stencilBorder pt-2 pb-2 col-sm-7 col-md-6 col-lg-8 mx-auto text-left wrapLabel  customCheck darkPurple--text"></checkbox-smooth>
          </div>
          <div class="row">
            <checkbox-smooth id="updates" label="Updates on participation stats" v-model="checkboxChoices[13]" class="stencilBorder pt-2 pb-2 col-sm-7 col-md-6 col-lg-8 mx-auto text-left mb-sm-0 customCheck darkPurple--text wrapLabel"></checkbox-smooth>
          </div>
          <div class="row">
            <checkbox-smooth label="Data about personal performance" v-model="checkboxChoices[14]" class="stencilBorder pt-2 pb-2 col-sm-7 col-md-6 col-lg-8 mx-auto text-left  customCheck darkPurple--text"></checkbox-smooth>
          </div>
          <div class="row">
            <checkbox-smooth label="No updates or stats" v-model="checkboxChoices[15]" class="stencilBorder pt-2 pb-2 col-sm-7 col-md-6 col-lg-8 mx-auto text-left  customCheck darkPurple--text"></checkbox-smooth>
          </div>
        </template>
    
      </span>

    </template>
    <div class="row" style="height: 400px;" > </div> <!-- For extra padding -->
  </v-app>
</template>

<script>
  import {Focus} from '@/directives/focus.js'
  import {requirements} from '../../../state_objects/requirements'
  import _ from 'lodash'
  import CheckboxSmooth from '@/custom_components/checkbox/CheckboxSmooth.vue'
  import RadioSmooth from '@/custom_components/radiobox/RadioBoxLight.vue'

  export default {
    data () {
      return {
        timeChoice: '',
        requirements: requirements,
        progress: (100.0 / 4),
        progressStep: (100.0 / 4),
        progressIndex: 0,
        // the page is broken down into sections, (for each question asked), the object below then represents whether there is one or more
        // answers in a particular section
        hasAnsweredInSection: [false, false, false],
        radioChoice: '',
        // below is for checkboxes
        checkboxChoices: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        controllerLevel: 0,
        // below controls whether or not to show checkboxes for a particular section and then it shows where to scroll to
        // once an item is clicked then it tells the page to nove on, then it's either in an edit state or submit state
        controller: {
          0: {click: false, submit: false, edit: false, page: '#interest'}, // TODO: Remove submit field if its extraneous
          1: {click: false, submit: false, edit: false, page: '#willing'},
          2: {click: false, submit: false, edit: false, page: '#basis'},
          3: {click: false, submit: false, edit: false, page: '#request'}
        },
        indexInVowSection: 1
      }
    },
    computed: {
      notInterestedFromStart: function () {
        return this.checkboxChoices[5]
      },
      notInterestedAny: function () {
        // TODO: Get details on the desired functionality for this function
        return this.checkboxChoices[11] && this.radioChoice === 'Never'
      }
    },
    methods: {
      scrollPage: _.debounce(
        function (arg1) {
          this.$scrollTo(arg1, 750, {easing: 'linear', offset: -150})
        }
        , 200),
      handleVows () {
        // if nothing has been entered for the current set of checkboxes then return
        if (!this.currentVowSectionHasValues()) {
          return
        }
        // if they've reached the last question and are uninterested (and consequently ineligible then go down sad path)
        if (this.controllerLevel === 4 && this.notInterestedAny) {
          this.goDownSadPath()
        } else if (this.controllerLevel === 4) {
          this.requirements.isOnElgibility = false
          this.requirements.hasCompletedEligibility = true
          this.requirements.isOnConsent = true
          this.$router.push('OverviewEligibility')
        } else if (this.controllerLevel === 0 && this.notInterestedFromStart) {
          this.goDownSadPath()
        } else {
          let levelObj = this.controller[this.controllerLevel]
          levelObj.click = true
          levelObj.edit = true
          levelObj.submit = true
          this.indexInVowSection += 1
          this.controllerLevel += 1
          this.progress += this.progressStep
          this.progressIndex += 1
          levelObj = this.controller[this.controllerLevel]
          if (this.controllerLevel !== 4) {
            this.scrollPage(levelObj.page)
          }
        }
      },
      // Depreciated method in used below -- should use a JS object instead (thought not a necessity)
      goDownSadPath () {
        this.$router.data = {
          notInterestedFromStart: this.notInterestedFromStart,
          notInterestedAny: this.notInterestedAny
        }
        this.$router.push('Ineligible')
      },
      // check if current question has any single check answered
      currentVowSectionHasValues () {
        if (this.controllerLevel === 0) {
          return this.hasAnsweredAny(0, 6)
        } else if (this.controllerLevel === 1) {
          return this.hasAnsweredAny(6, 12)
        } else if (this.controllerLevel === 2) {
          return this.radioChoice !== ''
        } else if (this.controllerLevel === 3) {
          return this.hasAnsweredAny(12, 16)
        } else {
          return true
        }
      },
      //  this is a way for vue to set content of an object and keep track of that state -- not sure if this is entirely functioning
      //  how intended000
      setSelection (index) {
        this.$set(this.checkboxChoices, index, !this.checkboxChoices[index])
      },
      // used to record radio value choice
      changeValue: function (newValue) {
        this.radioChoice = newValue
      },
      addProgress (index) {
        if (!this.hasAnsweredInSection[index]) {
          this.hasAnsweredInSection[index] = true
          this.progressIndex += 1
          this.progress += this.progressStep
        }
      },
      getProgress () {
        if (this.progressIndex + 1 === 5) {
          return 'ELIGBILITY DONE'
        } else {
          return 'STEP ' + (this.progressIndex + 1) + ' OF 4'
        }
      },
      // look through current section of checkbox questions and show true
      hasAnsweredAny: function (start, stop) {
        for (var i = start; i < stop; i++) {
          if (this.checkboxChoices[i]) {
            return true
          }
        }
        return false
      },
      getPlacementText: function (start, stop) {
        // am I open and is there a single space to the right or a multi space
        if (this.checkboxChoices[start]) {
          var count = 0
          for (var i = start + 1; i < stop; i++) {
            if (this.checkboxChoices[i]) {
              count = count + 1
            }
          }
          if (count === 1) {
            return 'and'
          } else if (count > 1) {
            return ','
          }
          // else on choice and return nothing
        }
      },
      handleEdit: function (index) {
        this.controller[index].edit = !this.controller[index].edit
      }
    },
    directives: {
      Focus
    },
    components: {
      'checkbox-smooth': CheckboxSmooth,
      'radio-smooth': RadioSmooth
    }
  }
</script>

<style lang="scss">

  div.menu__content {
    z-index: 1000 !important;
    min-width: 290px !important;
  }

  /* Work around for diabled button interfering with when the button gets focused in on*/
  .dim {
      opacity: 0.5    
  }

  label {
    color: #3a539b !important;
   }
  
</style>
