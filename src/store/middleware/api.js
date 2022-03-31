import axios from "axios";
import * as actions from '../api';

const apiCall = ({ dispatch }) => next => async action => {
  if (action.type !== actions.apiCallBegan.type) return next(action)

  next(action);
  const { url, method, data, onSuccess, onError } = action.payload;

  try {
    const response = await axios.request({
      baseURL: "https://localhost:902/api",
      url, //url of endpoint
      method,
      data
    });
    //general
    dispatch(actions.apiCallSuccess(response.data))
    // specific
    if(onSuccess) dispatch({ type: onSuccess, payload: response.data })
  } catch(error) {
    // generañ
     dispatch(actions.apiCallFailed(error))
     //specific
     if(onError) dispatch({ type: onError, payload: error })
  }
};

export default apiCall;