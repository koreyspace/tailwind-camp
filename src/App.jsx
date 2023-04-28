import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-600 text-white">Green Background</h1>
      <h1 className="text-green-400">Welcome to tailwind!</h1>
      <h2 className="text-vuejs">New color</h2>
      <p className="text-9xl">A desciptiopn</p>
      <p className="text-xs">A desciptiopn</p>
      <div>
        <div class="flex space-x-4">
          <div className="font-bold text-white bg-blue-500">Blue Text</div>
          <div className="font-bold text-white bg-red-500">Red Text</div>
          <div className="font-bold text-white bg-yellow-500">Yellow Text</div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-2/5 h-16 bg-green-500"></div>
        <div className="w-3/5 h-16 bg-blue-500"></div>
      </div>

      <div className="Parent">
        <div>Header</div>
        <div className="flex">
          <div>Main Content</div>
          <div className="flex flex-col">
            <div>Side Bar</div>
            <div>Menu</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-2 h-16 basis-1/2 bg-green-500"></div>
        <div className="w-2 h-16 basis-1/2 bg-blue-500"></div>
        <div className="w-2 h-16 basis-1/2 bg-red-500"></div>
      </div>

      <div className="flex flex-row">
        <div className="w-2 h-16 basis-8/12 bg-yellow-500"></div>
        <div className="w-2 h-16 basis-2/12 bg-orange-500"></div>
        <div className="w-2 h-16 basis-2/12 bg-purple-500"></div>
      </div>
    </>
  );
}

export default App;
