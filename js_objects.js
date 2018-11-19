// let favRecipe = {
//     recipeTitle: 'Coffee',
//     servings: 1,
//     ingredients: ['instant coffee powder', 'water', 'milk'],
//     directions: ['Boil water', 'Add a spoonful of coffee powder to mug', 'Add boiled water, and milk to taste', 'Drink'],
//     letsCook: function () {
//         document.write('<strong><p> I\'m hungry! Let\'s cook our ' + this.recipeTitle + '.</p></strong>')
//     }
// }

// document.write('<h1>' + favRecipe.recipeTitle + '</h1>')
// document.write('<h3>Servings: ' + favRecipe.servings + '</h3>')
// document.write('<h3>Ingredients:</h3><ul>')
// for (let ingredient of favRecipe.ingredients) {
//     document.write('<li>' + ingredient + '</li>')
// }
// document.write('</ul>')
// document.write('<h3>Direction:</h3><ul>')
// for (let direction of favRecipe.directions) {
//     document.write('<li>' + direction + '</li>')
// }
// document.write('</ul>')
// favRecipe.letsCook()

// ******constructor functions******

// function Recipe(title, servings, ingredients, directions) {
//     this.title = title
//     this.servings = servings
//     this.ingredients = ingredients
//     this.directions = directions
// }

// Recipe.prototype.letsCook = function () {
//     document.write('<strong><p> I\'m hungry! Let\'s cook our ' + this.title + '.</p></strong>')
// }

// Recipe.prototype.listIngredients = function () {
//     document.write('<h3>Ingredients:</h3><ul>')
//     for (let ingredient of this.ingredients) {
//         document.write('<li>' + ingredient + '</li>')
//     }
//     document.write('</ul>')
// }

// Recipe.prototype.listDirections = function () {
//     document.write('<h3>Ingredients:</h3><ul>')
//     for (let direction of this.directions) {
//         document.write('<li>' + direction + '</li>')
//     }
//     document.write('</ul>')
// }

// Recipe.prototype.display = function () {
//     document.write('<h1>' + this.title + '</h1>')
//     document.write('<h3>Servings: ' + this.servings + '</h3>')
//     this.listIngredients()
//     this.listDirections()
//     this.letsCook()
// }

// let coffee = new Recipe('Coffee', 1, ['instant coffee powder', 'water', 'milk'], ['Boil water', 'Add a spoonful of coffee powder to mug', 'Add boiled water, and milk to taste', 'Drink'])

// coffee.display()

// let cheese = new Recipe('Cheese', 1, ['cheese'], ['eat cheese'])

// cheese.display()

// ******class functions******

class Recipe {
    constructor(title, servings, ingredients, directions) {
        this.title = title
        this.servings = servings
        this.ingredients = ingredients
        this.directions = directions
    }

    get letsCook() {
        document.write('<strong><p> I\'m hungry! Let\'s cook our ' + this.title + '.</p></strong>')
    }

    get listIngredients() {
        document.write('<h3>Ingredients:</h3><ul>')
        for (let ingredient of this.ingredients) {
            document.write('<li>' + ingredient + '</li>')
        }
        document.write('</ul>')
    }

    get listDirections() {
        document.write('<h3>Ingredients:</h3><ul>')
        for (let direction of this.directions) {
            document.write('<li>' + direction + '</li>')
        }
        document.write('</ul>')
    }

    get display() {
        document.write('<h1>' + this.title + '</h1>')
        document.write('<h3>Servings: ' + this.servings + '</h3>')
        this.listIngredients
        this.listDirections
        this.letsCook
    }
}

let coffee = new Recipe('Coffee', 1, ['instant coffee powder', 'water', 'milk'], ['Boil water', 'Add a spoonful of coffee powder to mug', 'Add boiled water, and milk to taste', 'Drink'])
coffee.display