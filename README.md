# Project Title

Thin White Line

## Description

Luxury watch retail store project [work-in-progress].

## Getting Started

### Required programs

* Node.js 

### Installing

#### Server 
* Navigate to server folder:
  ```
  $ cd server
  ```
* Install server dependencies
  ```
  $ npm i
  ```
* Copy .env-example file, rename it to .env and add your SERVER_PORT, DB_CONNECTION, HASH_SECRET, TOKEN_SECRET, PUBLIC_PATH, IMG_FOLDER_NAME, SERVER_DOMAIN.

#### Client
* Navigate to client folder:
  ```
  $ cd client
  ```
* Install client dependencies
  ```
  $ npm i
  ```
* Navigate to client > src > services and in each file change baseUrl
  port to your SERVER_PORT port.

### Run project

* Run npm start command in server and client terminal.
  ```
  $ npm start
  ```
### Access Admin panel

* On your server, create user with a role 'ADMIN'. You can find the user model schema by navigating to server > src > models > user-model.js
* To open the login form add '/admin' to your home page url. 
* Admin panel can be accessed after successful login.

## Authors

 * Aivaras Stanaitis
