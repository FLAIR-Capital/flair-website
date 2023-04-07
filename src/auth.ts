import Alpine from 'alpinejs'
import { supabase } from './supabase'
 
Alpine.store<{
  signInData: {
    email: string | null
    password: string | null
  }

  isSignedIn: boolean
  user: null | { name: string }
  
  init: () => void
  signIn: () => void
  signOut: () => void
}>('Auth', {
  signInData: {
    email: null,
    password: null
  },

  isSignedIn: false,
  user: null,

  init() {
    console.log('Auth store initialized')

    supabase.auth.onAuthStateChange((event, session) => {
      console.log('onAuthStateChange', event, session)

      if (event === 'SIGNED_IN') {
        this.user = {
          name: session?.user?.email || ''
        }
        this.isSignedIn = true
      }
      else if (event === 'SIGNED_OUT') {
        this.user = null
        this.isSignedIn = false
      }
    })
  },

  async signIn() {
    console.log('Signing in...')
    
    const signInResult = await supabase.auth.signInWithPassword({
      email: this.signInData.email!,
      password: this.signInData.password!
    })

    this.signInData = {
      email: null,
      password: null
    }

    console.log('signInResult', signInResult)
  },

  signOut() {
    supabase.auth.signOut()
  }
})