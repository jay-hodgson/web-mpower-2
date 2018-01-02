<template>
    <v-app>
    <br>
    <div class="row">
        <p class="lead font-weight-bold mx-auto col-md-8"> 
            Enter your mobile phone number to recieve your download link for the app 
        </p>
    </div>
    <div class="row">
        <v-flex class="col-md-6 ml-6">
            <v-text-field :mask="mask" class="default text-left" id="testing" placeholder="(###) - ### - ####" name="input-1" type="text" pattern="\d*" auto-grow v-model="phoneNumber.number">
            </v-text-field>
        </v-flex>
    </div>

    <div class="row white anchorBottom" style="height: inherit;">
        <v-btn v-on:click="$router.push({name: 'RegistrationLinkSent'})"  class="navyBlue mediumFontSize text--lower large white--text mx-auto col-md-3 text--normal" > Submit</v-btn>
    </div>
    



    </v-app>
</template>

<script>
import {phoneNumber} from '../../../state_objects/phoneNumber'

export default {
  data () {
    return {
      phoneNumber: phoneNumber,
      mask: 'phone'
    }
  }
}
</script>
