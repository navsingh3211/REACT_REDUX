// import React from 'react'
import {deleteUsers} from "../store/slices/UserSlice";
import {useDispatch} from 'react-redux';

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteAllUsers = ()=>{
    dispatch(deleteUsers());
  }
  return (
   <>
    <div>
      <button onClick={()=>deleteAllUsers()}>delete all users</button>
    </div>
   </>
  )
}

export default DeleteAllUser