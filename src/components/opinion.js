import React, { Component } from 'react';

const Opinion = ({ bearing, avgSpeed, maxSpeed }) => {
  let Opinion = (avgSpeed > 16)? `It's good` : `It isn't great`;

  return(
    <div className="conditions-opinion">
      {Opinion}
    </div>
  )
};

export default Opinion;