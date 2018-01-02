<template>
    <v-app>
      <div class="row">
    
        <div class="mx-auto pt-3 pt-sm-0 col-3 col-lg-2 mr-lg-2 customHeight">
          <img class="img-fluid " src="../../../images/step-9-consent-icon.png">
        </div>
  
        <div class="col-9 col-lg-9  mt-3 lightLead  mr-lg-0 ml-lg-0 pl-0 pr-0">
        
          <div class="row">
            <div class="col-12 default font-weight-bold">
              Potential Risks
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <ul class="ml-md-5 mr-md-5 xsmallFontSize lightGrayText">

            <li class="mt-lg-1 mb-lg-3">
                If you participate in this study, your privacy may be at risk. 
            </li>

            <li class="mt-lg-1 mb-lg-3">
                There may be other risks to participating that we do not know about yet.
            </li>

          <a v-on:click="showHelperText = !showHelperText" class="defaultBlue font-weight-bold ">
          <u> Learn More </u>
        </a>

      </ul>
    </div>
    <div class="row mb-5 pb-5" v-if="showHelperText">
        <div class="ml-md-5 mr-md-5 p-0 col lightGrayText xsmallFontSize">
          This is not a medical treatment study. We do not expect medical side effects from participating in this study.
          <br><br>
          We take great care to protect your privacy. However, if there is a data breach it may be possible to identify you. This risk is low but it is not zero.
          <br><br>
          Participating in this study may generate a wide range of emotions. It could affect your mood.
          <br><br>
          Be aware that other people may glimpse the study notifications and/or reminders on your phone and realize you are enrolled in this study.
          <br><br>
          Participation in this study may involve risks that are not known at this time. You will be told of any new information that might change your decision to be in this study.
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
