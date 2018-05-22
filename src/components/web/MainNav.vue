<template>
  <nav>
    <div class="left">
      <h1>mPower</h1>
    </div>
    <div class="center">
      <router-link to="/your-story">Your Story</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/team">Team</router-link>
    </div>
    <div class="right">
      <router-link class="join-button" to="/study/overview?start=true">Join</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNav"
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  box-shadow: 0 2px 3px 0 rgba(141, 141, 141, 0.5);
}
  nav > div {
    padding: 0.3rem;
  }
  .left {
    margin-left: 3vw;
  }
  .center {
    flex: 1;
    white-space: nowrap;
  }
    .center a {
      padding: 0.2rem 1vw;
    }
  .right {
    margin-right: 3vw;
  }
a.router-link-active {
  border-bottom: 2px solid #ffda8a;
  font-weight: bold;
}
@media screen and (max-width: 30em) {
  nav {
    display: block;
  }
  .left {
    text-align: center;
  }
  .center {
    display: flex;
    margin-left: 3vw;
    float: left;
    align-items: center;
    height: 10vw;
  }
  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 10vw;
  }
}
</style>
