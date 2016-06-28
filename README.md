# Board Games!

Board games are pretty much the best, _amirite_?

Well my gaming group has pretty much working through all of the games in our respective collections so this here repo was created as a way to quick sort and search through what games we have at our disposal.

## Game Data

There is a json-schema on the format for the game data that lives in `data/game_schema.json`. All of the actual game data is in the `data/games.js` file. #TheMoreYouKnow

## Adding Games

Just open up `data/games.js` and add in the game metadata. After you get your changes in throw a PR over my way and I'll get that bad-boy merged in.

## CopyPasta

Need to add a game? Starting from scratch sucks, so just do some quick copypasta on this block below and fill in the details.

``` javascript
, {
  name: '',
  description: '',
  playersMin: ,
  playersMax: ,
  playTimeQuick: ,
  playTimeLong: ,
  rulesPDF: '',
  mechanics: []
}
```

-----

Developed by [Dave Widmer](http://davewidmer.net) using ES6 and [React.js](https://facebook.github.io/react/index.html).
