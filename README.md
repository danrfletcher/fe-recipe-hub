# Umami

## Overview

This is the front-end repository for Team HypeScript's group project for the final phase of the Northcoders software development bootcamp.

The application is built in React with Redux Toolkit, Vite, and TypeScript. It uses libraries such as Axios, React Hook Form, and React Icons.

The hosted application can be accessed [here](http://ec2-13-40-213-131.eu-west-2.compute.amazonaws.com:3000/).

When users interact with the site, requests are made to our API, the link to which can be found [here](http://ec2-13-40-213-131.eu-west-2.compute.amazonaws.com:5000/swagger/index.html).

This is currently a work in progress.

## Optimisation

This application has been built with a mobile-first approach, but has been designed to work well on desktop displays.

## Local Setup Instructions

### Cloning the Repository

Begin by clicking on the **CODE** button above and copying the URL. Then, navigate to the directory into which you would like to clone the repository, and run this command:

```
git clone <URL>
```

To push changes from your cloned local version to a personal repository on GitHub, you will first need to create a new GitHub repository. 

Initialise the repository <u>without</u> a `README`, `gitignore`, or `licence`.

Then, copy the URL of your new repository and run the following commands:

```
git remote set-url origin <NEW_URL>
git branch -M main
git push -u origin main
```

### Prerequisites

Please ensure you have installed Node.js. If you encounter any issues when running the project locally, you may need to use a different version of Node.

You can check your Node version by running `node --version`. 

Consider using Node Version Manager (nvm) to install, remove, and switch between different Node versions on your local machine.

### Installing Packages and Running the Project

Once you have cloned the repository on your local machine, please ensure you are in the root directory.

You may then run the following commands:

```
npm install
```

This will install all required NPM packages.

```
npm run dev
```

This will run the app locally, typically on port 5173. Please check your terminal log for confirmation.