import {DELETE_ITEM,ADD_ITEM} from './actionTypes';
export const addItem = (itemName) => {
    return{
        type : ADD_ITEM,
        itemName : itemName
    }
}
export const deleteItem = (itemKey) => {
    return{
        type : DELETE_ITEM,
        itemKey : itemKey
    }
}

