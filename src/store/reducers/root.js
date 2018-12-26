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
          image : require('./../../assets/Sina.png')
        })
      };
    }
    case DELETE_ITEM :{
      return{
        ...state,
        lists : state.lists.filter((item) => {
          return item.key !== state.selectedItem.key; 
        }),
        selectedItem : null
      }
    }
    case SELECT_ITEM :{
      return{
        ...state,
        selectedItem : state.lists.find(item => {
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
      return state;
  }
};
export default reducer;
