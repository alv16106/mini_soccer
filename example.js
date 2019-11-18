const fuzzy_or = (...elements) => 
  it => 
    Math.max(...elements.map(f => f(it)));

const fuzzy_and = (...elements) => 
  it => 
    Math.min(...elements.map(f => f(it)));


const hAlotLeft = fuzzy_or(
  alotToTheLeft,
)

const hLittleLeft = fuzzy_or(
  littleToTheLeft,
  toTheLeft,
);

const hAlotRight = fuzzy_or(
  alotToTheRight,
)

const hLittleRight = fuzzy_or(
  littleToTheRight,
  toTheRight,
);

// LEFT
// a lot to the left 
const clause_alotLeft = fuzzy_and(
  hAlotLeft,
  rotateAlotToTheLeft,
);
// a little to the left
const clause_littleLeft = fuzzy_and(
  hLittleLeft,
  rotateAlittleToTheLeft,
);

// a lot to the right
const clause_alotRight = fuzzy_and(
  hAlotRight,
  rotateAlotToTheRight,
);
// a little to the right
const clause_littleRight = fuzzy_and(
  hLittleRight,
  rotateAlittleToTheRight,
);

let r = clause_alotLeft({degree: -2, example: -1});

/* let t = 0, b = 0;
for (let i = 0; i >= -Math.PI; i -= 0.001) {
  let u = clause_alotLeft({degree: -3, example: i});
  t += u*i;
  b += u;
} */

const integral_left = (data, key, clause, start = 0, end = -Math.PI, steps = -0.001) => {
  let t = 0, b = 0;
  for (let i = start; i >= end; i += steps) {
    data[key] = i;
    let u = clause(data);
    t += u*i;
    b += u;
  }
  return {t, b, value: t/b}
}


const integral_right = (data, key, clause, start = 0, end = Math.PI, steps = 0.001) => {
  let t = 0, b = 0;
  for (let i = start; i <= end; i += steps) {
    data[key] = i;
    let u = clause(data);
    t += u*i;
    b += u;
  }
  return {t, b, value: t/b}
}

const choose_rotation = (values, returns, clauses, data, key) => {
  let bigger = 0;
  let clause = []

  for (let i = 0; i < returns.length; i++) {
    let d = data;
    d[key] = values[i];
    clause.push(clauses[i](data));
  }


  for (let i = 0; i < returns.length; i++) {
    bigger = (clause[bigger] < clause[i]) ? i : bigger;
  }
  console.log(values)
  
  return values[bigger];
}