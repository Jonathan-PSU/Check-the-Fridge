import React, { useState, onSubmit, Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import IngredientList from './IngredientList';

const AddIngredient = ({ onSave }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!name && !description) {
            console.log('Ingredient and description not added)');        
        } else if (!name && description) {
            console.log('Ingredient not added)');
        } else if (name && !description) {
            console.log('Description not added)');
        } else {
            onSave({ name, description, quantity });
        }
        setName('');
        setDescription('');
        setQuantity(1);
    }

    const updateQuantity = (val) => {
        setQuantity(quantity + val)}

    return (

        <Form onSubmit={onSubmit}>
            <h1 style={{ textAlign: "center" }}>New Ingredient</h1>
            <h5 className='m-4' style={{ textAlign: "center" }}>Enter the ingredient name, description, and quantity about the ingredient to add to your fridge.</h5>
            <FormGroup>
                <Label for="ingredient">Ingredient</Label>
                <Input id="ingredient" type="text" placeholder="add ingredient name" value={name} onChange={(e) => setName(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input id="description" type="text" placeholder="add ingredient description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="quantity">Quantity</Label>
                <Container className="d-flex justify-content-start gx-0">
                    <Row className="gx-0" style={{ width: "50%" }}>
                        <Col md={3}><Button outline color="secondary" style={{ width: "100%" }} onClick={() => updateQuantity(-1)}>-</Button></Col>
                        <Col md={4}><Input className="text-center" type="text" value={quantity}></Input></Col>
                        <Col md={3}><Button outline color="secondary" style={{ width: "100%" }}  onClick={() => updateQuantity(1)}>+</Button></Col>
                    </Row>
                </Container>
            </FormGroup>
            <Button type="submit" className="mt-2" style={{width: "100%"}}>Submit</Button>
         </Form>
    )
}
export default AddIngredient