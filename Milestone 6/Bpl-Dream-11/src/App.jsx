import { ToastContainer } from 'react-toastify';
import './App.css'
import Navbar from './Components/Homepage/Navbar/Navbar'
import Players from './Components/Homepage/Players/Players';
import { Suspense, useState } from 'react';

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {

  const playerPromise = fetchPlayer();
  const [coin,setCoin]=useState(15000000);

  return (
    <>
      <Navbar className="container mx-auto" coin={coin}></Navbar>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <Players playerPromise={playerPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
