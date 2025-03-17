import recipes from './recipes.mjs';

console.log(recipes);

function getRandomIndex(maxNum) {
    return Math.floor(Math.random()* maxNum);
}

alert(getRandomIndex(recipes.length));

function recipeTemplate(recipe){
    return `<article class="recipe">
            <img src=${recipe.image}>
            <div class="recipeinfo">
                <div class="tag_row">
                    ${tagsTemplate()}
                </div>
                <h2>${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p class="description">${recipe.description}</p>
            </div>`
}

function tagsTemplate() {
    // loop through the tags list and transform the strings to HTML

    // for (let i = 0; i < recipes.tags.length; i++)
    let html = recipes.tags.map(tag => `<span>${tag}</span>`).join("");
    return html;
}

function ratingTemplate(rating) {
    // begin building an html string using the ratings HTML written earlier as a model.
    let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
    // our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 0; i < 5; i++){

        // check to see if the current index of the loop is less than our rating
        if (recipes.rating < i) {
            // if so then output a filled star
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        }
            // else output an empty star
        else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }
    // after the loop, add the closing tag to our string
    html += `</span>`
    // return the html string
    return html
}

function renderRecipes(recipeList) {
    // get the element we will output the recipes into
    let recipeArticle = document.querySelector("recipe");

    // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipeshtml = recipes.map(recipeTemplate).join("");

    // Set the HTML strings as the innerHTML of our output element.
    recipeArticle.innerHTML = recipeshtml;
}

function init() {
    // get a random recipe
    const recipe = getRandomListEntry(recipes)
    // render the recipe with renderRecipes.
    renderRecipes([recipe]);
}
init();



const forminput = document.querySelector("form");
forminput.addEventListener("submit", searchHandler);

function filterRecipes(query){
    const filtered = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
        recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query))
    );

    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event){
    event.preventDefault()
    let userInput = forminput.querySelector("input").value.toLowerCase;
    filteredRecipes = filterRecipes(userInput);
    renderRecipes(filterRecipes);

}

