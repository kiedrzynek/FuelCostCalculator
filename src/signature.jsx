import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Signature extends Component {
    render() {
        return(
            <p class="love">
                Made with 
                <span> ❤ </span> 
                by 
                <a href="https://github.com/kiedrzynek" target="_blank"> Kamila Kiedrzynek</a>
            </p>
        );
    }
}

export default Signature;