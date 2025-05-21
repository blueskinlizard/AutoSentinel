import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import routes from './Router/Routes.jsx'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter(routes);
createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
)