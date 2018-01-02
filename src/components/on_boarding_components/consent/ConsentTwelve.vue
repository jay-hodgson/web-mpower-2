<template>
    <v-app>
        <div class="row">
      
          <div class="mx-auto pt-3 pt-sm-0 col-3 col-lg-2 mr-lg-2 customHeight">
            <img class="img-fluid " src="../../../images/step-12-consent-icon.png">
          </div>
    
          <div class="col-9 col-lg-9  mt-3 lightLead  mr-lg-0 ml-lg-0 pl-0 pr-0">
          
            <div class="row">
              <div class="col-12 default font-weight-bold">
                Pause or Quit
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <ul class="ml-md-5 mr-md-5 xsmallFontSize lightGrayText">
          
              <li class="mt-lg-1 mb-lg-3">
                  Your participation is voluntary. 
              </li>

              <li class="mt-lg-1 mb-lg-3">
                  You can pause your participation or you can leave the study at 
                  any time. 
              </li>

         <a v-on:click="showHelperText = !showHelperText" class="defaultBlue font-weight-bold ">
          <u> Learn More </u>
        </a>

      </ul>
    </div>
    <div class="row" v-if="showHelperText">
        <div class="ml-md-5 mr-md-5 p-0 col lightGrayText xsmallFontSize">
      mPower is a research study.
     <br><br>
      The mPower app is not a diagnostic tool. It shouldn’t be used for medical care, diagnosis, or treatment.
     <br><br>
      You should not use mPower in place of seeing a healthcare provider.
      The sensor data collected through the app are not yet validated as measurements of PD symptoms. We are analyzing this data to see how accurate and reliable it is.
      If you have questions or concerns related to your health, you should see a healthcare provider. 
 
        </div>
    </div>
    
    </v-app>
</template>

<script>
export default {
  data () {
    return {
      showHelperText: false
    }
  }
}
</script>
