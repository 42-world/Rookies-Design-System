import * as React from 'react';

export type SVGColor = string | any;

const Moon = ({ color }: SVGColor) => {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color={color}>
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
    </svg>
  );
};

export default Moon;
