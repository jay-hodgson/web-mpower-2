<template>
    <v-app>
        <div class="row">
            <p class="ml-6 pl-2 lightLead tinyFontSize text-uppercase"> Question 4 </p>
        </div>

        <div class="row">
            <p class="ml-6 pl-2 default"> The survey questions may be stressful for some people. </p>
        </div>
        
        <div class="row ml-6">
             <v-radio-group v-model="questionResults.questionFour" class="col-12">
                <div class="row"> 
                    <v-radio class=" col-12 col-md-10 stencilBorder stencilBorderTop pt-3 mt-0 pb-3 wrapLabel lightGrayText pr-0" label="Yes" value="true">  </v-radio>
                    <v-radio class=" col-12 col-md-10 stencilBorder  pt-3 mt-0 pb-3 wrapLabel lightGrayText pr-0" label="No" value="false"> </v-radio>
                </div>
             </v-radio-group> 
        </div>

    </v-app>
</template>

<script>
    import { questionResults } from '../../../state_objects/questionResults'

    export default {
      data () {
        return {
          questionResults: questionResults
        }
      }
    }
</script>
