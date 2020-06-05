import React from 'react';
import './styles/Container.css';
import ItemList from './ItemList.js';
import Header from './Header.js';
import Products from './Products.js';

function Container(){
    return (
        <div className="main-container">
            <div className="inner-container row">
                <div className="hamburger-menu">
                    <div className="flex-display-center header">
                        <div className="header-title">
                            <span> Westeros </span>
                        </div>
                    </div>
                    <ItemList/>
                </div>
                <div className="main-content">
                    <Header/>
                    <div className="font-style title">
                        <span> Products </span>
                    </div>
                    <hr/>
                    <div className="horizontal-line">
                    </div>
                    <Products/>
                </div>
            </div>
        </div>
    );
}

export default Container;