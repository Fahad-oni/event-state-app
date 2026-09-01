import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>COUNTER</h2>
      <p>Current Status:{count} </p>
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}
