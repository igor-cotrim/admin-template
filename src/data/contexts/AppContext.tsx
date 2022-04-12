import React, { createContext, useState } from 'react'

type ThemeProps = 'dark' | ''

type AppProviderProps = {
  children: React.ReactElement
}

type AppContextProps = {
  theme: ThemeProps
  onChange: () => void
}

const AppContext = createContext<AppContextProps>({} as AppContextProps)

export const AppProvider = ({ children }: AppProviderProps) => {
  const [theme, setTheme] = useState<ThemeProps>('dark')

  const onChange = () => {
    setTheme(theme === '' ? 'dark' : '')
  }

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
