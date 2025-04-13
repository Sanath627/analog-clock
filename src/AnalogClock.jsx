import React, { useState, useEffect } from 'react';
import './AnalogClock.css';
const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tictic = setInterval(() => {
      setTime(new Date());}, 1000);
    return () => clearInterval(tictic);
  }, []);

  const hours = time.getHours() % 12;
  const min = time.getMinutes();
  const sec = time.getSeconds();

  const hour = (hours * 30) + (min / 2); 
  const minute = min * 6; 
  const second = sec * 6; 

  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hour-hand" style={{ transform: `rotate(${hour}deg)` }}></div>
        <div className="minute-hand" style={{ transform: `rotate(${minute}deg)` }}></div>
        <div className="second-hand" style={{ transform: `rotate(${second}deg)` }}></div>
      </div>
    </div>
  );
};
export default AnalogClock;
