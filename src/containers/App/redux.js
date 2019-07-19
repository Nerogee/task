export const types = {
    UPDATE_LOADING_STATUS: "LOADING"
}

const initialState = {
    isLoading: false
}


export const actions = {
    updateLoading: (status) => ({
        type: types.UPDATE_LOADING_STATUS,
        status: status
    })
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.UPDATE_LOADING_STATUS:
            return {
                isLoading: action.status
            }
        default: return state;
    }
}