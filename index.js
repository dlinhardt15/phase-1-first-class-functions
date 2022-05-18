const cb = x => x+2
const receivesAFunction = cb => cb();

const returnsANamedFunction = () => receivesAFunction;
const returnsAnAnonymousFunction = () => function () {};