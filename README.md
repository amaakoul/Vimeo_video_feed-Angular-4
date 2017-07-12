# Vimeo-video-feed

 
## Description
the app does display the results of a vimeo feed into a page, and provide a basic form to filter those results using Angular 4.

+ Vimeo feed
Use the provided Rest service, but also works with any data with the same structure.

feed :  https://demo8496746.mockable.io/vimeo

## Functionality overview

display of the video feed like twitter feed. See (screenShot.jpg).
display the authors image on the left, with content on the right. 
The displayed information should include author image and link.
the video name with link; 
the video description; number of plays, comments, and likes.
The text should not wrap below the author image. 
The default view should only be 10 results.
the ability to view 10, 25, or 50 maximum results. 
the ability to filter videos from users that have more than 10 likes.(not videos that have more than 10 likes.)
A simple checkbox with description for UI.

*******************************
##   How to start the app: (run the following commands)

*******************************
    npm install
    ng serve
*******************************

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
