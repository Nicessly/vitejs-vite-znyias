import React, { useState } from 'react';
import Register from './pages/register/register';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Register/>
      </div>
    </>
  );
}

export default App;
