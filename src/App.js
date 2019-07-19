import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 })
  return (
    <div>
      <button onClick={() =>
        setCount(currentCount => ({ ...currentCount, count: currentCount.count + 1 }))}>+</button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
      <button onClick={() =>
        setCount(currentCount => ({ ...currentCount, count2: currentCount.count2 - 1 }))}>-</button>
    </div >
  );
}

export default App;
