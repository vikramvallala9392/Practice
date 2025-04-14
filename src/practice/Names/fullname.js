import React, { useState } from 'react';
import "./App.css";
import  Names from './firstname.js'; // Import the child component

function FullName() {
  const [firstName, setFirstName] = useState('vikram');
  const [lastName, setLastName] = useState('vallala');
    const changeName=()=>{
     console.log(setFirstName());
    console.log(setLastName());

  return (
    <div>
          <button onClick={changeName}>name</button>
      <Names firstName={firstName} lastName={lastName} />
  
    </div>
  );
}
}
export default FullName;
