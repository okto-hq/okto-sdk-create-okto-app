#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs-extra';
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getRepoUrl(template) {
  if (template === 'React') {
    return 'https://github.com/okto-hq/okto-sdk-react-template-app.git';
  }
  if (template === 'Next JS') {
    return 'https://github.com/okto-hq/okto-sdk-react-nextjs-starter-repo.git';
  }
  if (template === 'React Native') {
    return 'https://github.com/okto-hq/okto-sdk-reactnative-template-app';
  }
  throw new Error(`Unsupported template: ${template}`);
}

async function main() {
  console.log(chalk.blue('Welcome to create-okto-app!'));

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'template',
      message: 'Choose a template:',
      choices: ['React', 'Next JS', 'React Native'],
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter your project name:',
      default: 'my-okto-app',
    },
  ]);

  const { template, projectName } = answers;
  const targetDir = path.join(process.cwd(), projectName);

  console.log(chalk.green(`Creating a new ${template} app in ${targetDir}`));

  // Create project directory
  fs.ensureDirSync(targetDir);

  const repoUrl = getRepoUrl(template);

  try {
    execSync(`git clone ${repoUrl} ${targetDir}`, { stdio: 'inherit' });
    
    // Remove .git directory
    fs.removeSync(path.join(targetDir, '.git'));

    // Install dependencies
    console.log(chalk.yellow('Installing dependencies...'));
    execSync('npm install', { cwd: targetDir, stdio: 'inherit' });

    console.log(chalk.green(`
Successfully created ${projectName}!

To get started:
  cd ${projectName}
  npm start
`));
  } catch (error) {
    console.error(chalk.red('An error occurred:'), error);
    process.exit(1);
  }
}

main();