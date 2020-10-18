# Slider
Simple React Slider With Static Images

## Node Modules
Upon cloning project, Run `npm install` to install all neccessary dependencies in order to get the slider up and running.

## Webpack Setup 
The project was created from scratch using **webpack** , **react** , **react-dom**, **babel** dependencies which can be explicitly seen in `package.json` file.
**webpack-dev-server** was used as a development server which supports *hot-reloading*. 
**The Project was not scaffolded with `npx create-react-app` , which is one of the must requirenments of task**. No **FE** frameworks/libraries were used during development 

## Dependencies Breakdown 
1.`@babel/core`and `@babel/preset-env` is neccessary in order to allow browsers to understand **ES6** features of *JavaScript*. 
`@babel/preset-react` is used to transpile **JSX** into Vanilla JavaScript. 

2.`sass`, `sass-loader`, `css-lodaer` , `style-loader` is used to tell webpack to understand files with `.css`,`scss`and `sass` extensions i.e to be able to inject defined styles
into page(even though, in the scope of project, no sass was used, css only).

3.`webpack` ,`webpack-cli`, `webpack-dev-server` is used for multiple purposes. **Webpack** bundles all javascript , css and html files into separate files and it is thanks to 
webpack that we can set the rules of our code transpilation(such as babel), which is defined in `webpack.config.js` file. 
Besides, in `package.json` file there are **start** and **build** scripts. Start script fires up development server , whereas build compresses all the code in `dist` folder, 
so that it speeds up deployment process. 

### Important Note On Features Implemented 
- Slider **Supportes** infinite scrolling(on desktop) 

- Slider **Supportes** Scrolling to X slide 

- Slider **Does not Support** multiple slides on the same screen 

- Slider **Works** both on desktop and mobile. 

- Since there was no specification about images themselves, it was decided to load static images. 
- in branch **version** all images are fetched from [www.unsplash.com](www.unsplash.com) 

