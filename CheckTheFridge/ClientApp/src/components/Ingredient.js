

const Ingredient = ({ ingredient, onDelete, onEdit }) => {
    return (
        <div>
            <div className="task">
                <div>
                    <p className="ingredientName">
                        <span className="textBold">Ingredient:</span> {ingredient.name}
                    </p>
                    <p className="ingredientDesc"><span className="textBold">Description:</span> {ingredient.description}
                    </p>
                    <p className="ingredientID"><span className="textBold">ID:</span> {ingredient.id}
                    </p>
                </div>
                <div>
                    <p><button onClick={() => onDelete(ingredient.id)}  />Delete</p>
                    <p><button onClick={() => onEdit(ingredient.id)}  />Edit</p>
                </div>
            </div>
        </div>
    )
}
export default Ingredient;