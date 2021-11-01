const middle = arr => {
  let mid = Math.ceil(arr.length/2);
  let out = [];

  if (arr.length <= 2) {
    return out;
  }
  if (arr.length % 2 !== 0) {
    out.push(mid)
  } else {
    out.push(mid, mid+1)
  }
  return out;
}

module.exports = middle;