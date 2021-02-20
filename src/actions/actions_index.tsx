export interface loggedActionType {
    type: string
}

export function loggedAction():loggedActionType {
    return{
        type: "Login"
    }
    
}