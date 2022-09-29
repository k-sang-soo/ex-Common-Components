import React from 'react';
import Button from "./Button";
import {GlobalStyle} from "./StyledReset";

function App() {
  return (
      <>
        <GlobalStyle/>
        <Button width={"s"} height={"s"} text={"버튼"}/>
        <Button width={"m"} height={"m"} text={"버튼"}/>
        <Button width={"l"} height={"l"} text={"버튼"}/>
      </>
  );
}

export default App;
