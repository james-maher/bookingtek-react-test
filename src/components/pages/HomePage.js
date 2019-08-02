import React from 'react';

const HomePage = () => (
  <main>
    <div className="page-container jumbotron jumbotron-fluid text-dark bg-light animated fadeIn">
      <h1 className="display-6 text-center">Instructions</h1>
      <p>
        The idea is to display a set of data nicely on a web page. There is a
        service in the app which when called will return a json object of
        zipcode information (Not really calling anything - just returning data
        from zips.json). This data must be displayed on the Zipcode page in a
        list so that all the information is easily readable.
      </p>
      <p>
        React Code: The React components for everything else other that the list
        and list items are already available, but feel free to change any of it.
        You may import libraries to help, however, try to avoid importing
        anything that will stop you showing off your work (e.g. like some sort
        of list-ui library).
      </p>
      <p>
        Redux Code: Most of the Redux code is already linked up however there
        are a few things left to complete. These are pointed out below.
      </p>
      <p>
        This test should be timeboxed for around one to two hours. Dont worry if
        you do not complete everything. Zip up your project and send it back -
        Or push to a github repo and make it accessable for someone to clone and
        build so we can review.
      </p>
      <br />
      <br />
      <h3>Tasks:</h3>
      <ul>
        <li>
          Complete the `FetchZipCodesReducer.js` so that the data is stored on
          success.
        </li>
        <li>
          Call the `fetchZipCodesAction` somewhere in the code so that the
          service is called.
        </li>
        <li>
          Create a component / set of components which will display a list of
          zipcodes on the page when the data is successfully returned and stored
          in redux state.
        </li>
      </ul>
      <h3>Bonus tasks:</h3>
      <ul>
        <li>
          Style the app to make it responsive at desktop and mobile device
          screen sizes.
        </li>
        <li>
          Import your preferred test runner ( e.g. jest, mocha) and write some
          unit tests for your new components.
        </li>
      </ul>
    </div>
  </main>
);

export { HomePage };
