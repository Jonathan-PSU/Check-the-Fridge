import React from 'react';
import { useState, useEffect } from 'react';
import getIngredients from './getIngredients';
import ingredientAvailable from './getInventory';
import './recipeBrowseStyles.css';

const user1 = [
    { Name: 'Chicken' },
    { Name: 'Olive Oil' },
    { Name: 'Garlic' },
    { Name: 'Salt' },
    { Name: 'Onions' },
    { Name: 'Tomato' },
    { Name: 'Chicken Thighs' },
    { Name: 'Butter' },
    { Name: "Peanut Butter" },
    { Name: "Sugar" },
    { Name: "Egg" }
];

const Ingredient = (ing) => {

    const [ingredient, setIngredient] = useState(ing);
    useEffect(() => {
        setIngredient(ing);
    }, [ing]);

    return (
        <div>
            {
                (ingredient.data.Available != true) ?
                    <li>{ingredient.data.Name} {ingredient.data.Amount}</li> :
                    <li className='isAvailable'> {ingredient.data.Name} {ingredient.data.Amount}</li>
            }
        </div>
        )
}
const RecipeItem = (getRecipe) => {

    function findAmount(ing) {
        let amount = 0;
        for (let i = 0; i < ing.length; i++) {
            if (ing[i].Available == true) { amount += 1;}
        }
        return amount;
    }
    //const [userIngredients, setUserIngredients] = useState(); // Needs fetch call

    const [ingredientsList, setIngredients] = useState(ingredientAvailable(getIngredients(getRecipe), user1));
    const [avail, setAvail] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setIngredients(ingredientAvailable(getIngredients(getRecipe),user1));
        setAvail(findAmount(ingredientsList));
        setTotal(ingredientsList.length);
    }, [getRecipe]);
    return (
        <>
            <div className="recipeCard">


                <div className = "recipeItems">
                    <img className="recipeImage" src={getRecipe.data.strMealThumb} alt="meal" />
                  
                    <div className="ingredientList">
                        <div className="info">
                            <div>
                                <h2>{getRecipe.data.strMeal}</h2>
                                <p>{getRecipe.data.strArea} food</p>
                            </div>
                            <div className = "addBtn"> + Add Recipe</div>
                        </div>
                        <h5>Ingredients {avail} of {total}</h5>
                        {ingredientsList.map((ing) => (
                                <Ingredient data={ing}/>
                        ))}

                    </div>
                  
                </div>
                <div className="recipe">
                    <h2>Recipe</h2>
                    <p>{getRecipe.data.strInstructions}</p>
                </div>

            </div>
        </>
    )
}
export default RecipeItem;
