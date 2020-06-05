import React from 'react';
import './styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle} from '@fortawesome/free-solid-svg-icons';

function Header(){
    return(
        <div className="main-header row">
            <div className="search-wrapper">
                <input className="font-style search-box" type="text" placeholder="Type to Search..."/>
                <FontAwesomeIcon icon={faSearch} className="font-style search-icon"/> 
            </div>
            <div className="account-wrapper row">
                <FontAwesomeIcon icon={faUserCircle} className="fa-2x"/> 
                <div className="font-style account">
                    <span> Lorem Ipsum </span>
                </div>
            </div>
        </div>
    )
}

export default Header;