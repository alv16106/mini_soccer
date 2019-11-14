// rotate little to the left
const rotateAlittleToTheLeft = ({ example: x }) => {
  if (-Math.PI <= x && x <= 0) {
    return - Math.log(-x/Math.PI);
  }
  return 0;
}

// rotate to the left
const rotateAlotToTheLeft = ({ example: x }) => {
  if (-Math.PI <= x && x <= 0) {
    return - Math.log((x + Math.PI) / Math.PI);
  }
  return 0;
}