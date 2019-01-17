import React, { Component } from 'react';
import './style.css';

class ItemList extends Component {
    render() {
        return (
            <div className="itemList-container">
                <div className="container-items-names">
                    <ul> 
                        <li>
                            <span> Elemento 1</span>
                        </li>
                        <li>
                            <span> Elemento 2 </span>
                        </li>
                        <li>
                            <span> Elemento 3 </span>
                        </li>
                    </ul>
                </div>
                <button className="btn-add"> Agregar elemento </button>
            </div>
        );
    }
};

export default ItemList;