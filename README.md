# The portfolio site for Patrick Reynolds

[Click here to visit the site!](https://patrickreynolds.dev/)

[About](#about) | [Technologies used](#technologies-used) | [Usage](#usage) | [Development](#development) | [How to built this environment](#how-to-built-this-environment) | [Contact](#contact)

## Technologies used

### Testing

- Cypress
- Jest
- Github Actions for CI

### Linting

- Prettier (VSCode Extension)
- Eslint
- Error Lens (VSCode Extension)

### Deployment

- Vercel

## Development

### Planning Tests

#### Unit testing with Cypress

- As a user, I want to ensure that the logo and top toggle on the website are rendered and working correctly so that I can navigate the website easily.

- As a user, I want to verify that the Three.js animation is rendering correctly so that I can enjoy the website's visual effects.

#### Integration testing with Cypress

- As a user, I want to test the complete flow of the website, starting from loading the page, clicking the top toggle, and checking if the elements are rendered correctly, so that I can have a seamless experience while using the website.

- As a user, I want to ensure that the website's scroll functionality is working correctly and all elements are loading as I scroll down, so that I can easily access all content on the website.

- As a user, I want to test that clicking the top toggle takes me to the project page, where I can see multiple project cards, so that I can navigate to the project page and see all the projects.

- As a user, I want to verify that the tests on different viewport sizes are working correctly, so that I can access the website from any device and have the same experience.

## How to built this environment

### vite

`npx create-vite-app .`

### install dependencies

`npm i jest cypress`

### Linting

#### Install

`eslint --init`

#### Config

```Javascript
// .eslintrc.js
// Add these properties to config

    "extends": [
        "next"
    ],
    "rules": {
      "react/prop-types": "off",
      "indent": ["error", 2]
    }
```

#### Script

add this script to package.json:

`"lint": "eslint . --ext .js,.jsx",`

#### Run

`npm run lint`

### Testing (Jest & Cypress)

#### Jest

Add `"test": "jest"` to scripts in package.json

Create spec folder in root for any unit and integration tests

#### Cypress

Run to open wizard and setup scaffolding `npx cypress open`

Add baseUrl to cypress.config.js

```Javascript
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```

#### CI

Create .github/workflow/ci.yml

This boilerplate code I've written will enable run ESlint, Jest and Cypress tests upon each merge:

```Github Actions
name: CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

env:
  NODE_VERSION: 14

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18]

    name: Node.js ${{ matrix.node-version }}
    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: ${{ env.NODE_VERSION }}

    - name: Install dependencies
      run: |
        npm install

    - name: Run ESLint
      run: npm run lint

    - name: Test with Jest
      run: |
        npm test

    - name: Cypress run
      uses: cypress-io/github-action@v5
      with:
        start: npm run dev
        wait-on: 'http://localhost:3000'

```

## Contact

Email: [PatrickReynoldsCoding@gmail.com](https://mail.google.com/mail/u/0/?fs=1&to=patrickreynoldscoding@gmail.com&su=Hi%20Paddy&body=&tf=cm)

Linkedin: [Linkedin](https://www.linkedin.com/in/reynolds-patrick/)

Website: [PatrickReynolds.dev](https://www.patrickreynolds.dev/)
