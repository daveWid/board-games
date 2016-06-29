import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    this.setState({ open: !this.state.open });
  }

  /**
   * Convert the minute time to a more human readable one.
   *
   * @param  {integer} mins Minutes
   * @return {string}       A human readable time format
   */
  convertTime(mins) {
    if (mins < 60) return `${mins} minutes`;
    if (mins === 60) return '1 hour';

    const hours = Math.floor(mins / 60);
    let remainder = mins % 60;

    if (remainder === 0) {
      const label = hours === 1 ? 'hour' : 'hours';
      return `${hours} ${label}`;
    }

    if (remainder < 10) {
      remainder = `0${remainder}`;
    }

    return `${hours}:${remainder}`;
  }

  render() {
    let details = '';

    if (this.state.open) {
      const timeQuick = this.convertTime(this.props.data.playTimeQuick);
      const timeLong = this.convertTime(this.props.data.playTimeLong);

      let rules = '';
      if (this.props.data.rulesPDF) {
        rules = (
          <p className="rules">
            <a href={this.props.data.rulesPDF}>Download the Rules</a>
          </p>
        );
      }

      const mechanics = this.props.data.mechanics.map((result) => {
        return (<div className="mechanic">{result}</div>);
      });

      details = (
        <div className="details">
          <p className="description">{this.props.data.description}</p>
          {rules}
          <ul className="metadata">
            <li><b>Players</b>: {this.props.data.playersMin} to {this.props.data.playersMax}</li>
            <li><b>Play Time</b>: {timeQuick} to {timeLong}</li>
            <li><b>Mechanics</b>: {mechanics}</li>
            <li><b>Owner</b>: {this.props.data.owner}</li>
          </ul>
        </div>
      );
    }

    return (
      <li className="game">
        <h3 onClick={this.toggleDisplay}>{this.props.data.name}</h3>
        {details}
      </li>
    );
  }
}
