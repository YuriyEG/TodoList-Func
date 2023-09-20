const formatSeconds = (sec) => {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  if (sec >= 3600) {
    hours = (sec - (sec % 3600)) / 3600;
  }
  if (sec >= 60) {
    minutes = ((sec - (sec % 60)) / 60) % 60;
  }
  seconds = sec % 60;

  return `${hours}:${minutes}:${seconds}`;
};

export default formatSeconds;
