<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p>An API built with Nest.js that persists data in a MongoDB database. Some of the application's endpoints are secured by ensuring and verifying the JWT issued by Auth0.
The purpose of this API is to manage a posts dataBase for blog web site.
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


## Installation

Clone the repository

    git clone https://github.com/Yassine-ELHIRACH/epicerie-ducoin-back.git
  
Switch to the repo folder

    npm install

## Database

This project requires a local mongoDB installation. See `src/app.module.ts` for credentials, and make sure there are matching credentials in the database and the source code.

