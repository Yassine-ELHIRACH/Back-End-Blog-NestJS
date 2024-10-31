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


## Installation & running

Clone the repository

    git clone https://github.com/Yassine-ELHIRACH/epicerie-ducoin-back.git
  
Switch to the repo folder

    npm install

  
To run the app

    npm start

## Database

This project requires a local mongoDB server running named nest-blog-project

## Authorisation

You have to create a .env file containing credentials to make the authentification part work.
Here's what it must contain : 

## Usage & Endpoints

This API serves to create posts for blogs websites. A post is defined by a title, a description, a body, an author and a date. See more in the following file `src/blog/schemas/blog.schema.ts` for types.

BaseUrl => http://localhost:5000/blog

- `GET` /posts => fetch all posts
- `GET` /post/:IDpost => fetch a particular post
- `POST` /post => Add a post with informations specified in the body *requires Authentification*
- `PUT` /edit => Edit a post who's ID is specified in the Body by the field postID *requires Authentification*
- `DELETE` /delete => delete a post who's ID is specified in the Body by the field postID *requires Authentification*

Link of the Front-End side of this project : https://github.com/Yassine-ELHIRACH/Front-End-Blog-ReactTS


