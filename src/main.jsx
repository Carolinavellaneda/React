import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import lenguajes from './datos/lenguajes.js'


//importamos router

import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
/// importamos LenguajeVistas
import LenguajeVistas from './vistas/LenguajesVistas.jsx'



const router = [
  {
    path:"/",
    element:<App/>,
  
  },
  
];
lenguajes.forEach((len) => {
  router.push({
    path: len.ntitulo,
    element:<LenguajeVistas len={len} />,
  });
});

const routes = createBrowserRouter(router)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
