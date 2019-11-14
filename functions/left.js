// bastante a la izq
const alotToTheLeft = ({ degree: x }) => {
  if (-Math.PI <= x && x <= 0) {
    return Math.E ** (-2.5 * (x + Math.PI)**2)
  }
  return 0;
}

// a la izq
const toTheLeft = ({ degree: x }) => {
  if (-Math.PI <= x && x <= 0) {
    return Math.E ** (-2.5 * (x + Math.PI / 2)**2)
  }
  return 0;
}

// un poco a la izq
const littleToTheLeft = ({ degree: x }) => {
  if (-Math.PI <= x && x <= 0) {
    return Math.E ** (-2.5 * (x)**2)
  }
  return 0;
}