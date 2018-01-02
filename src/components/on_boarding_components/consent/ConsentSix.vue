<template>
    <v-app>
        <div class="row">
      
          <div class="mx-auto pt-3 pt-sm-0 col-3 col-lg-2 mr-lg-2 customHeight">
            <img class="img-fluid " src="../../../images/step-6-consent-icon.png">
          </div>
    
          <div class="col-9 col-lg-9  mt-3 lightLead  mr-lg-0 ml-lg-0 pl-0 pr-0">
            <div class="row">
              <div class="col-12 default font-weight-bold">
                Time commitment
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <ul class="ml-md-5 mr-md-5 xsmallFontSize lightGrayText">

          
              <li class="mt-lg-1 mb-lg-3">
                  This study will take about 10 minutes per day. Some days we will ask you for more time than others.
              </li>

              <li class="mt-lg-1 mb-lg-3">
                  The time you spend on the app may count against your mobile data plan.
              </li>

              <li class="mt-lg-1">
                  You can set up the app to use Wi-Fi connections to avoid using your mobile data.
              </li>

             <a v-on:click="showHelperText = !showHelperText" class="defaultBlue font-weight-bold ">
                <u> Learn More </u>
              </a>
            </ul>
          </div>
          <div class="row pb-5 mb-5" v-if="showHelperText">
            <div class="ml-md-5 mr-md-5 p-0 col lightGrayText xsmallFontSize">
              Research takes time.
              <br><br>
              Before you volunteer, it is important to know how much time is involved.
              <br><br>
              Signing up to volunteer takes about 20 minutes. After that, the study takes about 10 minutes per day. Once a month, we ask follow up questions. These take about 5 minutes to complete.
              <br><br>           
              You decide when and how much to participate. You can stop and start your participation at any time.
              Transmitting data collected in this study may count against your mobile data plan. You may configure the application to only use Wi-Fi connections to limit the impact this data collection has on your data plan. 
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
