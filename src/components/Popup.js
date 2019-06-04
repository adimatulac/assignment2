import React from 'react';

class Popup extends React.Component {
    render() {
      return (
        <div className="popup">
            {/* <h4>{this.props.text}</h4> */}
            <img src={"https://img.pokemondb.net/sprites/black-white/anim/normal/" + this.props.text + ".gif"} alt="Bulbasaur"/>
            {/* <button onClick={this.props.closePopup}>close</button> */}
        </div>
      );
    }
}

export default Popup;