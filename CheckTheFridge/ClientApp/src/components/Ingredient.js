
import { ListGroup, ListGroupItem } from 'reactstrap';

const Ingredient = ({ ingredient, onDelete, onEdit }) => {
    return (
        <ListGroup className="task">
            <ListGroupItem>
                <div>
                    <p className="ingredientName">
                        <span className="textBold">Ingredient:</span> {ingredient.name}
                    </p>
                    <p className="ingredientDesc"><span className="textBold">Description:</span> {ingredient.description}
                    </p>
                    <p className="ingredientID"><span className="textBold">ID:</span> {ingredient.id}
                    </p>
                    <p className="ingredientQuan"><span className="textBold">Quantity:</span> {ingredient.quantity}
                    </p>
                </div>
                <div>
                    <p><button onClick={() => onDelete(ingredient.id)}  />Delete</p>
                    <p><button onClick={() => onEdit(ingredient.id)}  />Edit</p>
                </div>
                </ListGroupItem>
            </ListGroup>
    )
}
export default Ingredient;