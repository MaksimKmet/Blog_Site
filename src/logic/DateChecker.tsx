
const DateChecker = () => {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const date: Date = new Date();
      const dayName: string = weekday[date.getDay()];
    
  return (
    <>
     {dayName === weekday[5] || dayName === weekday[6]
              ? "12-22"
              : dayName === weekday[0]
                ? "12-20"
                : "12-21"} 
    </>
  )
}

export default DateChecker
