import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Calc extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <p>Fuel Cost Calculator</p>
        );
    }
}

ReactDOM.render(
    <Calc/>,
    document.getElementById('root')
);

export default Calc;
