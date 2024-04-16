import { createContext, useState } from 'react';

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme((curr) => (curr == 'dark' ? 'light' : 'dark'))
    }
    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider