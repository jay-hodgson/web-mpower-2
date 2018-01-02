<template>
    <v-app>

        <div class="row">
            <img src="../../../images/sms-mobile-phone-icon-onboarding.png" class="mx-auto" alt="image of an exclamation point inside of a yellow triangle symbolizing hazard">  
            </img>
        </div>
        <div class="row">
            <div class="col-md-8  mx-auto text-center baseFontSize">
                <p class="white--text"> The link is on its way to your mobile phone! </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 mx-auto text-center">
                <p class="tinyFontSize white--text"> We sent the link via a SMS, text,  message to {{ phoneNumber.number}}.
                    <a href="#" class="white--text"> <u> (change mobile number)  </u> </a>
                </p>
            </div>
            <div class="col-md-8 mx-auto text-center">
                <p class="tinyFontSize white--text"> The link expires in 24 hours, so be sure to tap on the link soon.   
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 mx-auto text-center white--text baseFontSize">
                <p class="white--text"> Go check your SMS message! </p>
            </div>
        </div>

    </v-app>
</template>

<script>
import {phoneNumber} from '../../../state_objects/phoneNumber'

export default {
  data () {
    return {
      phoneNumber: phoneNumber
    }
  }
}
</script>
