import React,{ useState } from "react";

export const Clock = () => {

  let time = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
  let date = new Date().toLocaleDateString();
  const [currentTime, setCurrentTime] = useState({time})
  
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }
  setInterval(updateTime, 1000)

  return <div>{time} {date}</div>
}