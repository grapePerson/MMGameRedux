export const importAll = (r) => {
  let images = [];
  r.keys().map((item, index) => { images.push(r(item)); });
  return images;
}
export default function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let num = Math.floor(Math.random() * (i + 1));
    let d = arr[num];
    arr[num] = arr[i];
    arr[i] = d;
  }
  return arr;
}
// Array.prototype.shuffle = function() {
//   for (let i = this.length - 1; i > 0; i--) {
//     let num = Math.floor(Math.random() * (i + 1));
//     let d = this[num];
//     this[num] = this[i];
//     this[i] = d;
//   }
//   return this;
// }
