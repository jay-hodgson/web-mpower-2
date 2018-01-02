<template>
    <v-app class="white">
        <p class="text-center baseFontSize"> Who is involved? </p>
        <div class="row">
            <div class="mx-auto col-sm-8">
                <p class="mx-auto default smallFontSize">
                    A little bit of text about who these people are. A little bit of text about who these people are. A little bit of text about who these people are.
                </p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-8 mx-auto">
                <div class="row">
                    <div class="col-4 col-sm-2 mx-auto text-center oval">
                        Name 1
                    </div>
                    <div class="col-4 col-sm-2 mx-auto text-center oval">
                        Name 2
                    </div>
                    <div class="col-4 col-sm-2 mx-auto text-center oval">
                        Name 3
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-md-8 mx-auto">
                <div class="row">
                    <div class="col-4 col-sm-2  mx-auto text-center oval">
                        Name 1
                    </div>
                    <div class="col-4 col-sm-2  mx-auto text-center oval">
                        Name 2
                    </div>
                    <div class="col-4 col-sm-2  mx-auto text-center oval">
                        Name 3
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-5 grayBackground">

            <div class="mx-auto col-12 order-1 col-sm-4 order-lg-1 ">
                <img class="pl-lg-5 img-fluid fittedImg" src="../../images/scientists-icon.png">
            </div>

            <div class="mx-auto mt-0  p-4 col-12 col-lg-6 order-2 order-lg-2">
                <p class="darkPurpleText baseFontSize"> Scientists Make Discoveries</p>
                <p class="smallFontSize default">
                    When you use the app you contribute to research on MS. By combining the information from many people who are using the app, researchers expect to find patterns. The information you provide through the elevateMS app gets encrypted on the phone to protect your privacy. As you participate over time, you help create a powerful dataset that may lead to scientific breakthrough and to new ways to help people with MS improve their well being. You do not need to have MS to participate. This study will last about one year. We’d like you to participate for three consecutive months or longer if you can.
                </p>
            </div>

        </div>

        <div class="row">
            <div class="mx-auto col-12 order-1 col-sm-4 order-lg-1 ">
                <img class="pl-lg-5 img-fluid fittedImg" src="../../images/partner-icon.png">
            </div>

            <div class="mx-auto mt-0 pt-0  col-12 col-lg-6 order-2 order-lg-2 mt-5">
                <p class="darkPurpleText baseFontSize"> Interested in becoming a partner?</p>
                <p class="mediumFontSize default">
                    Join the Synapse community. Some text about how you will get the data.
                </p>
                <br>
                <v-btn  :to="{name: 'OverviewEligibility'}" class="joinButton col-auto navyBlue text-capitalize white--text"> Join </v-btn>
                </p>
            </div>

        </div>

        <br>
        <br>
        <br>

        </div>

    </v-app>
</template>

<style>
    .oval {
        height: 150px;
        border-radius: 150px;
        width: 100px;
        /*-moz-border-radius: 100px;
        -webkit-border-radius: 100px;*/
        background-color:  #d8d8d8;
    }
</style>
