import React, { useState, onSubmit, Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import IngredientList from './IngredientList';

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

        <Form className="border rounded p-5" onSubmit={onSubmit}>
            <FormGroup>
                <Label for="ingredient">Ingredient</Label>
                <Input id="ingredient" type="text" placeholder="add ingredient" value={name} onChange={(e) => setName(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input id="description" type="text" placeholder="add description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormGroup>
            <Button type="submit">Submit</Button>
                    </Form>
       
    )
}
export default AddIngredient