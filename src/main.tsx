import { createRoot } from 'react-dom/client'
import './styles/tailwind.css';
import './styles/index.scss';
import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx'
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
   <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>
)
