<template>
    <v-app>
          <div class="row">

            <div class="mx-auto pt-3 pt-sm-0 col-3 col-lg-2 mr-lg-2 customHeight">
              <img class="img-fluid " src="../../../images/step-4-consent-icon.png">
            </div>
      
            <div class="col-9 col-lg-9  mt-3 lightLead  mr-lg-0 ml-lg-0 pl-0 pr-0">
              <div class="row">
                <div class="col-12 default font-weight-bold">
                  Risks
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <ul class="ml-md-5 mr-md-5 xsmallFontSize lightGrayText">

              <li class="mt-lg-1 mb-lg-3">
                Your study data will be encrypted on your phone, and we will do our best to protect your privacy. But your data could be hacked.
              </li>

              <li class="mt-lg-1 mb-lg-3">
                The time you spend on the app may count against your phone’s data plan. You can set up the app to use Wi-Fi connections to avoid using your mobile data.
              </li>

              <li class="mt-lg-1 mb-lg-3">
                The questions we ask you about your health could make you feel uncomfortable.
              </li>

              <li class="mt-lg-1 mb-lg-3">
                The things you learn about your health could make you feel uncomfortable.
              </li>

              <li class="mt-lg-1">
              There may be other risks to participating that we do not know about yet.
              </li>

            </ul>
          </div>
      <!-- <div class="row pb-5 mb-5" v-if="showHelperText">
        <div class="ml-md-5 mr-md-5 p-0 col lightGrayText xsmallFontSize">
          Your privacy is important to us. We will make every effort to protect your privacy.
          <br><br> The data we collect through the app is encrypted on the phone. This means your data is protected. Unauthorized people cannot easily understand your data when it is encrypted.
          <br><br> We will separate the account information that identifies you from your study data. Your account information will not be stored with your survey responses or app measurements.
          <br><br> Instead of using your name, we will use a code to label your study data. The code is random. It is not based on any of information that identifies you. Information about the code is stored in a separate database on a secure server. Only key people from our study team can link your identity to your study data.
          <br><br> Results of this study will be made public. When results are made public, only coded study data will be used. Your identity will not be shared.
          <br><br> If required by law, we may give your contact information and identifiable study data to: · The US Department of Health and Human Services (HHS), the Office for Human Research Protection (OHRP), the Food and Drug Administration (FDA), and other agencies for review of our research procedures · The Institutional Review Board (IRB) so they can monitor the safety, effectiveness, and conduct of our research
          <br><br> Please read our Privacy Policy for more information.
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
