# Setup files

This repository is created to keep common files that I use between projects to keep consistency in the code that I write. Things like linters, editor configs, code style, and so on.

## Features

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [Editor config](https://editorconfig.org/)
- [lint-staged](https://github.com/okonet/lint-staged)
- Gitignore
- NPM/Yarn scripts

## Caveats

This repository was created mainly for React apps and NextJS projects but can used for other kind of Frontend and maybe Nodejs projects

## Roadmap

- [x] Create a cli tool to copy all of the files on this repo and move to the current project
- [ ] Add support for [semantic-release](https://github.com/semantic-release/semantic-release)
- [ ] Add arguments options to know what can of project we'll be using (React, Nodejs, NextJS, etc)
- [ ] Find a way to copy the scripts commands on the destination `package.json`
- [ ] Prompt for git provider and give templates like PULL_REQUEST, CONTRIBUTING, etc
- [ ] Define a README template to document a project (Description, Motivation, File structure, Features)
- [ ] Prompt for CI provider and create the config file (travis.yml, circleci.yml)
- [ ] Create a documentation command to know what can of options can be used --help
