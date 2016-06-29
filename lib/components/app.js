import React from 'react';
import List from './list';
import Game from './game';

export default class App extends React.Component {
  render() {
    return (
      <List>
        {this.props.data.map((game, idx) => {
          return (<Game key={`game${idx}`} data={game} />);
        })}
      </List>
    );
  }
}
