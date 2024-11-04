"use client"

import React, { useState, useCallback } from 'react';

const ExpensiveComponent = React.memo(({ compute }) => {
  console.log('ExpensiveComponent rendered');
  return <div>Computed: {compute()}</div>;
})


function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(15)

  const computeExpensiveValue = useCallback(() => {
    console.log('Computing expensive value');
    return count * 100;
  }, [count]);

  return (
    <div>
      <div>
        <div>number:{number}</div>
        <button onClick={() => setNumber(pre => pre + 1)}>increase number</button>
      </div>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveComponent compute={computeExpensiveValue} />
    </div>
  );
}

export default App;

