// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext(null);

// export function ThemeProvider({ children }){
//     const [darkMode, setDarkMode ] = useState(false);
//     return(
//         <ThemeContext.Provider value = {{darkMode, setDarkMode}}>
//             {children}
//         </ThemeContext.Provider>
//     );
// }

// export function useTheme() {
//     return useContext(ThemeContext);
// }


function ThemeContext() {
  return (
    <div>ThemeContext</div>
  )
}

export default ThemeContext