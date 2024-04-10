// import React from 'react';
import styled from "styled-components";
import DeleteAllUser from './DeleteAllUser';
import {fakeUserData} from '../api';
import {useDispatch} from 'react-redux';
import {addUser} from '../store/slices/UserSlice';
import DisplayUsers from './DisplayUsers';


const UserDetails = () => {
  const dispatch = useDispatch();

  const onClickHandler = (data)=>{
    dispatch(addUser(data))
    console.log(data,'added daata');
  }
  return (
    <Wrapper>
      <div className='content'>
        <div className='admin-table'>
          <div className='admin-subtitle'>List of users details</div>
          <button onClick={()=>onClickHandler(fakeUserData())} className="btn add-btn">Add new user</button>
        </div>
        <ul>
          <DisplayUsers/>
        </ul>
        <hr />
        <DeleteAllUser/>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails