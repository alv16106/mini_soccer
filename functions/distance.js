// bastante lejos
const far = ({ distance: d }) => {
  return 1 - Math.E ** (- d / 500 )
}

// A media distancia
const notSoFar = ({ distance: d }) => {
  if (d < 200 || d > 600) {
    return 0
  }
  return (d - 400) ** 2 / -40000 + 1
}

// bastante cerca
const close = ({ distance: d }) => {
  return Math.E ** (- d / 500 )
}