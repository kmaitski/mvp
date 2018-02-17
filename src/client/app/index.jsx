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
    this.getHikes = this.getHikes.bind(this);
    this.handleGet = this.handleGet.bind(this);
    this.addHike = this.addHike.bind(this);
    this.getHikes(this.handleGet);
  }

  handleGet(hikes) {
    this.setState({
      hikes: hikes
    });
  }

  getHikes(cb) {
    $.get('/fetch', function(hikes) {
      // console.log(hikes);
      cb(hikes);
      // this.setState({
      //   hikes: hikes
      // });
    });
  }

  addHike(data, cb) {
    $.post('/add', data, function(hikes) {
      cb(hikes);
    });
  }

  render () {
    return (
      <div>
        <p> Hike Tracker</p>
        <AddHike addHike={this.addHike} handleGet={this.handleGet}/>
        <HikeList hikes={this.state.hikes}/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));