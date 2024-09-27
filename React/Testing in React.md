## Testing in React

- Tools
- Jest: A simple JavaScript testing Framework that uses jsdom to mimic how a browser works. It is fast and has powerful features such as mocking modules and timers. For more information, see Jest Docs.
- Testing Library: A library of simple and complete testing utilities for JavaScript code that encourage testing code the way users use an application. We will use the React-specific library, jest-dom, and a user-event library. For more information, see Testing Library.
- Mock Service Worker(MSW): An API mocking tool that uses the Service Worker API to intercept requests on the network level. MSW allows us to have identical applications with and without mocks and even observe network requests in the browser dev tools. For more information, see Mock Service Worker Docs.
- whatwg-fetch: This tool allows a fetch request to work in a testing environment.

When we use create-react-app we will already get jest and whatwg-fetch

Installation command:
```
npm install --save-dev jest msw @testing-library/react @testing-library/user-event @testing-library/jest-dom whatwg-fetch
```

We may need to configure the Jest framework:
Open the package.json and add the following code:
```
{  //do not copy this brace
//Rest of Package.json
  "browserslist": [
    "defaults"
  ],
  "jest": {
    "verbose": true,
    "setupFilesAfterEnv": ["./jest.setup.js"],
    "moduleNameMapper": {
      ".+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "<rootDir>/src/utils/mocks/fileExtensionMocks.js"
    }
  }

} //do not copy this brace
```

create a new file named jest.js in the application's rood directory and add this configuration:
```
/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import "whatwg-fetch";
```
Create a new directory named mocks inside the existing utils directory. Add a file named fileExtensionMocks.js to the new directory.

This file uses a default export to export a string:

src/utils/mocks/fileExtensionMocks.js
```
export default "";
```
The final step is to set up the Jest npm script to run any tests in the application.

Inside the package.json file, find the scripts section and add or replace the test script with "test": "jest".

After Jest is set up, the following command will run any defined tests that Jest can find:
```
npm run test
```