import React, { useState } from 'react';
import Register from './pages/register/register';
import Login from './pages/login/login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  const Layout = ()=>{
    return(
      <div>
        
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <>
      <div>
      <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
