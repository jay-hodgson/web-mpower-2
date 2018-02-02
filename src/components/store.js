const ANSWERS = 'answers'
const BIRTHDATE = 'birthdate'
const CURRENT_STEP = 'currentStep'
const NAME = 'name'
const PHONE = 'phone'
const OS = 'os'

var DATA = {};

function loadString(key) {
  return DATA[key]
}
function saveString(key, string) {
  DATA[key] = string
}
function loadObj(key) {
  return DATA[key]
}
function saveObj(key, object) {
  DATA[key] = object
}
function loadInt(key) {
  return DATA[key]
}

class Store {
  static UNSTARTED = 0
  static ELIGIBILITY_DONE = 1
  static CONSENT_DONE = 2
  static QUIZ_DONE = 3
  static SIGN_DONE = 4
  static REGISTER_DONE = 5

  clearAll() {
    DATA = {}
  }
  getPhone() {
    return loadString(PHONE) || ''
  }
  setPhone(phone) {
    saveString(PHONE, phone)
  }
  getSystem() {
    return loadString(OS) || ''
  }
  setSystem(os) {
    saveString(OS, os)
  }
  getName() {
    return loadString(NAME) || ''
  }
  setName(name) {
    saveString(NAME, name)
  }
  getAnswers() {
    return loadObj(ANSWERS) || {}
  }
  setAnswers(answers) {
    saveObj(ANSWERS, answers)
  }
  getCurrentStep() {
    return loadInt(CURRENT_STEP) || 0
  }
  setCurrentStep(step) {
    saveObj(CURRENT_STEP, step)
  }
  getBirthdate() {
    return loadString(BIRTHDATE) || ''
  }
  setBirthdate(birthdate) {
    saveString(BIRTHDATE, birthdate)
  }
  advanceCurrentStep() {
    this.setCurrentStep(this.getCurrentStep() + 1)
  }
};
export default Store
