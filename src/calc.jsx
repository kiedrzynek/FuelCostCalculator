import React, { Component } from 'react';
import ReactDOM from "react-dom";
import MoneyBox from './Icons/moneyBox.svg';

class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {price: 0, distance: 0, consumption: 0};
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleDistanceChange = this.handleDistanceChange.bind(this);
        this.handleConsumptionChange = this.handleConsumptionChange.bind(this);
    }

    calculateFuelCost() {
        return this.state.distance / 100 * this.state.consumption * this.state.price;
    }

    handlePriceChange(e) {
        this.setState({price: e.target.value});
    }

    handleDistanceChange(e) {
        this.setState({distance: e.target.value});
    }

    handleConsumptionChange(e) {
        this.setState({consumption: e.target.value});
    }

    render() {
        return(
            <div className="calc">
                <h1>Fuel Cost Calculator</h1>
                <FuelPrice price={this.state.price} callback={this.handlePriceChange} />
                <Distance distance={this.state.distance} callback={this.handleDistanceChange} />
                <FuelConsumption consumption={this.state.consumption} callback={this.handleConsumptionChange} />
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
                <input type="number" placeholder="in km" onChange={this.props.callback}></input>
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
                <input type="number" placeholder="liter / 100km" onChange={this.props.callback}></input>
            </div>
        );
    }
}

class TotalCost extends Component {

    render() {
        return(
            <div>
                <MoneyBox className="money-box" viewBox="0 0 50 50" width="50%" height="auto"/>
                <p>This journey would cost you:</p>
                <p>{this.props.cost}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <Calc />,
    document.getElementById('root')
);

export default Calc;
