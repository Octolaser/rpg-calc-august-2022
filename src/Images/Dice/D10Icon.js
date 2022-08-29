import * as React from "react";

const D10Icon = (props) => {
  let color = "#662d91";
  if (props.active) {
    color = " #3E1B6B";
  }
  if (props.button) {
    color = "none";
  }
  return (
    <svg data-name="Layer 1" viewBox="0 0 61.94 71.32" {...props}>
      <path
        fill={color}
        d="M11.45 35.62L31.09.52l19.81 35.1-19.81 10.55-19.64-10.55z"
      />
      <path
        d="M31.1 1.04l19.45 34.44-19.46 10.4-19.29-10.4L31.1 1.04m0-1l-20 35.72 19.99 10.72 20.16-10.76L31.09 0z"
        fill="#fff"
      />
      <path
        fill={color}
        d="M51.43 35.52L32.2 1.44l29.49 28.92v9.85l-10.26-4.69z"
      />
      <path
        d="M33.3 2.88l28.13 27.6v9.34l-9.82-4.49L33.3 2.88M31.09 0l20.16 35.72 10.72 4.88V30.26L31.09 0z"
        fill="#fff"
      />
      <path
        fill={color}
        d="M31.35 46.31l19.91-10.3 10.24 4.68-30.15 30.02v-24.4z"
      />
      <path
        d="M51.26 36.29l9.8 4.47L31.6 70.09V46.48l19.66-10.19m0-.57L31.09 46.15v25.16L61.97 40.6l-10.72-4.88z"
        fill="#fff"
      />
      <path fill={color} d="M.45 40.69L11.1 36l19.74 10.31v24.4L.45 40.69z" />
      <path
        d="M11.09 36.28l19.49 10.2V70.1L.89 40.77l10.2-4.49m0-.56L-.03 40.6l31.12 30.71V46.15l-20-10.43z"
        fill="#fff"
      />
      <path
        fill={color}
        d="M.25 30.94L29.99 1.46 10.92 35.52.25 40.22v-9.28z"
      />
      <path
        d="M28.88 2.91L10.74 35.32.51 39.82v-8.77L28.88 2.91M31.09 0L-.03 30.83v9.77l11.1-4.88L31.09 0z"
        fill="#fff"
      />
    </svg>
  );
};

export default D10Icon;
