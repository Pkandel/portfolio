export default function reducer(state = { collapsed: false }, action) {
    switch(action.type){
        case 'TOGGLE_SIDEBAR': {
            return { ...state, collapsed: action.payload };
        }
         default: {
            return state;
        }
    }
}