<template>
  <div class="docked-layout">
    <MainNav title="Eligibility"/>
    <section>
      <div class="container">
        <h3>Let’s find out if you’re eligible</h3>

        <div class="question" v-if="step === 1">
          <span>I was born on </span>
          <mdc-textfield v-if="dateControlSupported" ref="birthdateField" v-model="birthdate"/>
          <div v-else class="birthdate-container">
            <div class="mdc-select">
              <select dense v-model="month" class="mdc-select__surface">
                <option>month</option>
                <option :key="month" v-for="month in months">{{month}}</option>
              </select>
              <div class="mdc-select__bottom-line"></div>
            </div>
            <div class="mdc-select">
              <select dense v-model="date" class="mdc-select__surface">
                <option>day</option>
                <option :key="date" v-for="date in dates">{{date}}</option>
              </select>
              <div class="mdc-select__bottom-line"></div>
            </div>, 
            <div class="mdc-select">
              <select dense v-model="year" class="mdc-select__surface">
                <option>year</option>
                <option :key="year" v-for="year in years">{{year}}</option>
              </select>
              <div class="mdc-select__bottom-line"></div>
            </div>
          </div>

        </div>

        <div class="question" v-if="step === 2">
          <span>I live in </span>
          <div class="mdc-select">
            <select dense v-model="residence" class="mdc-select__surface">
              <option :key="state" v-for="state in states">{{state}}</option>
            </select>
            <div class="mdc-select__bottom-line"></div>
          </div>
        </div>

        <div class="question" v-if="step === 3">
          <span>I feel</span>
          <div class="mdc-select">
            <select dense v-model="comfort" class="mdc-select__surface">
              <option>select response</option>
              <option>comfortable</option>
              <option>uncomfortable</option>
            </select>
            <div class="mdc-select__bottom-line"></div>
          </div>
          <span>using my smart phone.</span>
        </div>
      </div>
    </section>

    <Footer :step="step" :total-steps="totalSteps" :next-enabled="nextEnabled" 
      @back="doBack" @next="doNext" @submit="doSubmit"/>
  </div>
</template>

<script>
import MainNav from './MainNav.vue'
import Footer from './Footer.vue'
import Store from '../store';

const NOW = new Date();
const MONTHS = ['January','February','March','April','May','June','July','August',
  'September','October','November','December']
const DATES = Array.apply(null, {length: 31}).map(function(f, i) {return i+1;});
const YEARS = Array.apply(null, {length: 100}).map(function(f, i) {return 2018-i;});
const STATES = [
  'select where', "I don't live in the US", 'Alabama', 'Alaska', 'American Samoa', 
  'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 
  'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 
  'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 
  'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 
  'West Virginia', 'Wisconsin', 'Wyoming'
]
let test = document.createElement('input')
test.type = 'date'
let dateControlSupported = (test.type === 'date')

function is18YearsAgo(birthdate) {
  if (!/\d{4}-\d{2}-\d{2}/.test(birthdate)) {
    return false
  }
  var date = new Date(birthdate)
  var year = date.getFullYear()
  var month = date.getMonth()
  var day = date.getDate()
  return (new Date(year+18, month, day).getTime() <= new Date().getTime())
}

export default {
  name: 'StudyEligibility',
  components: { MainNav, Footer },
  data() {
    return {
      dateControlSupported: dateControlSupported,
      step: 1,
      totalSteps: 3,
      birthdate: NOW.toISOString().split("T")[0],
      month: MONTHS[NOW.getMonth()],
      date: NOW.getDate(),
      year: NOW.getFullYear(),
      residence: 'select where',
      comfort: 'select response',
      months: MONTHS,
      dates: DATES,
      years: YEARS,
      states: STATES
    }
  },
  mounted() {
    // This has to be set after, otherwise there are validation errors with the
    // MDC wrapper. But once reset it seems to work fine.
    if (this.dateControlSupported) {
      var input = this.$refs.birthdateField.$refs.input
      input.type = "date"
    }
  },
  computed: {
    nextEnabled() {
      if (!this.dateControlSupported) {
        return this.year !== 'year' && this.date !== 'day' && this.month !== 'month'
      }
      if (this.step === 1 && this.birthdate.length > 0) {
        return true
      } else if (this.step === 2 && this.residence !== 'select where') {
        return true
      } else if (this.step === 3 && this.comfort !== 'select comfort') {
        return true
      }
      return false
    }
  },
  methods: {
    doBack() {
      this.step -= 1;
    },
    doNext() {
      this.step += 1;
    },
    doSubmit() {
      if (!this.dateControlSupported) {
        this.birthdate = this.formatDateComponents()
      }
      var validResidence = (this.residence !== 'select where' && this.residence !== "I don't live in the US")
      var validComfort = (this.comfort === 'comfortable')
      var validAge = is18YearsAgo(this.birthdate)

      if (!validAge || !validResidence || !validComfort ) {
        this.$router.push('/study/ineligible')
      } else {
        this.$store.setBirthdate(this.birthdate)
        this.$store.setCurrentStep(Store.ELIGIBILITY_DONE)
        this.$router.push('/study/overview')
      }
    },
    formatDateComponents() {
      var m = (MONTHS.indexOf(this.month)+1)
      if (m < 10) {
        m = "0" + m
      }
      var d = this.date;
      if (d < 10) {
        d = "0" + d
      }
      return this.year + "-" + m + "-" + d;
    }
  }
}
</script>

<style scoped>
.mdc-textfield-wrapper {
  min-width: 8rem;
}
h3 {
  text-align: center;
  margin-bottom: 2rem;
}
.question {
  display: flex;
  align-items: baseline;
  justify-content: center;
}
  .question > * {
    padding: 0 .25rem;
  }
select {
  background-color: transparent;
}
@media screen and (max-width: 50em) {
  .question {
    flex-direction: column;
  }
  .mdc-select {
    height: 2rem;
  }
  .mdc-textfield-wrapper {
    height: 3rem;
  }
}
</style>
