# The Front End Nanodegree: Testing the Feed Reader
This is the fifth project in Google Udacity FEND Nanodegree Scholarship. It demonstrates the way the JS code can be automatically tested using the Jasmine framework.

## Author
Made by Mariola Karpiewska based on initial code provided by the Udacity.

## Execution
Unzip the folders and run index.html to see the application window followed by the test results.

## Code Description
The main JS code for the app is located in js/app.js
The tests code (specs) is located in jasmine/spec/feedreader.js

## Dependencies
Testing framework: Jasmine 2.1.2
Fonts: http://fonts.googleapis.com
CSS help library: normalize.css v3.0.2
Menu: handlebars v2.0.0
Feed reading api: google.com/jsapi

## Contributing
Pull requests are not expected, but may be accepted if they occur ;-)

## Useful links
- [Rubric](https://review.udacity.com/#!/projects/3442558598/rubric) for the project.
- [Detailed instructions](https://classroom.udacity.com/nanodegrees/nd001/parts/4942f4d7-a48d-4794-9eb0-404b3ed3cfe1/modules/5d74b9ba-b128-456f-8d2d-83aeda84ecc0/lessons/3442558598239847/concepts/34300788080923) on how to get started.

## Steps made to complete the project
1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass. 
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.
