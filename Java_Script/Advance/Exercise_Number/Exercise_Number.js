console.log("Exercise_Number")
console.log("1. ให้เขียนฟังก์ชัน random(min, max) ที่จะ random เลข float ตั้งแต่ min จนถึง max มาให้เรา (ไม่รวม max)")
function random(min,max) {
  return (Math.random()*(max-min)+min)
}
console.log (random(1,5));
let Max = Math.ceil(prompt("Input Max Number :"));
let Min = Math.floor(prompt("Input Min Number :"));
alert (random(Min,Max).toFixed(2));
