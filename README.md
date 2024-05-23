# React Todo App

React Todo app with the posibility to display/create/update/complete/delete a Todo item. 

It includes Toast manager functionality to display state of the operations.

To visualize server behavior, it offers delay/error server simulation mode to check the error state and work with asynchronious code.

## Usage

**Install dependencies:**
```bash
npm install
```

**Run development mode:**
```bash
npm start
```

**Run tests:**
```bash
npm test
```


## Decisions

- __useContext__: To limit the scope of the application, I used ContextProviders to manage states of the Todo list, instead of using Local-/SessionStorage, database and/or Redux. 

- __Shared UI components__: Reusable parts of the code with predefined styles and behaviour. They are designed to extend the functionality of native HTML elements with functions like onRender, onError, autoScaling etc.

- __Debounce__: To limit requests to a potential server, updates to Items implement debounce with a short delay which allows the user to finish writing before saving.

- __Tosts__: Implemented toasts are an addition to improve the user experience and provide visualization of result states.

- __Server simulation__: Implemented simulation shows my ability to handle asynchronious code and handle server errors.

- __clsx__: Well known (tiny) library to conditionally apply classNames, which is very useful for CSS Modules. 

## Improvements

- __create-react-app__: Known to have vulnerabilities in dependencies. Should be replaced by Vite or another building tool.

- __Authorization/Authentication__: Implementing user login would protect data.

- __Persistence__: Save changes permanently in a database. Easily implemented with current structure.

- __Undo functionality__: A good combination with a Toast manager system that would improve user experience.

- __clsx__: Could be replaced by an internal function to reduce dependency.

- __Recycle Bin__: Good practice in a Todo app since it can prevent losing important data.

