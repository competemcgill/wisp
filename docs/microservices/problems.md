# Problems

Among other functionality, WISP hosts an evolving set of problems and problem sets for users to attempt, and tracks their progress. The purpose of this microservice is to manage all data and logic relating to these problems and problem sets.

## Getting Started

### For Development

**Requirements**

* [`docker`](https://www.docker.com/)
* [`docker-compose`](https://docs.docker.com/compose/)

**Running**

Clone the repository, and navigate to the root of the project.

Then run:

```bash
npm start
```

### For Production

**Requirements**

* [`docker`](https://www.docker.com/)

**Build**

Clone the repository, and navigate to the root of the project.

Then run:

```bash
docker build -t wisp-problems-microservice:latest
```
```bash
docker run --rm -d -p 3000:3000 wisp-problems-microservice
```


## Sample Usage

### ProblemSets

#### List all ProblemSets

**Query parameters**
* `includeProblems=true`: for each problem set returned, includes an array of problems belonging to that problem set as the field `problems`

Request:
```bash
curl --request GET \
  --url 'http://localhost:3000/problemSets'
```

Response:
```json
[
  {
    "tags": [
      "Graph Theory",
      "Other Tag"
    ],
    "_id": "5eb855b2cf015c0062d71f88",
    "title": "Test Problem Set 1",
    "description": "This is a test problem set!",
    "createdAt": "2020-05-10T19:27:46.233Z",
    "updatedAt": "2020-05-10T19:27:46.233Z",
    "__v": 0
  }
]
```

#### Get specific ProblemSet

**Query parameters**
* `includeProblems=true`: includes an array of problems belonging to the specified problem set as the field `problems`

Request:
```bash
curl --request GET \
  --url http://localhost:3000/problemSets/5eb855b2cf015c0062d71f88
```

Response:
```json
{
    "tags": [
        "Graph Theory",
        "Other Tag"
    ],
    "_id": "5eb855b2cf015c0062d71f88",
    "title": "Test Problem Set 1",
    "description": "This is a test problem set!",
    "createdAt": "2020-05-10T19:27:46.233Z",
    "updatedAt": "2020-05-10T19:27:46.233Z",
    "__v": 0
}
```

#### Create ProblemSet

Request:
```bash
curl --request POST \
  --url http://localhost:3000/problemSets \
  --header 'content-type: application/json' \
  --data '{
	"title" : "Test Problem Set 1",
	"description" : "This is a test problem set!",
	"tags" : ["Graph Theory", "Other Tag"]
}'
```

Response:
```json
{
    "tags": [
        "Graph Theory",
        "Other Tag"
    ],
    "_id": "5eb855b2cf015c0062d71f88",
    "title": "Test Problem Set 1",
    "description": "This is a test problem set!",
    "createdAt": "2020-05-10T19:27:46.233Z",
    "updatedAt": "2020-05-10T19:27:46.233Z",
    "__v": 0
}
```

### Problems

#### List all Problems

Request:
```bash
curl --request GET \
  --url http://localhost:3000/problems
```

Response:
```json
[
  {
    "problemMetadata": {
      "platformProblemId": "1352G",
      "difficulty": "easy"
    },
    "problemSetIds": [
      "5eb855b2cf015c0062d71f88"
    ],
    "_id": "5eb8570217271500be61b2c9",
    "title": "Test Problem 1: Special Permutation",
    "source": "CODEFORCES",
    "sourceLink": "https://codeforces.com/problemset/problem/1352/G",
    "problemId": "6e88ec57160cd8164d9460a9885fbece7047c13c",
    "createdAt": "2020-05-10T19:33:22.888Z",
    "updatedAt": "2020-05-10T19:33:22.888Z",
    "__v": 0
  }
]
```

#### Get specific Problem

Request:
```bash
curl --request GET \
  --url http://localhost:3000/problems/5eb8570217271500be61b2c9
```

Response:
```json
{
    "problemMetadata": {
        "platformProblemId": "1352G",
        "difficulty": "easy"
    },
    "problemSetIds": [
        "5eb855b2cf015c0062d71f88"
    ],
    "_id": "5eb8570217271500be61b2c9",
    "title": "Test Problem 1: Special Permutation",
    "source": "CODEFORCES",
    "sourceLink": "https://codeforces.com/problemset/problem/1352/G",
    "problemId": "6e88ec57160cd8164d9460a9885fbece7047c13c",
    "createdAt": "2020-05-10T19:33:22.888Z",
    "updatedAt": "2020-05-10T19:33:22.888Z",
    "__v": 0
}
```

#### Create Problem

Request:
```bash
curl --request POST \
  --url http://localhost:3000/problems \
  --header 'content-type: application/json' \
  --data '{
	"title": "Test Problem 1: Special Permutation",
	"source":"CODEFORCES",
    "sourceLink":"https://codeforces.com/problemset/problem/1352/G",
	"problemSetIds": ["5eb855b2cf015c0062d71f88"],
	"problemMetadata": {
		"platformProblemId":"1352G",
		"difficulty":"easy"
	}
}'
```

Response:
```json
{
    "problemSetIds": [
        "5eb855b2cf015c0062d71f88"
    ],
    "_id": "5eb8570217271500be61b2c9",
    "title": "Test Problem 1: Special Permutation",
    "source": "CODEFORCES",
    "sourceLink": "https://codeforces.com/problemset/problem/1352/G",
    "problemMetadata": {
        "platformProblemId": "1352G",
        "difficulty": "easy"
    },
    "problemId": "6e88ec57160cd8164d9460a9885fbece7047c13c",
    "createdAt": "2020-05-10T19:33:22.888Z",
    "updatedAt": "2020-05-10T19:33:22.888Z",
    "__v": 0
}
```

#### Problems exists

The `id` that is used in this requests URL is a custom ID that can be generated by concatenating the platform ("CODEFORCES") and the problem ID as displayed on the platform ("1352G"), and then taking the SHA-1 hash of the resulting string.

Request:
```bash
curl --request GET \
  --url http://localhost:3000/problems/6e88ec57160cd8164d9460a9885fbece7047c13c/exists
```

Response:
```json
{
    "problemMetadata": {
    "platformProblemId": "1352G",
    "difficulty": "easy"
    },
    "problemSetIds": [
    "5eb855b2cf015c0062d71f88"
    ],
    "_id": "5eb8570217271500be61b2c9",
    "title": "Test Problem 1: Special Permutation",
    "source": "CODEFORCES",
    "sourceLink": "https://codeforces.com/problemset/problem/1352/G",
    "problemId": "6e88ec57160cd8164d9460a9885fbece7047c13c",
    "createdAt": "2020-05-10T19:33:22.888Z",
    "updatedAt": "2020-05-10T19:33:22.888Z",
    "__v": 0
}
```
