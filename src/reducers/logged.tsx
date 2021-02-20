import { loggedActionType } from "../actions/actions_index";


export interface loggedReducerType {
    logState:string
}
const initValues:loggedReducerType ={
    logState:"LOGGED_OUT"
};
export default function loggedReducer (state = initValues, action:loggedActionType ){
switch (action.type) {
    case "Login":
        return state
    default:
        return state
}
}
