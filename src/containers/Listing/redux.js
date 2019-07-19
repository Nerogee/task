export const types = {
    UPDATE_APP_LIST: "update_app_list",
    UPDATE_PREVENT_LOADING: 'update_prevent_loading'
}

const initialState = {
    appList: [],
    preventLoading: false
}


export const actions = {
    updateAppList: (appList) => ({
        type: types.UPDATE_APP_LIST,
        appList: appList
    }),
    updatePreventLoading: (newStatus) => ({
        type: types.UPDATE_PREVENT_LOADING,
        newStatus: newStatus
    })
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.UPDATE_APP_LIST:
            return {
                ...state,
                appList: action.appList
            }
        case types.UPDATE_PREVENT_LOADING:
            return {
                ...state,
                preventLoading: action.newStatus
            }
        default: return state;
    }
}