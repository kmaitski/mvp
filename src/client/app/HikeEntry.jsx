import React from 'react';

const HikeEntry = (props) => (
  <tr>
    <td>{props.hike.hikeName}</td>
    <td>{props.hike.bestTime}</td>
    <td>
      <a href="#"
         onClick={props.handleSingleDelete}
         className={props.hike.hikeName}>
         Delete
      </a>
    </td>
  </tr>
)

export default HikeEntry;