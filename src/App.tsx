import './App.css'
import {Outlet} from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import { ThemeProvider } from './pages/ThemeContext';

function App() {
  

  return (
    <ThemeProvider>
      <Header/>
      <Outlet/>
      <Footer/> 
    </ThemeProvider>
  )
}

export default App
