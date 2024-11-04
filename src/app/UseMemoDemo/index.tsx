"use client"
import React, { useMemo, useState } from 'react';


function ExpensiveComponent({ items }) {
  const [filter, setFilter] = useState('');


  // Memoize the filteredItems to only recompute when `items` or `filter` changes
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => item.includes(filter));
  }, [items, filter]);

  // console.log('Filtering items 222...');
  // const filteredItems = items.filter(item => item.includes(filter))


  return (
    <div>
      <input value={filter}
             onChange={(e) => setFilter(e.target.value)}
             placeholder="Filter items" />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpensiveComponent
