import React, { useState } from 'react';
import '../App.css';

const SetStateCounter = () => {
  // Can use setState or multiple pieces of state using object or separate function
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
  const [count3, setCount3] = useState(30);
  return (
    <div>
      <button
        type="button"
        // Changing state of object will replace entire state object, spread original state first
        // set function allow you to get current state before replacing state
        onClick={() => setCount(currentCount => ({ ...currentCount, count: currentCount.count + 1 }))}
      >
        +
      </button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
      <div>count 3: {count3}</div>
      <button
        type="button"
        onClick={() => setCount(currentCount => ({ ...currentCount, count2: currentCount.count2 - 1 }))}
      >
        -
      </button>
      <button type="button" onClick={() => setCount3(currentCount => currentCount + 3)}>
        3
      </button>
    </div>
  );
};

export default SetStateCounter;
