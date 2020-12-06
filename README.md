# TeamF-Backend

# RESTful endpoints users

## Get/ : Get User List

Request Header : 
no needed

Request Body
no needed

- Response (200 - OK)
```json

[
    {
        "id" : <users id>,
        "fullname" : "<fullname users>",
        "username" : "<username users>",
        "age" : <age users>,
        "gender" : "<gender users>",
        "email" : "<email users>",
        "password" : "<password users>",
        "role" : "<role users>"
    }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## Post/register : Post Register Users

Register, User role by default = user

Request Header : 
no needed

Requst Body :
{ fullname, username, age, gender, email, password } 

- Response (201) [{"access_token": "",}]
```json

[
    {
        "id" : <users id>,
        "fullname" : "<fullname users>",
        "username" : "<username users>",
        "profileimage" : "<profileimage users path>",
        "age" : <age users>,
        "gender" : "<gender users>",
        "email" : "<email users>",
        "password" : "<password users>",
        "role" : "<role users>",
        "updatedAt" : <updatedAt users>
    }
]
```
- Response (409) - Email or Username already registered)
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## Post/login : Post user Login

Request Header :
no needed

Request Body :
{ username, password }

- Response (201) [{"access_token": "",}]
```
```
- Response (404 - invalid password)
- Response (404 - user not found)
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## Get/user/update/ : Get form for users update

Request Header : 
{"access_token": "<your access token>"}

Request Data :
{ id }

-Response (200 - result)
```
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## Put/user/update/ : Put update data users

Request Header :
{"access_token": "<your access token>"}

request Data :
{ id }

request Body :
{ fullname, username, age, gender, email, password }

- Response (200 - OK)
```json
[
    {
        "id" : <users id>,
        "fullname" : "<fullname users>",
        "username" : "<username users>",
        "profileimage" : "<profileimage users path>",
        "age" : <age users>,
        "gender" : "<gender users>",
        "email" : "<email users>",
        "password" : "<password users>"
    }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## Delete/user/delete/

Request Header :
{"access_token": "<your access token>"}

request Data :
{ id }

-Response (202 - user deleted)
```json
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
# RESTful endpoints movie

## GET / : Get all Movie

Request Header : 
not needed

Request Body
not needed

- Response (200 - OK)
```json
[
    { 
        "id" : <movie id>,
        "genre" : "<genre movie>",
        "createdAt" : <createdAt movie>,
        "updatedAt" : <updatedAt>
    }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## POST /movie/add : Add new movie

Authorization : only for admin

Request Header : 
{"access_token": "<your access token>"}

Request Data :
{ title }

Request Body :
{ title, synopsis, year, trailer, poster, director, budget, userId }

- Response (200 - OK)
```json
[
  {
    "id" : <movie id>,
    "title" : "<title movie>",
    "synopsis" : "<synopsis movie>",
    "year" : <year movie>,
    "trailer" : "<trailer movie>",
    "poster" : "<poster movie>",
    "director" : "<director movie>",
    "budget" : <budget movie>,
    "userId" : <userId>,
    "createdAt" : <createdAt movie>,
    "updatedAt" : <updatedAt movie>
  }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## Delete movie/delete/:id : Deleting movie

Authorization : only for admin

Request Header : 
{"access_token": "<your access token>"}

Request Data :
{ id }

Request Body :
no needed

- Response (200 - movie deleted)
```json

```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## GET movie/add/:id : Get form add movie

Authorization : only for admin

Request Header : 
{"access_token": "<your access token>"}

Request Body :
no needed

- Response (200 - ke form edit movie)
```json

```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## Post movie/add/:id : posting add movie

Authorization : only for admin

Request Header : 
{"access_token": "<your access token>"}

Request Data :
{ id }

Request Body :
{ title, synopsis, year, trailer, director, budget }

- Response (201 - Movie succesfully updated)
```json
[
  {
    "id" : <movie id>,
    "title" : "<title movie>",
    "synopsis" : "<synopsis movie>",
    "year" : <year movie>,
    "trailer" : "<trailer movie>",
    "poster" : "<poster movie>",
    "director" : "<director movie>",
    "budget" : <budget movie>,
    "updatedAt" : <updatedAt movie>
  }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## GET /movie/edit/:id : Get form to edit movie

Authorization : only for admin

Request Header : 
{"access_token": "<your access token>"}

Request Body :
no needed

- Response (200 - form update)
```json
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## PUT /movie/edit/:id : update the movie
Authorization : only for admin

Request Header : 
{"access_token": "<your access token>"}

Request Body :
{ title, synopsis, year, trailer, poster, director, budget, userId }

- Response (200 - OK)
```json
[
  {
    "id" : <movie id>,
    "title" : "<title movie>",
    "synopsis" : "<synopsis movie>",
    "year" : <year movie>,
    "trailer" : "<trailer movie>",
    "poster" : "<poster movie>",
    "director" : "<director movie>",
    "budget" : <budget movie>,
    "createdAt" : <createdAt movie>,
    "updatedAt" : <updatedAt movie>,
    "userId" : <userId>
  }
]
```
- Response (409 - title already exist! input another title!)
)
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## GET movie/search : Search a movie
Request Header : 
not needed

