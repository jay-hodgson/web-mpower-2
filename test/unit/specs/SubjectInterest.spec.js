// import Vue from 'vue'
// import SubjectInterest from '@/components/SubjectInterest'

// describe('SubjectInterest.vue', () => {
//   it('should render correct contents', () => {
//     const Constructor = Vue.extend(SubjectInterest)
//     const vm = new Constructor().$mount()
//     expect(vm.$el.querySelector('div.row > p.col-sm-8').textContent.trim())
//       .to.equal('Why are you interested in joining mPower?')
//   })
//   describe('interest reason', () =>
//     it('should ask for interest in joining the study', done => {
//       const Constructor = Vue.extend(SubjectInterest)
//       const vm = new Constructor().$mount()

//       // user submit button should not show without any selection made
//       expect(vm.$el.querySelector('#submit')).to.equal(null)

//       Vue.nextTick(() => {
//         expect(vm.$el.querySelector('#interest').textContent.trim()).to
//         .equal('I\'m interested in joining mPower because I')
//         done()
//       })
//     })
//   )
//   describe('user willingness', () =>
//     it('should ask for items willing to try in study', done => {
//       const Constructor = Vue.extend(SubjectInterest)
//       const vm = new Constructor().$mount()

//       // user submit button should not show without any selection made
//       expect(vm.$el.querySelector('#submit')).to.equal(null)

//       vm.selectedChoice[0].color = 'darkPurple'
//       Vue.nextTick(() => {
//         expect(vm.$el.querySelector('p.col-md-8.ml-6.text-left.lead').textContent.trim()).to
//         .equal('I\'d be willing to try')
//         done()
//       })
//     })
//   )
//   describe('user requests', () =>
//     it('should ask for items willing to try in study', done => {
//       const Constructor = Vue.extend(SubjectInterest)
//       const vm = new Constructor().$mount()

//       // user submit button should not show without any selection made
//       expect(vm.$el.querySelector('#submit')).to.equal(null)

//       vm.selectedChoice[0].color = 'darkPurple'
//       vm.selectedChoice[4].color = 'darkPurple'
//       vm.radioChoice = 'radio-1'

//       // submit button should show once option is chosen

//       Vue.nextTick(() => {
//         expect(vm.$el.querySelector('#userRequest').textContent.trim()).to
//         .equal('What would you like from us?')
//       })

//       vm.selectedChoice[7].color = 'darkPurple'
//       Vue.nextTick(() => {
//         expect(vm.$el.querySelector('#submit')).to.not.equal(null)
//         done()
//       })
//     })
//   )
// })
