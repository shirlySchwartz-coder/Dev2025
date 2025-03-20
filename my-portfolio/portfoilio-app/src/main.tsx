import { createRoot } from 'react-dom/client'
import './style.css'
// Removed unused import statement
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <MainLayout/>
  </BrowserRouter>
   
)
