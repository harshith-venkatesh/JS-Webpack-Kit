
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
