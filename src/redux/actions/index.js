export const addTotal = (total) => {
    return {
        type: "SET_TOTAL",
        payload: total
    } 
}

export const getCurrentUser = (user) => {
    return {
        type: "SET_CURRENT_USER",
        payload: user
    } 
}