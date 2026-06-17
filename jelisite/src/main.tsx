import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'

import Home from './Pages/HomePage/Home.tsx';
import TestPage from "./Pages/TestPage/TestPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>,
)
