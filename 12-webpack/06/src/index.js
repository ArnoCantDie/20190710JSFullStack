// let result = require("./a-module")
// console.log(result)

// import "./index.css"  // webapck就可以处理css  "style-loader","css-loader"

// import "./a.scss"  // webpack就可以处理scss  "style-loader","css-loader","sass-loader"

import "./index.css"

import logo from "./logo.jpg"

let img = document.createElement("img");
img.src = logo

document.body.appendChild(img)