<template>
  <v-app>
    <div class="row mb-lg-3">

      <div class="mx-auto pt-3 pt-sm-0 col-3 col-lg-2 mr-lg-2  customHeight">
        <img class="img-fluid " src="../../../images/step-3-consent-icon.png">
      </div>

      <div class="col-9 col-lg-9  mt-3 lightLead  mr-lg-0 ml-lg-0 pl-0 pr-0">
        <div class="row">
          <div class="col-12 default font-weight-bold">
            Data collection, storage, and sharing
          </div>
        </div>
      </div>
    </div>

  <div class="row m-lg-3">
    <ul class="ml-md-5 mr-md-5 xsmallFontSize lightGrayText">
      <li class="mt-lg-1 mb-lg-3">
        We will collect survey data and sensor data from your phone. Sensor data is data from your phone that you did not enter yourself. We will collect sensor data about location, physical activity, and the study activities.
      </li>

      <li class="mt-lg-1 mb-lg-3">
        Your coded study data will be used for research. The data will be combined with data from other volunteers. It will be transferred to an analysis platform in the United States.
      </li>

      <li class="mt-lg-1 mb-lg-3">
        You can decide what data you want to share with us or with other researchers.
      </li>
 
      <li class="mt-lg-1 mb-lg-3">
        Once we have shared data with other researchers, we cannot withdraw it.
      </li>

    </ul>
  </div>
  <!-- <div class="row" v-if="showHelperText">
    <div class="ml-md-5 mr-md-5 p-0 col lightGrayText xsmallFontSize">
      This is your data. You’ll be able to view your recent data trends on the app dashboard and download your measurements. Seeing your data may change how you feel. You may feel tired, sad, energized, or happy.
    </div>
  </div> -->

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
