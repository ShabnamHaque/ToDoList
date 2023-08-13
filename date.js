//console.log(module);

module.exports.getDate = getDate;

function getDate() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return (day = today.toLocaleDateString("en-US", options));
}

module.exports.getDay = getDay;

function getDay() {
  const today = new Date();

  const options = {
    weekday: "long",
  };
  return (day = today.toLocaleDateString("en-US", options));
}
