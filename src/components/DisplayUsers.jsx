/* eslint-disable no-unused-vars */
import { MdDeleteForever } from "react-icons/md";
import {useSelector,useDispatch} from "react-redux";
import styled from "styled-components";
import {removeUser} from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state)=>{
    return state.users;//users is the reducer name which we create in the store
  });
  const DeleteAUser = (id)=>{
    console.log(id,'id is: ');
    dispatch(removeUser(id));
  }
  return (
    <Wrapper>
      <div>
        {
          data.map((user,id)=>{
            return <li key={id}>
              {user}
              <>
              <button className="delete-icon" onClick={()=>DeleteAUser(id)}>delete</button>
              {/* <MdDeleteForever className="delete-icon" onClick={()=>DeleteAUser(id)} /> */}
              </>
            </li>
          })
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content li {
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
    
    display: inline-block;
    outline: 0;
    text-align: center;
    cursor: pointer;
    height: 34px;
    padding: 0 13px;
    color: #fff;
    vertical-align: top;
    border-radius: 3px;
    border: 1px solid transparent;
    transition: all .3s ease;
    background: #cc4d29;
    border-color: #cc4d29;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 16px;
    font-size: 11px;
    :hover {
        background: #e4461b;
        border-color: #e4461b;
    }
                
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default DisplayUsers