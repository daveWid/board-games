import React from 'react';
import OwnerPanel from './panel';

export default class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
      {this.props.data.map((result) => {
        return (<OwnerPanel key={result.owner} games={result.games} name={result.owner} />);
      })}
      </div>
    );
  }
}
