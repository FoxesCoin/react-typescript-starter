# Getting Started with React-Typescript Starter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What we use

- styled-components - Popular library from styled React components
- react-router - Library from mapping in project
- Prettier - Code-formatter
- ESLint - Code checker

### I recommend use inside VS Code [Fira Code](https://github.com/tonsky/FiraCode) font. It will new great experience

## VS Code required extensions

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

In side bare found Setting point and found this point.
![Setting location](md/image/VSCode_setting.png)

In open json file add this text. It help with extensions setting.

- ESLint plugin setting from found location .eslintrc

```json
"eslint.workingDirectories": [
  {
    "mode": "auto"
  }
],
```

- Prettier setting what enable formate code every time on save file.

```json
"editor.codeActionsOnSave": {
  "source.fixAll": true,
},

"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
},

"editor.defaultFormatter": "esbenp.prettier-vscode",
"prettier.useTabs": true,
```

### Optional VS Code extensions

- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) - pretty style from bracket
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) - highlight web colors in your editor.
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) - a simple extension to make indentation more readable

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
