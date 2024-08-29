# digi-pokemon-api

 The repository demonstrates how to build a RESTful API using Node.js to perform CRUD operations (Create, Read, Update, Delete) on a dataset of Pokémon. The application could either interact with an existing PokeAPI (a popular public API that provides Pokémon data) or use a custom dataset hosted within the project.

## Table of Contents

- [digi-pokemon-api](#digi-pokemon-api)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Install the Dependencies](#2-install-the-dependencies)
    - [3. run the project](#3-run-the-project)
  - [Folder Structure](#folder-structure)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [License](#license)

## Installation

Follow these steps to set up and run the project on your local machine:

### 1. Clone the Repository

```bash
git clone <https://github.com/your-username/pokemon-api.git>
cd pokemon-api

```

### 2. Install the Dependencies

```javascript
npm install
```

### 3. run the project

```javascript
npm start
```

## Folder Structure

The project is structured as follows:

```bash
pokemon-api/
├── controllers/
│   └── pokemonController.js    # Handles the API logic for CRUD operations
├── routes/
│   └── pokemonRoutes.js        # Defines the API routes
├── services/
│   └── pokemonService.js       # Contains logic for data management and external API calls
├── server.js                   # Entry point of the application, sets up the server
├── package.json                # Contains project metadata and dependencies
├── README.md                   # Documentation for the project
└── Pokemon API Collection.postman_collection.json  # Postman collection for testing the API
```

## Usage

1. Start the server by running `npm start`.
2. Use a tool like Postman to interact
3. Test the API endpoints using the provided Postman collection.

## API Endpoints

Here are the available API endpoints for interacting with Pokémon:

- `GET /pokemon/`: Fetch a Pokémon by its name from the external Pokémon API.
- `POST /pokemon`: Insert a new Pokémon into the in-memory store. The Pokémon's data should be provided in the request body.
- `PUT /pokemon/`: Update a Pokémon's data by name.
- `PATCH /pokemon/`: Partially update a Pokémon's data by name.
- `DELETE /pokemon/`: Delete a Pokémon by name.
- `HEAD /pokemon`: Return headers for the Pokémon endpoint.
- `OPTIONS /pokemon`: Return the allowed HTTP methods for the Pokémon endpoint.

Please note that the actual implementation of these endpoints should be done in the respective controller and route files.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
