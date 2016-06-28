import React from 'react';
import Game from './game';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    this.setState({ open: !this.state.open });
  }

  render() {
    let info = '';

    if (this.state.open) {
      info = (
        <ul className="list">
        {this.props.games.map((game, idx) => {
          let key = `${this.props.name}_${idx}`;
          return (<Game key={key} data={game} gid={key} />);
        })}
        </ul>
      );
    }

    return (
      <div className="panel">
        <h2 onClick={this.toggleDisplay}>{this.props.name}'s Collection</h2>
        {info}
      </div>
    );
  }
}
