import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from './List'

class SquadStats extends Component {
  stats(attribute) {
    let result = this.props.heroes.reduce((accumulator, hero) => {
                    return accumulator + hero[attribute];
                  }, 0);
    return result;
  }
  render() {
    return(
      <div>
        <h4>Squad Stats</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <b>Overall strength: </b>{this.stats('strength')}
          </li>
          <li className='list-group-item'>
            <b>Overall speed: </b>{this.stats('speed')}
          </li>
          <li className='list-group-item'>
            <b>Overall intelligence: </b>{this.stats('intelligence')}
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, null)(SquadStats);
