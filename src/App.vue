<template>
  <div id="app">
    <template>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      error: false,
      study: '',
      type: '',
      wasClicked: false,
      HTTP: null,
      userId: null,
      loginInfo: null
    }
  },
  methods: {
    createBaseHTTP (sessionToken) {
      return this.axios.create({
        baseURL: 'https://webservices.sagebridge.org/',
        headers: {
          'Bridge-Session': sessionToken
        }
      })
    },
    self () {
      this.HTTP.get('/v3/participants/self',
        {}
        // studyId: 'parkinson-android',
        // userId: this.userId
      ).then(response => {
        console.log(response.data)
      })
    }
  }
}
</script>

<style scoped>
</style>
