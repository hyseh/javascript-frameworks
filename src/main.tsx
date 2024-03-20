import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './styles/global.css';
import App from './App.tsx';
import Home from './routes/Home';
import Product from './routes/Product';
import Cart from './routes/Cart';
import Contact from './routes/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
