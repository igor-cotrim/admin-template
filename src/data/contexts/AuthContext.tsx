import React, { createContext, useState } from 'react'
import { useRouter } from 'next/router'

import { User } from '../../model/User'

import { supabase } from '../../utils/supabaseClient'
import { managerCookie } from '../../utils/managerCookie'

type AuthProviderProps = {
  children: React.ReactElement
}

type AuthContextProps = {
  user?: User | null
  error?: string | null
  loading?: boolean
  signUp?: (email: string, password: string) => Promise<void>
  signIn?: (email: string, password: string) => Promise<void>
  signInGoogle?: () => Promise<void>
  logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User)
  const [error, setError] = useState<null | string>(null)
  const [loading, setLoading] = useState(false)
  const route = useRouter()

  const handleError = (msg: string, time = 5) => {
    setError(msg)
    setTimeout(() => setError(null), time * 1000)
  }

  const configSession = (user: any) => {
    if (user.email) {
      setUser(user)
      managerCookie(true)
      setLoading(false)

      return user.email
    } else {
      setUser({} as User)
      managerCookie(false)
      setLoading(false)

      return false
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true)
      const { error, user } = await supabase.auth.signIn({
        email,
        password
      })

      if (user) configSession(user)

      if (error) {
        throw error
      } else {
        route.push('/')
      }
    } catch (error: any) {
      handleError(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string) => {
    try {
      setLoading(true)
      const { error, user } = await supabase.auth.signUp({
        email,
        password
      })

      if (user) configSession(user)

      if (error) {
        throw error
      } else {
        route.push('/')
      }
    } catch (error: any) {
      handleError(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  const signInGoogle = async () => {
    try {
      setLoading(true)
      const { error, session } = await supabase.auth.signIn({
        provider: 'google'
      })

      if (session) configSession(session?.user)

      if (error) throw error
    } catch (error: any) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      setLoading(true)
      await supabase.auth.signOut()

      route.push('/autentification')

      configSession({} as User)
    } catch (error: any) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        loading,
        signIn,
        signUp,
        logout,
        signInGoogle
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