Request Body :
{ search }

- Response (200 - movie found)
```json

```
- Response (409 - Movie is not available)

- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## GET movie/search/:id : Search a movie by id
Request Header : 
not needed

Request Data :
{ id }

Request Body :
{ search }

- Response (200 - movie found)
```json

```
- Response (409 - Movie is not available)

- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

# RESTful endpoints Category

## GET /category/ : Get all category

Request Header : 
not needed

Request Body
not needed

- Response (200 - OK)
```json
[
    { 
        "id" : <genre id>,
        "genre" : "<genre category>",
        "createdAt" : <createdAt movie>,
        "updatedAt" : <updatedAt>
    }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## GET /category/add : form add new category for movie

Authorization : only for admin

Request Header : 
{"access_token": "<your access token>"}

Request Body :
no needed

- Response (200 - To form add category)
```json

```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## POST /category/add : post add new category

Authorization : only for admin

Request Header : 
{"access_token": "<your access token>"}

Request Data :
{ id }

Request Body :
{ genre }

- Response (200 - To form add category)
```json
[
  {
    "genre" : "<genre category>"
  }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## DELETE /category/delete/:id : deleting a category

Authorization : only for admin

Request Header : 
{"access_token": "<your access token>"}

Request Data :
{ id }

Request Body :
no needed

- Response (201 - Category deleted successfully!)
```json

```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## GET /category/edit/:id : get form edit for category

Authorization : only for admin

Request Header : 
{"access_token": "<your access token>"}

Request Body :
no needed

- Response (200 - ke form edit movie)
```json

```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## PUT /category/edit/:id : edited genre 

Authorization : only for admin

Request Header : 
{"access_token": "<your access token>"}

Request Data :
{ id }

Request Body :
{ title, synopsis, year, trailer, director, budget }

- Response (201 - category succesfully edited)
```json
[
  {
    "id" : <category id>,
    "genre" : "<genre category>",
    "updatedAt" : <updatedAt category>
  }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

# RESTful endpoints Movie by Category (moviexcategory)

## GET /category/find/:id : Get movie by category id

Request Header : 
{"access_token": "<your access token>"}

Request Body :
no needed

- Response ( 200 - OK )
```json
[
    {
        "categoryId" : "<id>",
        "movieId" : "<movie Id>",
    }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## GET /category/add/genre : Get form add genre to movie

Authorization : only for admin

Request Header : 
{"access_token": "<your access token>"}

Request Body :
no needed

- Response ( 200 - OK )
```json
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## POST /category/add/genre : Post add genre to movie

Authorization : only for admin

Request Header : 
{"access_token": "<your access token>"}

Request Body :
{ MovieId, CategoryId }

- Response ( 200 - OK )
```json
[
  {
    "MovieId"
    "CategoryId"
    "userId"
  }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## DELETE /category/add/genre/:id : Delete genre from movie

Authorization : only for admin

Request Header : 
{"access_token": "<your access token>"}

Request Body :
no needed

- Response ( 201 - Movie Category deleted successfully )
```json
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## GET /edit/genre/:id : get form edit movie category

Authorization : only for admin

Request Header : 
{"access_token": "<your access token>"}

Request Body :
no needed

- Response ( 200 - OK )
```json
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## PUT /edit/genre/:id : edit of movie category

Authorization : only for admin

Request Header : 
{"access_token": "<your access token>"}

Request Body :
{ MovieId, CategoryId }

- Response ( 201 - Movie edited successfully )
[
  {
    "MovieId"
    "CategoryId"
    "userId"
  } 
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

# RESTful endpoints Character

## Get localhost:3000/character : Get All Character

Request Header : 
no needed

Request Body :
no needed

Response (200 - OK)
```json
[
    {
        "categoryId"
    }
]
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## Post localhost:3000/character/add : Add Character

Request Header : 
```json
{
  "access_token": "<your access token>"
}
Request Body
```json
{
  "name": "<character name>",
  "photo": "<upload photo>"
}
- Response (200 - OK)
```json
[
    {
        "id": "<character id>",
        "photo": "<uploaded photo>",
        "name": "<character name>",
        "userId": <userId>,
        "createdAt": <createdAt>,
        "updatedAt": <updatedAt>
    }
]
```
- Response (409 - Conflict)
```json
{
  "<returned error message>"
}
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```
## Put localhost:3000/character/edit/:id : Edit Character

Request Header : 
```json
{
  "access_token": "<your access token>"
}
Request Body
```json
{
  "name": "<character name>",
  "photo": "<upload photo>"
}
- Response (201 - Created)
```json
{
  "<returned successful message>"
}
```
- Response (500 - Bad Request)
```json
{
  "<returned error message>"
}
```

## Delete localhost:3000/character/delete/:id : Delete Character

Request Header : 

{
  "access_token": "<your access token>"
}

Request Body
No needed

- Response (201 - Created)
```json
{
  "<returned successful message>"
}
```
- Response (500 - Bad Request)
```
{
  "<returned error message>"
}
```

## Post localhost:3000/character/add/char : Add Movie Character

Request Header : 
{
  "access_token": "<your access token>"
}

Request Body
{
  "MovieId": "<Movie Id>",
  "CharacterId": "<Character Id>",
  "userId": <userId>,
}
- Response (201 - Created)
```json
[
{
  "MovieId": "<Movie Id>",
  "CharacterId": "<Character Id>",
  "userId": <userId>,
  "createdAt": <createdAt>,
  "updatedAt": <updatedAt>
}
]
```
- Response (500 - Bad Request)
```
{
  "<returned error message>"
}
```

## Delete localhost:3000/character/delete/char/:id : Delete Movie Character

Request Header : 
{
  "access_token": "<your access token>"
}

Request Body
No needed

- Response (201 - Created)
```json
{
  "<returned successful message>"
}
```
- Response (500 - Bad Request)
```
{
  "<returned error message>"
}
```
## Put localhost:3000/character/edit/char/:id : Edit Movie Character

- Request Header : 
json
{
  "access_token": "<your access token>"
}
- Request Body
json
{
  "MovieId": "<Movie Id>",
  "CharacterId": "<Character Id>",
  "userId": <userId>,
}
- Response (201 - Created)
json
{
  "<returned successful message>"
}
- Response (500 - Bad Request)
json
{
  "<returned error message>"
}
## Get localhost:3000/character/find/:id : Get All Character by Movie

- Request Header : 
no needed

- Request Body :
no needed

- Response (200 - OK)
json
[
    {
        "MovieId": "<Movie Id>",
        "CharacterId": "<Character Id>",
        "userId": <userId>,
        "createdAt": <createdAt>,
        "updatedAt": <updatedAt>,
        "Character": {
            "photo": "<uploaded photo>",
            "name": "<character name>",
            "userId": 1,
            "createdAt": <createdAt>,
            "updatedAt": <updatedAt>
        }
    },
]
- Response (500 - Bad Request)
json
{
  "<returned error message>"
}