# How to run testingFramework

---
* In your terminal or command line
1. Run the command `yarn install` for packages & dependencies installation.

### Starting WireMock Service
1. Run the command `docker pull rodolpheche/wiremock` to pull down the image
2. Run the second command to start the service `docker run -it --rm -p 8080:8080 rodolpheche/wiremock`

### Running tests
* Finish all the prerequisite 
1. `Right click` the feature folder and `Run features`
2. To view the service data on a browser - `http://localhost:8080/cart`)