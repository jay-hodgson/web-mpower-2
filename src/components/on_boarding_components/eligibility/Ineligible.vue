<template>
    <v-app class="page-overview fadeBackground">
        <div class="row">
            <div class="col-sm-8 mx-auto">
                <p class="white--text text-center"> Sorry, you are not eligible</p>
                <p class="white--text text-center tinyFontSize">
                        {{ sectionOne ? 'You must':'' }}
                        {{isUnderage ? "be at least 18" + getProperCharacter(0): "" }} 
                        {{isNotComfortable ? "be comfortable using a smartphone to participate"
                        + getProperCharacter(1): "" }} 
                        {{isNotFromUS ? "live in the United States.": "" }} 
                        {{ sectionTwo ? 'Your answers indicated that you are not intersted in joining the mPower study.' : ''}}
                        {{ sectionThree ? 'Your answers indicated that you are not intersted in performing any of the activities\
                        required for the mPower study. Please note that praticipants can perform the activities as time permits and any\
                        number of activities.' : ''}}
                </p>
                <br>
                <p class="white--text tinyFontSize text-center">
                    You can still help by telling others about the study
                </p>
            </div>
            <br>
            <div class="col-12 text-center">
                <v-btn  class="roundBtn orange"> 
                    <v-icon mediumFontSize class="white--text">fa-facebook</v-icon>
                </v-btn>
                <v-btn  class="roundBtn orange">
                    <v-icon mediumFontSize class="white--text">fa-twitter</v-icon>
                </v-btn>
                <v-btn class="roundBtn orange"> 
                    <v-icon mediumFontSize class="white--text">message</v-icon>
                </v-btn>
                <v-btn class="roundBtn orange"> 
                    <v-icon mediumFontSize class="white--text">fa-envelope</v-icon>
                </v-btn>
            </div>

        </div>
        <br>
        <br>
        <div class="row">
            <div class="mx-auto">
                <v-btn large class="white text-capitalize" :to="{name: 'YourStory'}">  
                    Go Back
                </v-btn>
            </div>
        </div>
    </v-app>
</template>


<script>
  export default {
    data: function () {
      return {
        isUnderage: null,
        isNotFromUS: null,
        isNotComfortable: null,
        personStates: [],
        notInterestedFromStart: null,
        notInterestedAny: null
      }
    },
    // TODO: below is a depreciated method of getting the results- should switch to using
    // the object personInfo.js
    mounted: function () {
      this.isUnderage = this.$router.data.isUnderage
      this.isNotFromUS = this.$router.data.isNotFromUS
      this.isNotComfortable = this.$router.data.isNotComfortable
      this.notInterestedFromStart = this.$router.data.notInterestedFromStart
      this.notInterestedAny = this.$router.data.notInterestedAny
      this.personStates = [this.isUnderage, this.isNotComfortable, this.isNotFromUS]
    },
    computed: {
      sectionOne: function () {
        return this.isUnderage || this.isNotComfortable || this.isNotFromUS
      },
      sectionTwo: function () {
        return this.notInterestedFromStart
      },
      sectionThree: function () {
        return this.notInterestedAny
      }
    },
    methods: {
      getProperCharacter: function (index) {
        if (this.personStates[index]) {
          var count = 0
          index = index + 1
          for (var i = index; i < this.personStates.length; i++) {
            if (this.personStates[i]) {
              count = count + 1
            }
          }
          if (count === 2) {
            return ','
          } else if (count === 1) {
            return ' and'
          } else {
            return '.'
          }
        }
      }
    }
  }
</script>

<style lang="scss">

    .roundBtn {
        border-radius: 50px !important;
        width: 50px;
        height: 50px;
    }

</style>
