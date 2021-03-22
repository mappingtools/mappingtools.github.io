---
title: "Setup"
author: "aehrea"
---

:::caution Under Construction

These docs are incomplete.

:::

:::info

This page describes setting up your development environment to complete all steps for adding documentation. If it's too much of a hassle for you, you can skip this section, and simply send documentation files to a Mapping Tools website maintainer to handle it.

:::

## Prerequisites {#prerequisites}


You will need [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/get-npm) installed.  
**npm** is distributed with **Node.js**, so all you need to do is download Node.js and npm should be downloaded with it as well.

Once you have npm installed, you will also need to install the package manager **yarn**:

```shell
npm i -g yarn
```

You will also need [git](https://git-scm.com/downloads) installed, and are recommended to have some familiarity with it.

You're also highly recommended to install a text editor, such as [VSCode](https://code.visualstudio.com/download).

## Local branch {#local-branch}

To get the code locally on your computer, in your terminal, run

```shell
git clone https://github.com/mappingtools/mappingtools.github.io.git
```

## Run the site {#run-site}

Enter the root of the newly created `mappingtools.github.io` folder:
```shell
cd mappingtools.github.io
```

Then, run the development server:
```shell
yarn run start
```

The site should be available at `localhost:3000` on your browser.

If you're working on localization, specify additional flags to run the localized site:

```shell
yarn run start -- --locale __
```

where `__` is the language code (for example, `en` for English).

Once the server is running, any changes made should automatically update on the site.

## TODO