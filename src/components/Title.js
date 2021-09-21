import React from 'react';

function Title({ titleTop, titleBottom, subtitle }) {
  return (
    <>
      <h1 className='fw-light'>{titleTop}</h1>
      <h1>{titleBottom}</h1>
      <p>{subtitle}</p>
    </>
  );
}

export default Title;
