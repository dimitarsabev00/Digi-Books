# React Task #

1. Fork this repository into your account (public)
2. Create a responsive web application from the provided design and integrate it with an existing API.
3. Push changes as you progress through the task

#### Tips ###

Creating a react-app: https://reactjs.org/docs/create-a-new-react-app.html

Use 'react-router' as a navigation tool: https://reactrouter.com


#### Additional information ###

"Settings" page and "Recover password" button are solely with a visual purpose.

"Short description" for the books is not provided in the API response, please use sample text there.

# Design #

Desktop: https://xd.adobe.com/view/b01c49ef-1e0f-4052-85c4-4b49dc22e8a7-e54f/specs/

Mobile: https://xd.adobe.com/view/3c5a07d4-9225-4759-9c42-dd609aa53b28-6909/specs/

Font: https://fonts.google.com/specimen/Montserrat

All other assets can be acquired from the provided XD files.


# API #

URL: https://books-library-dev.herokuapp.com

Header example: 

```JSON
 'Content-Type': 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI...'
```

### Endpoints
#### __/api/book__
- Method - GET
- Authentication: YES
- Get all books in library
```JSON
[
  {
    "_id": "616720073b3d39971f0e94c5",
    "name": "The Catcher in the Rye",
    "author": "Jerome David Salinger",
    "image": "https://dev-fidweb.s3.eu-central-1.amazonaws.com/tasks/books/The%20Roommate.jpeg",
    "createOn": "2021-10-09T21:00:00.000Z",
    "lastUpdateOn": "2021-10-09T21:00:00.000Z",
    "genre": {
      "_id": "61671fea3b3d39971f0e94c4",
      "name": "Classic"
    }
  },
  {
    "_id": "616743453b3d39971f0e94c7",
    "name": "The Eye of the World",
    "author": "Robert Jordan",
    "image": "https://dev-fidweb.s3.eu-central-1.amazonaws.com/tasks/books/The%20Roommate.jpeg",
    "createOn": "2021-10-09T21:00:00.000Z",
    "lastUpdateOn": "2021-10-09T21:00:00.000Z",
    "genre": {
      "_id": "616743073b3d39971f0e94c6",
      "name": "Fantasy"
    }
  },
]
```
#### __/api/book/:id__
- Method - GET
- Authentication: YES
- Get single book by id
- Example param: 61674f8b97652408ce5edc3c
```JSON
{
  "_id": "61674f8b97652408ce5edc3c",
  "name": "Nineteen Eighty-Four",
  "author": "George Orwell",
  "image": "https://dev-fidweb.s3.eu-central-1.amazonaws.com/tasks/books/The%20Roommate.jpeg",
  "createOn": "2021-10-09T21:00:00.000Z",
  "lastUpdateOn": "2021-10-09T21:00:00.000Z",
  "genre": {
    "_id": "61671fea3b3d39971f0e94c4",
    "name": "Classic"
  }
}
```
#### __/api/book/search__
- Method - POST
- Authentication: YES
- Search for match in books names (titles)
- Example body
```JSON
{ "pattern": "catch" //keyword (not case sensitive) }
```
```JSON
[
  {
    "_id": "616720073b3d39971f0e94c5",
    "name": "The Catcher in the Rye", // 'catch' match 'Catcher
    "author": "Jerome David Salinger",
    "image": "https://dev-fidweb.s3.eu-central-1.amazonaws.com/tasks/books/The%20Roommate.jpeg",
    "createOn": "2021-10-09T21:00:00.000Z",
    "lastUpdateOn": "2021-10-09T21:00:00.000Z",
    "genre": {
      "_id": "61671fea3b3d39971f0e94c4",
      "name": "Classic"
    }
  },
]
```
#### __/api/genre/__
- Method - GET
- Authentication: YES
- Get all genres in library
```JSON
[
  {
    "_id": "61671fea3b3d39971f0e94c4",
    "name": "Classic",
    "createOn": "Sat Oct 09 2021 00:00:00 GMT+0300 (Eastern European Summer Time)",
    "lastUpdateOn": "Mon Oct 11 2021 00:00:00 GMT+0300 (Eastern European Summer Time)"
  },
  {
    "_id": "616743073b3d39971f0e94c6",
    "name": "Fantasy",
    "createOn": "Fri Sep 10 2021 00:00:00 GMT+0300 (Eastern European Summer Time)",
    "lastUpdateOn": "2021-10-05"
  }
]
```
#### __/api/genre/:id__
- Method - GET
- Authentication: YES
- Get all books from this genre
- Example param: 61671fea3b3d39971f0e94c4
```JSON
[
  {
    "_id": "616720073b3d39971f0e94c5",
    "name": "The Catcher in the Rye",
    "author": "Jerome David Salinger",
    "image": "https://dev-fidweb.s3.eu-central-1.amazonaws.com/tasks/books/The%20Roommate.jpeg",
    "createOn": "2021-10-09T21:00:00.000Z",
    "lastUpdateOn": "2021-10-09T21:00:00.000Z",
    "genre": {
      "_id": "61671fea3b3d39971f0e94c4",
      "name": "Classic"
    }
  },
  {
    "_id": "61674f2c97652408ce5edc3b",
    "name": "Pride and Prejudice",
    "author": "Jane Austen",
    "image": "https://dev-fidweb.s3.eu-central-1.amazonaws.com/tasks/books/The%20Roommate.jpeg",
    "createOn": "2021-10-09T21:00:00.000Z",
    "lastUpdateOn": "2021-10-09T21:00:00.000Z",
    "genre": {
      "_id": "61671fea3b3d39971f0e94c4",
      "name": "Classic"
    }
  }
]
```
#### __/api/genre/search__
- Method - POST
- Authentication: YES
- Search for match in genres name
- Example body
```JSON
{ "pattern": "c" //keyword (not case sensitive) }
```
```JSON
[
  {
    "_id": "61674f8b97652408ce5edc3c",
    "name": "Nineteen Eighty-Four",
    "author": "George Orwell",
    "image": "https://dev-fidweb.s3.eu-central-1.amazonaws.com/tasks/books/The%20Roommate.jpeg",
    "createOn": "2021-10-09T21:00:00.000Z",
    "lastUpdateOn": "2021-10-09T21:00:00.000Z",
    "genre": {
      "_id": "61671fea3b3d39971f0e94c4",
      "name": "Classic"   // "c" match "Classic"
    }
  },
  {
    "_id": "6167fdd55e4f426e50c210b3",
    "name": "Murder on the Orient Express",
    "author": "Agatha Christie",
    "image": "https://dev-fidweb.s3.eu-central-1.amazonaws.com/tasks/books/The%20Roommate.jpeg",
    "createOn": "2021-10-09T21:00:00.000Z",
    "lastUpdateOn": "2021-10-09T21:00:00.000Z",
    "genre": {
      "_id": "61684e0b091b4964e2986b06",
      "name": "Crime"   // "c" match "Crime"
    }
  }
]
```
#### __/api/user/register__
- Method - POST
- Authentication: NO
- Register new user
- Example body
```JSON
{
  "username": "elka",     // String with min 4 symbols, no special symbols, except _
  "password": "123456"    // String with min 6 symbols, no special symbols
}
```
#### __/api/user/login__
- Method - POST
- Authentication: NO
- Login to system
- Example body
```JSON
{
  "username": "elka",     // String with min 4 symbols, no special symbols, except _
  "password": "123456"    // String with min 6 symbols, no special symbols
}
```
Result is JWT token
```JSON
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjgyZmI4NjgwMzZjN2JjMGQyMTA1MSIsInVzZXJuYW1lIjoiZWxrYSIsImlhdCI6MTYzNDIzMTg2MiwiZXhwIjoxNjM0MzE4MjYyfQ.AVa7-SbPgSynSO39oxqlQi8TCJiBrhu89lEqG47KSds"
}
```
#### __/api/user/logout__
- Method - POST
- Authentication: YES
- Logout from system