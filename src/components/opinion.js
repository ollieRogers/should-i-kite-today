import React, { Component } from 'react';

const Opinion = ({ bearing, avgSpeed, maxSpeed }) => (
  <div>
    {bearing} | {avgSpeed} |  {maxSpeed}
  </div>
);

export default Opinion;