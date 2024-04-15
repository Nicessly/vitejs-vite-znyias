import React, { useState } from 'react';
import Register from './pages/register/register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  return (
    <>
      <div>
        <Register/>
      </div>
    </>
  );
}

export default App;
