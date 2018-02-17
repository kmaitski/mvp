import React from 'react';
import {render} from 'react-dom';
import AddHike from './AddHike.jsx';
import HikeList from './HikeList.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hikes: []
    };
  }

  render () {
    return (
      <div>
        <p> Hike Tracker</p>
        <AddHike />
        <HikeList hikes={this.state.hikes}/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));