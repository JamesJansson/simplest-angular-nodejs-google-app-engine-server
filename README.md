# Instructions for running this server locally
1) Install [NodeJS](https://nodejs.org/)

2) Install AngularCLI
~~~
npm install @angular/cli@latest -g
~~~

3) Download or clone this repository

4) Open the NodeJS Terminal. Run `npm install` to add the needed ExpressJS files into the node_modules folder

5) Run 
~~~
ng build
~~~
to compile the Angular front-end components into the `dist` folder

6) Run `node server.js`

7) Open [localhost:3000](http://localhost:3000/) in your browser. You should see a basic Angular app displayed. You are now running a local server. 

# Instructions for running this server on Google App Engine
After doing the above:

8) [Set up Google Cloud Platform](https://cloud.google.com/)

9) Create a new project

![Create a project](/readme/img/gcp12.png)

10) Name the project

![Name the project](/readme/img/gcp3.png)

11) Make sure the project is selected

![Select the project](/readme/img/gcp4.png)

12) Install the [Google Cloud SDK](https://cloud.google.com/sdk/)

13) Run the following command and create a new configuration. It can have any name. 
~~~
gcloud init
~~~


14) Log in to your Google account.

15) Select the project that you create above.

16) Select the region

17) Choose a region that the server will be hosted in

18) Run the following command
~~~
gcloud app deploy
~~~

19) Wait for the app to deploy. 

20) Visit the address that is displayed when the deploy command finishes.
~~~
Deployed service [default] to [https://test-project-197703.appspot.com]
~~~





# How this app was created
## Install Angular
~~~
npm install @angular/cli@latest -g
~~~
### Update TypeScript
> Note: the following was necessary to get the Angular installer to work. In future this may not be necessary.  
~~~
npm install --save-dev typescript@2.6.2
~~~
## Compile Angular and check that it works
~~~
ng serve
~~~
Visit [http:localhost:4200](http:localhost:4200)
## Install Express and Body Parser
~~~
npm install express body-parser --save
~~~
## Add the server.js file

# SimplestAngularNodejsServer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
