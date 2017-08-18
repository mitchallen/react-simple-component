@mitchallen/react-simple-component
==
SimpleComponent React component 
--

<p align="left">
  <a href="https://circleci.com/gh/mitchallen/react-simple-component">
    <img src="https://img.shields.io/circleci/project/github/mitchallen/react-simple-component.svg" alt="Continuous Integration">
  </a>
  <a href="https://codecov.io/gh/mitchallen/react-simple-component">
    <img src="https://codecov.io/gh/mitchallen/react-simple-component/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/react-simple-component">
    <img src="http://img.shields.io/npm/dt/@mitchallen/react-simple-component.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/react-simple-component">
    <img src="http://img.shields.io/npm/v/@mitchallen/react-simple-component.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/@mitchallen/react-simple-component">
    <img src="https://img.shields.io/github/license/mitchallen/react-simple-component.svg" alt="License"></a>
  </a>
</p>

## Installation

    $ npm init
    $ npm install @mitchallen/react-simple-component --save
  
* * *

## Usage

1: Add this line near the top of your file (like ```src/App.js```):

```
import SimpleComponent from '@mitchallen/react-simple-component';
```

__NOTE:__ SimpleComponent must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<SimpleComponent />
```


* * *

## Testing

### Run the Tests

To test, go to the root folder and type (sans __$__):

    $ npm test
    
## Component Testing

### Prerequisite

If you've never installed __create-react-app__ (you may need to use ```sudo```):

```
$ npm install -g create-react-app
```

### Create a local npm link

In the original component folder (you may need to use ```sudo```):

```
$ npm link
```

### Create a test package

Create a root test folder and then do the following:

```
$ create-react-app react-simple-component-test
$ cd react-simple-component-test
$ npm link @mitchallen/react-simple-component
```

### Modify src/App.js

1: Add this line near the top:

```
import SimpleComponent from '@mitchallen/react-simple-component';
```

__NOTE:__ SimpleComponent must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<SimpleComponent />
```

### Run The Test App

```
$ npm start
```

### Cleanup

Remember to unlink when done.
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/react-simple-component.git](https://bitbucket.org/mitchallen/react-simple-component.git)
* [github.com/mitchallen/react-simple-component.git](https://github.com/mitchallen/react-simple-component.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.0 

* initial release

* * *