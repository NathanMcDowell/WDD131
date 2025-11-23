import recipes from "./recipes.mjs";

function recipeTemplate(recipe) {
    console.log("recipeTemplate has started")
    console.log(recipes.length)
    return `<figure class="recipe">
	<img src="${recipe.image}" alt="${recipe.name}" />
	<figcaption>
		<ul class="tags">
			${tagsTemplate(recipe.tags)}
		</ul>
		<h2><a href="#">${recipe.name}</a></h2>
		<p class="recipe__ratings">
			<span
				class="rating"
				role="img"
				aria-label="Rating: 3 out of 5 stars"
			>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star-empty">☆</span>
			</span>
		</p>
		<p class="recipe-description">${recipe.description}</p>
</figcaption>
</figure>`;
}
function tagsTemplate(tags){
    let tagHtml = ""
    tags.forEach(tag => {
        tagHtml += `<li>${tag}</li>`
    });
    return tagHtml
}
const randomNum = Math.floor(Math.random()*(recipes.length));
const testRecipeContent = recipeTemplate(recipes[randomNum]);
document.querySelector("section").innerHTML = testRecipeContent;

console.log(tagsTemplate(recipes[0].tags))