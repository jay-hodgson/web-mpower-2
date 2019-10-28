<!-- Same document as Privacy Policy, only without a header or footer so it can be embedded
  in the iOS app. -->
<template>
  <div class="docked-layout">
    <section class="smooth-scroller">
      <PrivacyPolicyContent/>
    </section>
  </div>
</template>

<script>
import PrivacyPolicyContent from './PrivacyPolicyContent.vue';

export default {
  name: 'EmbeddedPrivacyPolicy',
  components: { PrivacyPolicyContent },
}
</script>

<style scoped>
li {
  line-height: 1.5;
}
</style>
