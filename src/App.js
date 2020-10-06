import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);



  return (
    <main>
      <h1>Jeremy Boynton Likes to Keep track Counter</h1>
      <div>Count: {count}</div>

      <button onClick={() => setCount(count + 1)}>YES</button>

    </main>
  );
}

export default App;
