import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions'

import List from './List'

class CharacterList extends Component {
  render() {
    return (
      <div>
        <h4>Characters</h4>
        <List
          characters={this.props.characters}
          buttonString='+'
          buttonClick={this.props.addCharacterById}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCharacterById }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
