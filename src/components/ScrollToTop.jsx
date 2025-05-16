
"use client";

import { useEffect, useState } from "react";


export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{position:"fixed",bottom:"6px",right:"6px",padding:"5px",borderRadius:"4px",background:"#54C7F2",border:"0px",transition:"all 0.4s", width: "40px",height: "47px"}}
      className="btn"
      aria-label="Scroll to top"
    >
    <i style={{fontSize:"28px",color:"white"}} className="bi bi-arrow-up-short" ></i>
    </button>
  );
}