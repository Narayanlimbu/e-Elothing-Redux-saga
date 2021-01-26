import {actions} from './user.actiontypes';
export const setCurrentUser=(user)=>({
   type:actions.SET_CURRENT_USER,
   payload:user
})