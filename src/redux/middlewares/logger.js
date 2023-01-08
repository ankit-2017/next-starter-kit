const logger = (store) => (next) => (action) => {
  console.group(action.type);
  // console.log('\x1b[32m%s\x1b[0m', 'prev state', store.getState())
  console.log('\x1b[34m%s\x1b[0m', 'dispatching', action);
  const result = next(action);
  console.log('\x1b[32m%s\x1b[0m\x1b[1m', 'next state', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
