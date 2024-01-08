const lengthenDate = (date: string): string => {

  const day = date.split("/")[1]
  const month = date.split("/")[0]
  const year = date.split("/")[2].slice(0, 4)

  const reformattedDate = new Date(`${month}/${day}/${year}`).toDateString().split(" ");
  const numDay = Number(reformattedDate[2]);
  const lengthenedDate = [];

  type Days = {
    "Mon": string
    "Tue": string
    "Wed": string
    "Thu": string
    "Fri": string
    "Sat": string
    "Sun": string
  };

  type Months = {
    "Jan": string
    "Feb": string
    "Mar": string
    "Apr": string
    "May": string
    "Jun": string
    "Jul": string
    "Aug": string
    "Sep": string
    "Oct": string
    "Nov": string
    "Dec": string
  };

  const days: Days = {
    "Mon": "Monday",
    "Tue": "Tuesday",
    "Wed": "Wednesday",
    "Thu": "Thursday",
    "Fri": "Friday",
    "Sat": "Saturday",
    "Sun": "Sunday",
  };

  const months: Months = {
    "Jan": "January",
    "Feb": "February",
    "Mar": "March",
    "Apr": "April",
    "May": "May",
    "Jun": "June",
    "Jul": "July",
    "Aug": "August",
    "Sep": "September",
    "Oct": "October",
    "Nov": "November",
    "Dec": "December"
  };

  for (let day in days) {
    if (reformattedDate[0] === day) {
      lengthenedDate.push(days[day as keyof Days]);
    }
  }
  if (numDay === 1 || numDay === 21 || numDay === 31) {
    lengthenedDate.push(`${numDay}st`);
  } else if (numDay === 2 || numDay === 22) {
    lengthenedDate.push(`${numDay}nd`);
  } else if (numDay === 3 || numDay === 23) {
    lengthenedDate.push(`${numDay}rd`);
  } else {
    lengthenedDate.push(`${numDay}th`);
  }
  for (let month in months) {
    if (reformattedDate[1] === month) {
      lengthenedDate.push(months[month as keyof Months]);
    }
  }
  lengthenedDate.push(year);
  return lengthenedDate.join(" ");
};

const formatTime = (time: number): string => {
  if (time < 60) {
    if (time === 1) {
      return `${time} min`
    } else {
      return `${time} mins`
    }
  }
  if (time % 60 === 0) {
    if (time / 60 === 1) {
      return `1 hour`
    } else {
      return `${time / 60} hours`
    }
  }
  if (time > 60 && time < 120) {
    if (time === 61) {
      return `1 hour 1 min`
    } else {
      return `1 hour ${time - 60} mins`
    }
  }
  if (time - Math.floor(time / 60) * 60 === 1) {
    return `${Math.floor(time / 60)} hours 1 min`
  } else {
    return `${Math.floor(time / 60)} hours ${time - Math.floor(time / 60) * 60} mins`
  }
}

export { lengthenDate, formatTime };
