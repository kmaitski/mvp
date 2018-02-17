import React from 'react';

const HikeEntry = (props) => (
  <div>
    <span>Hike name: {props.hike.hikeName}     </span>
    <span>Time: {props.hike.bestTime}     </span>
    <a href="#"
       onClick={props.handleSingleDelete}
       className={props.hike.hikeName}
       >Delete Entry
    </a>
  </div>
)

export default HikeEntry;