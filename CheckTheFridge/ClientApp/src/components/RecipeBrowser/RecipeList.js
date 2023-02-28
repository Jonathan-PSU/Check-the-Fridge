import React from "react";
import { useState } from "react";
import RecipeItem from "./RecipeItem";
import './recipeBrowseStyles.css';

const Recipe = () => {
    const [search, setSearch] = useState("");
    const [recipe, setRecipe] = useState();
    const searchMeal = (evt) => {
        if (evt.key == "Enter") {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res => res.json()).then(data => { setRecipe(data.meals); setSearch("") })
        }
       
    }
    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Search for a Recipe</h1>
                    <h4>Get inspired by other recipes to create your own or find new ones to add to your recipes list!</h4>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" placeHolder = "Enter item"onChange={(e) => setSearch(e.target.value)} value={search} onKeyPress={searchMeal} />
                </div>
                <h3>Results:</h3>
                <div className="container">
                    {

                        (recipe == null) ? <p className="notSearch">Not found</p> :
                            recipe.map((res) => {
                                return (
                                    <RecipeItem data={res} />)
                            }

                            )

                    }
                </div>
            </div>
        </>
    )
}
export default Recipe;