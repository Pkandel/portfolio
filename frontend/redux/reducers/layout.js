export default function reducer(state = { collapsed: false, width: 0 }, action) {
    switch(action.type){
        case 'TOGGLE_SIDEBAR': {
            return { ...state, collapsed: action.payload };
        }
        case 'WINDOW_WIDTH': {
            return { ...state, width: action.payload };
        }
         default: {
            return state;
        }
    }
}