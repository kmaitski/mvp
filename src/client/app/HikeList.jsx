import React from 'react';
import HikeEntry from './HikeEntry.jsx';

const HikeList = (props) => (
  <div>

    <h4>You have logged {props.hikes.length} hikes.  Great job! Keep it up!</h4>
    <div>
    {props.hikes.map((hike, i) => {
      return <HikeEntry key={i}
                        hike={hike}
                        handleSingleDelete={props.handleSingleDelete}
             />
    })}
    </div>
  </div>
)

export default HikeList;