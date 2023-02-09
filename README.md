<!--
@since 2023.02.07, 20:04
@changed 2023.02.07, 20:04
-->

# Tournament game client app

- Version: 0.0.1
- Last changes timestamp: 2023.02.07, 22:11

## Client & server

Server repo: https://github.com/lilliputten/tournament-game-server

Client repo: https://github.com/lilliputten/tournament-game

## Install

Install all required node dependencies:

```
npm i
```

## Start dev server

Start dev server (locate in browser with `http://localhost:3000`):

```
npm run start
```

## Make build

```
npm run build
```

## Build and publish

For success publishing the deploy environment should be propeply set up (see
npm script command `postinstall-publish-submodule`).

```
npm run build-and-publish
```

To just publish previously created build:

```
npm run publish
```

## Deploy server

When publishing, the project is deployed to
[https://tournament-game.lilliputten.ru/](https://tournament-game.lilliputten.ru/)
(access credentials are provided by request).