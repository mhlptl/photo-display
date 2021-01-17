# Photo Display

This project include the software which can allow you (the user) to create your own electronic picture frame.

## Development

### API

1. From the root directory: `cd api`

2. Have postgres running with a database named `photodisplay`

3. Copy .env.example to .env.development and change the default values if you have used different values when creating your database

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

* If you are only making changes to the Uploader or Viewer, you can use Docker Compose to start the database and API. The Uploader and Viewer would need to use the webpack development server vs. a Docker Container to show changes via live reloading.

* The following snippet will allow you to start the API and the database.

    ```docker
    docker-compose up db api
    ```

## Production

* *Docker and Docker Compose is required to the run the program with the following script.*

* Please copy the contents of .env.exmaple to .env and change PGPASSWORD to the password that you want the database to have.

* To start the containers, run the following snippet while being in the same directory that docker-compose.yml is located.

    ```docker
    docker-compose up
    ```

* To stop the containers, run the following snippet while being in the same directory that docker-compose.yml is located.

    ```docker
    docker-compose down
    ```
