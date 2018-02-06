export  function toggleSidebar(bool){
    return dispatch => {
        dispatch({
            type: 'TOGGLE_SIDEBAR',
            payload: !bool
        })
    }
}