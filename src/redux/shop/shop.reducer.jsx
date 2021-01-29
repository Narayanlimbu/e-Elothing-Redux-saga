import SHOP_DATA from './shopdata';
const INITSTATE={
    collections:SHOP_DATA
}
const shopReducer=(state=INITSTATE, action)=>{
   switch(action.type){
       default:
           return state;
   }
}
export default shopReducer;