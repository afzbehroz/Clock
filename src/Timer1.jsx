import { useEffect, useState } from "react";

function Timer1() {
  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center p-4 text-center">
      <div className="bg-black rounded-xl w-72 p-4 text-red-500 text-xl">
        <h1>Count Down {seconds} </h1>
      </div>
    </div>
  );
}

export default Timer1;
