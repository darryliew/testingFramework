# How to run testingFramework

Installing NodeJS + Yarn + Docker dependency installation
1. Install NodeJS(choose the version your computer is required - https://nodejs.org/en/download/)
* Once NodeJs is finished, run `npm -v` and `npm -v` to verify installation
2. Installing Yarn
* Run the command in your terminal/cmd line `npm install --global yarn`
* Once yarn is installed, run `yarn --version` to verify installation
3. Installing Docker
* Run the command in your terminal/cmd line `npm install -g docker`
* Once docker is installed, run `docker -v` to verify installation
---
In your terminal or command line
1. Run the command `yarn install` for packages installations.
---
### Starting WireMock Service
1. Run the command `docker pull rodolpheche/wiremock` to pull down the image
2. Run the second command to start the service `docker run -it --rm -p 8080:8080 rodolpheche/wiremock`

### Running tests
* Finish all the prerequisite
1. `Right click` the feature folder and `Run features`
2. To view the service data on a browser - `http://localhost:8080/cart`)