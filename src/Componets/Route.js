import { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLactionChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLactionChange);

    return () => {
      window.removeEventListener("popstate", onLactionChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
