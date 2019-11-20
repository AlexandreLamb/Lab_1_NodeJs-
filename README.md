# LAB 1 Node JS

Simple app made with nodeJS + Express

## Installation

```bash
npm install
```

or

```bash
yarn install
```
after that create .env file at root directory like this 

```env
PORT= XXXX
```

## Run the app
devloppement mode
```bash
npm run dev
```


## Author

Lambert Alexandre Louis Sartoris

## Project structure

```bash
/Lab1_NodeJS
|-- backend
    |-- routes
        |-- controllers
            |-- default
                |-- Read.js
                |-- utils
                    index.html
            |-- hello
                |-- Read.js
        |-- api.js
    |-- app.js
    |-- server.js
|-- app.js
|-- package.json
|-- README.md
```

## Utilisation


```bash
curl http://localhost:3030/api/hello/Read/?name=[replace_by_random_name]
```
Response : Hello [replace_by_random_name]

```bash
curl http://localhost:3030/api/hello/Read/?name=[MY_NAME]
```
Response : JSON information about me

```bash
curl http://localhost:3030/api/default/Read/
```
Response : HTML page about the app functionnal
