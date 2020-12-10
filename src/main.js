// import chalk from 'chalk';
import fs from 'fs';
import ncp from 'ncp';
import path from 'path';
import { promisify } from 'util';
// import Listr from 'listr';
// import { projectInstall } from 'pkg-install';
import mergeFiles from 'merge-files';

const copy = promisify(ncp);
const fullPathName = new URL(import.meta.url).pathname;
const currentDirectory = process.cwd();

// async function copyTemplateFiles() {
//   const filesDirectory = path.resolve(fullPathName, '../../files');

//   return copy(filesDirectory, currentDirectory, {
//     clobber: false,
//   });
// }

async function copyPkgFile() {
  const setupPkgFile = path.resolve(fullPathName, '../../files/package.json');
  const pkgFile = path.resolve(process.cwd(), './package.json');

  try {
    if (fs.existsSync(pkgFile)) {
      return mergeFiles([setupPkgFile, pkgFile], pkgFile);
    } else {
      return copy(setupPkgFile, currentDirectory, {
        clobber: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function setupFiles() {
  // console.log('Copy setup files');
  // await copyTemplateFiles();
  await copyPkgFile();
  // console.log('%s Setup ready', chalk.green.bold('DONE'));

  return true;
}
