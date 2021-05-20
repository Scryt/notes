# Notes

## Available scripts

In the project directory, you can run:

`npm i`

Installs concurrently to run dev / install dependencies simultaneously 

`npm run install-dependencies`

Installs dependencies for both frontend and backend simultaneously
#### NOTE: project currently does not benefit from using backend dependencies and can be omitted (TODO)

`npm run client-dependencies`

Runs the client in the development mode.

`npm run server-dependencies`

Runs the server in the development mode.

`npm run dev`

Runs the project in the development mode.

`npm run client-dev`

Runs the client in the development mode.

`npm run server-dev`

Runs the server in the development mode.



## Known errors/warnings/missing features

### 1. Warning is thrown in NotesList using

`notesList.filter(...).map(...)`

`Each child in a list should have a unique "key" prop.`

Although I did not find any possibility for the function to pass duplicated key.

Has been marked as TODO

### 2. After removing a single note user should be notified or moved to previous page

Has been marked as TODO


### 3. It is possible to access note which has been "closed" by providing it's ID in the link

Has been considered as feature