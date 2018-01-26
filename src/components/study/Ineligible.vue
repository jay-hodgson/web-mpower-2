<template>
  <div>
    <nav>
      <div>Eligibility</div>
      <a href="#/study/help">Need help?</a>
    </nav>    
    <div class="container">
      <div class="intro">
        <h2>Sorry, you are not eligible</h2>
        <p>You must be at least 18, live in the US, and be comfortable using a smartphone to participate. </p>
        <p>You can still help by telling others about the study</p>
      </div>

      <div class="share-icons">
        <img src="http://via.placeholder.com/96x96">
        <img src="http://via.placeholder.com/96x96">
        <img src="http://via.placeholder.com/96x96">
        <img src="http://via.placeholder.com/96x96">
      </div>

      <div class="back-button">
        <a href="/">Go back</a>
      </div>
    </div>
  </div>
</template>

<script>
import MainNav from "./MainNav.vue";

export default {
  name: "StudyOverview",
  components: { MainNav }
};
</script>

<style scoped>
nav {
  color: white;
  background-image: linear-gradient(
    86deg,
    #473b7b,
    #3584a7 76%,
    hsl(173, 64%, 51%)
  );
  background-blend-mode: multiply;

  display: flex;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
}
  nav a {
    margin: .5rem 2rem;
    background-color: white;
    padding: .4rem 1rem;
    border-radius: 1rem;
    font-size: .7rem;
  }
nav > div {
  height: 2.2rem;
  line-height: 2.2rem;
  padding: 0.25rem 1rem;
}
.intro {
  padding: 0 0 1.5rem 0;
}
.intro h2,
.into h3,
.intro p {
  color: white;
  line-height: 1.3;
}
.intro h2 {
  font-size: 1.3rem;
}
.intro p {
  font-size: 0.9rem;
  text-align: center;
}
.share-icons {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
  .share-icons img {
    width: 11vw;
    height: 11vw;
  }
.back-button {
  margin-top: 5rem;
  margin-bottom: 3.5rem;
  text-align: center;
}
  .back-button a {
    background-color: white;
    border-radius: 6px;
    padding: 1rem 3rem;
  }
</style>
