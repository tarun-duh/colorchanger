import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Button from "./components/Button";

function App() {
  const [col, setCol] = useState("white");

  let changeit = (color) => {
    setCol(color);
  };

  return (
    <>
      <div className="w-screen h-screen " style={{ backgroundColor: col }}>
        <div className="inset-x-0 bottom-10 fixed flex justify-center p-3 items-center ">
          <div className=" flex flex-wrap gap-3  w-auto p-3 bg-neutral-200 shadow-2xl h-auto rounded-lg mx-4">
            <Button onClick={changeit} color="#bd133d" colornm="rose" />
            <Button onClick={changeit} color="#0f766e" colornm="teal" />
            <Button onClick={changeit} color="#a11cae" colornm="fuchsia" />
            <Button onClick={changeit} color="#047857" colornm="emerald" />
            <Button onClick={changeit} color="#0e7390" colornm="cyan" />
            <Button onClick={changeit} color="#4d7c0f" colornm="lime" />
            <Button onClick={changeit} color="#6b29da" colornm="violet" />
            <Button onClick={changeit} color="#374b5e" colornm="gray" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
