import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Home/Home.jsx';
import Aboutme from './assets/Pages/Aboutme.jsx';
import Skills from './Comonents/Skills.jsx';
import Education from './Comonents/Education.jsx';
import Projects from './Comonents/Projects.jsx';
import Contact from './Comonents/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:'about',
        Component:Aboutme

      },
      {
        path:'about',
        Component:Aboutme,
      },
      {
        path:'skills',
        Component:Skills
      },
      {
        path:'education',
        Component:Education
      },
      {
        path:'projects',
        Component:Projects,
      },
      {
        path:'contact',
        Component:Contact
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
