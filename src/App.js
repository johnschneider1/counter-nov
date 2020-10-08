import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);



  return (
    <main>
      <div className="Container">
        <h1>CLICK YES to support no violence after our presidential election</h1>
        <h2>This Many American's support no violence: <h1 className='CountText'>{count}</h1></h2>

        <button className="Btn" onClick={() => setCount(count + 1)}>YES</button>
      </div>
    </main>
  );
}

export default App;
