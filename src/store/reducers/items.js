import {ADD_ITEM,DELETE_ITEM,DESELECT_ITEM,SELECT_ITEM} from '../actions/actionTypes'

const initiallState = {
  lists : [],
  selectedItem : null,
};

const reducer = (state = initiallState , action) => {
  switch(action.type){
    case ADD_ITEM :{
      return{
        ...state,
        lists : state.lists.concat({
          key : Math.random().toString(),
          value : action.itemName,
          image : img
        })
      };
    }
    case DELETE_ITEM :{
      return{
        ...state,
        lists : prevState.lists.filter((item) => {
          return item.key !== prevState.selectedItem.key; 
        }),
        selectedItem : null
      }
    }
    case SELECT_ITEM :{
      return{
        ...state,
        selectedItem : prevState.lists.find(item => {
          return item.key === action.key;
        })
      }
    }
    case DESELECT_ITEM :{
      return{
        ...state,
        selectedItem : null,
      }
    }
    default:
      return;
  }
};
export default reducer;
