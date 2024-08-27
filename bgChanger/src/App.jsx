import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=> setColor("red")}
          
            className="outline-none px-4 py-1 rounded-ful text-white shadow-sm"
            style={{ backgroundColor: "red" }}
            
          >
          
            Red
          </button>
          <button
          onClick={()=> setColor("blue")}
            className="outline-none px-4 py-1 rounded-ful text-white shadow-sm"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
          onClick={()=> setColor("green")}
            className="outline-none px-4 py-1 rounded-ful text-white shadow-sm"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
          onClick={()=> setColor("violet")}
            className="outline-none px-4 py-1 rounded-ful text-white shadow-sm"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
          <button
          onClick={()=> setColor("yellow")}
            className="outline-none px-4 py-1 rounded-ful text-white shadow-sm"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
          onClick={()=> setColor("orange")}
            className="outline-none px-4 py-1 rounded-ful text-white shadow-sm"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
          onClick={()=> setColor("pink")}
            className="outline-none px-4 py-1 rounded-ful text-white shadow-sm"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
          onClick={()=> setColor("black")}
            className="outline-none px-4 py-1 rounded-ful text-white shadow-sm"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
