import { Children, useEffect, useState } from "react";


function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(true);



    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);



    return <div>
        {children}
    </div>
}


export default ThemeProvider;