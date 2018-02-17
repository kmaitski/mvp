import React from 'react';
import {render} from 'react-dom';
import AddHike from './AddHike.jsx';
import HikeList from './HikeList.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hikes: [],
      deletedHike: ''
    };
    this.getHikes = this.getHikes.bind(this);
    this.handleChangeToHikes = this.handleChangeToHikes.bind(this);
    this.addHike = this.addHike.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleSingleDelete = this.handleSingleDelete.bind(this);
    this.getHikes(this.handleChangeToHikes);
  }

  handleChangeToHikes(hikes) {
    this.setState({
      hikes: hikes
    });
  }

  getHikes(cb) {
    $.get('/fetch', function(hikes) {
      cb(hikes);
    });
  }

  addHike(data, cb) {
    $.post('/add', data, function(hikes) {
      cb(hikes);
    });
  }

  handleResetClick(cb) {
    let test = prompt('Warning this will delete all data. Are you sure you want to proceed?');
    if (test !== null) {
      $.get('/reset', () => {
        this.handleChangeToHikes([]);
      });
    }
  }

  handleSingleDelete(e) {
    let test = prompt('Warning this will delete this entry.  Are you sure this is what you want?');
    if (test !== null) {
      let hikeToDelete = e.target.className;
      $.post('/delete', hikeToDelete, (hikes) => {
        this.handleChangeToHikes(hikes);
      });
    }
  }

  render () {
    return (
      <div>
        <h1> Hike Tracker</h1>
        <AddHike addHike={this.addHike}
                 handleGet={this.handleChangeToHikes}
        />
        <button onClick={this.handleResetClick}>Reset hikes</button>
        <HikeList hikes={this.state.hikes}
                  handleSingleDelete={this.handleSingleDelete}
        />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));