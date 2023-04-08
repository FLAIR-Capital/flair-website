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
  signIn: (navigateTo?: string) => void
  signOut: (navigateTo?: string) => void

  signUp: () => void
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

  async signIn(navigateTo) {
    console.log('Signing in...')
    
    const signInResult = await supabase.auth.signInWithPassword({
      email: this.signInData.email!,
      password: this.signInData.password!
    })

    this.signInData = {
      email: null,
      password: null
    }

    if (navigateTo) {
      window.location.href = navigateTo
    }

    console.log('signInResult', signInResult)
  },

  async signOut(navigateTo) {
    console.log('sign out')
    await supabase.auth.signOut()

    if (navigateTo) {
      window.location.href = navigateTo
    }

  },

  async signUp() {
    console.log('sign up')
    await supabase.auth.signUp({
      email: 'asd',
      password: 'asd',
      options: {
        data: {
          isInvestor: true
        }
      }
    })
  }
})