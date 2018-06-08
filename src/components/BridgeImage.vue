<template>
    <img onerror="this.style.display='none'" :class="className" :src="src" :style="css">
</template>
<script>
export default {
  name: 'BridgeImage',
  props: {
    src: String,
    className: String,
    css: String
  }
}
</script>