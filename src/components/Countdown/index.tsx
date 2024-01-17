'use client'

// Module imports
import { useEffect, useState } from 'react';

// Import styles
import './styles.scss';


// Declaration of countdown object
interface CountdownObject {
  isToday: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}


// Countdown component declaration
export const Countdown: React.FC<{ targetDate: Date }> = ({ targetDate }) => {

  // Declaration of returned countdown
  const [countdown, setCountdown] = useState<CountdownObject>({
    isToday: true,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [countdownMessage, setCountdownMessage] = useState('loading...')

  // Update countdown every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeRemaining = targetDate.getTime() - now.getTime();

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setCountdown({ isToday: false, days, hours, minutes, seconds });
      } else {
        clearInterval(intervalId);
        setCountdownMessage('today is the day!');
        setCountdown({ isToday: true, days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetDate]);

  return (
    <div className='countdown-styled'>
      {!countdown.isToday ?
        <>
          <div className='timer'>
            <div className="number">{countdown.days}</div>
            <div className="text">days</div>
          </div>
          <div className='timer'>
            <div className="number">{countdown.hours}</div>
            <div className="text">hours</div>
          </div>
          <div className='timer'>
            <div className="number">{countdown.minutes}</div>
            <div className="text">minutes</div> </div>
          <div className='timer'>
            <div className="number">{countdown.seconds}</div>
            <div className="text">seconds</div>
          </div>
        </>
        :
        <p className='today'>{countdownMessage}</p>
      }
    </div>
  );
};
