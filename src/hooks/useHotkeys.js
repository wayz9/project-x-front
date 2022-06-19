import { useEffect } from "react";

const useHotkeys = (key = "", ctrl = false, callback) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (ctrl) {
        if (e.ctrlKey && e.key === key) {
          e.preventDefault();
          callback();
        }
      } else {
        if (e.key === key && !e.ctrlKey) {
          e.preventDefault();
          callback();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, ctrl, callback]);
};

export default useHotkeys;
