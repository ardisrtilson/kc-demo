# KeycloakDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Running the Application

First, run ***npm install*** to set up keycloak in the project file.

Next enter the following CLI command: 

docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:15.0.1

The port can be changed with the -p flag, and the user and password for the admin account will be whatever you enter in the KEYCLOAK_USER and KEYCLOAK_PASSWORD flags. 

Once the docker image launches, go to `http://localhost:8080/`, or whatever port you chose in your port flag, and login using the credentials set with the KEYCLOAK_USER and KEYCLOAK_PASSWORD flags. You will now be logged in as an admin. As an admin, create a realm, then a client, then a user. The client's Root URL will be the port on which the main app will be running. Angular automatically serves on `http://localhost:4200/` so I'd stick with that. When creating the user, remember to go to the credentials tab and enter a temporary password.

Now, open the project in vs code and view the app.module.ts file. Lines 13-16 set the url where the keycloak-demo application will send the user info for authentication, the realm, and the client ID. Use the names of the realm and client ID you created. The url should be the port where you are serving the keycloak docker image appended with '/auth.' For example, I currently have it set to 'http://localhost:8080/auth', which will work just fine if you set the port the same as I did with the docker command above. 

After your credentials have been created, open a new tab in your terminal and run ng serve in the project's root directory. Access this page and double click the, 'click here to log in' button. Enter the username and password for the user you created in the admin terminal back on `http://localhost:8080/` and viola you're in. 

Once you've logged into this page, you can open the dev-tools console to inspect the KeycloakService object, which contains the user's account information.

## Installation Problems?

You may be having problems because you need to install the Docker CLI. If so, you should then run: docker pull jboss/keycloak

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# kc-demo
