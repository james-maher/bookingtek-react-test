
## Getting Started

This project was made to test candiates on react and redux. 

### build

Tested on Node v10.15.3. But should work on lower versions.
Run `npm install`.
If you see a node-sass binding error after running `npm install` then try running `npm rebuild node-sass`.


### run

`npm start`

### Instructions

The idea is to display a set of data nicely on a web page. There is a service in the app which when called will return a json object of zipcode information (Not really calling anything - just returning data from zips.json). This data must be displayed on the Zipcode page in a list so that all the information is easily readable. 

React Code: The React components for everything else other that the list and list items are already available, but feel free to change any of it. You may import libraries to help, however, try to avoid importing anything that will stop you showing off your work (e.g. like some sort of list-ui library).

Redux Code: Most of the Redux code is already linked up however there are a few things left to complete. These are pointed out below.

This test should be timeboxed for around one to two hours. Dont worry if you don't complete everything. 

Zip up your project and send it back - Or push to a github repo and make it accessable for someone to clone and build so we can review.

Tasks:
 * Complete the `FetchZipCodesReducer.js` so that the data is stored on success.
 * Call the `fetchZipCodesAction` somewhere in the code so that the service is called. 
 * Create a component / set of components which will display a list of zipcodes on the page when the data is successfully returned and stored in redux state.

 Bonus tasks (optional):
 * Style the app to make it responsive at desktop and mobile device screen sizes.
 * Import your preferred test runner ( e.g. jest, mocha) and write some unit tests for your new components.
