import React from "react";

export default function Button({ color, colornm, onClick }) {
  //   function newfunc() {
  //     onClick(color);
  //   }
  return (
    <button
      onClick={() => onClick(color)}
      style={{ backgroundColor: color }}
      className="h-14 w-28 text-white  rounded-2xl"
    >
      {colornm}
    </button>
  );
}
