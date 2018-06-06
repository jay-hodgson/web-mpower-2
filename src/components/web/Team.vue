<template>
  <div>
    <MainNav/>
    <div class="container">
      <h2>Who is involved?</h2>
      <p>&nbsp;</p>

      <div class="team-members">
        <div class="member">
            <div class="portrait" style="background-image: url(/static/images/lara-mangravite.jpg); 
              background-size: 100%; background-repeat: no-repeat; background-position: 0px -20px"></div>
            <div class="name">Lara Mangravite</div>
        </div>
        <div class="member">
            <div class="portrait" style="background-image: url(/static/images/larsson-omberg.png);
              background-size: 100%; background-repeat: no-repeat"></div>
            <div class="name">Larsson Omberg</div>
        </div>
      </div>
    </div>

    <section>
      <div class="image container">
        <div class="image">
          <img src="/static/images/mpower%20data%20and%20analysis.svg">
        </div>
        <div class="text">
          <h3>mPower Data and Analysis</h3>
          <p>It is the hope of Sage Bionetworks that by participants making their data available to qualified researchers worldwide, that we can seed a community who will work together and share insights into Parkinson symptoms and modulators. Synapse Certified Users with verified profiles may request access to the mPower data resource for research to benefit human health. </p>
        </div>
      </div>
    </section>

    <section>
      <div class="image container">
        <div class="image">
          <img class="hidden-image" src="/static/images/partner-icon.png">
        </div>
        <div class="text">
          <h3>Learn from the research community</h3>
          <p>There are now xx approved projects leveraging the data shared broadly by mPower study participants. Take a look at what others are proposing to do, and reach out to us or any of the researchers who you may be interested in working with!</p>

          <p><a href="https://synapse.org/" class="join-button">Join</a></p>
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
  name: 'Team',
  components: { MainNav, Footer },
}
</script>

<style scoped>
.team-members {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.member {
  width: 10rem;
  margin: 0 auto 2rem auto;
}
  .portrait {
    width: 8rem;
    height: 8rem;
    margin: 0 auto;
    border-radius: 50%;
    background-color: #e5e5e5;
  }
  .name {
    text-align: center;
    font-size: .9rem;
  }
.hidden-image {
   visibility: hidden;
}
@media screen and (max-width: 50em) {
  .hidden-image {
    display: none;
  }
}
</style>
