import React from "react";
import Recipe from "./Recipe"
import IngredientsSection from "./IngredientsSection";
import { getRecipeFromMistral } from "../ai";



const Main = () => {
    const [ingredients, setIngredients] = React.useState(["pasta","garlic","oil", "chilli"])
    const [recipeShown, setRecipeShown] = React.useState(false)
    const [finalRecipe, setFinalRecipe] = React.useState("")

    const showRecipe = async () => {
      const finalRecipe = await getRecipeFromMistral(ingredients)
      console.log(finalRecipe)
      setFinalRecipe(finalRecipe)
      setRecipeShown(true)
    }
    
    const handleSubmit = (formData) => {
        const addedIngr = formData.get("ingredient")
        console.log(addedIngr)
        // ingredients.push(addedIngr) //the vanilla way of adding items
        //     const ul = document.getElementById("ingredients-ul");
        //     const li = document.createElement("li");
        //     li.textContent = addedIngr;
        //     ul.appendChild(li);
        setIngredients(prevIngr => [...prevIngr, addedIngr]) //just destructure the previous array and add to it after comma
    }

  return (
    <main>
      <form className="add-ingredient-form" action={handleSubmit}> {/*SUPER IMPORTANT TO HAVE ACTION and not onsubmit*/}
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          />
        <button>Add ingredient</button>
      </form>
        
      {ingredients.length > 0 && <IngredientsSection ingredients={ingredients} showRecipe={showRecipe}/>}
      {recipeShown && <Recipe finalRecipe={finalRecipe}/>}
    </main>
  );
};

export default Main;
