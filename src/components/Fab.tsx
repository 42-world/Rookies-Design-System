import { css } from '@emotion/css';
import React from 'react';

export default function Fab() {
  return <div className={defaultStyle}></div>;
}

const defaultStyle = css`
  box-sizing: border-box;
  width: 58px;
  height: 58px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 17px 17px 17px 17px;
  background-color: var(--main_green_10, #41c464);
  overflow: hidden;
  align-content: center;
  flex-wrap: nowrap;
  gap: 0;
  aspect-ratio: 1 / 1;
  border-radius: 29px;
`;
