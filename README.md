# React + Flask Project
create a project that combines a React frontend with a Flask backend

## Requirements

You need to install three packages on your machine:

- [Node.js](https://nodejs.org/en/): The JavaScript runtime that you will use to run your frontend project.
- [Yarn](https://yarnpkg.com/getting-started/install): A package and project manager for Node.js applications.
- [Python](https://www.python.org/downloads/): A recent Python 3 interpreter to run the Flask backend on.

## Clone the sources
```commandline
git clone https://github.com/kim-misol/react_study.git
cd react-study
```

## Virtualenv modules installation
Windows based systems
```commandline
virtualenv --no-site-packages venv
.\venv\Scripts\activate
```

## Creating a Starter React Project
https://app.serverless.com/?package=react-starter
```commandline
npx create-react-app react-app
cd react-app
``` 

- install  
`npm i -g serverless && serverless init sf_PFGJ0TvF`
- run  
```commandline
cd react-app
npm start
```
- build  
`npm run build`
- deploy  
`cd react-app && serverless deploy`
