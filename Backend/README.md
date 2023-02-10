# Assignment 8

## Task - Create a Simple Nodejs/Express REST API for a simple to-do app.
Name - Moinuddin Raziuddin Khaja
NUID - 002762050
Email - khaja.m@northeastern.edu

### Files & Folders
1. index.html                      HTML file
2. api                             API folder which contains the models, controllers, routes, services and app.js
3. api/controllers/                Contains the controllers that extracts info from request and calls a service to do some business logic.
4. api/services/                   Contains the services that interact with model object(TODO) to make modifications in database.
5. api/routes/                     Contains different routes from the base URL
6. api/models/                     Contains the schema of todo and has all the functions to interact with the database
7. api/app.js                      We create our app object here and call the routes method to initalise all our routes. We even                               establish our connection with MongoDB here.
8. server.js                       Start point of the code. The port number on which the server is run is specified here
9. .gitignore                      Contains the .gitignore file list
10. package.lock.json               File needed to run npm project
11. package.json                   File needed to run npm project


In this Assignment we were required to create REST API supporting the Todo list application. As a developer, he can run various methods like get all tasks, get tasks by id, post a task, update an existing task and delete an existing task.

We can test the API using Postman application wherein we can perform various actions such as GET, PUT, POST, DELETE. The results can be viewed in the database.


## Instructions to run the Project:

1. Clone the REPO to your local desktop.
2. Open the Project on Visual Studio Code.
3. Run the command Npm init to initalise the node
4. Add node_modules in .gitignore 
5. Download the required dependencies like mongoose, cors, debug and express by running npm i express cors debug mongoose --save.
6. Run the server by typing npm start.
7. Now once the server is running we can go to Postman and execute the commands to test our API.
   The URL to enter in postman is - http://localhost:8080/todo/
 