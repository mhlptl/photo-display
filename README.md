# Photo Display

![Photo Display](./gifs/photodisplay.gif)

This project include the software which can allow you (the user) to create your own electronic picture frame.

## Development

### API

1. Have postgres running with a database named `photodisplay`

2. Copy the contents of .env.example to .env.development and change the default values if you have used different values when initializing your postgres database

3. From the root directory: `cd api`

4. run `npm install` to install dependencies

5. run `npm run serverstart` to start the development server

### Uploader

1. From the root directory: `cd uploader`

2. run `npm install` to install dependencies

3. run `npm start` to start the webpack development server on port 3000

### Viewer

1. From the root directory: `cd viewer`

2. run `npm install` to install dependencies

3. run `npm start` to start the webpack development server on port 3001

### Using Docker Compose

- If you are only making changes to the Uploader or Viewer, you can use Docker Compose to start the database and API. The Uploader and Viewer would need to use the webpack development server vs. a Docker Container to show changes via live reloading.

- If this is the method you are using to start the API and database, copy the contents of .env.example to .env.development and change the default values if you want to use different values when initializing your postgres database

- The following snippet will allow you to start the API and the database. _Note: run the following snippet in the same directory that docker-compose.yml is located_

  ```docker
  docker-compose --env-file ./.env.development up db api
  ```

- To stop the containers, run the following snippet:

  ```docker
  docker-compose down
  ```

## Production

- _Docker and Docker Compose is required to the run the program with the following script._

- Copy the contents of .env.example to .env.development and change the default values if you want to use different values when initializing your postgres database

- To start the containers, run the following snippet while being in the same directory that docker-compose.yml is located.

  ```docker
  docker-compose up
  ```

- To stop the containers, run the following snippet while being in the same directory that docker-compose.yml is located.

  ```docker
  docker-compose down
  ```

## Notes

**Photos used for the demonstration were acquired from unsplash.**

Photo Credits:

- [Ante Samarzija](https://unsplash.com/@antesamarzija)
- [Bluewater Globe](https://unsplash.com/@bluewaterglobe)
- [Dave Pullis](https://unsplash.com/@davepullis)
- [Jack Dong](https://unsplash.com/@lwdzl)
- [Kristine Tanne](https://unsplash.com/@kristinetanne)
- [Tamara Schipchinskaya](https://unsplash.com/@toma_sh)
- [The Blowup](https://unsplash.com/@theblowup)