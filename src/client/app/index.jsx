import React from 'react';
import {render} from 'react-dom';
import AddHike from './AddHike.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hike Tracker</p>
        <AddHike />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));