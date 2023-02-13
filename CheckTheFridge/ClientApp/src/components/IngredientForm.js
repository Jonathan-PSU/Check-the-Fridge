import React, { useState, onSubmit, Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const AddIngredient = ({ onSave }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!name && !description) {
            console.log('Ingredient and description not added)');        
        } else if (!name && description) {
            console.log('Ingredient not added)');
        } else if (name && !description) {
            console.log('Description not added)');
        } else {
            onSave({ name, description });
        }
        setName('');
        setDescription('');
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Ingredient</label>
                <input type="text" placeholder="add ingredient" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Description</label>
                <input type="text" placeholder="add description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <input type="submit" className="btn btn-block" value="Save Ingredient" />
        </form>
    )
}
export default AddIngredient