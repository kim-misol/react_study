# React + Flask Project
## Introduction  
Create a project that combines a React frontend with a Flask backend  
- Flask is great for quickly building server side application.  
- React is great for quickly building responsive user interfaces.  

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

- Run  
    ```commandline
    cd edu_platform 
    yarn start
    ```

- Build  
`yarn build`

- Deploy  
`cd platform && serverless deploy`

## Project structure
Flask large application directory structure:
```
|   config.py
|   microblog.py
|
+---app
    |   cli.py
    |   models.py
    |   __init__.py
    |
    +---api_1_0
    |       routes.py
    |       __init__.py
    |
    +---main
    |       forms.py
    |       routes.py
    |       __init__.py
    |
    +---static
    |       │   package-lock.json
    |       │   package.json
    |       │   webpack.config.js
    |       │
    |       ├───css
    |       │       style.css
    |       │
    |       ├───dist
    |       │       bundle.js
    |       │
    |       └───scripts
    |               index.js
    |               Finance.js
    |               HelloWorld.js
    |
    +---templates
        |   base.html
        |   index.html
        |   user.html
        |
        \---errors
             404.html
             500.html
```

## Flask
- Run server side scripts and applications.  
- Deliver generic HTML sections such as headers / footers / nav bar.
- Deliver raw JSON data via API endpoints.
    - Make database connections and requests.
    - Data processing / computation and packing data.
    
## React
- React can build responsive, stateful components.
    - Any component that needs memory, (remembering viewport height / width for example).
    - Show / hide / update a div, or HTML section.
- Build a responsive user interface.
    - Anything that changes or updates with user input
    - Handle onClick functions.
    - Extensive compatible library selection, such as drag and drop tools.
    
    
## Installation
```
cd edu_platform
npm install react-router-dom --save
```