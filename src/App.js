import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);



  return (
    <main className="main">
      <h1>CLICK YES to support no violence after our presidential election</h1>
      <div>This Many American's support no violence: {count}</div>

      <button onClick={() => setCount(count + 1)}>YES</button>

    </main>
  );
}

export default App;
