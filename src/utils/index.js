export const importAll = (r) => {
  let images = [];
  r.keys().map((item, index) => { images.push(r(item)); });
  return images;
}
