import Vue from 'vue'
import Router from 'vue-router'

import Website from '@/components/web_components/Website.vue'
import YourStory from '@/components/web_components/YourStory.vue'
import About from '@/components/web_components/About.vue'
import Team from '@/components/web_components/Team.vue'
import Privacy from '@/components/web_components/Privacy.vue'
import Contact from '@/components/web_components/Contact.vue'
import FAQ from '@/components/web_components/FAQ.vue'

import OnBoarding from '@/components/on_boarding_components/OnBoarding.vue'
import OverviewEligibility from '@/components/on_boarding_components/OverviewEligibility.vue'
import SinglePageEligibility from '@/components/on_boarding_components/eligibility/SinglePageEligibility.vue'
import Ineligible from '@/components/on_boarding_components/eligibility/Ineligible.vue'
import Vows from '@/components/on_boarding_components/eligibility/Vows.vue'
import Congratulations from '@/components/on_boarding_components/eligibility/Congratulations.vue'

import QuestionOne from '@/components/on_boarding_components/quiz/QuestionOne.vue'
import QuestionTwo from '@/components/on_boarding_components/quiz/QuestionTwo.vue'
import QuestionThree from '@/components/on_boarding_components/quiz/QuestionThree.vue'
import QuestionFour from '@/components/on_boarding_components/quiz/QuestionFour.vue'
import QuestionFive from '@/components/on_boarding_components/quiz/QuestionFive.vue'
import QuestionView from '@/components/on_boarding_components/quiz/QuestionView.vue'
import RetakeQuiz from '@/components/on_boarding_components/quiz/RetakeQuiz.vue'

import ConsentOne from '@/components/on_boarding_components/consent/ConsentOne.vue'
import ConsentTwo from '@/components/on_boarding_components/consent/ConsentTwo.vue'
import ConsentThree from '@/components/on_boarding_components/consent/ConsentThree.vue'
import ConsentFour from '@/components/on_boarding_components/consent/ConsentFour.vue'
import ConsentFive from '@/components/on_boarding_components/consent/ConsentFive.vue'
import ConsentSix from '@/components/on_boarding_components/consent/ConsentSix.vue'
import ConsentSeven from '@/components/on_boarding_components/consent/ConsentSeven.vue'
import ConsentEight from '@/components/on_boarding_components/consent/ConsentEight.vue'
import ConsentNine from '@/components/on_boarding_components/consent/ConsentNine.vue'
import ConsentTen from '@/components/on_boarding_components/consent/ConsentTen.vue'
import ConsentEleven from '@/components/on_boarding_components/consent/ConsentEleven.vue'
import ConsentTwelve from '@/components/on_boarding_components/consent/ConsentTwelve.vue'
import ConsentThirteen from '@/components/on_boarding_components/consent/ConsentThirteen.vue'

import ConsentDocText from '@/components/on_boarding_components/consent/ConsentDocText.vue'

import Sign from '@/components/on_boarding_components/sign/Sign.vue'
import NotFound from '@/components/NotFound.vue'
import ConsentDoc from '@/components/on_boarding_components/consent/ConsentDoc.vue'
import Registration from '@/components/on_boarding_components/registration/Registration'
import RegistrationMobile from '@/components/on_boarding_components/registration/RegistrationMobile'
import RegistrationLinkSent from '@/components/on_boarding_components/registration/RegistrationLinkSent'

Vue.use(Router)

// below works only if in history mode
const scrollBehavior = (to, from, savedPosition) => {
  return { x: 0, y: 0 }
}

export default new Router({
  // mode: 'history', TODO: Configure history mode
  scrollBehavior: scrollBehavior,
  routes: [
    {
      path: '/',
      redirect: {name: 'YourStory'}
    },
    {
      path: '/ConsentDocText',
      component: ConsentDocText,
      name: 'ConsentDocText'
    },
    {
      path: '/Website',
      component: Website,
      children: [
        {
          path: 'YourStory',
          name: 'YourStory',
          component: YourStory
        },
        {
          path: 'About',
          name: 'About',
          component: About
        },
        {
          path: 'Team',
          name: 'Team',
          component: Team
        },
        {
          path: 'Privacy',
          name: 'Privacy',
          component: Privacy
        },
        {
          path: 'Contact',
          name: 'Contact',
          component: Contact
        },
        {
          path: 'FAQ',
          name: 'FAQ',
          component: FAQ
        }
      ]
    },
    {
      path: '/OnBoarding',
      component: OnBoarding,
      children: [
        {
          path: 'SinglePageEligibility',
          name: 'SinglePageEligibility',
          component: SinglePageEligibility
        },
        {
          path: 'Ineligible',
          name: 'Ineligible',
          component: Ineligible
        },
        {
          path: 'Vows',
          name: 'Vows',
          component: Vows
        },
        {
          path: 'OverviewEligibility',
          name: 'OverviewEligibility',
          component: OverviewEligibility
        },
        {
          path: 'Congratulations',
          name: 'Congratulations',
          component: Congratulations
        },
        {
          path: 'Quiz',
          name: 'QuestionView',
          component: QuestionView,
          children: [
            {
              path: '01',
              name: 'QuestionOne',
              component: QuestionOne
            },
            {
              path: '02',
              name: 'QuestionTwo',
              component: QuestionTwo
            },
            {
              path: '03',
              name: 'QuestionThree',
              component: QuestionThree
            },
            {
              path: '04',
              name: 'QuestionFour',
              component: QuestionFour
            },
            {
              path: '05',
              name: 'QuestionFive',
              component: QuestionFive
            }
          ]
        },
        {
          path: '/RetakeQuiz',
          name: 'RetakeQuiz',
          component: RetakeQuiz
        },
        {
          path: '/ConsentDoc',
          name: 'ConsentDoc',
          components: {
            default: ConsentDoc,
            d: ConsentDocText
          },
          children: [
            {
              path: '01',
              name: 'ConsentOne',
              component: ConsentOne
            },
            {
              path: '02',
              name: 'ConsentTwo',
              component: ConsentTwo
            },
            {
              path: '03',
              name: 'ConsentThree',
              component: ConsentThree
            },
            {
              path: '04',
              name: 'ConsentFour',
              component: ConsentFour
            },
            {
              path: '05',
              name: 'ConsentFive',
              component: ConsentFive
            },
            {
              path: '06',
              name: 'ConsentSix',
              component: ConsentSix
            },
            {
              path: '07',
              name: 'ConsentSeven',
              component: ConsentSeven
            },
            {
              path: '08',
              name: 'ConsentEight',
              component: ConsentEight
            },
            {
              path: '09',
              name: 'ConsentNine',
              component: ConsentNine
            },
            {
              path: '10',
              name: 'ConsentTen',
              component: ConsentTen
            },
            {
              path: '11',
              name: 'ConsentEleven',
              component: ConsentEleven
            },
            {
              path: '12',
              name: 'ConsentTwelve',
              component: ConsentTwelve
            },
            {
              path: '13',
              name: 'ConsentThirteen',
              component: ConsentThirteen
            }
          ]
        },
        {
          path: '/Sign',
          name: 'Sign',
          component: Sign
        },
        {
          path: '/Registration',
          name: 'Registration',
          component: Registration
        },
        {
          path: '/RegistrationMobile',
          name: 'RegistrationMobile',
          component: RegistrationMobile
        },
        {
          path: '/RegistrationLinkSent',
          name: 'RegistrationLinkSent',
          component: RegistrationLinkSent
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
