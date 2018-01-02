<template>
    <v-app>
        <div class="row">
            <p class="ml-6 pl-2 lightLead tinyFontSize text-uppercase"> Question 3 </p>
        </div>

        <div class="row">
            <p class="col-md-8 ml-6 pl-2 default"> If I decide to share my data with qualified 
                researchers and then I change my mind, can my data be deleted from their studies?
                 </p>
        </div>
        
        <div class="row ml-6">
             <v-radio-group v-model="questionResults.questionThree" class="col-12">
                <div class="row"> 
                    <v-radio class=" col-12 col-md-10 stencilBorder stencilBorderTop pt-3 mt-0 pb-3 wrapLabel lightGrayText pr-0" label="Yes" value="false">  </v-radio>
                    <v-radio class=" col-12 col-md-10 stencilBorder  pt-3 mt-0 pb-3 wrapLabel lightGrayText pr-0" label="No" value="true"> </v-radio>
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
