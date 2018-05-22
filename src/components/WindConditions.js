import React, { Component } from 'react';

const WindConditions = ({ cardinal, avgSpeed, maxSpeed }) => (
    <div className="conditions-detail">
        {cardinal} {avgSpeed} knots, gusting to {maxSpeed} knots
    </div>
);

export default WindConditions;