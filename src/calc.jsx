import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {price: 0, distance: 0, consumption: 0};
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    calculateFuelCost() {
        return /*this.state.distance / 100 * this.state.consumption * */this.state.price;
    }

    handlePriceChange(e) {
        this.setState({price: e.target.value});
    }

    render() {
        return(
            <div className="calc">
                <p>Fuel Cost Calculator</p>
                <FuelPrice price={this.state.price} callback={this.handlePriceChange} />
                <Distance distance={this.state.distance} />
                <FuelConsumption consumption={this.state.consumption} />
                <TotalCost cost={this.calculateFuelCost()} />
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
                <input type="number" placeholder="per liter" onChange={this.props.callback}></input>
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

    render() {
        return(
            <div>
            This journey would cost you {this.props.cost}.
            </div>
        );
    }
}


ReactDOM.render(
    <Calc />,
    document.getElementById('root')
);

export default Calc;
