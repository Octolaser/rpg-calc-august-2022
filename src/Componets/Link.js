import react from "react";

const Link = ({ href, children }) => {
  const onClick = (event) => {
    if (event === metaKey || event === ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return;
  <a onClick={onClick} href={href}>
    {children}
  </a>;
};

export default Link;
