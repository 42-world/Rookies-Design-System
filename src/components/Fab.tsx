import { css } from '@emotion/css';
import * as React from 'react';

export default function Fab() {
  const handleClick = () => {
    // move to writing page
  };

  return <button className={defaultStyle} onClick={handleClick}></button>;
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

  &:hover {
		boxSizing: "border-box",
		width: 58,
		height: 58,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: "17px 17px 17px 17px",
		backgroundColor: "var(--main_green_20, #009929)",
		overflow: "hidden",
		alignContent: "center",
		flexWrap: "nowrap",
		gap: 0,
		aspectRatio: "1 / 1",
		borderRadius: 29,
	}
`;
