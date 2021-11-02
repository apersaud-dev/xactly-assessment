
# Xactly Assessment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Currently, there is a `setInterval` function that simulates the refreshing/refetching of data. While the variable is named `thirtyMinutes`, I actually set the function to change every thirty seconds for demo purposes (did not want you to 30 minutes to see the change).

## Notes

### Visualizing the Problem

My first thought after reading the problem description was determing how I would want the data to render. 
In the included `xactly_visualization.pdf` file, I initially brainstormed displaying the data from left-to-right visually.
This orientation also helped me conceptualize how I would want the data structured when received from the backend service.

This diagram also served as a simple reference for how I would render the data in my component. 
While I will note that I am not great at creating designs, I do believe the end-result clearly communicates the status of the entire sales hierarchy in a manner that is easy to trace both top-down and bottom-up.


### JSON Data

There is a `data` folder in the `src` directory with two different types of mock data. I structured these data sets based on how I would the backend to send it to me. 

Each subordinate group is nested as an array of objects in the supervisor node.
For example, the VP of Sales has a directReports key that contains an array of the Sales Managers, which are also structured as objects.

I made the assumption that the bottom level node would always have a directReports value of an empty array. The component that renders each node checks for the empty array to determine if it is the lowest level of that particular branch of data.

### Organization

I separated my code into two distinct layers: `presentation` and `data`. While this isn't following clean architecture principals exactly, I was trying to accomplish the goal of separating my data layer from my presentation layer.

I also used SASS to style my components, leveraging the [7-1 pattern](https://www.learnhowtoprogram.com/user-interfaces/building-layouts-preprocessors/7-1-sass-architecture) (although I did not use/create all 7 subdirectories) and [BEM](http://getbem.com/) naming convention.

### Additional Considersations

#### State

I relied on the `useState` and `useEffect` React Hooks to manage the state of my application. 

#### Alternate Scenario

Although my code doesn't specifically address the alternate management-heavy scenario, my second mock data set tries to replicate it. 
I believe the way I render the data is sufficient, however I did consider how I would handle a larger data set.

Given that TVs are wider than they are tall, I could perform a test on the data in the parent (i.e. hierarchy.js page) component then return a child component that either renders the data in a horizontal or vertical orientation, depending on the result.

#### Leveraging Libraries

One of my first thoughts was to search for Libraries that could render the data as an organizational chart, such as [OrgChart](https://www.npmjs.com/package/orgchart).
While this is an option that I believe could be useful, I assumed that one of the goals of this assessment was to test my ability to create a component that renders the data, as opposed to a third-party library.
