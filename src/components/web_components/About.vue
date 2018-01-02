<template>
    <v-app class="white">
        <p class="text-center baseFontSize"> About the study </p>
        <div class="row">
            <div class="mx-auto col-sm-8">
            <p class="mx-auto default smallFontSize">
                The elevateMS study, developed in collaboration by Sage Bionetworks (nonprofit) and Novartis
                Pharmaceuticals Corporation, monitors wellbeing and changes in selected symptoms of MS such 
                as dexterity, balance or gait.

                The app lets you record your own story of living with or without active symptoms and allows you to securely share information with researchers.
                Sage Bionetworks developed the free elevateMS app to be a research tool that may also help you track your symptoms whenever you want. 
                It is about you in real life. You are in charge.

                <br>
                <br>
                So long as you are 18 years old or older, live in the U.S.
                and have a personal iPhone (model 5 or newer with iOS 8 or later), then you can join elevateMS. You do not need to have MS to join this study 
                and make a difference in the lives of people affected by MS.
            </p>    
            </div>
        </div>

        <br>
        <br>

        <div class="row grayBackground">

            <div class="col-lg-3 mx-auto col-4 mr-2 mt-md-5 pt-md-5 mx-lg-print">

                <div class="row ml-sm-5">
                    <div class="col yellowTop yellowBottom">
                        <p class="smallFontSize mb-1 darkPurpleText font-weight-bold"> Step 1 </p>
                        <p class="smallFontSize mb-1 darkPurpleText font-weight-bold"> Eligibility & consent </p>
                    </div>
                </div>
                <div class="row ml-sm-5">
                    <div class="col yellowBottom mx-auto">
                        <p class="smallFontSize mb-1 darkPurpleText"> Step 2 </p>
                        <p class="smallFontSize mb-1 darkPurpleText"> Download the app </p>
                    </div>
                </div>
                <div class="row ml-sm-5">
                    <div class="col yellowBottom mx-auto">
                        <p class="smallFontSize mb-1 darkPurpleText"> Step 3 </p>
                        <p class="smallFontSize mb-1 darkPurpleText"> Perform simple tasks </p>
                    </div>
                </div>
                <div class="row ml-sm-5">
                    <div class="col yellowBottom mx-auto">
                        <p class="smallFontSize mb-1 darkPurpleText"> Step 4 </p>
                        <p class="smallFontSize mb-1 darkPurpleText"> Track your health </p>
                    </div>
                </div>

            </div>

            <div class="ml-lg-0 mr-0 col-6 pr-lg-0 col-lg-auto mx-auto  p-md-5">
                <img class="img-fluid scaledPhone" src="../../images/dark-blue-smartphone.png"> </img>
            </div>

            <div class="col-lg-4 ml-lg-0  mt-md-5 pt-md-5 mx-auto">
                <p class="darkPurpleText lato baseFontSize "> Eligibility & Consent </p>
                <p class="mediumFontSize default">
                    Once you have received confirmation of your eligibility, we will ask you to do
                    an informed consent process. It takes about 20 minutes. We will also ask you to do
                    a one-time health survey. It takes about 20 minutes.
                </p>
            </div>
        </div>

        <br>

         <div class="row ">
            <div class="mx-auto col-12 order-1 col-sm-4 order-lg-1 ">
                <img class="pl-lg-5 img-fluid fittedImg" src="../../images/sage-logo.png">
                <img class="pl-lg-5 img-fluid fittedImg" src="../../images/robert-wood-johnson-foundation-logo.png">
            </div>
            <div class="mx-auto mt-0 pt-0  col-12 col-lg-6 order-2 order-lg-2">
                <p class="darkPurpleText baseFontSize"> Who is Involved? </p>
                <p class="mediumFontSize default"> 
                    Life with Parkinson’s disease  isn’t a one size fits all.
                    Everyone has unique experiences even though there are common symptoms.
                    mPower is a tool for you to understand your Parkinson’s disease symptoms 
                    and the factors that impact you. 
                    Reflecting on your story over time may provide you with insights into your own story and overall wellness. 
                </p>
            </div>
        </div>



         <div class="row grayBackground">
            <div class="mx-auto col-12 order-1 col-sm-4 order-lg-1 ">
                <img class="pl-lg-5 img-fluid fittedImg" src="../../images/join-the-study-image_2x.png">
            </div>
            <div class="mx-auto pt-lg-5 mt-lg-5 mt-5  col-12 col-lg-6 order-2 order-lg-2">
                <p class="darkPurpleText  baseFontSize"> Join the study </p>
                <p class="mediumFontSize default"> In just a minute you can see if you are eligible to participate in the mPower study. Find out now! 
                <br>
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
    .yellowBottom {
        border-bottom: solid;
        border-bottom-color: #ffda8a;
    }

    .yellowTop {
        border-top: solid;
        border-top-color: #ffda8a;
    }

    .fittedImg {
        width: 380px;
    }


    @media(max-width: 760px) {
        .scaledPhone {
            width: 125px;
        }
    }

</style>
