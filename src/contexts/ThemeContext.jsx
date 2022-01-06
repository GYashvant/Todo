import { createContext, useState } from "react";

export const ThemeContext = createContext()

const ThemeContextrovider = ({children}) => {
    const [theme, setTheme] = useState(false)

    const handleToggle = () =>{
        theme ? setTheme(false) : setTheme(true)
    }

    return <ThemeContext.Provider value={{theme, handleToggle}}>{children}</ThemeContext.Provider>
}

export {ThemeContextrovider}