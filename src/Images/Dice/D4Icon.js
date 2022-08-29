import * as React from "react";

const D4Icon = (props) => {
  let color = " #662d91";

  if (props.active) {
    color = "#3E1B6B";
  }
  if (props.button) {
    color = "none";
  }

  return (
    <svg data-name="Layer 1" viewBox="0 0 71.96 72.33" {...props}>
      <path
        fill={color}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.779}
        d="M34.84.39L.39 71.94h71.19L34.84.39z"
      />
    </svg>
  );
};

const MemoD4Icon = React.memo(D4Icon);
export default MemoD4Icon;
