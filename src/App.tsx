import React from "react";
import Button from "./Button";
import { GlobalStyle } from "./StyledReset";

function App() {
  return (
    <>
      <GlobalStyle />
      <Button width={"s"} height={"s"} bgColor={"light"} text={"버튼"} />
      <Button width={"m"} height={"m"} bgColor={"gray"} text={"버튼"} />
      <Button width={"l"} height={"l"} bgColor={"orange"} text={"버튼"} />
      <Button width={"l"} height={"l"} text={"버튼"} disabled={true}></Button>
    </>
  );
}

export default App;
