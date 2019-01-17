import React, { Component } from 'react';
import './style.css';

class ItemDescription extends Component {
    render() {
        return (
            <div className="item-description">
                <h3> Estás agregando un nuevo elemento </h3>
                <div className="title-description-item">
                    <div className="input-container">
                        <label for="name" className="labels"> Nombre : </label>
                        <input type="text" name="name" className="input"/>
                    </div>
                    <div className="input-container">
                        <label for="description" className="labels"> Descripción : </label>
                        <input type="text" name="description" className="input" id="input-description"/>
                    </div>
                </div>
                <div className="buttons-container">
                    <button> Cancelar </button>
                    <button> Crear </button>
                </div>
            </div>
        );
    }
};

export default ItemDescription;