export const initialState = {
    total: 0,
    currentUser: {}
}

const userReducer =(state = initialState, action)=>{
    switch(action.type){
        case 'SET_TOTAL': 
        return{
            ...state, total:action.payload
        }
        case 'SET_CURRENT_USER':
            return {
                ...state, currentUser: action.payload
            }    
        default: 
            return state;
    }
}

export default userReducer;