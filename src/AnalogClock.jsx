import React, { useState, useEffect } from 'react';
import './AnalogClock.css';
const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());}, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours() % 12;
  const min = time.getMinutes();
  const sec = time.getSeconds();

  const hourDeg = (hours * 30) + (min / 2); 
  const minuteDeg = min * 6; 
  const secondDeg = sec * 6; 

  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hour-hand" style={{ transform: `rotate(${hourDeg}deg)` }}></div>
        <div className="minute-hand" style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
        <div className="second-hand" style={{ transform: `rotate(${secondDeg}deg)` }}></div>
      </div>
    </div>
  );
};
export default AnalogClock;
