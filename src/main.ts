import Alpine from 'alpinejs'

//@ts-ignore
window.Alpine = Alpine
 
Alpine.start()

console.log('heey', Alpine)

Alpine.store('App', {
  init() {
    console.log('App store initialized')
  },

  click() {
    console.log('clicked v1')
  }
})