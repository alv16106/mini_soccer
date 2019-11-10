const fuzzy_or = (...elements) => 
  it => Math.max(...elements.map(f => f(it)));

const fuzzy_and = (...elements) => 
  it => Math.min(...elements.map(f => f(it)));


// funciones de pertenencia
const isTheExampleBad = ({ example: x }) => x < 5 ? 1 : 0;
const isTheExample = ({ example: x }) => (x > 2.5 && x < 7.5) ? 1 : 0;
const isTheExampleGreat = ({ example: x }) => x > 5 ? 1 : 0;

// funciones de pertenencia del restultado
const isTheGradeBad = ({ grade: x }) => x < 5 ? 1 : 0;

const hipotesis = fuzzy_or(
  isTheExampleBad,
  isTheExample,
)

const clause_1 = fuzzy_and(
  hipotesis,
  isTheGradeBad,
)

let r = clause_1({grade: 0, example: 0});

console.log(r)

