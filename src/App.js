import logo from './logo.svg';
import './App.css';
import Column from './Column';
import React from 'react';

const initialState = [
  {
    title: 'Col 1',
    todos: ['hello', 'foo'],
    color: 'yellow',
    input: '',
  },
  {
    title: 'Col 2',
    todos: ['hello', 'foo'],
    color: 'red',
    input: '',
  },
  {
    title: 'Col 3',
    todos: ['hello', 'foo'],
    color: 'green',
    input: '',
  },
  {
    title: 'Col 4',
    todos: ['hello', 'foo'],
    color: 'purple',
    input: '',
  },
];

function App() {
  const [col, setCol] = React.useState(initialState);

  const handleInputChange = (value, colIndex) => {
    const nextCol = [...col];
    nextCol[colIndex].input = value;
    setCol(nextCol);
  };

  const handleAddTodo = (colIndex) => {
    const nextCol = [...col];
    if (nextCol[colIndex].input) {
      nextCol[colIndex].todos.push(nextCol[colIndex].input);
      nextCol[colIndex].input = '';
      setCol(nextCol);
    }
  };

  const handleShift = (itemIndex, fromCol, toCol) => {
    const nextCol = [...col];
    const temp = nextCol[fromCol].todos[itemIndex];
    nextCol[fromCol].todos.splice(itemIndex, 1);
    nextCol[toCol].todos.push(temp);
    setCol(nextCol);
  };

  return (
    <div className='App'>
      {col.map((v, i) => (
        <Column
          index={i}
          handleInputChange={handleInputChange}
          data={v}
          key={i}
          handleAddTodo={handleAddTodo}
          handleShift={handleShift}
          isFirst={i === 0}
          isLast={i === col.length - 1}
        />
      ))}
    </div>
  );
}

export default App;
