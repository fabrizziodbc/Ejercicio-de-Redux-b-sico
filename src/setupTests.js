const asyncIncrement = () => () => {
  return setTimeout(() => console.log("response"), 2500);
};
asyncIncrement();
