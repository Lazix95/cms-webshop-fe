import React from 'react';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";



import { login, logout, initApp as authInitApp } from 'features/auth/authSlice';
import { initApp as defaultInitApp } from 'features/default/defaultSlice';


export default function (props) {
  const auth = useSelector(state => state);
  const dispatch = useDispatch();

  return (
      <div>
         <button onClick={() => {dispatch(authInitApp('auth'))}}>test 1</button>
        <button onClick={() => {dispatch(defaultInitApp('bilo sta default'))}}>test 2</button>
      </div>
  )
}
