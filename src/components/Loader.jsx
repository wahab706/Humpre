import React from "react";

export function Loader() {
  return (
    <div>
      <div className="w-full lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
