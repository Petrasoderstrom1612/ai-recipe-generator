import React from "react";

const Main = () => {
    const [ingredients, setIngredients] = React.useState(["chicken", "oregano", "tomatoes"])

    const ingredientsInnerHtml = ingredients.map(oneIngredient => (<li key={oneIngredient}>{oneIngredient}</li>))
    

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
      <div className="ingredients-list">
        <ul id="ingredients-ul">
            {ingredientsInnerHtml}
        </ul>
      </div>
    </main>
  );
};

export default Main;
