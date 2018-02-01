<template>
  <div>
    <MainNav/>
    <section>
      <div class="container">
        <h2>About the study</h2>
        <p>The elevateMS study, developed in collaboration by Sage Bionetworks (nonprofit) and Novartis Pharmaceuticals Corporation, monitors wellbeing and changes in selected symptoms of MS such as dexterity, balance or gait. The app lets you record your own story of living with or without active symptoms and allows you to securely share information with researchers. Sage Bionetworks developed the free elevateMS app to be a research tool that may also help you track your symptoms whenever you want. It is about you in real life. You are in charge.</p>

        <p>So long as you are 18 years old or older, live in the U.S. and have a personal iPhone (model 5 or newer with iOS 8 or later), then you can join elevateMS. You do not need to have MS to join this study and make a difference in the lives of people affected by MS.</p>
      </div>
    </section>

    <section>
      <div class="image container">
        <div class="image">
          <img src="/static/images/EligibilityAndConsent.svg">
        </div>
        <div class="text">
          <h3>Eligibility & consent</h3>
          <p>Once you have received confirmation of your eligibility, we will ask you to do an informed consent process. It takes about 20 minutes. We will also ask you to do a one-time health survey. It takes about 20 minutes.</p>
        </div>
      </div>
    </section>

    <section>
      <div class="image container">
        <div class="image-holder">
          <img src="/static/images/sage-logo.png">
          <img style="margin-top: -1rem" src="/static/images/robert-wood-johnson-foundation-logo.png">
        </div>
        <div class="text">
          <h3>Who is involved?</h3>
          <p>Life with Parkinson’s disease  isn’t a one size fits all. Everyone has unique experiences even though there are common symptoms. mPower is a tool for you to understand your Parkinson’s disease symptoms and the factors that impact you. Reflecting on your story over time may provide you with insights into your own story and overall wellness. </p>
        </div>
      </div>
    </section>

    <section>
      <div class="image container">
        <div class="image">
          <img style="margin-left: -.5rem; margin-top: -.5rem; margin-bottom: -.5rem" src="/static/images/join-the-study-image_2x.png">
        </div>
        <div class="text">
          <h3>Join the study</h3>
          <p>In just a minute you can see if you are eligible to participate in the mPower study. Find out now!</p>

          <p><router-link class="join-button" to="/study/overview?start=true">Join</router-link></p>
        </div>
      </div>
    </section>

    <Footer/>
  </div>
</template>

<script>
import MainNav from './MainNav.vue';
import Footer from './Footer.vue';

export default {
  name: 'About',
  components: { MainNav, Footer },
}
</script>