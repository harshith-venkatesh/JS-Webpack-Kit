import _ from 'lodash'
import "./App.css"


const App = ({name}) => {
    return `
    <h2>Welcome, ${_.join(["Welcome",name," "])}</h2>
    <p> Build app using loadash</p>`
}

export default App;