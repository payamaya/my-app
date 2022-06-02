import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

test('check for importan text', () => {
  const wrapper = mount(HomeView, {})

  expect(wrapper.text()).toContain('Resort Calypso')
})
