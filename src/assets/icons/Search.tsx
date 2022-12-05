import * as React from 'react';

export type SVGColor = string | any;

const Search = ({ color }: SVGColor) => {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color={color}>
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Search;
