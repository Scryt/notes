# Notes

## Available scripts

`npm i`

`npm run install-dependencies`

`npm run dev`

## Known error/warnings/missing features

### 1. Warning is thrown on NotesList using

`notesList.filter(...).map(...)`

`Each child in a list should have a unique "key" prop.`

Although I did not find any possibility for the function to pass duplicated key. Has been marked as TODO

### 2. Error is thrown when accessing note with ID not in notes list
Has been marked as TODO

### 3. On single note there is no possibility to remove a note.
Has been marked as TODO

### 4. It is possible to access note which has been "closed" by providing it's ID in the link
Has been marked as feature