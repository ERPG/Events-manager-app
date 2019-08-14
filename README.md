![Angular](https://cdn-images-1.medium.com/max/1200/1*nbJ41jD1-r2Oe6FsLjKaOg.png) ![NodeJS](https://codeandunicorns.com/wp-content/uploads/2017/11/node-express.png)
![MongoDB](https://cdn.iconverticons.com/files/png/4eae13c7686cb54d_256x256.png)

# Events Manager

Events app to manage your daily tasks.

## Getting Started

This steps will get you through the setup process of installing and usage of the project.

### Project installation guide

To ensure the best compatibility you may need node version of `v10.16`. We would recommend to use NVM (Node Version Manager) for this. You can find it [Here](https://github.com/creationix/nvm).

Installation

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

then you can run

```
nvm install `version`
```

After set node version run

```
yarn install
```

After installing all packages, since you need the api for the requests, we need to launch the node server that receive this requests.

The server use a **MongoDB** database, I suggest go to the [Documentation](https://docs.mongodb.com/manual/installation/) and setup this before launch the server.

To launch node server, first compile your typescript files, make shure you have typescript installed globally.

To install Typescript global you can do

```
yarn add --global typescript
```

After that, to compile server files just

```
tsc
```

The compile server file will be at dist/out-tsc on index.js file.

```
node index.js
```

or if you have nodemon installed

```
nodemon index.js
```

To check if server is running, navigate to `http://localhost:3000/`

The app also use a Weather API. I also suggest go to the [openWeatherMap docs](https://openweathermap.org/), register and get an API KEY. This api key will be place in a **.env** file with the name of _WEATHER_API_KEY_.

To launch Angular server

```
yarn run start
```

And Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

That's it, you are good to go!

## Running the tests

To run the tests

```
yarn run test
```

## Built With

- [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0. - The web framework used
- [Express](https://expressjs.com/es/) - node Infraestructure
- [Mongoose](https://mongoosejs.com/docs/) - Schema base solution
- [MongoDB](https://www.mongodb.com/) - DataBase
- [OpenWeatherMap](https://openweathermap.org/) - DataBase

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
