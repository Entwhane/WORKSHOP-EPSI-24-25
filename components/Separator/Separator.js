import React from 'react';

export default function Separator({ color = '#000', thickness = 1 }) {
  return (
    <div className='separator' style={{ background: color, height: thickness }} />
  );
};

