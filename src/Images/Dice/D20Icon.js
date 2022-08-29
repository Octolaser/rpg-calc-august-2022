import * as React from "react";

const D20 = (props) => {
  let outline = "#fff";
  let color = "#662d91";
  if (props.active) {
    color = "#3E1B6B";
  }
  if (props.button) {
    color = "none";
  }

  return (
    <svg data-name="Layer 1" viewBox="0 0 63.18 72.27" {...props}>
      <path fill={color} d="M.53 54.09l10.78-6.11 19.5 23.49L.53 54.09z" />
      <path
        d="M11.26 48.26l18.6 22.41L.97 54.09l10.29-5.83M0 18.38v35.66l31.76 18.23-20.39-24.58-11.2 6.35L0 18.38z"
        fill={outline}
      />
      <path fill={color} d="M31.54.38v11.81L1.23 17.93 31.54.38z" />
      <path
        d="M31.32.76v11.25L2.45 17.47 31.32.76m.44-.76L0 18.38l31.76-6V0z"
        fill={outline}
      />
      <path fill={color} d="M31.98 12.19V.38l29.99 16.94-29.99-5.13z" />
      <path
        d="M32.2.75l28.57 16.13-28.57-4.87V.75M31.76 0v12.38l31.42 5.37L31.76 0z"
        fill={outline}
      />
      <path fill={color} d="M52.42 47.6l10.54-28.62v35.14L52.42 47.6z" />
      <path
        d="M62.74 20.21v33.52l-10-6.22 10-27.3m.44-2.46l-11 29.94 11 6.83V17.75z"
        fill={outline}
      />
      <path fill={color} d="M32.18 12.67l30.7 5.25L52.1 47.18 32.18 12.67z" />
      <path
        d="M32.58 12.97l30 5.12-10.52 28.57-19.48-33.69m-.85-.59l20.42 35.31 11-29.94-31.39-5.37z"
        fill={outline}
      />
      <path fill={color} d="M52.2 47.98l10.55 6.53-30.06 16.98L52.2 47.98z" />
      <path
        d="M52.24 48.27l10.08 6.23-28.74 16.21 18.66-22.44m-.09-.58L31.76 72.27l31.42-17.75-11-6.83z"
        fill={outline}
      />
      <path fill={color} d="M11.83 47.91h39.85L31.76 71.92 11.83 47.91z" />
      <path
        d="M51.21 48.13L31.76 71.58 12.3 48.13h38.91m.94-.44H11.37l20.39 24.58 20.39-24.58z"
        fill={outline}
      />
      <path fill={color} d="M11.74 47.48l20.02-34.67 20.01 34.67H11.74z" />
      <path
        d="M31.76 13.25l19.63 34H12.13l19.63-34m0-.87L11.37 47.69h40.78L31.76 12.38z"
        fill={outline}
      />
      <path fill={color} d="M.23 19.57L11.09 47.6.38 53.67l-.15-34.1z" />
      <path
        d="M.45 20.76L10.82 47.5.58 53.29.45 20.76M0 18.38l.17 35.66 11.2-6.35L0 18.38z"
        fill={outline}
      />
      <path fill={color} d="M.3 18.55l31.03-5.87L11.4 47.19.3 18.55z" />
      <path
        d="M30.9 12.99L11.44 46.68.58 18.72l30.3-5.73m.86-.61l-31.76 6 11.39 29.31 20.39-35.31z"
        fill={outline}
      />
    </svg>
  );
};

export default D20;
