# WISP

This project is developed by Competitive Programming McGill.

WISP is a project aimed at creating a fluid and fun experience for members of Compete McGill to learn competitive programming.

You can find WISP **hosted** [**here**](http://wisp.training).

And you can find our **documentation** [**here**](https://docs.wisp.training).

## Components
The repositories that make up this application can be found at these repositories:
* [Problems API Microservice](https://github.com/Compete-McGill/wisp-problems-microservice)
* [Users API Microservice](https://github.com/Compete-McGill/wisp-users-microservice)
* [Web Front-end](https://github.com/Compete-McGill/wisp-ui)
* This repo (contains documentation and other centralized resources such as e2e tests and build files)

## Documentation
This repository contains documentation using [mkdocs](https://www.mkdocs.org/) and hosts the documentation to Github Pages at [this URL](https://docs.wisp.training/).

Install `mkdocs` and the material theme with:
```
pip install mkdocs mkdocs-material
```

Then run a local development server for the docs by navigating to the root of this repo and running:
```
mkdocs serve
```

Then, when you're done making your changes, merge changes to `master` and checkout `master`, and then deploy these changes by running `mkdocs gh-deploy` locally.
