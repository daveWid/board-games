import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

import games from '../data/games';

render(
  <App data={games} />,
  document.getElementById('app')
);
