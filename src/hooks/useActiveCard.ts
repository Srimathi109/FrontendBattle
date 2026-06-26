import { useEffect, useState } from "react";

export default function useActiveCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const saved = sessionStorage.getItem("activeCard");

    if (saved !== null) {
      setActiveIndex(Number(saved));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      "activeCard",
      activeIndex.toString()
    );
  }, [activeIndex]);

  return {
    activeIndex,
    setActiveIndex,
  };
}