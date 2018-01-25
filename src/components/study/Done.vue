<template>
  <div>
    <nav>
      <div>Welcome</div>
			<router-link to="/study/help">Need help?</router-link>
    </nav>
    <div class="container">
			<div class="intro">
				<img src="/static/images/sms-mobile-phone-icon-onboarding.png">
				<h2>The link is on its way to your mobile phone! </h2>

				<p>We sent the link via a SMS to {{phone}}.<br>
				<router-link style="color:white; font-size:.8rem" to="/study/registration">(change mobile number)</router-link>

				<p>The link expires in 4 hours, so be sure to install the app soon.</p>

				<h2>Go check your SMS messages!</h2>
			</div>
    </div>
  </div>
</template>

<script>
import MainNav from "./MainNav.vue";
import store from "../onboarding_store";

export default {
  name: "Done",
  components: { MainNav },
  store: store,
  data() {
    return {
			phone: this.$store.getPhone()
		};
	}
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
img {
	max-width: 30%; 
	display: block; 
	margin: 2rem auto;
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
.back-button {
  margin-top: 5rem;
  text-align: center;
}
  .back-button a {
    background-color: white;
    border-radius: 6px;
    padding: 1rem 3rem;
  }
</style>
