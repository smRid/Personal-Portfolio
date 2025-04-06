import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import RootElement from './components/RootElement';
import Home from './pages/Home';
import Error from './pages/Error';
import CaseStudyPage from './pages/CaseStudyPage';
import CaseStudyPage2 from './pages/CaseStudyPage2';
import CaseStudyPage3 from './pages/CaseStudyPage3';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route
      path="/"
      element={<RootElement />}>

        <Route
        path="/"
        element={<Home />} >
        </Route>

        <Route
        path="/casestudy"
        element={<CaseStudyPage />} >
        </Route>
        <Route
        path="/casestudy2"
        element={<CaseStudyPage2 />} >
        </Route>

        <Route
        path="/casestudy3"
        element={<CaseStudyPage3 />} >
        </Route>

        <Route
        path="*"
        element={<Error />} >
        </Route>
     
    </Route>
    
    </>
  )
);

export default function App() {
  return (
   <>
    <RouterProvider router={router} />
   </>
  )
}
