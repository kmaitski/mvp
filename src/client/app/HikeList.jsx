import React from 'react';
import HikeEntry from './HikeEntry.jsx';

const HikeList = (props) => {
  return (
    <div>
      {props.hikes.length}
      {props.hikes.map(hike => {
        return <HikeEntry />
      })}
    </div>
  )
}

export default HikeList;