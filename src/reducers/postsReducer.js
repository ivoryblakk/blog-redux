export default (state =[], action) => {
    switch(action.type ){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
} 

// A reducer can never return undefined 