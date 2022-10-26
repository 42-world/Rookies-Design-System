import { css } from "@emotion/css";
import * as React from "react";
import { tokens } from "../tokens";

type Props = {
  theme: "light" | "dark";
  text: string;
  link: string;
  size: "normal" | "small";
  type: "default" | "danger" | "primary";
};

export function Button({ text, link, size, type }: Props) {
  return (
    <button
      type="button"
      className={css`
        padding: ${size === "normal"
          ? "8px 24px 8px 24px"
          : "4px 24px 4px 24px"};
        border-radius: 8px;
        background-color: ${type === "primary"
          ? tokens.color.main_green_10
          : tokens.color.grey_10_light};
        border: 1px solid ${tokens.color.grey_30_light};
        color: ${type === "primary"
          ? tokens.color.grey_5_light
          : tokens.color.grey_50_light};
        font-weight: 500;
        font-size: 16px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        white-space: nowrap;
        vertical-align: baseline;
        line-height: 1.875;

        font-family: "Pretendard Variable", Pretendard, -apple-system,
          BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
          "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

        @font-face {
          font-family: "Pretendard Variable", Pretendard, -apple-system,
            BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
            "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
          src: url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css");
        }
      `}
    >
      {text}
    </button>
  );
}

const sizeNormal = css``;
const sizeSmall = css``;
