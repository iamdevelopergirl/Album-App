import React from 'react';
import './styles/AlbumTile.css';

export default class AlbumTile extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="album-tile" id={this.props.itemKey}>
                <div className="tile-container">
                    <div className="logo-container">
                        <img src={this.props.item.image} className="tile-icon"></img>
                    </div>
                    <div className="name-container column">
                        <div className="art-name">{this.props.item.artName}</div>
                        <div className="artist-name font-style">{this.props.item.artistName}</div>
                    </div>
                </div>
            </div>
        )
    }
}
