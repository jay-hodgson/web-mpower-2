<template>
    <v-app>
      <div class="row">
    
        <div class="mx-auto pt-3 pt-sm-0 col-3 col-lg-2 mr-lg-2  customHeight">
          <img class="img-fluid " src="../../../images/step-7-consent-icon.png">
        </div>
  
        <div class="col-9 col-lg-9  mt-3 lightLead  mr-lg-0 ml-lg-0 pl-0 pr-0">
          <div class="row">
            <div class="col-12 default font-weight-bold">
              Study Surveys
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <ul class="ml-md-5 mr-md-5 xsmallFontSize lightGrayText">
        
            <li class="mt-lg-1 mb-lg-3">
               We will ask you to update your answers about your health and medical history.
            </li>

            <li class="mt-lg-1 mb-lg-3">
                We may ask you other questions about how you use the app.
            </li>


          <a v-on:click="showHelperText = !showHelperText" class="defaultBlue font-weight-bold ">
                <u> Learn More </u>
              </a>
            </ul>
          </div>
          <div class="row pb-5 mb-5" v-if="showHelperText">
            <div class="ml-md-5 mr-md-5 p-0 col lightGrayText xsmallFontSize">
              We will ask you to answer different health surveys. Some of these surveys have been used in other PD research studies. Some of the surveys are new. Some of the questions in the surveys may be mildly stressful for some people.
              <br><br>
              Because we are looking for health patterns over time, we will ask you some of the same questions more than one time. This may seem silly, but it is important to our research.
              <br><br>              
              So that we have the best chance at making useful discoveries, some questions are mandatory. For example, you have to tell us if you have PD or not. We also must know if you take certain medications. Other questions are optional. You can skip any optional question you do not wish to answer.
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

