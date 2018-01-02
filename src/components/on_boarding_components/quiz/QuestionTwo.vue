<template>
    <v-app>
        <div class="row">
            <p class="ml-6 pl-2 lightLead tinyFontSize text-uppercase"> Question 2 </p>
        </div>

        <div class="row">
            <p class="ml-6 pl-2 default"> Will my name be stored with my study data? </p>
        </div>
        
        <div class="row ml-6">
             <v-radio-group v-model="questionResults.questionTwo" class="col-12">
                <div class="row"> 
                    <v-radio class="col-12 col-md-10  stencilBorder stencilBorderTop pt-3 mt-0 pb-3 wrapLabel lightGrayText pr-0" value="false" label="Yes"> </v-radio>
                    <v-radio class="col-12 col-md-10  stencilBorder pt-3 mt-0 pb-3 wrapLabel lightGrayText pr-0" value="true"  label="No"> </v-radio>
                </div>
             </v-radio-group> 
        </div>

    </v-app>
</template>

<script>
    import { questionResults } from '../../../state_objects/questionResults'
    import RadioSmooth from '@/custom_components/radiobox/RadioBoxLight.vue'

    export default {
      data () {
        return {
          questionResults: questionResults
        }
      },
      components: {
        'radio-smooth': RadioSmooth
      }
    }
</script>
