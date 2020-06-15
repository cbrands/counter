import React, { useState } from "react";
import Button from "./components/Button";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = size => {
    setCount(count + size);
  };

  const decrementCount = size => {
    setCount(count - size);
  };

  return (
    <div className="App">
      <Button size={1} onClickFunction={incrementCount} text="+1" />
      <Button size={10} onClickFunction={incrementCount} text="+10" />
      <Button size={100} onClickFunction={incrementCount} text="+100" />
      <Button size={1000} onClickFunction={incrementCount} text="+1000" />
      <br />
      <Button size={1} onClickFunction={decrementCount} text="-1" />
      <Button size={10} onClickFunction={decrementCount} text="-10" />
      <Button size={100} onClickFunction={decrementCount} text="-100" />
      <Button size={1000} onClickFunction={decrementCount} text="-1000" />
      <br />
      <span>{count}</span>
    </div>
  );
}

export default App;
