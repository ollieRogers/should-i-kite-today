// TODO
// - Add some more specific comments depending on gust and wind direction.
// - Save wind data to chart a history of conditions.

import React, { Component } from 'react';

const Opinion = ({ content }) => {

  return(
    <div className="conditions-opinion">
      {content}
    </div>
  )
};

export default Opinion;