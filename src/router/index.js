import Vue from 'vue'
import Router from 'vue-router'
import webCss from '@/assets/web.css'

import YourStory from '@/components/web/YourStory'

const About = () => import(/* webpackChunkName: "primary" */ '@/components/web/About')
const Team = () => import(/* webpackChunkName: "primary" */ '@/components/web/Team')
const Consent = () => import(/* webpackChunkName: "primary" */ '@/components/web/Consent')
const Uninstalled = () => import(/* webpackChunkName: "primary" */ '@/components/web/Uninstalled')
const SignInHelp = () => import(/* webpackChunkName: "primary" */ '@/components/web/SignInHelp')

const PrivacyPolicy = () => import(/* webpackChunkName: "secondary" */ '@/components/web/PrivacyPolicy')
const EmbeddedPrivacyPolicy = () => import(/* webpackChunkName: "secondary" */ '@/components/web/EmbeddedPrivacyPolicy')
const TermsOfService = () => import(/* webpackChunkName: "secondary" */ '@/components/web/TermsOfService')
const FAQ = () => import(/* webpackChunkName: "secondary" */ '@/components/web/FAQ')
const Contact = () => import(/* webpackChunkName: "secondary" */ '@/components/web/Contact')

/* I love Vue router. Lazy loading the onboarding screens is this simple. */
const StudyIntroduction = () => import(/* webpackChunkName: "study" */ '@/components/study/Introduction')
const StudyOverview = () => import(/* webpackChunkName: "study" */ '@/components/study/Overview')
const StudyEligibility = () => import(/* webpackChunkName: "study" */ '@/components/study/Eligibility')
const StudyConsent = () => import(/* webpackChunkName: "study" */ '@/components/study/Consent')
const StudyQuiz = () => import(/* webpackChunkName: "study" */ '@/components/study/Quiz')
const StudySign = () => import(/* webpackChunkName: "study" */ '@/components/study/Sign')
const StudyRegistration = () => import(/* webpackChunkName: "study" */ '@/components/study/Registration')

const StudyHelp = () => import(/* webpackChunkName: "tertiary" */ '@/components/study/StudyHelp')
const StudyRetakeQuiz = () => import(/* webpackChunkName: "tertiary" */ '@/components/study/StudyRetakeQuiz')
const StudyIneligible = () => import(/* webpackChunkName: "tertiary" */ '@/components/study/Ineligible')
const StudyDone = () => import(/* webpackChunkName: "tertiary" */ '@/components/study/Done')
const StudyConsentReview = () => import(/* webpackChunkName: "tertiary" */ '@/components/study/ConsentReview')

import BridgeImage from '@/components/BridgeImage';

Vue.use(Router)
Vue.component('BridgeImage', BridgeImage)

export default new Router({
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {path: '/', redirect: '/your-story'},
    {path: '/your-story', component: YourStory},
    {path: '/about', component: About},
    {path: '/team', component: Team},
    {path: '/consent', component: Consent},
    {path: '/sage-mpower-2/phoneSignIn/:signInToken(\\d{3}-?\\d{3})', component: SignInHelp},
    {path: '/sage-mpower-2/*', component: Uninstalled},

    // Secondary pages
    {path: '/privacy-policy', component: PrivacyPolicy},
    {path: '/embedded-privacy-policy', component: EmbeddedPrivacyPolicy},
    {path: '/license', component: TermsOfService},
    {path: '/faq', component: FAQ},
    {path: '/contact', component: Contact},

    {path: '/study/intro', component: StudyIntroduction},
    {path: '/study/overview', component: StudyOverview},
    {path: '/study/eligibility', meta: {step: 0}, component: StudyEligibility},
    {path: '/study/consent', meta: {step: 1}, component: StudyConsent},
    {path: '/study/quiz', meta: {step: 2}, component: StudyQuiz},
    {path: '/study/sign', meta: {step: 3}, component: StudySign},
    {path: '/study/registration', meta: {step: 4}, component: StudyRegistration},

    {path: '/study/retake-quiz', component: StudyRetakeQuiz},
    {path: '/study/ineligible', component: StudyIneligible},
    {path: '/study/done', component: StudyDone},
    
    {path: '/study/consent-review', component: StudyConsentReview},
    {path: '/study/help', component: StudyHelp}
  ]
})
