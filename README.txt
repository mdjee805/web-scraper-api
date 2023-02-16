Web Scraper App
Author: Michael Jee
Created: January 28th 2023

0. Prereqs
0a. gitbash
- install Gitbash
- start Gitbash (as admin if in Windows)
0b. node
- install node
- add installed folder to environment variable for account: node
- add node bin to PATH
- check version using 'node -v'
0c. npm
- install npm
- add installed folder to environment variable for account: npm
- add npm bin to PATH
- check version using 'npm -v'
for react to work, node needs to be >= 14.0.0 and npm >=5.6npm 

1. Set-up workspace
- unzip folder 'web-scraper.zip'
- open web-scraper-api in terminal
- open web-scraper-frontend in another terminal

2. set-up backend (in the terminal using folder 'web-scraper-api')
- install npm packages: 'npm i' (must have express, cors)
- start backend: 'npm start'
- (note, it hosts on localhost:3001, but the frontend will make any required calls)

3. set-up frontend (in the terminal using folder 'web-scraper-frontend')
- install npm packages: 'npm i' (must have react-hook-form)
- start frontend: 'npm start'
- open browser with localhost:3000 (if it doesn't automatically open)
- enter in any string and a valid url in the form
- click submit