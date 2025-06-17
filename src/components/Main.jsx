import React from "react";
import Recipe from "./Recipe"
import IngredientsSection from "./IngredientsSection";
import { getRecipeFromMistral } from "../ai";

console.log("Token:", import.meta.env.VITE_HF_ACCESS_TOKEN)

const Main = () => {
    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)
    const [finalRecipe, setFinalRecipe] = React.useState("")
    const recipeReference = React.useRef(null)
    console.log(recipeReference)

    React.useEffect(()=>{
        if (recipeReference.current !== null && finalRecipe !== ""){
        recipeReference.current.scrollIntoView({behavior: "smooth"})
        //  const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
        //     window.scroll({
        //         top: yCoord,
        //         behavior: "smooth"
        //     }) ...FOR FRAMEWORKS
        }
    },[finalRecipe])

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
        
      {ingredients.length > 0 && <IngredientsSection ingredients={ingredients} showRecipe={showRecipe} recipeReference={recipeReference}/>}
      {recipeShown && <Recipe finalRecipe={finalRecipe}/>}
    </main>
  );
};

export default Main;
