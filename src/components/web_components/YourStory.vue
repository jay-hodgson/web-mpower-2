<template>
    <v-app class="page-overview">
        
        <div class="text-center ">
            <p class="darkPurpleText baseFontSize"> Your Story </p>
        </div>
    
        <div class="row ">
            <p class="mediumFontSize mx-auto default col-lg-8 "> Living with Parkinson’s disease is an ever-changing story. Parkinson’s disease can bring on symptoms and relapses unexpectedly. Some days are easy, while other days your symptoms may consume your story.
            </p>
        </div>
    
        <div class="row">
            <div class="col-sm-auto mx-auto">
                <img class="yourStory img-fluid" src="../../images/your-story-image.png"> </img>
            </div>
        </div>
    
        <div class="row grayBackground pt-5 pb-5">
            <div class="mx-auto text-center col-12 order-1 col-sm-auto order-lg-1 ">
                <img class="img-fluid helpUnderstand " src="../../images/help-us-understand-image_2x.png"> </img>
            </div>
            <div class=" col-12 col-lg-6 order-2 order-lg-2">
                <p class="darkPurpleText baseFontSize"> Help us Understand </p>
                <p class="mediumFontSize default"> No two people are alike when it comes to living with Parkinson’s disease. The mPower study is an effort to better understand what may trigger flare up of Parkinson’s symptoms? In research, every story counts. Whether you have PD, are touched by someone who has or has had PD or you want to help, we invite you to participate in this study and share your story.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="mx-auto text-center col-12 order-1 col-sm-auto order-lg-1 ">
                <img class="img-fluid  fittedImg" src="../../images/telling-your-story-image.png">
            </div>
            <div class="pt-lg-2 mt-lg-3  col-12 col-lg-6 order-2 order-lg-2">
                <p class="darkPurpleText baseFontSize"> Telling your Story </p>
                <p class="mediumFontSize default"> Life with Parkinson’s disease isn’t a one size fits all. Everyone has unique experiences even though there are common symptoms. mPower is a tool for you to understand your Parkinson’s disease symptoms and the factors that impact you. Reflecting on your story over time may provide you with insights into your own story and overall wellness.
                </p>
            </div>
        </div>
        <div class="row grayBackground">
            <div class="mx-auto text-center col-4 order-1 col-sm-4 col-lg-auto order-lg-1 ">
                <img class="pl-lg-5 img-fluid fittedImg" src="../../images/join-the-study-image_2x.png">
            </div>
            <div class="pt-lg-3 mt-lg-3 mt-3 col-12 col-sm-6 order-2 order-lg-2">
                <p class="darkPurpleText baseFontSize"> Join the study </p>
                <p class="mediumFontSize default"> In just a minute you can see if you are eligible to participate in the mPower study. Find out now! 
                <br>
                <v-btn :to="{name: 'OverviewEligibility'}" class="joinButton col-auto navyBlue text-capitalize white--text"> Join </v-btn>
                </p>
                <br>
                <br>
            </div>
        </div>
    
    </v-app>
</template>

<style lang="scss">

.yourStory {
    width: 700px;
}

button:focus {
    opacity: 0.8;
}

.mr-7 {
    padding-left: 25%;
    padding-right: 25%;
}

.helpUnderstand {
    width: 472px;
    padding-left: 8%;
    padding-right: 8%;
}

.paperImg {
    width: 472px;
}

</style>
