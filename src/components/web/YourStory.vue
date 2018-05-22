<template>
  <div>
    <MainNav/>
    <section>
      <div class="container">
        <h2>Your Story</h2>
        <p>Living with Parkinson’s disease is an ever-changing story. Parkinson’s disease can bring on symptoms and relapses unexpectedly. Some days are easy, while other days your symptoms may consume your story.</p>
        <div class="video">
          <img src="/static/images/your-story-image_2x.png">
        </div>
      </div>
    </section>

    <section>
      <div class="image container">
        <div class="image">
          <img src="/static/images/help-us-understand-image_2x.png">
        </div>
        <div class="text">
          <h3>Help us understand</h3>
          <p>No two people are alike when it comes to living with Parkinson’s disease. The mPower study is an effort to better understand what may trigger flare up of Parkinson’s symptoms? In research, every story counts. Whether you have PD, are touched by someone who has or has had PD or you want to help, we invite you to participate in this study and share your story.</p>
        </div>
      </div>
    </section>

    <section>
      <div class="image container">
        <div class="image">
          <img src="/static/images/telling-your-story-image_2x.png">
        </div>
        <div class="text">
          <h3>Telling your story</h3>
          <p>Life with Parkinson’s disease  isn’t a one size fits all. Everyone has unique experiences even though there are common symptoms. mPower is a tool for you to understand your Parkinson’s disease symptoms and the factors that impact you. Reflecting on your story over time may provide you with insights into your own story and overall wellness. </p>
        </div>
      </div>
    </section>

    <section>
      <div class="image container">
        <div class="image">
          <img src="/static/images/join-the-study-image_2x.png">
        </div>
        <div class="text">
          <h3>Join the study</h3>
          <p>In just a minute you can see if you are eligible to participate in the mPower study. Find out now!</p>

          <p style="margin-top: 2rem">
            <router-link class="join-button" to="/study/overview?start=true">Join</router-link>
          </p>
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
  name: 'YourStory',
  components: { MainNav, Footer },
}
</script>

<style scoped>
</style>
