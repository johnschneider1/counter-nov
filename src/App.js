import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);


  const handleClick = () => {
    axios
      .post(`http://localhost:5150/api/votes${count}`)
      .then((res) => {
        setCount(count + 1)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    axios
      .get('http://localhost:5150/api/votes')
      .then((res) => {
        setCount(res.data)
      })
      .catch((err) => {
        console.error(err);
      })
  }, [])

  return (
    <main>
      <div className="Container">
        <h1>Support the #No Violence movement.  Cast your vote below and unite with Americans celebrating their diversity by raising their voices to say --- No matter the outcome of our Presidential election, let’s stand for No Violence post election.  And pay it forward.</h1>
        <h2>This Many American's support no violence: <h1 className='CountText'>{count}</h1></h2>

        <button className="Btn" onClick={() => setCount(count + 1)}>YES</button>
      </div>
    </main>
  );
}

export default App;
