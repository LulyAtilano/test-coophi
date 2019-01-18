export const ADD_ITEM = 'ADD_ITEM';
export const SHOW_ITEM = 'SHOW_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addItem(text) {
    return { type: ADD_ITEM, text }
}

export function showItem(text) {
    return { type: SHOW_ITEM, text }
}

export function editItem(text) {
    return { type: EDIT_ITEM, text }
}