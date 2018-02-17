import React from 'react';
import HikeEntry from './HikeEntry.jsx';

const HikeList = (props) => (
  <div>
    {props.hikes.length}
    {props.hikes.map((hike, i) => {
      return <HikeEntry key={i} hike={hike}/>
    })}
  </div>
)

export default HikeList;