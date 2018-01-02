<template >
  <v-app>
    <div class="row">
        <img src="../../../images/warning-icon.png" class="mx-auto" alt="image of an exclamation point inside of a yellow triangle symbolizing hazard">  
        </img>
    </div>

    <div class="row">
      <p class="mx-auto baseFontSize white--text">
        You're almost there!
      </p>
    </div>
    <div class="row">
      <p class="mx-auto col-md-8  text-center tinyFontSize white--text">
        You answered one or more questions incorrectly. 
        We want to make sure that you understand what this study is about 
        and what is involved before you proceed. 
        Please review the sections again.       
      </p>
    </div>

    <div class="row">

      <div class="col-md-8 mx-auto white">
        <div class="row">
          <div class="col-12 text-center stencilBorder  black--text"> 
            <div class="row">
              <div class="col-2 col-sm-1 mr-2 verticalCenter">
                <img v-if="!JSON.parse(questionResults.questionOne)" src="../../../images/wrong-icon.png"> </img>
                <img v-else src="../../../images/check-mark.png"> </img>
              </div>
              <div class="col-9 col-sm-10">
                <div class="row lightLead xsmallFontSize mt-1" v-bind:class="!JSON.parse(questionResults.questionOne) ? 'red--text': 'lightLead' ">
                  QUESTION 1
                </div>
                <div class="row">
                  <div class="col-12 smallFontSize text-left pl-0" v-bind:class="!JSON.parse(questionResults.questionOne) ? 'red--text': 'default' ">
                    What is the purpose of this study?
                  </div>
                  <div v-if="!JSON.parse(questionResults.questionOne)" class="col-8 col-sm-4 ml-auto tinyFontSize">
                    <router-link :to="{name: 'ConsentTwo'}"> (Review Section) </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 text-center stencilBorder  black--text"> 
            <div class="row">
              <div class="col-2 col-sm-1 mr-2 verticalCenter">
                <img v-if="!JSON.parse(questionResults.questionTwo)" src="../../../images/wrong-icon.png"> </img>
                <img v-else src="../../../images/check-mark.png"> </img>
              </div>
              <div class="col-9 col-sm-10">
                <div class="row xsmallFontSize" v-bind:class="!JSON.parse(questionResults.questionTwo) ? 'red--text': 'lightLead' ">
                  QUESTION 2
                </div>
                <div class="row">
                  <div class="col-12 smallFontSize text-left pl-0"  v-bind:class="!JSON.parse(questionResults.questionTwo) ? 'red--text': 'default' ">
                    Will my name be stored with my study data?
                  </div>
                  <div v-if="!JSON.parse(questionResults.questionTwo)" class="col-8 col-sm-4 ml-auto tinyFontSize">
                    <router-link :to="{name: 'ConsentThree'}"> (Review Section) </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 text-center stencilBorder  black--text"> 
            <div class="row">
              <div class="col-2 col-sm-1 mr-2 verticalCenter">
                <img v-if="!JSON.parse(questionResults.questionThree)" src="../../../images/wrong-icon.png"> </img>
                <img v-else src="../../../images/check-mark.png"> </img>
              </div>
              <div class="col-9 col-sm-10">
                <div class="row lightLead xsmallFontSize" v-bind:class="!JSON.parse(questionResults.questionThree) ? 'red--text': 'lightLead'">
                  QUESTION 3
                </div>
                <div class="row">
                  <div class="col-12 smallFontSize text-left pl-0" v-bind:class="!JSON.parse(questionResults.questionThree) ? 'red--text': 'default'">
                    If I decide to share my data with qualified researchers and then I change my mind, can my data be deleted from their studies?
                  </div>
                  <div v-if="!JSON.parse(questionResults.questionThree)" class="col-8 col-sm-4 ml-auto tinyFontSize ">
                      <router-link :to="{name: 'ConsentThirteen'}"> (Review Section) </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 text-center stencilBorder  black--text"> 
            <div class="row">
              <div class="col-2 col-sm-1 mr-2 verticalCenter">
                <img v-if="!JSON.parse(questionResults.questionFour)" src="../../../images/wrong-icon.png"> </img>
                <img v-else src="../../../images/check-mark.png"> </img>
              </div>
              <div class="col-9 col-sm-10">
                <div class="row lightLead xsmallFontSize" v-bind:class="!JSON.parse(questionResults.questionFour) ? 'red--text': 'lightLead'">
                  QUESTION 4
                </div>
                <div class="row">
                  <div class="col-12 smallFontSize text-left pl-0" v-bind:class="!JSON.parse(questionResults.questionFour) ? 'red--text': 'default'">
                    The survey questions may be stressful for some people
                  </div>
                  <div v-if="!JSON.parse(questionResults.questionFour)" class="col-8 col-sm-4 ml-auto tinyFontSize ">
                      <router-link :to="{name: 'ConsentThirteen'}"> (Review Section) </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 text-center stencilBorder  black--text"> 
            <div class="row">
              <div class="col-2 col-sm-1 mr-2 verticalCenter">
                <img v-if="!JSON.parse(questionResults.questionFive)" src="../../../images/wrong-icon.png"> </img>
                <img v-else src="../../../images/check-mark.png"> </img>
              </div>
              <div class="col-9 col-sm-10">
                <div class="row lightLead xsmallFontSize" v-bind:class="!JSON.parse(questionResults.questionFive) ? 'red--text': 'lightLead' ">
                  QUESTION 5
                </div>
                <div class="row">
                  <div class="col-12 smallFontSize text-left pl-0"  v-bind:class="!JSON.parse(questionResults.questionFive) ? 'red--text': 'default' ">
                    I can pause / resume participating at any time
                  </div>
                  <div v-if="!JSON.parse(questionResults.questionFive)" class="col-8 col-sm-4 ml-auto tinyFontSize ">
                      <router-link :to="{name: 'ConsentThirteen'}"> (Review Section) </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>


    </div>

    <br>
    <br>
    <br>

    <div class="row white anchorBottom" style="height: inherit;">
        <v-btn v-on:click="$router.push({name: 'QuestionOne'}) " class="navyBlue mediumFontSize text--lower large white--text mx-auto col-md-3 text--normal" > Retake Quiz </v-btn>
    </div>
    

  </v-app>

</template>

<script>
import { requirements } from '../../../state_objects/requirements'
import { questionResults } from '../../../state_objects/questionResults'

export default {
  data () {
    return {
      questionResults: questionResults,
      requirements: requirements
    }
  }
}
</script>
