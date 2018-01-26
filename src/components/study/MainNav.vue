<template>
  <nav>
    <div class="left">
      <router-link v-show="showBack" to="/study/overview">{{title}}</router-link>
    </div>
    <div class="center">
      <span class="eligibility icon" v-bind:class="{ grayscale: currentStep > Store.UNSTARTED }"></span>
      <span class="consent icon" v-bind:class="{ grayscale: currentStep > Store.ELIGIBILITY_DONE }"></span>
      <span class="quiz icon" v-bind:class="{ grayscale: currentStep > Store.CONSENT_DONE }"></span>
      <span class="sign icon" v-bind:class="{ grayscale: currentStep > Store.QUIZ_DONE }"></span>
      <span class="registration icon" v-bind:class="{ grayscale: currentStep > Store.SIGN_DONE }"></span>
    </div>
    <div class="right">
      <router-link to="/study/help" class="full help-link">Need Help?</router-link>
      <router-link to="/study/help" class="short help-link">?</router-link>
    </div>
  </nav>
</template>

<script>
import Store from "../store";

export default {
  name: "MainNav",
  props: {
    title: {
      type: String
    },
    showBack: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentStep: Store.UNSTARTED,
      Store: Store
    };
  },
  created() {
    this.currentStep = this.$store.getCurrentStep();
  }
};
</script>

<style scoped>
nav {
  background-image: linear-gradient(
    86deg,
    #473b7b,
    #3584a7 76%,
    hsl(173, 64%, 51%)
  );
  background-blend-mode: multiply;
  box-shadow: 0 2px 3px 0 rgba(141, 141, 141, 0.5);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
}
.left a {
  background: transparent url(/static/images/back-to-home-arrow.png) 3vw center
    no-repeat;
  background-size: 3vw 5.16vw;
  padding-left: 8vw;
  color: white;
  font-size: 4.5vw;
  display: block;
}
.center {
  display: flex;
  flex: 1;
  justify-content: flex-end;
}
.right {
  border-left: 1px solid white;
  display: flex;
  margin: 0.6rem;
  padding-left: 0.6rem;
}

.icon {
  display: block;
  width: 2rem;
  height: 2rem;
  margin: 1vw 0 1vw 1vw;
  border-radius: 50%;
}
  .eligibility {
    background: white url(/static/images/eligibility-icon.png) center no-repeat;
    background-size: 90% 80%;
  }
  .consent {
    background: white url(/static/images/consent-icon.png) center no-repeat;
    background-size: 100% 80%;
  }
  .quiz {
    background: white url(/static/images/quiz-onboarding-icon.png) center
      no-repeat;
    background-size: 100% 90%;
  }
  .sign {
    background: white url(/static/images/sign-consent-icon.png) center no-repeat;
    background-size: 100% 90%;
  }
  .registration {
    background: white url(/static/images/number-icon.png) center no-repeat;
    background-size: 100% 90%;
  }
.help-link {
  color: #3b4a63;
  background-color: white;
  font-size: 0.7rem;
  height: 2.2rem;
  line-height: 2.2rem;
  padding: 0 0.5rem;
}
  .full.help-link {
    border-radius: 1.5rem;
  }
  .short.help-link {
    border-radius: 50%;
    width: 2.2rem;
    text-align: center;
    padding: 0;
    font-weight: bold;
    font-size: 1.1rem;
    display: none;
  }
.grayscale {
  opacity: 0.4;
  filter: gray;
  filter: grayscale(1);
}
@media screen and (max-width: 30em) {
  .full.help-link {
    display: none;
  }
  .short.help-link {
    display: block;
  }
  .icon, .help-link {
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    padding: 0;
    border-radius: 50%;
  }
  .short.help-link {
    width: 1.2rem;
    line-height: 1.2rem;
  }
}
@media screen and (min-width: 45em) {
  .left a {
    font-size: 32px;
  }
}
</style>
