# Webpack Fundamentals: A Beginner's Guide to Setting Up for Frontend Development.

In modern web development, managing multiple JavaScript, CSS and asset files can become difficult as projects grow. Webpack is a powerful tool that bundles all these files into optimised outputs, allowing for a more efficient and streamlined workflow. This guide will show you how to set up Webpack for front-end development from scratch, whether you're a beginner or looking to improve your workflow.

### What is Webpack?

Webpack is a static module bundler for JavaScript applications. It takes modules with dependencies (e.g., JavaScript files, stylesheets, images, etc.) and compiles them into a bundle, usually a single file or smaller files, which can be loaded into a browser. Webpack helps optimize your code, making your frontend faster and more efficient.

##### Key Features of Webpack:

* All of your assets (JS, CSS, pictures, etc.) are bundled by Webpack into either a single large file or several smaller ones.
* It allows for dynamic imports and breaks up large bundles into smaller chunks, reducing initial load time.
* Automatically optimizes CSS, images, and other assets for production.
* For more efficient development, it provides features like live-reloading and hot module replacement (HMR).

### Installing Webpack

Make sure you have **Node.js** and **npm** installed. If not, download and install Node.js from [nodejs.org](https://nodejs.org).

###### Step 1: Initialize npm

Start by creating a project folder and initializing it with npm:

```
mkdir webpack-setup-for-frontend-development
cd webpack-setup-for-frontend-development
npm init -y
```

This command will create a `package.json `file that will store all your project dependencies.


###### Step 2: Install Webpack and Webpack CLI

Install Webpack and its command-line interface (CLI) as a dev dependency:

```
npm i -D webpack webpack-cli
```

Webpack is installed as a development dependency because it is only required for building your application during development and is not needed in production.

###### **Step 3: Creating the Basic Project Structure**

```
webpack-setup-for-frontend-development/
├── src/
│   └── index.js
├── dist/
│   └── index.html
├── package.json
└── webpack.config.js
```


* **src/index.js** : Your main JavaScript entry file.
* **dist/index.html** : The HTML file that will load your bundled JavaScript.
* **webpack.config.js** : Webpack's configuration file.

### Configuring Webpack

Webpack configuration file acts as a blueprint for your project's build process, allowing you to control how your assets are processed and bundled. While Webpack can often function with default settings, a custom configuration file gives you the flexibility and control to optimize your build process for specific needs.


```
// webpack.config.js
const path = require('path');module.exports = {
  entry: './src/index.js', // Entry point for the application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' // Output file name
  },
  mode: 'development', // Can also be 'production' or 'none'
};
```

[createapp.dev](https://createapp.dev/webpack) is an online tool that can help you to create custom webpack configurations.

**Key Concepts in Webpack:**

* **Entry** : The starting point of your application, where Webpack will begin its bundling process.
* **Output** : Defines the location and name of the output file.
* **Mode** : Can be `development`, `production`, or `none`. It optimizes the bundle based on the environment.


### Setting up HTML and Running Webpack

In your `dist` folder, create an `index.html` file and include the Webpack bundle:

```
<!-- dist/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpack Setup</title>
</head>
<body>
    <script src="bundle.js"></script>
</body>
</html>
```

Change the script object value in Package.json to run build 


```
"scripts": {"build": "webpack"}
```

Run Webpack to bundle your JavaScript files.

```
npm run build
```

### Using Loaders and Plugins

Webpack requires **loaders** to handle file types other than JavaScript. To process CSS files, install `style-loader` and `css-loader`:

```
npm i -D css-loader style-loader
```

Then, update the Webpack config to use these loaders:

```
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development',
};
```

Now, you can create a CSS file (`src/style.css`)

And import it into your `index.js`

To automatically generate the `index.html` file with the correct script tag, install `html-webpack-plugin`:

```
npm i -D html-webpack-plugin
```

Update your Webpack config to use this plugin:

```
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
};
```

Now, create a new `src/index.html` file without the script tag (Webpack will inject it):

```
<!-- src/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpack Setup</title>
</head>
<body>
    <h1>Hello Webpack!</h1>
</body>
</html>
```

To generate you HTML content you can create a template.html in src folder. 

Update your plugin configuration in Webpack config page

```
plugins: [
        new htmlWebpackPlugin({
            title: 'A webpack Plugin',
            filename: 'index.html',
            template: 'src/template.html'
        }),
```


### Running Webpack in Development Mode

To enable a live-reloading server for development, install `webpack-dev-server`

```
npm i -D webpack-dev-server
```

Update the `package.json` scripts section:

```
"scripts": {
    "build": "webpack",
    "dev": "webpack server"
  },
```

Run the development server:

```
npm run dev
```

Your browser should open at `http://localhost:8080`, and any changes to your files will be live-reloaded.

By bundling assets, optimising your code and setting up a development server with live reloading, Webpack can streamline your front-end development workflow. This setup is just the beginning. Webpack offers advanced features such as code splitting, tree shaking, and many more loaders and plugins to explore as your project grows.
