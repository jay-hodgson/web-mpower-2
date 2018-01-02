<template>
  <v-app>
    <div class="row">
      <p class="mx-auto text-center white--text navyBlue "> Service Calls </p>
    </div>

    <div class="row">
      <v-btn v-on:click="signIn ()" class="text-center white--text navyBlue ml-6"> Sign In </v-btn>
      <div class="col-12"></div>
      <div class="col-3 ml-6">
        <v-text-field name="input-3-3" label="email" v-model="email" class="input-group--focused" single-line>
        </v-text-field>
      </div>
      <div class="col-12"></div>
      <div class="col-3 ml-6">
        <v-text-field name="input-3-3" label="password" v-model="password" class="input-group--focused" single-line>
        </v-text-field>
      </div>
      <div class="col-12"></div>
      <div class="col-3 ml-6">
        <v-text-field name="input-3-3" label="study" v-model="study" class="input-group--focused" single-line>
        </v-text-field>
      </div>
      <div class="col-12"></div>
      <div class="col-3 ml-6">
        <v-text-field name="input-3-3" label="type" v-model="type" class="input-group--focused" single-line>
        </v-text-field>
      </div>
    </div>
    <br>
    <br>
    <div class="row">
      <v-btn v-on:click="signOut ()" class="text-center white--text navyBlue ml-6"> Sign Out </v-btn>
    </div>

    <br>
    <br>

    <div class="row">
      <v-btn v-on:click="signUp ()" class="text-center white--text navyBlue ml-6"> Sign Up </v-btn>
      <div class="col-12"></div>
      <div class="col-3 ml-6">
        <v-text-field name="input-3-3" label="study" v-model="signUpStudy" class="input-group--focused" single-line>
        </v-text-field>
      </div>
      <div class="col-12"></div>
      <div class="col-3 ml-6">
        <v-text-field name="input-3-3" label="email" v-model="signUpEmail" class="input-group--focused" single-line>
        </v-text-field>
      </div>
      <div class="col-12"></div>
      <div class="col-3 ml-6">
        <v-text-field name="input-3-3" label="password" v-model="signUpPassword" class="input-group--focused" single-line>
        </v-text-field>
      </div>
      <div class="col-12"></div>
      <div class="col-3 ml-6">
        <v-text-field name="input-3-3" label="signUpType" v-model="signUpType" class="input-group--focused" single-line>
        </v-text-field>
      </div>
    </div>

    <div class="row">
      <v-btn v-on:click="getSelf ()" class="text-center white--text navyBlue ml-6"> getSelf </v-btn>
    </div>

  </v-app>
</template>


<script>
import auth from '@/auth/auth'
export default {
  data () {
    return {
      loggedIn: auth.loggedIn(),
      email: '',
      password: '',
      error: false,
      study: '',
      type: '',
      signUpEmail: '',
      signUpPassword: '',
      signUpStudy: '',
      signUpType: '',
      wasClicked: false,
      HTTP: null,
      userId: null,
      loginInfo: null
    }
  },
  methods: {
    signIn () {
      this.axios.post('https://webservices.sagebridge.org/v3/auth/signIn',
        {
          /* eslint-disable */
          email: this.email,
          password: this.password,
          study: this.study,
          type: this.type
          /* eslint-enable */
        }
      )
        .then((response) => {
          console.log(response.data)
        })
        .catch(error => {
          console.log('eror being made')
          this.loginInfo = JSON.parse(JSON.stringify(error)).response.data
          console.log('')
          console.log(this.loginInfo)
          console.log('')
          var sessionToken = this.loginInfo.sessionToken
          this.userId = this.loginInfo.id
          this.HTTP = this.createBaseHTTP(sessionToken)
        })
    },
    createBaseHTTP (sessionToken) {
      return this.axios.create({
        baseURL: 'https://webservices.sagebridge.org/',
        headers: {
          'Bridge-Session': sessionToken
        }
      })
    },
    getSelf () {
      this.HTTP.get('/v3/participants/self',
        {}
      ).then(response => {
        console.log(response.data)
      })
    },
    signOut () {
      this.HTTP.get('/v3/auth/signOut',
        {}
      ).then(response => {
        console.log(response.data)
      })
    },
    signUp () {
      this.axios.post('https://webservices.sagebridge.org/v3/auth/signUp',
        {
          /* eslint-disable */
          email: this.signUpEmail,
          password: this.signUpPassword,
          study: this.signUpStudy
          /* eslint-enable */
        }
      )
        .then((response) => {
          console.log(response.data)
        })
        .catch(error => {
          console.log('eror being made signing in')
          this.loginInfo = JSON.parse(JSON.stringify(error)).response.data
          console.log('')
          console.log(this.loginInfo)
          console.log('')
          var sessionToken = this.loginInfo.sessionToken
          this.userId = this.loginInfo.id
          this.HTTP = this.createBaseHTTP(sessionToken)
        })
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>
