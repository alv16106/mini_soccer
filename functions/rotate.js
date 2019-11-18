// rotate little to the left
const rotateAlittleToTheLeft = ({ rotation: x }) => 
  // DOMINIO                |   función              |  default
  (-Math.PI <= x && x <= 0) ? Math.E ** (-3 * (x**2)) : 0;

// rotate to the left
const rotateAlotToTheLeft = ({ rotation: x }) => 
  (-Math.PI <= x && x <= 0) ? Math.E ** (-3 * (x + Math.PI)**2) : 0;

// rotate little to the right
const rotateAlittleToTheRight = ({ rotation: x }) =>
  (0 <= x && x <= Math.PI) ? Math.E ** (-3 *(x**2)) : 0;

// rotate to the right
const rotateAlotToTheRight = ({ rotation: x }) =>
  (0 <= x && x <= Math.PI) ? Math.E ** (-3 * ( x - Math.PI)**2) : 0;