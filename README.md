# odin-Members-Only
https://www.theodinproject.com/lessons/node-path-nodejs-members-only

# Technology
Node.js, Express, Ejs, express-validator, passport

# About
Silly little app (creating and authenticating users and giving users different abilities and permissions). 

## Features
* **Guests:** Can see all messages, but authors and dates are hidden.
* **Users:** Can sign up, log in, and create messages.
* **Members:** Can see the author and date of each message.
* **Admins:** Can see everything and have the ability to delete messages.

## Local Setup
1. Clone the repo
2. Run `npm install`
3. Add your `.env` variables (Database URI, Secret Keys (member,admin))
4. Run `npm start`

## Todo
1. Fix .escape() - currently message's with symbols render for example like 'I&#x27;m not a member'