import React from 'react';

function Names({ firstName, lastName }) {
  return (
    <div>
      <p>Full Name: {firstName} {lastName}</p>
    </div>
  );
}

export default Names;