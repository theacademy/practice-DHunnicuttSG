import React, { useState, useEffect } from 'react';

// This component takes a targetDate as a prop.  
// create: const targetDate = new Date('2024-10-10:00:00').getTime()
// then use: <SimpleCountdown targetDate={targetDate} />

function CountdownTimer({ targetDate }) {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      setTimerDays(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
      setTimerHours(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setTimerMinutes(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
      setTimerSeconds(Math.floor((timeLeft % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      <div>Days: {timerDays}</div>
      <div>Hours: {timerHours}</div>
      <div>Minutes: {timerMinutes}</div>
      <div>Seconds: {timerSeconds}</div>
    </div>
  );
}

export default CountdownTimer;