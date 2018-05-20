import {DELETE_ITEM,DESELECT_ITEM,ADD_ITEM,SELECT_ITEM} from './actionTypes';
export const addItem = (itemName) => {
    return{
        type : ADD_ITEM,
        itemName : itemName
    }
}
export const deleteItem = () => {
    return{
        type : DELETE_ITEM,
    }
}
export const selectItem = (key) => {
    return{
        type : SELECT_ITEM,
        key : key
    }
}
export const deselectItem = () => {
    return{
        type : DESELECT_ITEM
    }
}
