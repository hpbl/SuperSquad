import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul className='list-group'>
        {
          this.props.characters.map(character =>{
            return (
              <li
                key={character.id}
                className='list-group-item'>
                <div className='list-item'>{character.name}</div>
                <div
                  className='list-item right-button'
                  onClick={() => this.props.buttonClick(character.id)}>
                  {this.props.buttonString}
                </div>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default List;
