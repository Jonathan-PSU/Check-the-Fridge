import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const AddIngredient = ({ onSave }) => {
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="add task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Description</label>
                <input type="text" placeholder="add day & time" value={day} onChange{(e) => setDescription(e.target.value)} />
            </div>
            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    )
}
export default AddTask

/*

const { idIngredient, strDescription, strIngredient, strType } = ingredient;


export default class IngredientForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ingredient: {
                idIngredient: this.props.ingredient ? this.props.ingredient.idIngredient : '',
                strDescription: this.props.ingredient ? this.props.ingredient.strDescription : '',
                strIngredient: this.props.ingredient ? this.props.ingredient.strIngredient : '',
                strType: this.props.ingredient ? this.props.ingredient.strType : ''
            },
            errorMsg: ''
        };
    }

    render() {        

        const handleOnSubmit = (event) => {
            event.preventDefault();
            const values = [idIngredient, strDescription, strIngredient, strType];
            let tempErrorMsg = '';

            const allFieldsFilled = values.every((field) => {
                const value = `${field}`.trim();
                return value !== '' && value !== '0';
            });

            if (allFieldsFilled) {
                const ingredient = {
                    idIngredient: uuidv4(),
                    strDescription,
                    strIngredient,
                    strType
                };
                this.props.handleOnSubmit(ingredient);
            } else {
                tempErrorMsg = 'Please fill out all the fields.';
            }
            this.setState({
                errorMsg: tempErrorMsg
            })
        };

        const handleInputChange = (event) => {
            const { name, value } = event.target;
            switch (name) {
                case 'description':
                    if (value === '' || parseInt(value) === +value) {
                        this.setState(prevState => ({
                            ...prevState,
                            [name]: value
                        }));
                    }
                    break;
                case 'id':
                    if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                        this.setState(prevState => ({
                            ...prevState,
                            [name]: value
                        }));
                    }
                    break;
                default:
                    this.setState(prevState => ({
                        ...prevState,
                        [name]: value
                    }));
            }
        };

        return (
            <div className="main-form">
                {this.state.errorMsg && <p className="errorMsg">{this.state.errorMsg}</p>}
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Ingredient Name</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="text"
                            name="strIngredient"
                            value={strIngredient}
                            placeholder="Enter name of ingredient"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="type">
                        <Form.Label>Ingredient Type</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="text"
                            name="strType"
                            value={strType}
                            placeholder="Enter type of ingredient"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Ingredient Description</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="text"
                            name="strDescription"
                            value={strDescription}
                            placeholder="Enter ingredient description"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="id">
                        <Form.Label>Ingredient ID</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="number"
                            name="idIngredient"
                            value={idIngredient}
                            placeholder="Enter id of ingredient"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="submit-btn">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    };
};

*/