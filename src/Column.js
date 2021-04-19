import React from 'react';
import Item from './Item';

export default function Column({
  data,
  handleInputChange,
  index,
  handleAddTodo,
  handleShift,
  isFirst,
  isLast,
}) {
  return (
    <div className='col'>
      <h3 style={{ backgroundColor: data.color }}>{data.title}</h3>
      {data.todos.map((v, i) => (
        <Item
          key={i}
          itemTitle={v}
          isFirst={isFirst}
          isLast={isLast}
          handleShift={handleShift}
          index={i}
          colIndex={index}
        />
      ))}
      <input
        onChange={(e) => handleInputChange(e.target.value, index)}
        value={data.input}
        placeholder='enter some value'
      />
      <button onClick={() => handleAddTodo(index)}>Add todo</button>
    </div>
  );
}
