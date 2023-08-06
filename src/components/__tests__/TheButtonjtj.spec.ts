import { mount } from '@vue/test-utils'
import TheButtonjyj from '../TheButtonjyj.vue' 
import { describe, it, expect } from 'vitest'

describe('TheButtonjyj', () => {
  it('emite el evento "click" al hacer clic en el botón', async () => {
    const textoProp = 'texto de prueba'
    const wrapper = mount(TheButtonjyj, {
      props: { texto: textoProp }
    })

    expect(wrapper.text()).toContain(textoProp)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})