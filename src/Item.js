import React from 'react';

export default function Item({
  handleShift,
  itemTitle,
  isFirst,
  isLast,
  index,
  colIndex,
}) {
  return (
    <div className='item'>
      {isFirst ? null : (
        <button onClick={() => handleShift(index, colIndex, colIndex - 1)}>
          Prev
        </button>
      )}
      <span>{itemTitle}</span>
      {isLast ? null : (
        <button onClick={() => handleShift(index, colIndex, colIndex + 1)}>
          Next
        </button>
      )}
    </div>
  );
}
