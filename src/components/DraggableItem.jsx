import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableItem = ({ type, text }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
    >
      {text}
    </div>
  );
};

export default DraggableItem;