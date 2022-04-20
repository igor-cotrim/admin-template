import type { AppProps } from 'next/app'

import { AppProvider } from '../data/contexts/AppContext'
import { AuthProvider } from '../data/contexts/AuthContext'

import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  )
}

export default MyApp
