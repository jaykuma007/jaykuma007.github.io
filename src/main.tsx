// src/main.tsx (FINAL UPDATED VERSION)

// We no longer need StrictMode, so we can comment out the import.
// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import JK from './jk'; // This correctly imports your component.

createRoot(document.getElementById('root')!).render(
  // By commenting out StrictMode, we prevent the double-render in development
  // that was causing the issue with the Credly script.
  // This will NOT affect your production build.
  
  // <StrictMode>
    <JK />
  // </StrictMode>,
);
