import React from 'react';
import { useState } from 'react';
import getIngredients from './getIngredients';
import ingredientAvailable from './getInventory';
import './recipeBrowseStyles.css';

const RecipeItem = (getRecipe) => {

    function findAmount(ing) {
        let amount = 0;
        for (let i = 0; i < ing.length; i++) {
            if (ing[i].Available == true) { amount += 1;}
        }
        return amount;
    }

    const [ingredientsList, setIngredients] = useState(ingredientAvailable(getIngredients(getRecipe)));
    console.log(ingredientsList);
    const avail = findAmount(ingredientsList);
    const total = ingredientsList.length;

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
                            (ing.Available != true) ?
                                <li>{ing.Name} {ing.Amount}</li> :
                                <li className='isAvailable'> {ing.Name} {ing.Amount}</li>

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
