import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [newIp, setNewIp] = useState();
  const [ben, setBen] = useState(false);



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

  function hideSeek() {
    var x = document.getElementById("ben");
    // var zoo = document.getElementById("ty")
    if (x.style.display === "none") {
      x.style.display = "block";
      // zoo.style.display = "none";
    } else {
      x.style.display = "none";
      // zoo.style.display = "block";

    }
  }

  return (
    <main>
      <div className="Container">
        <h1>Support the #noviolence11-4-20 movement.  Cast your vote below and unite with Americans celebrating their diversity by raising their voices to say --- No matter the outcome of our Presidential election, let’s stand for No Violence post election.  And pay it forward.</h1>
        <h2>This Many Americans support no violence: <h1 className='CountText'>{count}</h1></h2>
        {/* <h3>{newIp}</h3> */}

        <button id="ben" className="Btn" onClick={() => {
          handleClick();
          hideSeek();
          setBen(true);
        }}>YES</button>

        {ben ? <h1 id="ty" className="thank-you">Thank you for supporting!</h1> : null}
      </div>
    </main>
  );
}

export default App;
