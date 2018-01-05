<template>
    <v-app>
        <div class="row">
            <div class="text-center font-weight-bold col">
               <p class=" white--text"> Please review and sign the consent document
               </p>
            </div>
        </div>
        <div class="row">
            <div class="mx-auto text-center col-md-8">
               <p class=" white--text smallFontSize">
                   By signing your name, you have indicated that you have read and fully agree with the consent form given below. 
                   This is the document which you just went through in the consent and quiz process.
               </p>
            </div>
        </div>
        <div class="row">
            <v-flex class="col-md-6 mx-auto">
                <v-text-field class="white--text" placeholder="Please type your full name here" name="input-1" type="text" auto-grow v-model="name">
                </v-text-field>
            </v-flex>
        </div>
        <div class="row">
            <div class="text-center mediumFontSize col">
                <v-btn flat class="large white--text font-weight-bold"> <u> Disagree  </u> </v-btn>
                <v-btn v-on:click="[requirements.isOnSign = false, requirements.hasCompletedSign = true, requirements.isOnRegistration = true, $router.push({name: 'OverviewEligibility'})]"class="large defaultBlue font-weight-bold"> Accept </v-btn>
            </div>
        </div>
  
        <div class="row whiteBackground">
            <iframe ref="frame" src="/#/ConsentDocText" height="500px" class="col-12 mask"></iframe>
        </div>


    </v-app>
</template>

<script>
import {requirements} from '../../../state_objects/requirements'

export default {
  data () {
    return {
      requirements: requirements,
      name: ''
    }
  }
}
</script>

<style>
    .blueBackground {
        background-image: linear-gradient(71deg, #473b7b, #3584a7 76%, #30d2be);
    }

    input {
        color: white !important;
    }

     label, .input-group__selections__comma, .application--light .input-group input, .application--light .input-group textarea {
        color:white !important;
    }

</style>
