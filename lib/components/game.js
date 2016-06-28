import React from 'react';

export default class Game extends React.Component {
  render() {
    return (
      <ul className="game">
        {Object.keys(this.props.data).map((key, idx) => {
          let gid = `${this.props.gid}_${idx}`;
          return (<li key={gid}><b>{key}</b>: {this.props.data[key]}</li>);
        })}
      </ul>
    );
  }
}
