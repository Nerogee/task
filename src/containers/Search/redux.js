export const types = {
    CHANGE_SEARCH_TERM: 'CHANGE_SEARCH_TERM'
}

const initialState = {
    searchTerm: ''
}


export const actions = {
    changeSearchTerm: (newValue) => ({
        type: types.CHANGE_SEARCH_TERM,
        searchTerm: newValue
    })
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.CHANGE_SEARCH_TERM:
            return {
                searchTerm: action.searchTerm
            }
        default: return state;
    }
}