const fuzzy_or = (...elements) => 
  it => 
    Math.max(...elements.map(f => f(it)));

const fuzzy_and = (...elements) => 
  it => 
    Math.min(...elements.map(f => f(it)));



// funciones de pertenencia
const isTheExampleBad = ({ example: x }) => x < 5 ? 1 : 0;
const isTheExample = ({ example: x }) => (x > 2.5 && x < 7.5) ? 1 : 0;
const isTheExampleGreat = ({ example: x }) => x > 5 ? 1 : 0;

// funciones de pertenencia del restultado
const isTheGradeBad = ({ grade: x }) => x < 5 ? 1 : 0;

const hAlotLeft = fuzzy_or(
  alotToTheLeft,
  toTheLeft,
)

const hLittleLeft = fuzzy_or(
  littleToTheLeft,
);

const clause_1 = fuzzy_and(
  hAlotLeft,
  rotateAlotToTheLeft,
)

const clause_2 = fuzzy_and(
  hLittleLeft,
  rotateAlotToTheLeft,
)

let r = clause_1({degree: -2, example: -1});

let t = 0, b = 0;
for (let i = 0; i >= -Math.PI; i -= 0.001) {
  let u = clause_1({degree: -3, example: i});
  t += u*i;
  b += u;
}

console.log(clause_1({ degree: -0.5, example: t/b }))