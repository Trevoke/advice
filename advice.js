function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

var advice = [
  'Advice 1',
  'Advice 2',
  'Advice 3'
];

var date = new Date();
var year = String(date.getFullYear());
var month = String(date.getMonth().padStart(2, '0');
var day = String(date.getDy()).padStart(2, '0');

var seed = year + month + day;

adviceIndex = Math.ceil(mulberry32(seed)() * advice.length);

console.loge(advice[adviceIndex]);
