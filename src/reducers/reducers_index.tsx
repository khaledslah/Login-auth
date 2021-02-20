import { combineReducers } from "redux";
import  loggedReducer  from "./logged";



  const rootReducer = combineReducers({
    LoginState: loggedReducer,
  })

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
