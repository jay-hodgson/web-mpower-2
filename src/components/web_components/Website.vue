<template>
  <v-app>
  
    <nav class="web navbar fixed-top navbar-light">
      <div class="container-fluid" style="display: block;">
        <div class="row">
          <div class="text-center col-sm-2">
            <span class="defaultBlue pr-sm-5 mediumFontSize"> mPower  </span>
          </div>

            <div class="col-2 col-sm-auto ml-1 mr-2 p-0 ">
              <!-- router link would know when it is selected -->
              <router-link :to="{name: 'YourStory'}" class="routerBtn m-0 p-0 text-capitalize default smallFontSize">Your Story</router-link>
              <!--
              <v-btn :to="{name: 'YourStory'}" flat class="routerBtn m-0 p-0 text-capitalize default smallFontSize">
                Your Story
              </v-btn>
              -->
            </div>

            <div class="col-2 col-sm-auto ml-4 mr-2 p-0 ">
              <router-link :to="{name: 'About'}" class="routerBtn m-0 p-0 text-capitalize default smallFontSize">About</router-link>
              <!--
              <v-btn :to="{name: 'About'}" flat class="routerBtn m-0 p-0 text-capitalize default smallFontSize">
                About
              </v-btn>
              -->
            </div>

            
            <div class="col-2 col-sm-auto ml-2 mr-2 p-0 ">
              <router-link :to="{name: 'Team'}" class="routerBtn m-0 p-0 text-capitalize default smallFontSize">Team</router-link>
              <!--
              <v-btn :to="{name: 'Team'}" flat class="routerBtn m-0 p-0 text-capitalize default smallFontSize" >
                Team
              </v-btn>
              -->
            </div>

            <div class="col-2 col-sm-auto ml-2 mr-2 pl-2 ml-md-auto">
              <v-btn :to="{name: 'OverviewEligibility'}" class="routerBtn joinButton m-0 p-0 navyBlue text-capitalize white--text smallFontSize"> 
                Join 
              </v-btn>
            </div>

          </div>

        </div>
      </nav>
  
    <router-view class="whiteBackground router routerWebMargin container-fluid"></router-view>

    <nav class="web navbar fixed-bottom">
      <div class="row" style="height: inherit; width: 100%;"  >
        <div class="col-md-8 pr-0 pl-0 centerVertical">
          <div class="row">
            <v-btn id="mPower" flat :ripple="false" class="mb-0 mt-0  mb-sm-auto mt-sm-auto col-12 col-sm-1 zeroOpacity  minWidthReset text--normal text-left-force tinyFontSize mr-md-4 ml-0 ml-lg-3 pl-2 pr-0 white--text"> 2017 mPower</v-btn> 
            <v-btn :to="{name: 'FAQ'}" flat class="col-2 col-sm-1 zeroOpacity  minWidthReset ml-md-5 ml-lg-3 mr-0 pl-0 pr-0 white--text"> FAQ </v-btn> 
            <span  class="centerVertical"> | </span>
            <v-btn :to="{name: 'Privacy'}" flat class="col-3 col-xl-2 col-sm-2 ml-xl-0 mr-xl-0 zeroOpacity  minWidthReset ml-md-3 ml-lg-2 mr-md-3 mr-lg-1 ml-0 mr-0 pl-0 pr-0 white--text"> Privacy Policy</v-btn> 
            <span class="centerVertical"> | </span>
            <v-btn flat class="zeroOpacity  minWidthReset col-3 col-sm-2 ml-xl-1 mr-xl-1 pl-0 pr-0 ml-md-4 ml-lg-2 mr-md-4 mr-lg-2 white--text"> Terms of service </v-btn>
            <span class="centerVertical"> | </span>
            <v-btn :to="{name: 'Contact'}" flat class="col-1 pl-sm-3 zeroOpacity minWidthReset white--text"> Contact </v-btn>
          </div>
        </div>
        <div class="col-md-4 ml-0 mr-0 pl-0 pr-0 centerVertical">
          <div class="row">
            <span id="notAdvice" class="col-12 text-left ml-2 mr-2 mb-2 ">mPower is for research use only and does not provide medical advice, diagnosis or treatment.</span>
          </div>
        </div>
      </div>
    </nav>


  </v-app>
</template>

<script>

export default {
  methods: {
    go (index) {
      if (index === 0) {
        this.$router.push({name: 'YourStory'})
      } else if (index === 1) {
        this.$router.push({name: 'About'})
      } else if (index === 2) {
        this.$router.push({name: 'Team'})
      } else {
        this.$router.push({name: 'SubjectInterest'})
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../css/bootstrap/custom';

.minWidthReset {
  min-width: 0px !important;
}
.join {
  margin-right: 10px !important;
}

.text-left-force > div{
  justify-content: left !important;
}

.scaledJoinButton {
  width: 2em;
  height: 2em;
}

.routerBtn > div.btn__content{
  padding: 0px;
}

.routerBtn:hover {
  border-bottom: solid;
  border-bottom-color: #ffda8a;
  font-weight: bold;
}

</style>
