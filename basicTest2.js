function timeConversion(s) {
  const timeArr = s.slice(0, 8).split(":");
  const hour = parseInt(timeArr[0]);

  if (s.includes("PM") && hour !== 12) {
    timeArr[0] = (hour + 12).toString();
  }

  if (s.includes("AM") && hour === 12) {
    timeArr[0] = "00";
  }

  return timeArr.join(":");
}

const s = "12:01:00PM";
console.log(timeConversion(s)); // Output: 12:01:00
