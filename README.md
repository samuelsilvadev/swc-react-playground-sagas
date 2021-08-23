![Issues](https://img.shields.io/github/issues/samuelsilvadev/swc-react-playground?style=flat-square)
![MIT License](https://img.shields.io/github/license/samuelsilvadev/swc-react-playground?style=flat-square)
<br />
<br />

<h1 align="center">RecipeViewer (With Sagas ♻️)</h1>
<br />

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About The Project

This project is a copy of [recipe-viewer](https://github.com/samuelsilvadev/swc-react-playground) but now made with redux-sagas to control side effects in the application.

### Built With

- React
- React Router
- Jest
- @testing-library
- cypress
- msw
- Redux
- Redux Sagas

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- node

You can follow the installation guide from the official documentation
[here](https://nodejs.org/en/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/samuelsilvadev/swc-react-playground-sagas.git
```

2. Install NPM packages

```sh
npm install
```

3. Create a `.env` using the `.env.example` as a starting point

```sh
cp .env.example .env
```

4. You can either use the real api or a mocked version that was included on the project.

4.1. to use the mocked version just update your `.env` to have

```sh
USE_MSW_SERVER=true
```

4.2 to use the real API, you can setup an account on https://rapidapi.com/apidojo/api/tasty and after the configuration you just need to fill the following fields on the `.env`

```sh
BASE_URL=
API_KEY=
API_HOST=
```

5. And finally to run the development server

```sh
npm run dev
```

## Contributing

Contributions are what make the open source community such an amazing place to
learn, inspire, and create. Any contributions you make are **greatly
appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/something-amazing`)
3. Commit your Changes (`git commit -m 'feat: Add something amazing'`)
4. Push to the Branch (`git push origin feature/something-amazing`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

- [@samuelsilvadev](https://twitter.com/samuelsilvadev)
- samuelsilvawb@gmail.com

## Acknowledgements

- [Best README Template](https://github.com/othneildrew/Best-README-Template)
- [Shields](https://shields.io/)
