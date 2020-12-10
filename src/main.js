import chalk from 'chalk';
import { copy } from 'fs-extra';
import path from 'path';
import Listr from 'listr';
import { install } from 'pkg-install';

const currentDirectory = process.cwd();
const fullPathName = new URL(import.meta.url).pathname;

async function copyDotfiles() {
  const SRC_DOTFILES = '../../files/dotfiles';
  const dotDirectory = path.resolve(fullPathName, SRC_DOTFILES);

  return copy(dotDirectory, currentDirectory, { overwrite: false });
}

async function copyConstantFile() {
  const SRC_CONSTANT_FILE = '../../files/constants.js';
  const DIST_CONSTANT_FILE = 'src/constants.js';

  const srcDirectory = path.resolve(currentDirectory, DIST_CONSTANT_FILE);
  const constantFile = path.resolve(fullPathName, SRC_CONSTANT_FILE);

  return copy(constantFile, srcDirectory, { overwrite: false });
}

async function installDevDependencies() {
  const dependencies = {
    'babel-eslint': 'latest',
    eslint: 'latest',
    'eslint-config-prettier': 'latest',
    'eslint-plugin-prettier': 'latest',
    husky: '>=4.3.5',
    jest: 'latest',
    'lint-staged': '>=10.5.3',
    prettier: 'latest',
    stylelint: 'latest',
    'stylelint-config-standard': 'latest',
  };
  const config = {
    dev: true,
    prefer: 'yarn',
  };

  return install(dependencies, config);
}

const tasks = new Listr([
  {
    title: 'dotfiles',
    task: () => copyDotfiles(),
  },
  {
    title: 'constant file',
    task: () => copyConstantFile(),
  },
  {
    title: 'installing dependencies',
    task: () => installDevDependencies(),
  },
]);

export async function cli() {
  await tasks.run();
  console.log('%s Setup ready', chalk.green.bold('DONE'));

  return true;
}
