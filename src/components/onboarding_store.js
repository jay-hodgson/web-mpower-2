const ANSWERS = 'answers'
const BIRTHDATE = 'birthdate'
const CURRENT_STEP = 'currentStep'
const NAME = 'name'
const PHONE = 'phone'
const OS = 'os'

function loadString(key) {
  return localStorage.getItem(key);
}
function saveString(key, string) {
  localStorage.setItem(key, string);
}
function loadObj(key) {
  return JSON.parse(loadString(key))
}
function saveObj(key, object) {
  return saveString(key, JSON.stringify(object))
}
function loadInt(key) {
  return parseInt(loadString(key))
}

class OnboardingStore {
  clearAll() {
    localStorage.removeItem(ANSWERS)
    localStorage.removeItem(BIRTHDATE)
    localStorage.removeItem(CURRENT_STEP)
    localStorage.removeItem(NAME)
    localStorage.removeItem(PHONE)
    localStorage.removeItem(OS)
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
export default new OnboardingStore()
