import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const initialstate = null;
  const [state, dispatch] = useReducer(AlertReducer, initialstate);

  //set Alert
  const setAlert = (msg, type) => {
    //this.setState({ alert: { msg: msg, type: type } });
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    //setTimeout(() => this.setState({ alert: null }), 3000);
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
