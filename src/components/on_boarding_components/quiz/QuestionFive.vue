<template>
    <v-app>
        <div class="row">
            <p class="ml-6 pl-2 lightLead tinyFontSize text-uppercase"> Question 5 </p>
        </div>

        <div class="row">
            <p class="ml-6 pl-2 default"> I can pause / resume participating at any time? </p>
        </div>
        
        <div class="row ml-6">

              <v-radio-group v-model="questionResults.questionFive" class="col-12" column>
                <div class="row"> 
                    <v-radio class="col-12 col-md-10  stencilBorder stencilBorderTop pt-3 mt-0 pb-3 wrapLabel lightGrayText pr-0" label="Yes" value="true" >  </v-radio>
                    <v-radio class="col-12 col-md-10  stencilBorder pt-3 mt-0 pb-3 wrapLabel lightGrayText pr-0" label="No" value="false"> </v-radio>
                </div>
             </v-radio-group>  
        </div>

    </v-app>
</template>

<script>
    import { questionResults } from '../../../state_objects/questionResults'
    import { requirements } from '../../../state_objects/requirements'

    export default {
      data () {
        return {
          questionResults: questionResults,
          requirements: requirements,
          passed: ''
        }
      },
      methods: {
        transition: function () {
          var passed = JSON.parse(this.questionResults.questionOne) && JSON.parse(this.questionResults.questionTwo) && JSON.parse(this.questionResults.questionThree) &&
            JSON.parse(this.questionResults.questionFour) && JSON.parse(this.questionResults.questionFive)
          console.log(passed)
          if (!passed) {
            this.$router.push({ name: 'RetakeQuiz' })
          } else {
            this.requirements.isOnSign = true
            this.requirements.isOnQuiz = false
            this.requirements.hasCompletedQuiz = true
            this.$router.push({ name: 'OverviewEligibility' })
          }
        }
      }
    }
</script>
