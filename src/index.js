
import "./App.css"
import Gear from "./gear.svg"

let root;




function init() {
    root = document.getElementById("root");
    

    root.innerHTML = `
        <div class="container">
            <div class="page_title">
                <img src="${Gear}" class="gear__animate" alt="build-icon" />
                <h1> VanillaJS Starter Pack </h1>
                <img src="${Gear}" class="gear__animate" alt="build-icon" />
            </div>
            <h2>Build Application with plain Javascript and modern webpack tooling</h2>            
            <h3> Write your whole code in JS and allow the tool to build the HTML </h3>
            <h4> Go to Know More to see the example of creating webpage using template variable </h4>
            <div class="navigate_buttons">
                <button id="click_home_page">Know More</button>
                <button id="click_about">Github</button>
            </div>
            <div id="home_page"></div>
            <div class="features_tab">
                <h2>Features</h2>
                <ul class="list_features">
                    <li>production mode with <strong>minified files</strong></li>
                    <li>Use ES6 Syntax without worrying about browser support as <strong>babel</strong> is pre-configured</li>
                    <li>Import <strong>CSS files into JS</strong> files directly. </li>
                    <li>Import Images into JS files. The above build icon is an example of same.</li>
                    <li><strong>Inline asset management</strong> for smaller sized assets (i.e they are added in the main JS file)</li>
                    <li>Loadash is configured and a separate file is generated for its code. ( example of <strong>code-spliting</strong> for vendor code) </li>
                    <li><strong>Caching</strong> is done by adding content-hash as part of file name. So only files whose contents change get a new hash, i.e a new name.</li>
                    <li><strong>EsLint Module</strong> included.</li>
                </ul>
            </div>
        </div>
        `
}

init();

const home_page_button = document.querySelector("#click_home_page")
home_page_button.addEventListener("click", loadAbout)
const about_button = document.querySelector("#click_about")
about_button.addEventListener("click", redirectToGithub)

function loadAbout() { 
    import("./App").then(({default: App})=> {
        const about = App({name: "Harshith Venkatesh"})
        document.querySelector("#home_page").innerHTML = about;
    })
}


  function redirectToGithub() {
    Object.assign(document.createElement('a'), {
        target: '_blank',
        href: 'https://github.com/harshith-venkatesh/JS-Webpack-Kit',
      }).click();
  }
