import _ from 'lodash'
import "./App.css"


const App = ({name}) => {
    return `
    <h2> ${_.join(["Welcome",name] ,  " ")}!</h2>
    <h3>Build Application with plain Javascript and modern tooling</h3>`
}

export default App;