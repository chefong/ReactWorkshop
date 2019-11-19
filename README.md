# React Workshop

This repository/workshop will help you get started with the basics of React.

## Getting Started
First things first, **clone** this repository and navigate into the directory of where this application is located.

Make sure you have Node.js installed. If you don't have it installed yet, click [here](https://nodejs.org/en/download/) and follow the instructions to install it. You can check if it's installed properly by doing the following in your terminal.
```
node -v
```

To run the React app and see it live, execute the following.
```
npm start
```
Your default browser should automatically open `localhost:3000`, which is where your app will run.

## Overview of Components
Our application will be comprised of 4 main components, described below.

### `App`
This component will be the main component that holds most of the logic, and be "smarter" than the other components listed below.

### `Title`
This component will show the current value of the number we're incrementing or decrementing.

### `Counter`
This component will allow us to increment or decrement our number.

### `Reset`
This component will reset our number back to 0.

## Todos
* Set up the `Title` component. ✅
* Set up the `Counter` component. ✅
* Set up the `Reset` component.
* "Plug" our components into `App`.
* Create a `state` variable in `App` to store our number.
* Pass the `state` variable in `App` to `Title`.
* Write function(s) in `Counter` and `App` to change our `state` variable number.
* Write function(s) in `Reset` and `App` to reset our `state` variable number back to 0.