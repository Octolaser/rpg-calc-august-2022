import * as React from "react";

const D8Icon = (props) => {
  let color = " #662d91";
  if (props.active) {
    color = "#3E1B6B";
  }
  if (props.button) {
    color = "none";
  }
  return (
    <svg data-name="Layer 1" viewBox="0 0 62.66 71.99" {...props}>
      <path fill={color} d="M31.24 0l-.17.29.26-.14-.09-.15z" />
      <path fill="#fff" d="M31.24 0l-.17.29.26-.14-.09-.15z" />
      <path fill={color} d="M31.36.83L62.1 52.49l-60.34.79L31.36.83z" />
      <path
        d="M31.37 1.47l30.18 50.72-59.24.77L31.37 1.47m0-1.26L1.22 53.61l61.43-.8L31.36.21z"
        fill="#fff"
      />
      <path fill={color} d="M32.11.85l30.23 16.79v34.01L32.11.85z" />
      <path
        d="M32.96 1.7l29 16.13V50.5l-29-48.8M31.24 0l.09.16h.08l-.05.1 31.29 52.6V17.45L31.24 0z"
        fill="#fff"
      />
      <path fill={color} d="M.32 17.73L30.59.93 1.5 52.47.32 17.73z" />
      <path
        d="M29.76 1.75l-28 49.59L.65 17.92 29.76 1.75M31.41.12zm0 0h-.08l-.26.14-31.11 17.3 1.26 36.05L31.36.21l.05-.1z"
        fill="#fff"
      />
      <path fill={color} d="M2.32 53.91l59.19-.78-30.1 18.49L2.32 53.91z" />
      <path
        d="M60.36 53.47L31.41 71.25l-28-17 56.93-.75m2.29-.66zm0 0l-61.43.8 30.21 18.35 31.24-19.18z"
        fill="#fff"
      />
    </svg>
  );
};

export default D8Icon;
