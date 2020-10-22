import React, { Component } from 'react';
import {connect} from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

  handleAddBand = (b) => {
    this.props.dispatch({type: 'ADD_BAND', band: b})
  }

bands = () => { return this.props.bands.map(b => <li>{b.name}</li>)}

  render() {
    return(
      <div>
        <BandInput addBand={this.handleAddBand}/>
        <ul>{this.bands()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(BandsContainer)
