<template>
  <div class="consent-viewer">
    <div ref="consentDoc" class="consent-doc">
      <section class="preamble-section">
        <div class="preamble container">
          <div>
            <h2>mPower 2.0</h2>
            <h3>Consent Signature</h3>
          </div>
        </div>
      </section>
      <section></section> <!-- flip zebra striping -->
      <section>
        <div class="assertion container">
          I know and agree that:
        </div>
      </section>
      <section>
        <div class="will-use container">
          <div>I will use the Mpower app to answer questions and do short physical and cognitive activities. The app will help me track my symptoms, triggers and medications.</div>
        </div>
      </section>
      <section>
        <div class="privacy container">
          <div>My study data and personal information (Data) will be encrypted and transferred from my phone. It will be stored in Sage Bionetworks’ secure cloud-based database.</div>
        </div>
      </section>
      <section>
        <div class="research container">
          <div>My Data will be used for research as described in the study information.</div>
        </div>
      </section>
      <section>
        <div class="sharing-scope container">
          <div>I have the option to share my coded study data for future research. It is up to me. I can say yes or no.</div>
        </div>
      </section>
      <section>
        <div class="risks-benefits container">
          <div>The main risk of participating in mPower study is to my privacy. This is risk is low but not zero. The main benefit is seeing my trends over time.</div>
        </div>
      </section>
      <section>
        <div class="not-medical container">
          <div>mPower is a research study. The mPower app shouldn’t be used for diagnosis or treatment decisions.</div>
        </div>
      </section>
      <section>
        <div class="unpaid container">
          <div>I will not get paid for participating in this study. I will not receive any profit from use of my Data in this or future research study.</div>
        </div>
      </section>
      <section>
        <div class="voluntary container">
          <div>I can withdraw (quit) at any time for any reason. There is no penalty if I withdraw.</div>
        </div>
      </section>
    </div>
    <!--
    <div class="consent-max">
      <div @mousedown="toggleMax" class="min-max-control opener"></div>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: "ConsentSummaryViewer",
  methods: {
    toggleMax() {
      var div = document.createElement("div");
      div.classList.add("maximized");
      var toggle = document.createElement("div");
      toggle.classList.add("min-max-control");
      toggle.classList.add("closer");
      toggle.addEventListener(
        "mousedown",
        function() {
          div.parentNode.removeChild(div);
        },
        false
      );
      div.appendChild(toggle);
      div.appendChild(this.$refs.consentDoc.cloneNode(true));
      document.body.appendChild(div);
    }
  }
};
</script>

<style scoped>
.consent-viewer {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.consent-doc {
  padding: 0;
  font-size: 1rem;
  height: 100%;
  overflow-y: scroll;
}
.container {
  padding: .75rem;
}
.consent-doc h2, .consent-doc h3 {
  text-align: left;
}
.container {
  box-sizing: border-box;
}
.container > div {
  background-size: 4rem;
  padding-left: 5rem;
  min-height: 4rem;
  box-sizing: border-box;
  background-position: top left;
  background-repeat: no-repeat;
}
.preamble-section {
  background-color: #51417B;
  padding: 1rem 0 0 0;
}
.preamble > div {
  background-image: url('/static/images/create%20your%20story.svg');
}
.preamble h2, .preamble h3 {
  color: white;
  margin: 0;
}
.assertion {
  color: #51417B;
}
.will-use > div {
  background-image: url('/static/images/Comprehension.svg');
}
.privacy > div {
  background-image: url('/static/images/Comprehension.svg');
}
.research > div {
  background-image: url('/static/images/Comprehension.svg');
}
.sharing-scope > div {
  background-image: url('/static/images/Comprehension.svg');
}
.risks-benefits > div {
  background-image: url('/static/images/Comprehension.svg');
}
.not-medical > div {
  background-image: url('/static/images/Comprehension.svg');
}
.unpaid > div {
  background-image: url('/static/images/Comprehension.svg');
}
.voluntary > div {
  background-image: url('/static/images/Comprehension.svg');
}
</style>
