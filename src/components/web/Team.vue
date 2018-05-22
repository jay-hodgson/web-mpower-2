<template>
  <div>
    <MainNav/>
    <div class="container">
      <h2>Who is involved?</h2>
      <p>A little bit of text about who these people are.A little bit of text about who these people are. A little bit of text about who these people are.</p>

      <div class="team-members">
        <div class="member">
            <div class="portrait" style="background-image: url(https://i1.sndcdn.com/artworks-000034202197-02d7d2-t500x500.jpg)"></div>
            <div class="name">Name</div>
        </div>
        <div class="member">
            <div class="portrait" style="background-image: url(http://somosruidosa.com/wp-content/uploads/2017/05/Le-Butcherettes.png)"></div>
            <div class="name">Name</div>
        </div>
        <div class="member">
            <div class="portrait" style="background-image: url(https://i1.sndcdn.com/artworks-000034202197-02d7d2-t500x500.jpg)"></div>
            <div class="name">Name</div>
        </div>
        <div class="member">
            <div class="portrait" style="background-image: url(http://somosruidosa.com/wp-content/uploads/2017/05/Le-Butcherettes.png)"></div>
            <div class="name">Name</div>
        </div>
        <div class="member">
            <div class="portrait" style="background-image: url(https://i1.sndcdn.com/artworks-000034202197-02d7d2-t500x500.jpg)"></div>
            <div class="name">Name</div>
        </div>
        <div class="member">
            <div class="portrait" style="background-image: url(http://somosruidosa.com/wp-content/uploads/2017/05/Le-Butcherettes.png)"></div>
            <div class="name">Name</div>
        </div>
      </div>
    </div>

    <section>
      <div class="image container">
        <div class="image">
          <img src="/static/images/scientists-icon.png">
        </div>
        <div class="text">
          <h3>Scientists make discoveries</h3>
          <p>When you use the app you contribute to research on MS. By combining the information from many people who are using the app, researchers expect to find patterns. The information you provide through the elevateMS app gets encrypted on the phone to protect your privacy. As you participate over time, you help create a powerful dataset that may lead to scientific breakthrough and to new ways to help people with MS improve their well being. You do not need to have MS to participate. This study will last about one year. We’d like you to participate for three consecutive months or longer if you can.</p>
        </div>
      </div>
    </section>

    <section>
      <div class="image container">
        <div class="image">
          <img src="/static/images/partner-icon.png">
        </div>
        <div class="text">
          <h3>Interested in becoming a partner?</h3>
          <p>Join the Synapse community. Some text about how you will get the data.</p>

          <p><a href="mailto:" class="join-button">Join Study Team</a></p>
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
    background-size: contain;
  }
  .name {
    text-align: center;
    font-size: .9rem;
  }
</style>
