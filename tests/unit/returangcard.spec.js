//Must includ a {{product}}
import { mount } from '@vue/test-utils'
import RestaurangCard from '@/components/Restaurang/RestaurangCard.vue'

test('check for wird props', () => {
  const wrapper = mount(RestaurangCard, {
    props: {
      product: 'Oilllioooo',
    },
  })

  expect(wrapper.text()).toContain('Oilllioooo')
})
