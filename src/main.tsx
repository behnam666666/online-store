
import App from './App.tsx'
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

