import { useEffect, useState } from "react";

function ProgressBar() {
  const [scrollTop, setScrollTop] = useState(0); // Initialize state with a default value

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (winScroll / height) * 100;

      setScrollTop(scrolled);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="w-1.5 bg-gray-200 fixed ml-[-5px] mt-[90px]
    h-full mb-4"
    >
      <div
        className="bg-green-600 transition-all ease-out duration-1000"
        style={{ height: `${scrollTop}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
