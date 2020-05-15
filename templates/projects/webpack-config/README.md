[![Build Status](https://travis-ci.org/mmhuntsberry/carbon_react_boilerplate.svg?branch=master)](https://travis-ci.org/mmhuntsberry/carbon_react_boilerplate)

# Carbon React Boilerplate

Carbon React is a Boilerplate application to get up and running quickly with IBM's Carbon Components library.

## What's inside

This boilerplate contains the following underlining technologies to get started quickly prototyping.

- React
- SCSS/SASS
- Webpack
- Carbon Components

#### Additional features

Additionally, this boilerplate includes all of the `dotfiles` necessary to meet my coding standards.

Including Rules for:

- eslint
- prettier
- stylelint

These are easily swappable or removable depending on your needs.

## Local Install

Use the package manager yarn to install Carbon React Boilerplate.

Install Dependencies:

```bash
yarn install
```

Run Development Environment:
Runs on http://localhost:8080/

```bash
yarn dev
```

Run Production Build:

```bash
yarn build
```

Run Tests:

```bash
yarn test
```

## Environment

In order for Carbon Components Styles to work properly with this repo you will need to setup a `.env`. This makes it so you can avoid the `~` prefix when importing scss files from `node_modules`.

**_.env_**

```bash
  SASS_PATH="node_modules"
```

For Windows, use:

```bash
  SASS_PATH=./node_modules
```

## SCSS Architecture

This boilerplate follows the `7-1 SCSS Architecture`. Below is an example of how that Architecture is layed out. Most files are not yet created as this is only a boilerplate.

```
scss/
|
|– abstracts/
|   |– _variables.scss    # Sass Variables
|   |– _mixins.scss       # Sass Mixins
|
|– vendors/
|   |– _carbon.scss    # Carbon Components
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography rules
|
|– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|
|– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|
|– themes/
|   |– _theme.scss        # Default theme
|   |– _admin.scss        # Admin theme
|
 – app.scss              # Main SCSS input file

```

## Webpack Build-utils

This boilerplate is setup with its own custom webpack build system. It contains three main parts with an additional option for trying out new webpack features without adding them directly to one of your three main configs.

- Base Config - webpack.config.js
  - This is the `default configuration`. Any **_preset_** or **_plugin_** set in this config will be included in either environment you choose. This configuration is what all of your other configs plugin to through the modeConfig option in this base config.
- Development Config - `/build-utils/webpack.development.js`
  - This configuration is for your development environment. Only include plugins and presets you intend to use for development.
- Production Config - `/build-utils/webpack.production.js`
  - This configuration is for your production environment. Only include plugins and presets you intend to ship to production.

An additional feature of this webpack config is the ability to load in little mini configs. Giving the user, the ability to try out features, in your webpack without the need of incorporating them into your main configurations. Thanks to Sean Larkin's work with webpack. I used his methodology to implement the loading of presets into the base config for the sake of testing them out. A `try` before you `buy` type of scenario.

A couple of sample scenarios are provided in the presets folder in the build-utils directory. Check out the presets directory for an example.

### Creating a preset

Creating a preset is easy. Make a new file in the preset directory. The naming convention is `webpack.preset-name.js`.

```
  # preset example for implementing typescript

  module.exports = () => ({
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/
          }
        ]
      },
      resolve: {
        extensions: [".tsx", ".ts", ".js"]
      }
  })
```

With your preset written. All that remains is to create a script to implement it.  
In your `package.json` file, under `scripts`. Create a new script. You can call it whatever you'd like. I tend to name it whatever the preset is, attached to `dev` or `prod`. In this case, something like:
`"dev:typescript": "yarn run dev -- --env.presets typescript"`

Now to run your boilerplate with Typescript enabled. In your terminal run the command:
`yarn run dev:typescript`

## Docker

`Very bare bones instructions. Thorough instructions coming soon.`

In order to use the Docker features of this repo you will need the following installed to your machine.

- Docker Desktop
- Docker CLI

more details following soon.....

#### Remote Development

This feature is extremely experimental.  
In order to get remote development to work you need a local copy of the docker image.
You can get this be running the command
`docker pull mmhuntsberry/carbon_react`
in your terminal

You need the Docker and Remote Container Extensions installed to your instance of VSCode.

With both these installed you can open your command palette and search for `Remote-Container: Open repository in container`

This will take a bit of time to install since it needs to install all of the extension listed in the devcontainer directory.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
