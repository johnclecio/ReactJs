import { createContext } from 'react'

export const themes = {
primary: {
    background: '#000',
    color: '#efefe'
},
secodary: {
  background: '#efefe',
  color: '#000'
}
}

export const ThemeContext = createContext(themes.secodary)