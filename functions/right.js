// bastante a la der
const alotToTheRight = ({ degree: x }) => {
  if (0 <= x && x <= Math.pi) {
    return e ** (-2.5 * (x - Math.pi)**2)
  }
  return 0;
}

// a la der
const toTheRight = ({ degree: x }) => {
  if (0 <= x && x <= Math.pi) {
    return e ** (-2.5 * (x - Math.pi / 2)**2)
  }
  return 0;
}

// un poco a la der
const littleToTheRight = ({ degree: x }) => {
  if (0 <= x && x <= Math.pi / 2) {
    return e ** (-2.5 * (x)**2)
  }
  return 0;
}