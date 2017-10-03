import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions'

import List from './List'

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad</h4>
        <List
          characters={this.props.heroes}
          buttonString='-'
          buttonClick={this.props.removeCharacterById}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  };
}

export default connect(mapStateToProps, {removeCharacterById})(HeroList);
