# Carbon React Boilerplate

### Why a Carbon React Boilerplate?

This boilerplate is created to help expedite the prototyping process for UX Engineers using Carbon Components v10. Taking away the pain staking process of having to setup a new project, adding linting files, and installing any needed dependencies to use Carbon or React.

### Table of Contents

- [Installation](#basic-installation)
- [Git](#git)
- [Deployment](#basic-deployment)

This boilerplate comes **preconfigured** with:

- **React** - A JavaScript library for building user interfaces. Uses Create React App.
- **IBM Carbon Components v10** - Carbon is IBM’s **open-source** design system for products and experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.
- **SCSS/SASS** - Sass is a stylesheet language that’s compiled to CSS. It allows you to use [variables](https://sass-lang.com/documentation/variables), [nested rules](https://sass-lang.com/documentation/style-rules#nesting), [mixins](https://sass-lang.com/documentation/at-rules/mixin), [functions](https://sass-lang.com/documentation/modules), and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.
- **Prettier** - An opinionated code formatter (has a predefined set of rules but can easily be switched out for your own).
- **ESLint** - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript (has a predefined set of rules but can easily be switched out for your own)..
- **Stylelint** - A mighty, modern linter that helps you avoid errors and enforce conventions in your styles (has a predefined set of rules but can easily be switched out for your own)..

## Basic Installation

Getting started with Carbon React Boilerplate is easy!

1. Clone the repo!
   ```
   git clone https://github.com/mmhuntsberry/carbon-react-boilerplate.git
   ```
2. Install the dependencies!
   ```
   yarn install
   ```
   or
   ```
   npm install
   ```
3. To avoid having to add the `~` prefix when importing SCSS files from `node_modules`, create a `.env` file at the project root that contains:

   ```
   .env

   SASS_PATH="node_modules"
   ```

   or, if you're a windows user.

   ```
   .env

   SASS_PATH=./node_modules
   ```

4. Start the App!
   ```
   yarn start
   ```
   or
   ```
   npm run start
   ```
5. Rejoice! (easy-peasy) You should now see the Carbon React Boilerplate splash screen when you navigate to `http://localhost:3000` in your favorite browser.

## Try it out

You did it! You successfully installed Carbon React Boilerplate. I'm extremely proud of you. Now its time to test out all of your hard work!

Let's import a Carbon button.

In your src/components/App/App.js file, add these lines of code.

```
import { Button } from 'carbon-components-react';
```

Add the above import underneath the other imports. Then, add

```
<Button>Click Me!</Button>
```

below the closing `Link` tag.

Navigate to `http://localhost:3000` in your favorite browser. And take a look at your beautifully imported Carbon Component.

That's it! You've successfully added your first Carbon Component to your project.

[Check out all of the ins and outs of Carbon](https://www.carbondesignsystem.com/) or [Be sure to check out Carbons React Tutorial](https://www.carbondesignsystem.com/tutorial/react/overview).

## Git

Because this boilerplate application is intended for rapid prototype development, it is expected that you will want to save your changes to different repositories on your GitHub. Rather than the one it's connected to presently.

To remove the link from the current boilerplate application to the repository on GitHub, you will need to either set a new upstream URL or delete the hidden .git file in the root of the project.

In this doc I will only go over the latter. Deleting the hidden .git file in the root of the Carbon React Boilerplate.

Navigate to the root of the project in your terminal and enter

```
$ ls -la
```

this will list out all files in your project directory (including hidden files). You should be able to see the .git file.

Then type:

```
rm -rf .git
```

this will recursively delete the `.git` folder.

After you have successfully deleted the `.git` folder. Enter

```
git init
```

to initial a new git project.

In GitHub create a new repository, name it and save. This will bring you to the Quick Setup screen. Follow the `create a new repository on the command line` section and –BAM! You're all setup with a new repository for your new project.

_Tip_: Don't forget to change the name of your project in your `package.json` file.

## Basic Deployment

While this boilerplate can be deployed to any platform, this guide will specifically go over how to deploy to IBMCLOUD Cloud Foundry.

_Note: Much of these deployment instructions are based off the [Carbon React Tutorial](https://www.carbondesignsystem.com/tutorial/react/overview) found on the Carbon Design System website. Thanks to all of their hardwork this boilerplate is possible._

### Create IBM Cloud account

Before we get started, [create an IBM Cloud account](https://cloud.ibm.com/registration) if you don’t already have one.

#### Create an API Key

Login to your IBM Cloud account. Once inside your cloud account, click on Manage in the NavBar. Then choose `Access (IAM)`. On the left, click on `IBM Cloud API Keys`, then the `Create an IBM Cloud API key` button. Name the key whatever you would like (_ex. IBMCLOUD_API_KEY_) and give it a short description (_ex. used to log in to IBM Cloud via api key_). Click Create. Copy the key and set it aside for now. We'll be using it soon.

#### Adding a Space and Org

Next we need to create an IBM Space and ORG. You can read more about Spaces and ORGs [here](https://cloud.ibm.com/docs/account?topic=account-orgsspacesusers). Once again, on the NavBar click on `Manage`, then `Account`. On the left, click `Account resources`, then `Cloud Foundry orgs`. You may have preexisting ORGs, which you are free to use or you can create a new one. If you choose to create a new ORG it must be unique. Click on your newly created ORG. Once inside your ORG, click the `Add a space`. Select your region and name it. That's it! Remember your Space and ORG names, you'll be using them in a minute.

### Keeping a Secret

We just created an API Key along with a new ORG and Space in your IBM Cloud account. We now need to add these as environment variables (called _Secrets_ in GitHub) in our project repository.

To add _Secrets_ to our GitHub project. Login to your Github and navigate to the project repository. Click on the Settings tab. On the left, click on Secrets toward the bottom. Click on the `Add a new secret`.

_Note: The secret names need to be named exactly as stated for the Github Action Runner to recognize them. More on this and Github Actions later._

We need to create four secrets. I hope you kept your API key, Space name and ORG name handy, because we will use them here. Secrets are name value pairs, in the form field,

Create the following:

```
name: IBMCLOUD_API_KEY
value: <YOUR_IBM_API_KEY>
```

Click `Add secret`.

Add another secret.

```
name: CF_ORGANIZATION
value: <YOUR_ORG_NAME>
```

Click `Add secret`.

Add another secret.

```
name: CF_SPACE
value: <YOUR_SPACE_NAME>
```

Click `Add secret`.

Lastly, we need to set our api endpoint (_not to be confused with our api key_). The endpoint value you use might be different than what I have provided. Read up about the cf cli and its api endpoint [here](https://cloud.ibm.com/docs/cf-cli-plugin?topic=cf-cli-plugin-cf-cli-plugin).

```
name: CF_API_ENDPOINT
value: https://api.ng.bluemix.net
```

Click `Add Secret`.

While we are here we need to add one secret I had forgotten about previously. We need to add our SASS_PATH environment as a secret so our build doesn't fail when it try's to the Carbon Component styles.

Add another secret.

```
name: SASS_PATH
value: node_modules
```

Click `Add secret`.

Finally, with that out of the way, we are ready to build and deploy our app. Let's move on.

## Build for production

Before we deploy our app, we need to create an optimized production build.
In your terminal:

```
$ yarn build
```

This command build the app for production mode and optimizes the build for the best performance by minifying files and hashes filenames for caching purposes.

### The manifest file

To get our app deployed to the cloud we're going to use a [staticfile-buildpack](https://github.com/cloudfoundry/staticfile-buildpack.git)

_Note: If unfamiliar with buildpacks, the [staticfile buildpack docs](https://docs.cloudfoundry.org/buildpacks/staticfile/index.html) has good definitions and configuration documentation._

In the root of this project you will find a file named `manifest.yml` with the following inside:

```
---
applications:
 - name: carbon-react-{{project-name}}
   memory: 64M
   buildpack: https://github.com/cloudfoundry/staticfile-buildpack.git
```

_Note: Make sure to replace the `name` field with your own preferred name or leave the `carbon-react-` prefix and replace `{{project-name}}` with your own project name._

That's it! Now we can make some changes to our app, stage, commit and push those changes to our repository.

## Github Actions

Once you've push to your Github Repository, navigate to said project on your Github. Click on the Actions tab and it will bring you to your workflows. This is where you can add a number of different types of action you would like to happen to your application when you push or make changes to it.

Here when we push our app to GitHub we have a workflow that installs, builds, tests, and deploys our application automatically.

You can click on the Workflow labeled `Node CI` to see what stage our application is in the workflow process. If errors or our application fails to build we can come here to see what part of our build failed. Extremely useful!

Assuming our build succeeded, and we can tell once a green checkmark is displayed next to the `Node CI` workflow. We can navigate to our project live and deployed on to the cloud.

## Your URL

You can find the URL to your deployed site on your IBMCloud account. Once logged into your account, on the dashboard page you should now see under resource summary a link to `Cloud Foundry apps`. Click on it and it will take your a list of your resources. Click on your application from the list provided, it will take you to a new page. Located at the top there's a link that says `visit app URL`. Click on it.

You have successfully deployed a Create React App with Carbon Components to the world. You can prototype or build apps with this part of the boilerplate. It is designed so that every time you push to your master branch or make a pull request to master, it will trigger that action and workflow. Building, testing and Deploying your app.

---
