# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Code Architecture Description

+ The code architecture for the movie search application is designed using React for the front-end, Redux for state management, Firebase for hosting, and Styled Components for CSS. The application is composed of various pages that are routed from the App.js file, which acts as the root component for the entire application.

+ The home page of the application serves as the main point of interaction for the user, where they can search for movies by entering keywords into a search bar. The search bar is connected to a debouncing function, which ensures that the API request is sent only after a certain amount of time has passed since the user's last keystroke. This helps prevent overwhelming the API server with too many requests.

+ The OMDB API is used to fetch data for the movies that match the user's search query. The data returned from the API includes information such as the movie's title, year of release, plot summary, and more. This data is then used to display a list of relevant movies on the home page.

+ Users can also add and remove movies from their favorites list by clicking on a "favorite" button next to each movie. This button is connected to an "addToFav" action, which dispatches an action to update the state and add the selected movie to the favorites list. Similarly, a "removeFromFav" action is used to remove the movie from the favorites list.

+ Styled Components is a popular CSS-in-JS library that allows developers to write CSS styles in a JavaScript file and apply them directly to the React components. This eliminates the need for separate CSS files and allows for more efficient and modular styling. In the movie search application, Styled Components is used to style the various components such as the search bar, movie cards, and buttons. It also allows for easy management of themes and responsive design.

+ The state data for the application, including the search results and the favorites list, is managed using Redux. The state is updated in response to actions dispatched by the various components in the application. The state data is also saved to the local storage to ensure that it is persisted even if the session is closed.


+ Data persistency is achieved in the movie search application by using the local storage of the user's browser. Whenever the state data is updated, for example, when a movie is added to the favorites list, this data is also saved to the local storage. This ensures that the data is retained even if the user closes the browser or if the session expires. When the application is loaded again, the data is retrieved from the local storage and used to re-populate the state, providing a seamless user experience.

+ It's also worth noting that the Local Storage has a limited space of around 5mb, depending on the browser and device, therefore it's good practice to be aware of that and to consider alternative solutions like IndexedDB, WebSQL or even a server-side storage if the data exceeds the limit of Local Storage.

+ Finally, Firebase is used to host the application, providing a scalable and reliable platform for the movie search application. The application is also styled using Styled Components, which allows for easy management of CSS styles and a consistent look and feel throughout the application.
