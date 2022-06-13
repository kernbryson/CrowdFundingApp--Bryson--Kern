
  # Tech Blog-Bryson Kern
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description 
For this project I created a Tech Blog that allows users to create, update, and delete blog posts. Users are also given the option to leave comments on blog posts in order to leave feedback. My motivation for the project was to create a website that allows users to connect with each other and allow them to share their thoughts to other users on the web. While creating this project I learned a lot about routes and handlebars.js.


## Table of Contents 🧙

- [installation](#installation)
- [Usage](#usage)
- [Functionality](#Functionality)
- [Tests](#Tests)
- [Credits](#credits)
- [License](#license)
- [Questions](#Questions)

## Installation
In order to download and use this website on your own web server, one must first download my files from github. After you obtained the files, then the user must use npm i, to get all of the node packages. Then the user must create an env file with their sql username and password along with a database name. After that is completed the user needs to open mysql in the terminal to create the database. Once the database is created the user needs to seed the database with the  node seeds/seed.js command. After the database is seeded, the user simply types in npm start and the website will open up on their local host.

## Usage

In order to use the tech blog, one must first sign in or create an account in order to create a post. once the user is signed in they are given the option to create a blog post or update and or delete their previous posts. The user can then click on the home page button and view all the blog posts other users have made. The user is able to click on each post and add a comment if they want.

## Functionality

This tech blog uses authentication in order for users to create their own blog posts. Users are also able to leave and delete comments on their own or others posts. In order to create this functionality, I used sequelize to do POST, DELETE, and PUT fetches to gather, update, or delete blog posts or comments. I also used handlebars.js to create dynamic content on each screen to accommodate each user.
 - ![JS](/images/profilejs.png)
 - ![HB](/images/profilehb.png)

## Credits
 - w3Schools - https://www.w3schools.com/
 - MDN - https://developer.mozilla.org/en-US/
 - Juan Santiago

## License
    Copyright 2022 Bryson Kern
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Questions
Feel free to contact me with any questions or concerns!
 - email: kernbryson@yahoo.com
 - GitHub: https://github.com/kernbryson
