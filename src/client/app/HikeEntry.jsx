import React from 'react';

const HikeEntry = (props) => (
  <div>
    <span>Hike name: {props.hike.hikeName}     </span>
    <span>Time: {props.hike.bestTime}</span>
  </div>
)

export default HikeEntry;