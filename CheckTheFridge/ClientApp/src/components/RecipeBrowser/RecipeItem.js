import React from 'react';
import { useState } from 'react';
import getIngredients from './getIngredients';
import './recipeBrowseStyles.css';

const RecipeItem = (getRecipe) => {

    const [ingredientsList, setIngredients] = useState(getIngredients(getRecipe));
    console.log(ingredientsList);

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
                        <h5>Ingredients Needed</h5>
                        {ingredientsList.map((ing) => (
                            <li>{ing[1]} {ing[0]}</li>

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
