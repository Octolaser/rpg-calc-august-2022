import * as React from "react";

const D6Icon = (props) => {
  let color = "#662d91";
  if (props.active) {
    color = " #3E1B6B";
  }
  if (props.button) {
    color = "none";
  }
  return (
    <svg data-name="Layer 1" viewBox="0 0 72.02 72.59" {...props}>
      <path
        fill={color}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.898}
        d="M.45.45h71.13v71.69H.45z"
      />
    </svg>
  );
};

export default D6Icon;
