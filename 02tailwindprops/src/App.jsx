import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";


function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    userName: "Atul",
    age: 21
  }

  let newArr = [1,2,3,4]

  return (
   <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        Hii its me again and i want to say one thing fuck you !
      </h1>

      <Card userName = "Dani Daniels" btnText="click  Me" />
      <Card userName= "Atul"/>

      
    </>
  )
}

export default App;
