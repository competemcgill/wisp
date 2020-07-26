## Project layout

    src/    # Contains all source code
        config/
        controllers/
        database/
            interactions/
            models/
        interfaces/
        routes/
        util/
        validators/
        app.ts
        server.ts
    docs/
        index.md  # This documentation page.
        ...       # Other markdown pages, images and other files.
    test/
        unit/
        util/
    chart/
    Dockerfile
    docker-compose.yaml
    mkdocs.yml    # Configuration for these docs
    LICENSE
    nodemon.json
    package.json
    package-lock.json
    swaggerDoc.js
    tsconfig.json
    tslint.json

### For Development

**Requirements**

* [`docker`](https://www.docker.com/)
* [`docker-compose`](https://docs.docker.com/compose/)

**Running locally**

The problems microservice does not depend on any other microservice to be running simultaneously.

1. Clone the desired repository (each microservice can be found in [this README](https://github.com/Compete-McGill/wisp)).

2. Then navigate locally to the root of the repo and run:

```bash
npm install
npm start
```

see `npm start` in [Available Commands](#available-commands)

#### Available Commands

The following commands are standardized among API microservices to ensure consistency. All microservice repos use these commands:

| Command | Description |
| --- | --- |
| `npm start` | spins up a MongoDB instance as well as your API server through docker-compose (see `docker-compose.yaml`). Be sure that ports 27017 and 3000 are unused by other services |
| `npm run start:local` | runs a nodemon server that listens for changes in the src directory (requires `nodemon` and `ts-node`) |
| `npm run start:prod` | starts the API server in the production env. Must be run after `npm run build` (requires `node` and `tsc`) |
| `npm run test` | runs unit tests on new instances of MongoDB and the API (see `docker-compose.test.yaml`). Once the tests finish running, both instances stop 
| `npm run test:local` | runs unit tests without docker and MongoDB (requires `nyc`, `mocha`, and `ts-node`) |
| `npm run build` | builds the API for production and outputs the result in `dist/` (requires `tsc`) |
| `npm run lint` | lints the src directory according to `tslint.json` and `tsconfig.json` |

