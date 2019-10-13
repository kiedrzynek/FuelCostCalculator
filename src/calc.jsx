import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Calc extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="calc">
                <p>Fuel Cost Calculator</p>
                <FuelPrice/>
                <Distance />
                <FuelConsumption />
                <TotalCost />
            </div>
        );
    }
}

class FuelPrice extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="fuelPrice">
                <label>Fuel price</label>
                <input type="number" placeholder="per liter"></input>
            </div>
        );
    }
}

class Distance extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="distance">
                <label>Distance</label>
                <input type="number" placeholder="in km"></input>
            </div>
        );
    }
}

class FuelConsumption extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="fuel-consumption">
                <label>Fuel consumption</label>
                <input type="number" placeholder="liter / 100km"></input>
            </div>
        );
    }
}

class TotalCost extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
            This journey would cost you {}.
            </div>
        );
    }
}


ReactDOM.render(
    <Calc/>,
    document.getElementById('root')
);

export default Calc;
