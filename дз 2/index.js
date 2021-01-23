const date = new Date();

const options = {
  weekday: "short",
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

const svyatos = date.toLocaleString("Uk-uk", options);
const sviat = date.toLocaleString("It-it", options);

console.log(svyatos);
console.log(sviat);