import React from 'react';

function Title({ titleTop, titleBottom, subtitle }) {
  return (
    <div className='text-center'>
      <h1 className='fw-light'>{titleTop}</h1>
      <h1 className='fw-bold'>{titleBottom}</h1>
      <p className='text-secondary'>{subtitle}</p>
    </div>
  );
}

export default Title;
