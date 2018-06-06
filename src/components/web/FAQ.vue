<template>
  <div>
    <MainNav/>
    <div class="container">
      <h2>Frequently asked questions</h2>

      <p><b>What is “mPower”?</b><br>
      mPower is an iPhone app-based study designed to monitor and understand the causes of variations in symptoms of Parkinson disease (ParkinsonmPower.org). Living with Parkinson disease means coping with symptoms that change daily. Yet these daily changes are not tracked frequently enough. The Parkinson mPower app will use questionnaires, sensor data from your phone, and optional wearable device data to help you track your condition 24x7, allowing you to review trends and share this information with researchers.</p>

      <p><b>Who is eligible to participate in mPower?</b><br>
      Anyone over the age of 18 who lives in the US and has a personal iPhone is eligible to take part in the mPower research study in the US. Sage is working to broaden the scope of mPower to individuals in other countries.</p>

      <p><b>I don’t have Parkinson disease. Can I participate in mPower?</b><br>
      Yes! Participation from volunteers who do not have Parkinson disease will enable researchers to compile greatly needed, age-matched control data.</p>

      <p><b>Who is running the mPower study?</b><br>
      mPower is run by Sage Bionetworks, a nonprofit research organization. Sage president Lara Mangravite, PhD, is the study’s principal investigator.</p>

      <p><b>Will I have access to my data?</b><br>
      Yes! You will be able to see trends in your data within the study app, and in the future you will be able to request a download of all your study data at this website. </p>

      <p><b>Who else will have access to my data?</b><br>
      This study is unique in that it gives you the choice of how to share your data. You can elect to share your coded study data (without your name or directly identifying information) with the study team and research partners only, or to share more broadly with other qualified researchers worldwide who registered with Synapse, Sage’s research platform. You can set your data sharing options during the enrollment process within the app and/or anytime thereafter on the app settings.</p>

      <p>For regulatory purposes, your study data, account information and signed consent form may also be reviewed by the US Department of Health and Human Services agencies, Office for Human Research Protection, and other agencies as required by law for verification of the research procedure and data, in addition to the Institutional Review Board who monitors the safety, effectiveness and conduct of the research being conducted.</p>

      <p><b>How is my privacy protected?</b><br>
      We are committed to protecting your privacy. Except as required by law, you will not be identified by your name or by any other direct personal identifier. Your contact information, including your name and e-mail address will be stored separately from the study data. We will use a random code number instead of your name on all your study data. This code cannot be used to directly re-identify you. Information about the code will be kept in a secure system. Only the study organizers and some IT staff will have the key to associate your coded study data to your name and account information. Your coded study data (without your name) will be encrypted and stored on a secure cloud server to prevent improper access. Sage or anyone else affiliated with mPower will never sell, rent, or lease your contact information. The mPower app does NOT access your personal contacts, other applications, text message content, or Web sites visited.</p>

      <p><b>Will researchers contact me any other way, such as by email or phone?</b><br>
      You will mostly receive notifications through the app. Occasionally, researchers may also send email announcements participants.</p>

      <p><b>I have a question that isn’t answered in this FAQ. Who do I contact?</b><br>
      If you have further questions that aren’t addressed here contact the mPower study by email at EMAIL or call toll free xxx-xxx-xxxx</p>

      <p><b>If I take part, will I get medical treatment or health advice?</b><br>
      mPower is a research study. You will not get medical treatment or health advice if take part. If you have questions about your health, please see your doctor.</p>

      <p><b>Will this affect my insurance or medical services?</b><br>
      mPower is an observational study. It is not a clinical trial. We will not be asking you to change what you do or take medication as part of this study. It is not medical treatment. If you have questions about your health, please see your regular doctor.</p>

      <p><b>How is my privacy protected?</b><br>
      Your privacy is very important to us. We will take great care to protect it.</p>

      <p>Your study data will be encrypted on your phone. Unauthorized people will not be able to access your study data on your phone easily. We will separate your study data from the account information that identifies you. Your account information will not be stored with your study data.</p>

      <p>Your study data will not be labeled with your name or other information that directly identifies you. We will label it with a random code. There will be a master list linking the codes to names, but we will keep it separate and secure. All information we have about you will be stored on protected computers. We will limit and keep track of who sees the information. We will tell you if there is a data breach. Apple Health Kit is the only app on your phone that we will access. We will not access your contacts, photos, texts, email, or browsing history.</p>

      <p><b>How will I benefit from this research?</b><br>
      mPower is a tool you can use to document appointments and treatment related to chronic anemia. You may find this is helpful. The Performance section shows your activity results over time, and this may provide additional insights into your disease.</p>

      <p><b>I enrolled in the study, but I did not get the link via a sms message on my smartphone. What should I do?</b><br>
      First check to see if your phone has signal and that the airplane mode is turned off. If you do not see it the message then you can have your link resent to your smartphone. </p>

      <p><b>I am already enrolled in the study, but I have a new phone. What can I do to continue being part of the mPower study?</b><br>
      Go to the iTunes store and download mPower (link). Log in by entering your smartphone number and tap on “request magic link” button. New information will be added to your existing study information.</p>

      <p><b>My question isn’t answered here. Can I talk to someone?</b><br>
      Yes, we are happy to answer your questions by phone (number) or email (address).</p>
    </div>
    <Footer/>
  </div>
</template>

<script>
import MainNav from './MainNav.vue';
import Footer from './Footer.vue';

export default {
  name: 'FAQ',
  components: { MainNav, Footer },
}
</script>
