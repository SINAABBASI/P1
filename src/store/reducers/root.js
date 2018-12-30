import {ADD_ITEM,DELETE_ITEM} from '../actions/actionTypes'

const initiallState = {
  lists : []
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
          return item.key !== action.itemKey; 
        })
      }
    }
    default:
      return state;
  }
};
export default reducer;
