import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Clothes from './pages/Clothes';
import About from './pages/About';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    children: [
      {
        path: "/", 
        element: <Home />,
      },
      {
        path: "/about", 
        element: <About />,
      },
      {
        path: "/clothes", 
        element: <Clothes />,
      },
      {
        path: "/contactUs", 
        element: <ContactUs />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
