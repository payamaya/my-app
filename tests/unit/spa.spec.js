import { mount } from '@vue/test-utils'
import SpaView from '@/views/SpaView.vue'

test('Renders a product', () => {
  const wrapper = mount(SpaView)

  expect(wrapper.findAll('[id="RoomCard"]')).toHaveLength(5)
})
