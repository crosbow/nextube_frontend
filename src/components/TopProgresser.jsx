import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TopProgresser = () => {
  const [progress, setProgress] = useState(0);
  const [animation, setAnimation] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setAnimation(true);
    setProgress(10);

    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 150) {
          return prev + (150 - prev) * 0.1;
        }

        return 150;
      });
    }, 10);

    const completeProgress = () => {
      clearInterval(interval);
      setProgress(150);

      setTimeout(() => {
        setAnimation(false);
        setProgress(0);
      }, 500);
    };

    const completedTimeout = setTimeout(completeProgress, 800);

    return () => {
      clearInterval(interval);
      clearTimeout(completedTimeout);
    };
  }, [location.pathname]);

  if (!animation) return null;

  return (
    <div
      className="fixed top-0 right-0 left-0 z-50 h-1 w-full transition-all duration-300"
      style={{
        opacity: progress === 150 ? "0" : "1",
      }}
    >
      <div
        className="h-full bg-purple-500 shadow-lg shadow-purple-500/50 transition-all duration-300 ease-linear"
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
};
export default TopProgresser;
