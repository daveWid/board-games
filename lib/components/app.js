import React from 'react';
import Game from './game';

export default React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },
  render: function () {
    return (
      <div className="wrapper">
      {this.props.data.map((result) => {
        return (
          <div className="panel">
            <h2>{result.owner}'s Collection</h2>
            {result.games.map((game, idx) => {
              let key = `${result.owner}_${idx}`;
              console.log(key);
              return (<Game key={key} data={game} />);
            })}
          </div>
        );
      })}
      </div>
    );
  }
});
