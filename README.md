# Flamebuzz 

Flambuzz is a socal networking platform for natural disaster relief. Users can signup, identify wildfires in their area, and communicate with members of their community. Using Flamebuzz

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The backend server for this application was created using Express.js

## API

Flamebuzz relies on two APIs. One to fetch the natural disaster geodata, one to maintain users/comments.

### `NASA EONET API`

This is the source of all active wildfire geolocation data used to populate the map. API documentation can be found [here](https://eonet.sci.gsfc.nasa.gov/docs/v3).

### `NewsFeed API`

This is a REST API spun up in Express.js. Desigend to maintain users/comments/replies relating to communication surrounding specific wildfire events.

## Pigeon Maps

Pigeon Maps is the map engine used in this applicaiton. Pigeon Maps was used because it is a free alternative to the Google Maps API. It is also a React-centric and highly performant option. Documentation can be found [here](https://pigeon-maps.js.org/).

## Available Scripts

In the **FRONTEND** project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

In the **BACKEND** project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`
Runs all tests associated with NewsFeed API.



