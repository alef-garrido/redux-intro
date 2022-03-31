const apiCall = store => next => action => {
  if (action.type !== 'apiRequest') return next(action)

  
};

export default apiCall;