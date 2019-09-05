export const convertMillisec = (millisec) => {
  let s = Math.floor(millisec / 1000);
  let m = Math.floor(s / 60);
  s = s % 60;
  let h = Math.floor(m / 60);
  m = m % 60;
  let d = Math.floor(h / 24);
  h = h % 24;
  h += d * 24;
  return h + `H` + m + `M`;
};
