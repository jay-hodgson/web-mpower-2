<template>

  <!--  DEPRECIATED PAGE- SHOULD BE REMOVED  -->
  <div class="page-overview">
    <div class="row progressBar">
    <div class="indicatorFilled offset">  </div>
    <div class="indicatorFilled offset one"> </div>
    <div class="indicatorFilled offset two" > </div>
    <div class="indicatorFilled offset three"> </div>
    <div class="indicatorFilled offset four"> </div> 
    <div class="indicatorFilled offset five" > </div>     
    </div>
    <br>
    <br>

    <div class="row">

      <!--<div class=" text-center col-12">
        <img src="../../../assets/check.png" class="img-fluid"  alt="image of a check marked circle">
      </div>-->

      <div class="col-12 text-center">
        <p class="greenText"> Congratulations, you're eligible! </p>
        <p class="lead tinyFontSize"> It's now time for consent, how does it work? </p>
      </div>
      <div class="col-12 col-sm-6 mx-auto">
        <p class="lead light tinyFontSize">
          There will be 13 sections in the consent process. These
          sections will help you to understand what is involved and how the study will
          work. After the consent introduction, there will be a short quiz on what
          you have learned about the study.
        </p>
        <br>
        <v-btn :to="{name: 'SubjectInterest'}" id="submit" class="text-capitalize large" light> Review Consent </v-btn>
      </div>
    </div>

  </div>

</template>


<script>
  export default {
    name: 'congratulations'
  }
</script>
