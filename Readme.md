## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Webpack configuration](#webpack-configuration)
  - [API end points](#api-endpoints)
- [Author](#author)

## Overview

This song discovery react app is a test project for addis software internship program.

### Links

- Solution URL: [Solution URL](https://github.com/Nahom77/songify)
- Live Site URL: [Live site URL](https://song-hub-by-nahom.vercel.app)

## My process

### Built with

- React
- Nodejs
- Expressjs
- MongoDb
- Styled components
- Mobile-first workflow

### What I learned

In doing this project I got a ton of practice with MERN stack technologies. I have exercised much of styled components including styling hover states, creating animations and other usefull styling classes.

## Webpack configuration

Core Configuration

- Entry Point: ./src/index.js (Main application entry file)
- Output:
  _ Bundles to /dist/index.bundle.js
  _ Sets public path to root (/) for proper asset loading
  \_ Images are output to dist/images/ with hashed filenames for cache busting

Development Server

- Serves from dist/ directory
- Runs on port 3000 with hot reloading
- Includes HTML5 history API fallback for client-side routing
- Automatically opens browser on start

Module Rules

- JavaScript/JSX Processing:
  - Uses Babel via babel-loader
  - Excludes node\*modules - CSS Handling:
  - Supports direct .css imports
  - Bundles styles with style-loader and css-loader - Image Assets:
  - Handles PNG/JPEG/GIF/WEBP with Webpack 5's asset modules
  - Outputs to images/ with content hashes - SVG Handling:
  - Dual mode support:
  - As React components via @svgr/webpack when imported in JSX
  - As regular assets when referenced directly

-Plugins

- HTML Webpack Plugin:
  - Uses src/index.html as template
  - Injects bundles into <body>
  - Ensures correct public paths
- Content Security Policy (CSP) Plugin:
  - Strict security policies with:
  - Default restriction to same-origin ('self')
  - Limited exceptions for:
  - unsafe-eval in scripts (development only)
  - Inline styles
  - Image data URLs
  - API connections to localhost and Heroku backend
  - SHA-256 hashing for additional security

## API end points

Base URL

https://songify-etba.onrender.com/api/songs

Endpoints
Method Endpoint Description Required Fields
GET / ---- Get all songs
GET /:id ---- Get a single song by ID
POST / ------ Create a new song title, artist, album
PUT /:id ------ Update an existing song Song ID in URL + updated fields
DELETE /:id ----- Delete a song Song ID

Request/Response Examples

1. Get All Songs

GET /api/songs

Response:
json

[
{
"id": "1",
"title": "Bohemian Rhapsody",
"artist": "Queen",
"album": "A Night at the Opera",
"year": 1975
},
]

2. Get Single Song

GET /api/songs/1

Response:
json

{
"id": "1",
"title": "Bohemian Rhapsody",
"artist": "Queen",
"album": "A Night at the Opera",
"year": 1975
}

3. Create New Song

POST /api/songs
Content-Type: application/json

{
"title": "Hotel California",
"artist": "Eagles",
"album": "Hotel California",
"year": 1976
}

Response (201 Created):
json

{
"id": "3",
"title": "Hotel California",
"artist": "Eagles",
"album": "Hotel California",
"year": 1976
}

4. Update Song

PUT /api/songs/3
Content-Type: application/json

{
"year": 1977
}

Response:
json

{
"id": "3",
"title": "Hotel California",
"artist": "Eagles",
"album": "Hotel California",
"year": 1977
}

5. Delete Song

DELETE /api/songs/3

## Author

- Nahom Tigistu
