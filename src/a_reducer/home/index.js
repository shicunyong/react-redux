/** 通用reducer **/

const initState = {
};
const reducerFn = (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
  default:
    return newState;
  }
};

export default reducerFn;
