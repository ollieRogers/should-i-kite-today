import React, { Component } from 'react';

const WindConditions = ({ cardinal, avgSpeed, maxSpeed }) => (
    <div>
        {cardinal} {avgSpeed} knots, gusting to {maxSpeed} knots
    </div>
);

export default WindConditions;