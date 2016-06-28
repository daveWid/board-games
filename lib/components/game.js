import React from 'react';

export default class Game extends React.Component {
  render() {
    return (
      <ul className="game">
        {Object.keys(this.props.data).map((key, idx) => {
          return (<li key={idx}><b>{key}</b>: {this.props.data[key]}</li>);
        })}
      </ul>
    );
  }
}
