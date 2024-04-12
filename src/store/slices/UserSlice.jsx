/* eslint-disable no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name:"user",
  initialState:[],
  reducers:{
    addUser(state,action){
      state.push(action.payload);
    },
    removeUser(state,action){
      // console.log('action called remove',action.payload);
      state.splice(action.payload,1);
    },
    deleteUsers(state,action){
      state.splice(0, state.length);
    }
  }
});
// console.log(userSlice.actions,'actions');
export default userSlice.reducer;

export const {addUser,removeUser,deleteUsers} = userSlice.actions;

