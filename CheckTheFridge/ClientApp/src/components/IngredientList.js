import Ingredient from './Ingredient';


const IngredientList = ({ ingredientList, onDelete, onEdit }) => {
    return (
        <>
            {
                ingredientList.map((ingredient) => (
                    <Ingredient key={ingredient.id} ingredient={ingredient} onDelete={onDelete} onEdit={onEdit} />
                ))
            }
        </>
    )
}
export default IngredientList;