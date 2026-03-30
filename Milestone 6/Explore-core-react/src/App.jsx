import './App.css'
import Dumlo from './external'
import { Suspense, use } from 'react';

const fetchUser = fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues').then(res=>res.json());

function Users({fetchUser}){
const Users=use(fetchUser);
console.log(Users);
}


const friends=async()=>{
  const res=await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
  return res.json();
}
function App() {

  function btn1() {
    alert('Button 1 clicked');
  }

  const btn2 = () => {
    alert("Button 2 clicked");
  }

  const add = (num1, num2) => {
    alert("Addition is " + (num1 + num2))
  }

  const friendsPromise = friends();
  return (
    <>
      <h1>Documentation</h1>
      <Person name="asir"></Person>
      <Dude name="Jumlo" age="90"></Dude>
      <Dumlo></Dumlo>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUser={fetchUser}>
          
        </Users>
      </Suspense>
      
      <button onClick={btn1}>Button 1</button>
      <button onClick={btn2}>Button 2</button>
      <button onClick={() => add(5, 6)}>Button 3</button>
    </>
  )
}

function Person(proms) {
  const age = 24;
  return (
    <>
      <p>Hello Motherfaka age is {age} name is {proms.name}</p>
    </>
  )
}
function Dude({ name, age }) {
  return (
    <>
      <p>Hello Motherfaka dude age is {age} name is {name}</p>
    </>
  )
}

export default App
