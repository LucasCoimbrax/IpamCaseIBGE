import React from "react";

import SelectState from "./Components/Select/SelectState";
import Header from "./Components/Header.js/header";

function App() {
  document.title = 'IMAP'

  return (
    <>
      <Header/>
      <SelectState/>
    </>
  );
}

export default App