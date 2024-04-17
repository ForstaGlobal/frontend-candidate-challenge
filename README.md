# Coding Challenge for Frontend Developers

## ASSIGNMENT DESCRIPTION

Please use the React framework to solve this assignment or alternatively pure javascript if you don't know React.

You can add/remove/upgrade any project dependency and change/remove any part of the project as you deem appropriate.

#### SPECIFICATION

- Create a todo list app where the user can create/edit/delete tasks.
- The user should also be able to toggle tasks as "done" vs. "not done".
- When a task is deleted, it should be removed from the list.
- New tasks should be added to the top of the list.

#### OTHER REQUIREMENTS

- All functionality should be tested. For the testing you should use [React testing library](https://testing-library.com/).
- We value clean, readable, concise code.
- The project is set up to use TypeScript. Please make sure your code has good types. If you don't know TypeScript, you are not required to write types.

## HOW TO SUBMIT YOUR CODE

1. Fork this repo.
2. Push your code changes to your fork.
3. Create a pull request targeting this repo.

If you have any doubts about the fork + pull request workflow you can refer to [this guide](https://reflectoring.io/github-fork-and-pull/).

## DEADLINE
You can take all the time you need (but please not more than 2 weeks).

Submit your PR when you are proud of your code :-)

## FEATURES
1)	Add Todo:
   - When the page loads for the first time, user needs to click on “+” icon to add new TODO
  -  On click of add button, “Add todo” form will open where you can add Task Name, category, Due date (if any), Description and can specify color to todo. Name and category are required fields.
![image](https://github.com/sonalpnaik/frontend-candidate-challenge/assets/13014736/35fca929-c09f-41de-be9c-efd4af5d3c0a)

2) List todo:
   - Display list of todos
     
![image](https://github.com/sonalpnaik/frontend-candidate-challenge/assets/13014736/9d1997d8-a08e-4916-9480-86874fa663d1)
   - Progress of all tasks or todos are displayed on top.
   -	You can search for todos based on name, description and category.
   -	You can also filter to-dos based on category by clicking on category button, to clear category filter you can click on “All” filter option.
   -	Each item in the list will display Title, description, category and due date.
   -	You can click on action button to edit as task or to delete task or to mark task as complete


![image](https://github.com/sonalpnaik/frontend-candidate-challenge/assets/13014736/4e338733-6c5f-47ab-899b-8dc36aa7ad75)

 
## Technical Details
Node version required for this project to run locally: v20.12.2

Front-end:
- 	Front-end application is built using react and redux toolkit for state management.
-   Use following command to install all packages.
  npm -i
- Use following command to run applications.
   npm start
- Use following command to run test cases.
	npm test

