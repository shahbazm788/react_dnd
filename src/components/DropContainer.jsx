import React from 'react';
import { useDrop } from 'react-dnd';

const DropContainer = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'box',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        border: `2px dashed ${isOver ? 'green' : 'black'}`,
        padding: '10px',
        minHeight: '200px',
      }}
    >
      {children}
    </div>
  );
};

export default DropContainer;