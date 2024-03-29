"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

function Headpage() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex justify-between md:max-w-5xl max-w-lg mx-auto lg:mt-16 mt-11 md:px-8 px-9">
      <div className="flex gap-x-3 items-center">
        <Switch checked={checked} setChecked={setChecked} />
      </div>    
    </div>
  );
}

export default Headpage;

const Switch = ({ checked, setChecked }) => {
  let { resolvedTheme, setTheme } = useTheme();
  let toggleTheme = () => {
    let isDark = resolvedTheme === "dark";
    setChecked(!isDark);
    setTheme(isDark ? "light" : "dark");
  };
  return (
    <form className="flex space-x-4 antialiased items-center">
      <label htmlFor="checkbox" className={twMerge(
          "h-7 px-1 flex items-center border border-transparent shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full w-[60px] relative cursor-pointer transition duration-200",
          checked ? "bg-cyan-500" : "bg-[#07070A] border-slate-800"
        )}>
        <motion.div
          initial={{ width: "20px", x: checked ? 0 : 32 }}
          animate={{ height: ["20px", "10px", "20px"], width: ["20px", "30px", "20px", "20px"], x: checked ? 32 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="h-[20px] block rounded-full bg-white shadow-md z-10"
        ></motion.div>
        <input type="checkbox" checked={checked} onChange={toggleTheme} className="hidden" id="checkbox" />
      </label>
    </form>
  );
};
