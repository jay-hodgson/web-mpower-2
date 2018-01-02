<template>
    <v-app>

        <div class="row">
            <p class="ml-6 pl-2 lightLead tinyFontSize text-uppercase"> Question 1 </p>
        </div>

        <div class="row">
            <p class="ml-6 pl-2 default"> What is the purpose of this study? </p>
        </div>
        
        <div class="row ml-6 mt-4">
            <div class="row"> 
                <radio-smooth :label="optionOne" @change ="changeValue" :value="radioChoice"  class="col-md-10 col-12  stencilBorder stencilBorderTop  pt-3 mt-0 pb-3 wrapLabel lightGrayText pr-0"></radio-smooth>
                <radio-smooth :label="optionTwo" @change ="changeValue" :value="radioChoice"  class="col-md-10 col-12  stencilBorder stencilBorderTop   pt-3 mt-0 pb-3 wrapLabel lightGrayText pr-0"></radio-smooth>
            </div>
        </div>
    

    </v-app>
</template>

<script>
    import { questionResults } from '../../../state_objects/questionResults'
    import RadioSmooth from '@/custom_components/radiobox/RadioBoxLight.vue'
    
    export default {
      data () {
        return {
          questionResults: questionResults,
          optionOne: 'Understand the fluctuations of Parkinson’s disease symptoms',
          optionTwo: 'Give medical advice and diagnose people with Parkinson’s disease',
          radioChoice: ''
        }
      },
      watch: {
        radioChoice: function () {
          this.questionResults.questionOne = (this.radioChoice === this.optionOne)
        }
      },
      methods: {
        changeValue: function (newValue) {
          console.log('new value')
          this.radioChoice = newValue
        }
      },
      components: {
        'radio-smooth': RadioSmooth
      },
      mounted: function () {
        console.log('mounted')
        this.radioChoice = this.questionResults.questionOne
        console.log(this.radioChoice)
      }
    }
</script>
