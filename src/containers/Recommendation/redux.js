export const types = {
    UPDATE_GROSS_LIST: 'update_gross_list'
}

const initialState = {
    grossAppList: []
}


export const actions = {
    updateGrossList: (grossAppList) => ({
        type: types.UPDATE_GROSS_LIST,
        grossAppList: grossAppList
    })
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.UPDATE_GROSS_LIST:
            return {
                grossAppList: action.grossAppList
            }
        default: return state;
    }
}