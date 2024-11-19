import { useState } from "react";

function App() {
  const [color, setColor] = useState('rgb(49, 50, 51)');

  // return <>
  //   <div className="bg-black  py-3 mx-20 flex justify-between border rounded-2xl">
  //     <button onClick =
  //       className="text-white px-4 py-1 mx-6 bg-red-600 border rounded-xl">Black</button>
  //     <button className="text-white px-4 py-1 mx-6 bg-red-600 border rounded-xl">Black</button>

  //     <button className="text-white px-4 py-1 mx-6 bg-red-600 border rounded-xl">Black</button>

  //     <button className="text-white px-4 py-1 mx-6 bg-red-600 border rounded-xl">Black</button>

      
  //   </div>
  // </>

   return (
    <div className="w-full h-screen"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
          style={{backgroundColor: "red"}}
           >Red</button>
           
           <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
          style={{backgroundColor: "blue"}}
           >Blue</button>
           
           <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
          style={{backgroundColor: "green"}}
           >Green</button>
           
           <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
          style={{backgroundColor: "orange"}}
           >Orange</button>
           
           <button
          onClick={() => setColor("brown")}
          className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
          style={{backgroundColor: "brown"}}
           >Brown</button>
           
           <button
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
          style={{backgroundColor: "olive"}}
          >Olive</button>
          
        </div>
      </div>
    </div>
  )
}

export default App;