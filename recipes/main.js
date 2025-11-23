import recipes from "./recipes.mjs";

function recipeTemplate(recipe) {
    return `<figure class="recipe">
	<img src="${recipe.image}" alt="${recipe.name}" />
	<figcaption>
		<ul class="tags">
			${tagsTemplate(recipe.tags)}
		</ul>
		<h2><a href="#">${recipe.name}</a></h2>
		<p class="recipe__ratings">
			${ratingTemplate(recipe.rating)}
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
function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
    let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 0; i < 5; i++) {
        if(rating > i) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty"> ☆</span>`
        }
    }
		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star

		// else output an empty star <span aria-hidden="true" class="icon-star">⭐</span>

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function filterRecipes(){
    const searchBar = document.querySelector("#search-input");
    const searchInput = searchBar.value;
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchInput.toLowerCase()))
    return filteredRecipes;
}
function displaySearchResults(){
    const filteredRecipes = filterRecipes();
    const recipesHtml = filteredRecipes.map(recipeTemplate)
    document.querySelector("section").innerHTML = recipesHtml.join("");
}


document.querySelector("#search-button").addEventListener("click", displaySearchResults)


const randomNum = Math.floor(Math.random()*(recipes.length));
const testRecipeContent = recipeTemplate(recipes[randomNum]);
document.querySelector("section").innerHTML = testRecipeContent;


