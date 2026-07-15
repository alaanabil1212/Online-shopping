import React from "react";
import Light from "../assets/light.png";
import Dark from "../assets/dark.png";

const Darkmode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  const element = document.documentElement;
  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="relative">
      <img
        src={Light}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-15 h-6 top-0 cursor-pointer drop-shadow-[1px_1px_3px_rgba(0,0,0,0.5)]
         transition-all duration-300 absolute right-0 z-10
        ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />
      <img
        src={Dark}
        alt=""
        onClick={() => (setTheme === "light" ? "dark" : "light")}
        className="w-15 h-6 top-0 cursor-pointer drop-shadow-[1px_1px_3px_rgba(0,0,0,0.5)]
      transition-all duration-300 "
      />
    </div>
  );
};

export default Darkmode;
