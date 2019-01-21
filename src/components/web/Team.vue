<template>
  <div class="docked-layout">
    <MainNav/>
    <section class="smooth-scroller">
      <h2>Who is involved?</h2>
      <div class="image container">
        <div class="image">
          <div class="portrait" style="background-image: url(/static/images/lara-mangravite.jpg); 
            background-size: 100%; background-repeat: no-repeat; background-position: 0px -20px"></div>
          <div class="name">Lara</div>
        </div>
        <div class="text">
          <p>Lara Mangravite, PhD is President of Sage Bionetworks, a Seattle-based nonprofit research organization that builds open systems to advance biomedical science. She uses technology and policy to improve our understanding of the impact of disease on people during their daily life outside of the research clinic. Dr. Mangravite obtained a BS in Physics from the Pennsylvania State University and a PhD in Pharmaceutical Chemistry from the University of California, San Francisco.</p>
        </div>
      </div>
      <div class="last image container">
        <div class="image">
          <div class="portrait" style="background-image: url(/static/images/larsson-omberg.png);
            background-size: 100%; background-repeat: no-repeat"></div>
          <div class="name">Larsson</div>
        </div>
        <div class="text">
          <p>Being driven by understanding the diversity of which diseases express themselves and the individual experiences through data, Dr. Omberg has established a research agenda that focuses on two areas—using remote sensors and mobile phones to measure disease; and collaborative genomic research.  As the head of the Systems Biology group at Sage Bionetworks  he has been involved in over two dozen mobile health studies ranging from Chronic Anemia to Multiple Sclerosis.  He currently leads several efforts to study Parkinson’s disease using mobile phones and wearables.</p>
        </div>
      </div>

      <section></section>
      <section>
        <div class="image container">
          <div class="image">
            <BridgeImage src="/static/images/mpower%20data%20and%20analysis.svg"/>
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
            <BridgeImage class="hidden-image" src="/static/images/mpower%20data%20and%20analysis.svg"/>
          </div>
          <div class="text">
            <h3>Learn from the research community</h3>
            <p>There are now over 150 approved projects leveraging the data shared broadly by mPower study participants. Take a look at what others are proposing to do, and reach out to us or any of the researchers who you may be interested in working with!</p>

            <p><a href="https://synapse.org/" class="join-button">Join Synapse</a></p>
          </div>
        </div>
      </section>
      <Footer/>
    </section>
  </div>
</template>

<script>
import MainNav from './MainNav.vue';
import Footer from './Footer.vue';
import BridgeImage from '../BridgeImage.vue';

export default {
  name: 'Team',
  components: { MainNav, Footer, BridgeImage },
}
</script>

<style scoped>
.image.container .image {
  align-self: flex-start;
  padding-top: .5rem;
}
  .last {
    margin-bottom: 1rem;
  }
  .portrait {
    width: 9rem;
    height: 9rem;
    margin: 0 auto;
    border-radius: 50%;
    background-color: #e5e5e5;
  }
  .name {
    margin-top: .25rem;
    text-align: center;
    font-weight: bold;
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
