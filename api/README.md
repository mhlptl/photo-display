# Photo Display - API

## Endpoints

* `api/v1/photos/random`

  * Request a random photo (in base64)

  * If no photo exists, it will send a 204 HTTP Code, else it will send a 200 HTTP Code

* `api/v1/photos/upload`

  * Allows user to upload an image file

  * If the file does not match the accepted filetypes, this will send a 400 HTTP Error Code, else it will send a 204 HTTP Code

## Development

* Please regard the README in the root directory on how to start the server

## Tests

* To run automated tests, run `npm test`

  * *Please make sure to have postgres running when running tests*
