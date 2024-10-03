import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrontTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrontTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeWithLeadingZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };

  const formatDate = (date) => {
    const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="digital-clock">
        <h1><u>Digital Clock</u></h1>
        <div className="time">
          {formatTimeWithLeadingZero(formatHour(currentTime.getHours()))} 
          :{formatTimeWithLeadingZero(currentTime.getMinutes())}:
          {formatTimeWithLeadingZero(currentTime.getSeconds())}
          {currentTime.getHours() >= 12 ? " PM" : " AM"}
        </div>
        <div className="date">{formatDate(currentTime)}</div>
        <div className="copyright">
          <a 
            href="https://abishaek.com" 
            target="_blank" 
            rel="abishaek.com"
          >
            Developed by <span>Abishaek Duresh B</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App
