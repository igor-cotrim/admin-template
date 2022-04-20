import React, { createContext, useEffect, useState } from 'react'

type AppProviderProps = {
  children: React.ReactElement
}

type AppContextProps = {
  theme: string
  onChange: () => void
}

const AppContext = createContext<AppContextProps>({} as AppContextProps)

export const AppProvider = ({ children }: AppProviderProps) => {
  const [theme, setTheme] = useState('dark')

  const onChange = () => {
    const newTheme = theme === '' ? 'dark' : ''

    setTheme(newTheme)
    localStorage.setItem('admin-template-theme', newTheme)
  }

  useEffect(() => {
    const SavedTheme = localStorage.getItem('admin-template-theme')

    if (SavedTheme) {
      setTheme(SavedTheme)
    }
  }, [])

  return (
    <AppContext.Provider
      value={{
        theme,
        onChange
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
