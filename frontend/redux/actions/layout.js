
export  function toggleSidebar(bool){
    return dispatch => {
        dispatch({
            type: 'TOGGLE_SIDEBAR',
            payload: !bool
        })
    }
}
export function setWindowWidth(width) {
    return dispatch => {
        dispatch({
            type: 'WINDOW_WIDTH',
            payload: width
        })
    }
}