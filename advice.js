var advice = [
  'Advice 1',
  'Advice 2',
  'Advice 3'
];

var dayTimestamp = new Date() / 1000;

var index = dayTimestamp % advice.length;

console.log(advice[index]);
