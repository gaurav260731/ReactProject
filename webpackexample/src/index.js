import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(){
        super();
        this.name = "Gaurav React File using babel";
    }
    
    render() {
        console.log(this.name);
        return(
            <div>
                {this.name}
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));