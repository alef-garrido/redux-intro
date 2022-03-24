// Assuming that this object is immutable, write code to
// - Add a new ingredient (“cream”)
// - Replace “egg” with “egg white”
// - Remove an ingredient (“egg”)

const recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "sal"],
};


const addIngredient = {
  ...recipe,
  ingredients: [...recipe.ingredients, "cream"],
};
const replaceIngredient = {
  ...recipe,
  ingredients: [
    ...recipe.ingredients.map((i) => (i === "egg" ? "egg white" : i)),
  ],
};

const removeIngredient = {
  ...recipe,
  ingredients: [...recipe.ingredients.filter((i) => i !== "egg")],
};

console.log(recipe);
console.log(addIngredient);
console.log(replaceIngredient);
console.log(removeIngredient);
