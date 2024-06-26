import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { RouterProject } from './Router/Router';



const router = createBrowserRouter(RouterProject)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)









// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>

