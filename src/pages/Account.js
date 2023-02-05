import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { logOut, user } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  
  

  return (
    <div>
      <h1>Account</h1>
      <div>
        <img src={user?.photoURL} alt="sdg" width="200" height="70"/>
        <h1>Welcome, {user?.displayName}</h1>
        <h1>Mail id:- {user?.email}</h1>
        <h1>Uid:- {user?.uid}</h1>
       
      </div>
      {/* <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
        Logout
      </button> */}
    </div>
  );
};

export default Account;
