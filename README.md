# Bobs Burgers Server

## WELCOME TO BOB'S BURGERS
A humbly own family restaurant serving quality diner food.
Create an account with Bob's Burgers.
Select from the menu, order for yourself or someone else.
Orders of all sizes completed in 9:30 minutes or it's free.
Live site: https://bobs-burgers.vercel.app/
Front end repo: https://github.com/Bridgette-theWebMaster/bobs-burgers-burger-orderer


## Tech

### Back end
-Node
-Express
-Postgresql

### Testing
-Mocha
-Chai
-Supertest

### Production
-Heroku deployment

##Authentication
| Method    | Endpoint           | Usage                 | Returns      |
| ------    | --------           | -----                 | -------      |
| POST      | /auth/login        | Authenticate a user   | JWT          | 

### `/auth/login`
#### POST
Endpoint for authenticating users
##### Request Body
| Type | Fields | Description |
| ---  | ---    | ---         |
| JSON | name, password | JSON containing a username and password string |

##### Responses

| Code | Description |
| --- | --- |
| 200 | Receive JWT with authenticated user_name and id inside payload | 
| 400 | Missing '{user_name OR password}' in request body | 
| 400 | Incorrect user_name or password | 




## User Registration 
| Method    | Endpoint        | Usage                 | Returns         |
| ------    | --------        | -----                 | -------         |
| POST      | /auth/register     | Register new user     | User Object     | 

### `/api/users`
#### POST
Endpoint for registering new users

##### Request Body
| Type | Fields | Description |
| ---  | ---    | ---         |
| JSON | name, email, password | JSON containing username, email, password strings |

##### Responses

| Code | Description |
| --- | --- |
| 201 | Respond with object containing user data | 
| 400 | Missing '{user_name OR email OR password}' in request body | 
| 400 | Error response object containing a number of validation error messages | 