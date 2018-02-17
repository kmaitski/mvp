import React from 'react';
import HikeEntry from './HikeEntry.jsx';

const HikeList = (props) => (
  <div>

    <h4>You have logged {props.hikes.length} hikes.  Great job! Keep it up!</h4>
    <table>
      <tbody>
        <tr>
          <th>Hike Name</th>
          <th>Time</th>
          <th>Delete</th>
        </tr>
        {props.hikes.map((hike, i) => {
          return <HikeEntry key={i}
                            hike={hike}
                            handleSingleDelete={props.handleSingleDelete}
                 />
        })}
      </tbody>
    </table>
  </div>
)

export default HikeList;