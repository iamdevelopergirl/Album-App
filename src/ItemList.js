import React from 'react';
import './styles/ItemList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faRandom, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Products from './Products';
import WhiteLists from './Whitelists';
import APIApplications from './APIApplications';

function ItemList(){
    return(
        <Router>
        <ul>
            <li>
                <FontAwesomeIcon icon={faArchive} className="margin-right"/>
                <Link to={'/'}> 
                    <span className="link-style"> Products </span> 
                </Link>
            </li>
            <li>
                <FontAwesomeIcon icon={faClipboardCheck} className="margin-right"/>
                <Link to={'/whitelists'}> 
                    <span className="link-style"> WhiteLists </span> 
                </Link>
            </li>
            <li>
                <FontAwesomeIcon icon={faRandom} className="margin-right"/>
                <Link to={'/apiapplication'}> 
                    <span className="link-style"> API Applications </span> 
                </Link>
            </li>
        </ul>
        {/* <Switch>
            <Route path='/products' component={Products} />
            <Route path='/whitelists' component={WhiteLists} />
            <Route path='/apiapplication' component={APIApplications} />
        </Switch> */}
        </Router>
    )
}

export default ItemList;