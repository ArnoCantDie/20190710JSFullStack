import React from "react"
import Counter from "./containers/Counter"
import Movie from "./containers/Movie"
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Counter></Counter>
                {/* <Movie></Movie> */}
            </div>
        )
    }
}
export default App;
