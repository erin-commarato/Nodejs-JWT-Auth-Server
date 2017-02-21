# Server Side Authentication

This package enables server-side authentication for a public-facing API using JWT with React, Redux and Nodejs. Users may sign up, sign in and view protected resources and then sign out.

###Getting Started###

Checkout this repo, install dependencies, then start the gulp process with the following:

```
	> git clone git@github.com:erin-commarato/react-redux-client-server-auth.git
	> cd react-redux-client-server-auth/server
	> npm install
	> npm run dev
```
###Connecting to the API###
By default, server will run on localhost://3090. Valid routes include:
/signin
/signup

Upon successful sign in or sign up, server will return JWT

###Tests###
Run tests with the following:

```
  > npm test
```

Note: Tests will wipe out existing user data.
