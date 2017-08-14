import Vue from 'vue'
import Congratulations from '@/components/Congratulations'

describe('Congratulations.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Congratulations)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('p.greenText').textContent.trim())
      .to.equal('Congratulations, you\'re eligible!')
  })
})
