import React, { useState } from "react";
import Button from "./components/Button";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [results, setResults] = useState([]);

  const addResult = result => {
    setResults([result, ...results]);
  };

  const incrementCount = size => {
    setCount(count + size);
    addResult(count);
  };

  const decrementCount = size => {
    setCount(count - size);
    addResult(count);
  };

  const reset = () => {
    setCount(0);
    addResult(count);
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
      <Button onClickFunction={reset} text="reset" />
      <br />
      <span>{count}</span>
      <br />
      <br />
      {results.length > 1 && (
        <div>
          <h3>Previous results</h3>
          <ul>
            {results.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
