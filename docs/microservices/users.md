# Users

The purpose of this microservice is to manage all logic relating to users and to privide OAuth2.0-compliant authorization endpoints. Since WISP allows users to solve problems across multiple sites (such as Codeforces and Katis), it is this microservice's role to collect and keep the user's information in-sync across all sites.

## Project layout

    src/                      .............     # source code
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
    test/                    .............     # unit tests        
        controllers/
    Dockerfile          
    docker-compose.yaml
    docker-compose.test.yaml
    LICENSE
    nodemon.json
    package.json
    package-lock.json
    swaggerDoc.js
    tsconfig.json
    tslint.json

## Getting Started

### For Development

**Requirements**

* [`gcloud`](https://cloud.google.com/sdk/install)
* [`kubectl`](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
* [`docker`](https://www.docker.com/)
* [`docker-compose`](https://docs.docker.com/compose/)

**Available Commands**

| Command | Description |
| --- | --- |
| `npm start` | spins up a MongoDB instance as well as your API server through docker-compose (see docker-compose.yaml). Be sure that ports 27017 and 3000 are unused by other services |
| `npm run start:local` | runs a nodemon server that listens for changes in the src directory (requires nodemon and ts-node) |
| `npm run start:prod` | starts the API server in the production env. Must be run after `npm run build` (requires node and tsc) |
| `npm run test` | runs unit tests on new instances of MongoDB and the API (see docker-compose.test.yaml). Once the tests finish running, both instances stop 
| `npm run test:local` | runs unit tests without docker and MongoDB (requires nyc, mocha, and ts-node) |
| `npm run build` | builds the API for production and outputs the result in dist/ (requires tsc) |
| `npm run lint` | lints the src directory according to tslint.json and tsconfig.json |


**Running**

1. Login to a gcloud account that has access to our cluster on GKE

```bash
$ gcloud auth login <EMAIL>
```

2. Connect to our wisp-prod cluster

```bash
$ gcloud container clusters get-credentials wisp-prod --zone northamerica-northeast1-c --project wisp-276819
```

3. Use port forwarding to get access to the problems microservice (this will keep running in foreground by default)

```bash
# we don't currently have a dev namespace so prod will be used intermittently
$ kubectl port-forward -n prod deploy/wisp-problems 3001:3000
```

NOTE: steps 1 through 3 can be skipped by running a local copy of the problems microservice with docker or node (keep in mind that the default mongodb url for the problems microservice is mongodb://mongo:27017)

4. Clone the [repository](https://github.com/Compete-McGill/wisp-users-microservice), and navigate to the root of the project.

5. run:

```bash
npm i
npm start
```

see `npm start` in Available Commands


## Sample Usage

For a more extensive documentation, visit the swagger docs

### Auth

<br>

> POST /auth/login

**Body**

```json
{
    "email": "example@gmail.com", 
    "password": "password"
}
```

**Responses**

| Status | Response |
| --- | --- |
| 200 | `{"token": "jwt token", "user": {...}}` |
| 400 | Invalid email or passowrd |
| 422 | Missing or invalid email/password |
| 500 | Internal server error |

<br>

> POST /auth/introspect

**Params**

* token: JWT token to introspect

**Responses**

| Status | Response |
| --- | --- |
| 200 | `{"active": true, "user": {...}}` |
| 401 | Unauthorized |

<br>

### Users

<br>

> Model

```
{
    username: String,
    email: String
    password: String,
    role: String,
    info: {
        major: String,
        year: String,
        school: String,
        bio: String,
        profilePhoto: String,
    },
    problemSets: [ObjectId],
    problems: [
        {
            problemId: String,
            isComplete: Boolean,
            status: String,
        },
    ],
    platformData: {
        codeforces: {
            username: String,
            email: String,
            lastSubmission: {
                problemId: String,
                isComplete: Boolean,
                status: String,
            },
        },
    },
    createdAt: Date,
    updatedAt: Date
}
```

<br>

> GET /users

**Responses**

| Status | Response |
| --- | --- |
| 200 | Array of users |
| 500 | Internal server error |

<br>

> GET /users/{userId}

**Params**

* userId: ID for user to fetch

**Responses**

| Status | Response |
| --- | --- |
| 200 | User |
| 404 | User not found |
| 422 | Missing or invalid userId |
| 500 | Internal server error |

<br>

> POST /users

**Body**

See user model

**Responses**

| Status | Response |
| --- | --- |
| 200 | User |
| 400 | User already exists |
| 422 | Missing or invalid params in body |
| 500 | Internal server error |

<br>

> PUT /users/{userId}

**Params**

* userId: ID for user to update

**Body**

See user model

**Responses**

| Status | Response |
| --- | --- |
| 200 | User |
| 404 | User not found |
| 422 | Missing or invalid userId/params in body |
| 500 | Internal server error |

<br>

> DELETE /users/{userId}

**Params**

* userId: ID for user to delete

**Responses**

| Status | Response |
| --- | --- |
| 200 | Empty |
| 404 | User not found |
| 422 | Missing or invalid userId |
| 500 | Internal server error |

<br>

> PATCH /users/{userId}/problems

**Params**

* userId: ID for user to update

**Body**

```json
{
    "problemId": "ObjectId"
}
```

**Responses**

| Status | Response |
| --- | --- |
| 200 | User |
| 404 | User not found |
| 422 | Missing or invalid userId/problemId in body |
| 500 | Internal server error |

> PATCH /users/{userId}/problemSets

**Params**

* userId: ID for user to update

**Body**

```json
{
    "problemSetId": "ObjectId"
}
```

**Responses**

| Status | Response |
| --- | --- |
| 200 | User |
| 404 | User not found |
| 422 | Missing or invalid userId/problemSetId in body |
| 500 | Internal server error |
