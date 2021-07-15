import React from 'react'

const Quote = ({ title, quote, numVotes }) => (
    <>
      <h1>{title}</h1>
      <div>{quote}</div>
      <div>Has {numVotes} votes</div>
    </>
  );
  
  export default Quote;