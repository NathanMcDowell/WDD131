import recipes from "./recipes.mjs";

function recipeTemplate(recipe) {
    console.log("recipeTemplate has started")
    console.log(recipes.length)
    return `<img src="${recipe.image}" alt="${recipe.name}">
            <div>
            <div class="tag">
                <p>Dessert</p>
            </div>
                <h2>${recipe.name}</h2>
                <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
                    <span aria-hidden="true" class="icon-star">⭐</span>
                    <span aria-hidden="true" class="icon-star">⭐</span>
                    <span aria-hidden="true" class="icon-star">⭐</span>
                    <span aria-hidden="true" class="icon-star-empty">⭐</span>
                    <span aria-hidden="true" class="icon-star-empty">☆</span>
                </span>
                <p class="recipe-description">${recipe.description}</p>
            </div>`
}
const randomNum = Math.floor(Math.random()*(recipes.length));
const testRecipeContent = recipeTemplate(recipes[randomNum]);
document.querySelector("section").innerHTML = testRecipeContent;