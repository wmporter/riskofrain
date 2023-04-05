import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContactForm from './components/Contact/ContactForm';
import Tips from './components/Tips/Tips';
import About from './components/About/About';
import 'tachyons';
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
      path: "/riskofrain",
      element: <App />,
      children: [
        {
          path: "tips",
          element: <Tips />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <ContactForm />,
        },
      ],
    },
  ]);
// root.render(
//     <BrowserRouter basename='/riskofrain'>
//         <Routes>
//             <Route path="/tips" element={<Tips/>} />
//             <Route path="/about" element={<About/>} />
//             <Route path="/contact" element={<ContactForm/>} />
//             <Route path="/" element={<App/>} />
            
//         </Routes>
//     </BrowserRouter>
// );
root.render(
    <RouterProvider router={router} />
);
