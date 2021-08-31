const receivesAFunction = cb => cb();

const returnsANamedFunction = () => {
  const myFunc = () => { console.log('from inner function'); };
  return myFunc;
};

const returnsAnAnonymousFunction = () => {
  return () => { console.log('from inner function'); };
};