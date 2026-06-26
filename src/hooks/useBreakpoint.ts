import { useEffect, useState } from "react";

export default function useBreakpoint(breakpoint: number = 900) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}