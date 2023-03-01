
function getIngredients(recipe) {

    let ingredients = []
    if (recipe.data.strIngredient1 != "") {
        ingredients.push([recipe.data.strIngredient1, recipe.data.strMeasure1]);
    }
    if (recipe.data.strIngredient2 != "") {
        ingredients.push([recipe.data.strIngredient2, recipe.data.strMeasure2]);
    }
    if (recipe.data.strIngredient3 != "") {
        ingredients.push([recipe.data.strIngredient3, recipe.data.strMeasure3]);
    }
    if (recipe.data.strIngredient4 != "") {
        ingredients.push([recipe.data.strIngredient4, recipe.data.strMeasure4]);
    }
    if (recipe.data.strIngredient5 != "") {
        ingredients.push([recipe.data.strIngredient5, recipe.data.strMeasure5]);
    }
    if (recipe.data.strIngredient6 != "") {
        ingredients.push([recipe.data.strIngredient6, recipe.data.strMeasure6]);
    }
    if (recipe.data.strIngredient7 != "") {
        ingredients.push([recipe.data.strIngredient7, recipe.data.strMeasure7]);
    }
    if (recipe.data.strIngredient8 != "") {
        ingredients.push([recipe.data.strIngredient8, recipe.data.strMeasure8]);
    }
    if (recipe.data.strIngredient9 != "") {
        ingredients.push([recipe.data.strIngredient9, recipe.data.strMeasure9]);
    }
    if (recipe.data.strIngredient10 != "") {
        ingredients.push([recipe.data.strIngredient10, recipe.data.strMeasure10]);
    }
    if (recipe.data.strIngredient11 != "") {
        ingredients.push([recipe.data.strIngredient11, recipe.data.strMeasure11]);
    }
    if (recipe.data.strIngredient12 != "") {
        ingredients.push([recipe.data.strIngredient12, recipe.data.strMeasure12]);
    }
    if (recipe.data.strIngredient13 != "") {
        ingredients.push([recipe.data.strIngredient13, recipe.data.strMeasure13]);
    }
    if (recipe.data.strIngredient14 != "") {
        ingredients.push([recipe.data.strIngredient14, recipe.data.strMeasure14]);
    }
    if (recipe.data.strIngredient15 != "") {
        ingredients.push([recipe.data.strIngredient15, recipe.data.strMeasure15]);
    }
    if (recipe.data.strIngredient16 != "") {
        ingredients.push([recipe.data.strIngredient16, recipe.data.strMeasure16]);
    }
    if (recipe.data.strIngredient17 != "") {
        ingredients.push([recipe.data.strIngredient17, recipe.data.strMeasure17]);
    }
    if (recipe.data.strIngredient18 != "") {
        ingredients.push([recipe.data.strIngredient18, recipe.data.strMeasure18]);
    }
    if (recipe.data.strIngredient19 != "") {
        ingredients.push([recipe.data.strIngredient19, recipe.data.strMeasure19]);
    }
    if (recipe.data.strIngredient20 != "") {
        ingredients.push([recipe.data.strIngredient20, recipe.data.strMeasure20]);
    }
    return ingredients;
}

export default getIngredients;