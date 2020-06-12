# Welcome to Carbon React App

A project creation generator built in Node to rapidly scaffold out project templates using IBM's Carbon Components in React.

## Table of Contents

[Introduction](#Whywasthisprojectcreated?)
[Getting Started](#getting-started)

## Why was this project created?

This project was created to expedite the time it takes to set up a development environment with IBM Carbon Components.

## Getting Started

Getting started is easy. In your favorite terminal run the command:

```sh
git clone https://github.com/mmhuntsberry/carbon-react-cli.git
```

Once installed, move into the root directory of the project and run the command:

```sh
yarn install -g
```

The above command will install a global package to your local machine. After installation refresh your terminal instance so that it will recognize your new global command.

Then run:

```sh
carbon-react-app
```

This command will begin the project generation process. For demonstration purposes we'll run through a very minimal basic setup together. Be sure to checkout other sections of this README for details on more advanced setups.

Your very first prompt will ask you what type of template you would like to generate. For now we will choose `no-config`. The `no-config` option at its heart is just a Create-React-App with IBM Carbon Components and Node Sass already installed. Just enough to get working with React and Carbon's Design System.

Once we hit enter on our first prompt, we can choose the option none for the next three. The last option asks to name our project. Name it whatever you would like. Once you hit enter, your project will be generated and saved in which ever directory you are currently working in. After the project is generated you can navigate inside of you project and run in the project root:

_note: We will go further in depth on the other prompts in other sections of this README._

```
yarn && yarn start
```

This command will install the needed dependencies the project requires and start it in your browser at `http://localhost:3000`.

You can now open your project in your favorite editor–I recommend VS Code–and begin coding with React and Carbon Components. Let's quickly add a Carbon button the landing page, just to demonstrate its ease of use.

In your editor of choice navigate to your `App.js` component. It's located in `/src/components/App/`. Open up that file and at the very top you should see a list of `import` statements. You should see one that looks similar to this:

```
import { Link } from  "carbon-components-react";
```

change the above line to this:

```
import { Link, Button } from  "carbon-components-react";
```

Next, scroll to the bottom of the component. Right before the closing `</div>` tag you will see a tag like this `</Content>` add your button right above that tag. Should like similar to this:

```
       </div>
       <Button>Click Me</Button>
      </Content>
    </div>
  );
}

export  default App;
```

With your button now added. Navigate back to your browser to `http://localhost:3000` and you should see your newly add button.

Congrats you just set up React, Carbon,
