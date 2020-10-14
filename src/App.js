import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [newIp, setNewIp] = useState();


  // test address http://localhost:5150/api/votes
  // live address https://counter-nov.herokuapp.com/api/votes
  const handleClick = () => {
    axios
      .post("https://counter-nov.herokuapp.com/api/votes")
      .then((res) => {
        setCount(res.data.votes)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    axios
      .get('https://counter-nov.herokuapp.com/api/votes')
      .then((res) => {
        console.log("test:", res.data)
        setCount(res.data.votes)
      })
      .catch((err) => {
        console.error(err);
      })
  }, [])

  // useEffect(() => {
  //   fetch('https://api.ipify.org?format=jsonp?callback=?', {
  //     method: "GET",
  //     headers: {},
  //   })
  //     .then(res => {
  //       return res.text()
  //     }).then(ip => {
  //       console.log('ip', ip);
  //       setNewIp(ip)
  //       axios.post('http://localhost:5150/api/votes', ip)
  //         .then(res => {
  //           console.log("ipPostTest:", res.data)
  //           setNewIp(res.data)

  //         })
  //         .catch(err => [
  //           console.error(err)
  //         ])
  //     })

  // }, [])

  return (
    <main>
      <div className="Container">
        <h1>Support the #No Violence movement.  Cast your vote below and unite with Americans celebrating their diversity by raising their voices to say --- No matter the outcome of our Presidential election, let’s stand for No Violence post election.  And pay it forward.</h1>
        <h2>This Many Americans support no violence: <h1 className='CountText'>{count}</h1></h2>
        {/* <h3>{newIp}</h3> */}

        <button className="Btn" onClick={() => handleClick()}>YES</button>
      </div>
    </main>
  );
}

export default App;
