import { combineReducers } from 'redux'
import { ADD_ITEM, SHOW_ITEM, EDIT_ITEM, VisibilityFilters } from './actions'

const { SHOW_ALL } = VisibilityFilters;

const initialState = {
    VisibilityFilters: VisibilityFilters.SHOW_ALL,
    items: []
}

function visibilityFilter(state = SHOW_ALL, action) {
    switch(action.type) {
        case EDIT_ITEM:
            return action.filter
        default:
            return state
    }
}

function items(state=[], action) {
    switch(action.type) {
        case ADD_ITEM:
            return [
                ...state,
                { text: action.text, completed: false }
            ]
        case SHOW_ITEM:
            return state.map((item, index) => {
                if(index === action.index) {
                    return Object.assign({}, item, {
                        completed: true
                    })
                }
                return item
            })
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    items
})

export default todoApp;