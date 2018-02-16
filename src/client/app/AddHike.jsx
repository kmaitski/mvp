import React from 'react';

class AddHike extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hike: '',
      time: ''
    };
    this.handleHikeChange = this.handleHikeChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHikeChange (e) {
    this.setState({
      hike: e.target.value
    });
  }

  handleTimeChange(e) {
    this.setState({
      time: e.target.value
    });
  }

  handleSubmit() {
    $.post('/add', this.state, function() {
      console.log('added');
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Hike name:
            <input type="text" onChange={this.handleHikeChange} />
          </label>
          <label>
            Hike time:
            <input type="text" onChange={this.handleTimeChange} />
          </label>
          <button type="button" onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
    );
  }

}

export default AddHike;