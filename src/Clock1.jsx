import { useState, useEffect } from "react";

function Clock1({ timezone, city }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center p-4 text-center">
      <div className="bg-black rounded-xl w-72 p-4 text-white">
        <p>City: {city}</p>
        <p>Time Zone: {timezone}</p>
        <h1 className="text-2xl pt-2">{time}</h1>
      </div>
    </div>
  );
}
export default Clock1;
