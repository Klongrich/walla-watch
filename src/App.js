import React, { useEffect, useState } from "react";

import { PudgyHead } from "./data/pudgyMetaDecoder";

function App() {

  useEffect(() => {

  }, [])

  return (
    <>
      <h2>Walla-Watch!</h2>

      <h3>Recently Listed Wallas</h3>

      <div Style="border: 1px solid black;">
        <p>Filler</p>

        {PudgyHead[0]}

      </div>
    </>
  );
}

export default App;
