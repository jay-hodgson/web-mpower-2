<template>
  <div class="docked-layout">
    <MainNav/>
    <section class="smooth-scroller">
      <div class="container">
        <h2>Contact</h2>
        <p>For information about participating and questions around the study, please review the FAQ page. If you have additional questions or other queries, please send us a message.</p>

        <p class="button-item">
          <a class="join-button" href="mailto:PDApp@sagebionetworks.org">Send us a message</a>
        </p>

        <p>This study is sponsored by Sage Bionetworks, a 501(c)(3) nonprofit research organization located at 1100 Fairview Avenue North, Seattle, WA, 98109.</p>

        <p>mPower is a research study. The mPower app is a tool for research. The mPower study and the mPower app do not provide medical advice, diagnosis, or treatment of any kind. If you have questions about your health, talk to your healthcare team. Do not use the information provided in the mPower app, email correspondence, or website in place of advice from your healthcare team.</p>

        <p>Sage Bionetworks is not liable or responsible for any advice, course of treatment, diagnosis or any other information, services, or products you obtain through the app.</p>

        <p>If you have any questions at any time before, during, or after the study, you can contact:</p>

        <p><b>Scientific team</b><br>
        Lara Mangravite, PhD leads mPower. You can email Dr. Mangravite at <a href="mailto:PDApp@sagebionetworks.org">PDApp@sagebionetworks.org</a> or call her at 1-833-SAGEBIO (3246).</p>

        <p><b>Privacy</b><br>
        For questions, comments or requests regarding the privacy policy or our processing of your information, please contact: <a href="mailto:privacypolicy@sagebionetworks.org">privacypolicy@sagebionetworks.org</a>.

        <p><b>Technical support</b><br>
        Please contact our technical support team at <a href="mailto:PDApp@sagebionetworks.org">PDApp@sagebionetworks.org</a>.

        <p><b>Independent contact</b><br>
        The Western Institutional Review Board (WIRB) oversees the mPower study. Contact WIRB you have questions, concerns, or complaints about mPower. Contact WIRB if you have questions or concerns about your rights as a participant in mPower.</p>

        <p>Western Institutional Review Board® (WIRB®)</p>

        <p>1019 39th Avenue SE Suite 120 Puyallup, WA 98374-2115 <br>
        1-800-562-4789 or 1-360-252-2500 <br>
        <a href="mailto:Help@wirb.com">Help@wirb.com</a>.</p>

        <p>mPower is for research use only and does not provide medical advice, diagnosis or treatment</p>
      </div>
      <Footer/>
    </section>
  </div>
</template>

<script>
import MainNav from './MainNav.vue';
import Footer from './Footer.vue';

export default {
  name: 'Contact',
  components: { MainNav, Footer },
}
</script>

<style scoped>
.button-item {
  margin-top: 2.5rem;
  margin-bottom: 3.5rem;
}
</style>
