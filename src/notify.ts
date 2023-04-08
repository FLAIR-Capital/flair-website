

import Alpine from 'alpinejs'

interface NewNotification {
  type: string
  message: string
}

Alpine.store<{
  notifications: { id: string, type: string, message: string }[]

  add(data: NewNotification): void
  remove(id: string): void
}>('Notify', {
  
  notifications: [],

  add(data) {
    // Create reandom id
    const id = Math.floor(Math.random() * 1000000000).toString()
    
    this.notifications.push({
      id,
      type: data.type,
      message: data.message
    })

    setTimeout(() => this.remove(id), 5000)
  },

  remove(id: string) {
    // Remove notification from array
    this.notifications = this.notifications.filter((n) => n.id !== id)
  }
})