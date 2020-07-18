# Users

The purpose of this microservice is to manage all logic relating to users and to privide OAuth2.0-compliant authorization endpoints. Since WISP allows users to solve problems across multiple sites (such as Codeforces and Katis), it is this microservice's role to collect and keep the user's information in-sync across all sites.

## For Development

**Running locally**

NOTE: steps 1 through 3 can be skipped by running a local copy of the problems microservice with `docker` or `node` (keep in mind that the default mongodb url for the problems microservice is `mongodb://mongo:27017`).

1. Login to a [`gcloud`](https://cloud.google.com/sdk/docs/quickstarts) account using the terminal tool that has access to our cluster on GKE

2. Connect to our wisp-prod cluster using `kubectl`
    - `gcloud container clusters get-credentials <cluster-name> --zone <zone-name> --project <project-name>`

3. Use port forwarding to forward traffic on port 3001 to the problems microservice (this will keep running in foreground by default)
    - Use commands from [this file](https://github.com/Compete-McGill/wisp/blob/master/build/Makefile) to port-forward

4. Clone the [repository](https://github.com/Compete-McGill/wisp-users-microservice), and navigate to the root of the project.

5. run:

```bash
npm i
npm start
```

see `npm start` in Available Commands

## API Documentation

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
