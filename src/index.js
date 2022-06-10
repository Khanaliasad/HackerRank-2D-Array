import "./styles.css";

let test1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];
let test2 = [
  [11, 12, 13, 14, 15, 16],
  [21, 22, 23, 24, 25, 26],
  [31, 32, 33, 34, 35, 36],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

let hourGlass = (arg) => {
  const element = [];
  for (let c = 0; c < 4; c++) {
    for (let d = 0; d < 4; d++) {
      function rhg(a, b, carray) {
        let add = null;
        add =
          carray[a][b] +
          carray[a][b + 1] +
          carray[a][b + 2] +
          carray[a + 1][b + 1] +
          carray[a + 2][b] +
          carray[a + 2][b + 1] +
          carray[a + 2][b + 2];
        element.push(add);
      }
      rhg(c, d, arg);
    }
  }
  function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }
  let finalAnswer = myArrayMax(element);
  return finalAnswer;
};

let clg = hourGlass(test1);

document.getElementById("app").innerHTML = clg;
