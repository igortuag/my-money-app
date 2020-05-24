const INITAL_STATE = { selected: ''}

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED':
            return { ...state, selected: action.payload}
        default:
            return state
    }
}