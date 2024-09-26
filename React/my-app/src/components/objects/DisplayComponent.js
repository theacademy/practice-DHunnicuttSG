import React from 'react';

function DisplayComponent({ data }) {
  return (
    <div>
      <h2>Form Data</h2>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
}

export default DisplayComponent;
