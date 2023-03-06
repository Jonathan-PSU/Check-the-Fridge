
const user1 = [
    { Name: 'Chicken' },
    { Name: 'Olive Oil' },
    { Name: 'Garlic' },
    { Name: 'Salt' },
    { Name: 'Onions' },
    { Name: 'Tomato' },
    { Name: 'Chicken Thighs' },
    { Name: 'Butter'}
    ];
function ingredientAvailable(ing) {

    for (let i = 0; i < ing.length; i++) {
        for (let j = 0; j < user1.length; j++) {
            if (ing[i].Name == user1[j].Name) {
                ing[i].Available = true;
            }
        }
    }
    return ing;
}

export default ingredientAvailable;
