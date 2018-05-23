import React, { Component } from 'react';
import './conditions.css';

const ConditionsWrapper = ({ children }) => (
    <div className="conditions">
      {children}
    </div>
)

export default ConditionsWrapper;