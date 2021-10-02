//Pure Function Example

export function customMultiply(state, a) {
  return state * a;
}

export function randomColor() {
  var r = ("0" + ((Math.random() * 256) | 0).toString(16)).slice(-2),
    g = ("0" + ((Math.random() * 256) | 0).toString(16)).slice(-2),
    b = ("0" + ((Math.random() * 256) | 0).toString(16)).slice(-2);

  return "#" + r + g + b;
}
