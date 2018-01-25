<template>
  <div class="radio-holder">
    <!-- the mdc radio control had a couple of issues. -->
    <div class="mdc-radio">
      <input class="mdc-radio__native-control" @change="sendEvent"
        type="radio" :id="id" :value="value" :name="name">
      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
      </div>
    </div>
    <label :id="labelId" :for="id"><slot></slot></label>
  </div>
</template>

<script>
export default {
  name: 'RadioButton',
  props: ['name','value','label'],
  data() {
    return {
      element: ''
    }
  },
  watch: {
    element: function(value) {
      this.$emit('change', this.name, values)
    }
  },
  methods: {
    sendEvent(e) {
      this.$emit('change', e.target.name, e.target.value)
    }
  },
  computed: {
    id: function() {
      return this.name + '-' + this.value.toLowerCase()
    },
    labelId: function() {
      return this.name + '-label-' + this.value.toLowerCase()
    }
  }
}
</script>

<style scoped>
.radio-holder {
  display: flex;
  align-items: center;
  margin-bottom: .25rem;
}
.question {
  padding-top: 2rem;
}
.question > label {
  color: #6c7a89;
  font-size: .6rem;
}
.question > h3 {
  color: #3b4a63;
  margin-bottom: 1.5rem;
}
.radio-holder label {
  font-size: .9rem;
  padding-left: .4rem;
  cursor: pointer;
}
</style>