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
5) Run `node server.js`
6) Open [localhost:3000](http://localhost:3000/) in your browser. You should see a basic Angular app displayed. You are now running a local server. 

# Instructions for running this server on Google App Engine
After doing the above:

7) [Set up Google Cloud Platform](https://cloud.google.com/)

8) Create a new project
![Create a project](/tutorial/img/gcp12.png)

9) Name the project

![Name the project](/tutorial/img/gcp3.png)

10) Make sure the project is selected
![Select the project](/tutorial/img/gcp4.png)

11) Install the [Google Cloud SDK](https://cloud.google.com/sdk/)

12) Run the following command 
~~~
gcloud init
~~~
Create a new configuration. It can have any name. 

13) Log in to your Google account.

14) Select the project that you create above.

15) Select the region

16) Choose a region that the server will be hosted in

17) Run the following command
~~~
gcloud app deploy
~~~

18) Wait for the app to deploy. 

19) Visit the address that is displayed when the deploy command finishes.
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
